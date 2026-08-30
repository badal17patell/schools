"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { Trash2, Plus, Minus, Loader2 } from "lucide-react";

export default function CartPage() {
  const router = useRouter();
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [paymentId, setPaymentId] = useState<string | null>(null);

  if (totalItems === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Add some products to get started!</p>
          <Button onClick={() => router.push("/")}>Continue Shopping</Button>
        </div>
      </div>
    );
  }

  const handleCheckout = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch("/api/payment/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: Math.round(totalPrice * 100), // Convert to paise
          currency: "INR",
          receipt: `receipt_${Date.now()}`,
          notes: {
            items: items.map(i => `${i.name} x${i.quantity}`).join(", "),
          },
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to create order");
      }

      setOrderId(data.id);
      
      // Load Razorpay script
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
      
      script.onload = () => {
        const rzp = (window as any).Razorpay;
        if (rzp) {
          const options = {
            key: "rzp_test_TW0YkUTV5xTJG6",
            amount: Math.round(totalPrice * 100),
            currency: "INR",
            name: "Magnum",
            description: "Magnum School Uniform Order",
            order_id: data.id,
            theme: { color: "#d4a63a" },
            handler: function (response: any) {
              const paymentId = response.razorpay_payment_id;
              const rzpOrderId = response.razorpay_order_id;
              setOrderId(rzpOrderId);
              setPaymentId(paymentId);
              const orderData = {
                orderId: rzpOrderId,
                paymentId: paymentId,
                amount: Math.round(totalPrice * 100),
                items: items.map((i) => ({
                  name: i.name,
                  quantity: i.quantity,
                  price: i.price,
                  size: i.size,
                })),
                date: new Date().toISOString(),
                status: "Confirmed",
              };
              sessionStorage.setItem("lastOrder", JSON.stringify(orderData));
              clearCart();
              setIsProcessing(false);
              window.setTimeout(() => {
                router.push(`/track-order?orderId=${rzpOrderId}&paymentId=${paymentId}`);
              }, 1800);
            },
            modal: {
              ondismiss: function () {
                setIsProcessing(false);
                setOrderId(null);
              },
            },
          };
          const rzpInstance = new rzp(options);
          rzpInstance.on("payment.failed", function (resp: any) {
            alert(`Payment failed: ${resp.error.reason}`);
            setIsProcessing(false);
          });
          rzpInstance.open();
        } else {
          alert("Razorpay failed to load");
          setIsProcessing(false);
        }
      };
      
      script.onerror = () => {
        alert("Failed to load payment gateway");
        setIsProcessing(false);
      };
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Failed to process payment. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <BrandLogo size={48} />
          <Button variant="outline" size="sm" onClick={() => router.push("/")}>
            Continue Shopping
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={`${item.productId}-${item.size}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-200 w-24 h-24 flex items-center justify-center rounded relative">
                      <span className="text-gray-400">Image</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      {item.size && (
                        <p className="text-sm text-gray-600">Size: {item.size}</p>
                      )}
                      <p className="text-xl font-bold text-blue-600 mt-2">₹{item.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.productId, item.quantity - 1, item.size)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.productId, parseInt(e.target.value) || 0, item.size)
                        }
                        className="w-16 text-center"
                        min="1"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.productId, item.quantity + 1, item.size)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₹{item.price * item.quantity}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.productId, item.size)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="border-amber-200/80 shadow-lg shadow-amber-100/30">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Items ({totalItems})</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹{totalPrice}</span>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button 
                  className="w-full bg-amber-400 text-black hover:bg-amber-300" 
                  onClick={handleCheckout}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Processing...
                    </>
                  ) : (
                    "Proceed to Checkout"
                  )}
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={clearCart}
                  disabled={isProcessing}
                >
                  Clear Cart
                </Button>
              </CardFooter>
            </Card>
            
            {orderId && (
              <div className="mt-4 overflow-hidden rounded-2xl border border-amber-300/30 bg-gradient-to-r from-black via-zinc-950 to-amber-950 p-5 text-white shadow-xl">
                <div className="mb-4 flex items-center gap-3">
                  <BrandLogo size={58} textClassName="text-amber-300" />
                </div>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">Payment successful</p>
                <p className="mt-2 text-lg font-semibold">Order ID: {orderId}</p>
                {paymentId && <p className="mt-1 text-sm text-zinc-300">Payment ID: {paymentId}</p>}
                <p className="mt-2 text-sm text-zinc-300">Redirecting to `Track Order`...</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
