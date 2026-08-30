"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RazorpayButton } from "./razorpay-button";

export default function PaymentModal({
  show,
  setShow,
  totalPrice,
}: {
  show: boolean;
  setShow: (value: boolean) => void;
  totalPrice: number;
}) {
  const [orderId, setOrderId] = useState("");
  const [paymentId, setPaymentId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    // Create order on backend would happen here, for demo we generate a mock orderId
    const mockOrderId = `order_${Date.now()}`;
    setOrderId(mockOrderId);

    // Trigger Razorpay checkout
    // We'll handle this after the component mounts
  };

  if (!orderId) {
    return (
      <Card className="magnum-panel p-8 text-center text-white">
        <CardHeader>
          <CardTitle>Payment</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-bold mb-4">Checkout</h3>
          <p className="magnum-copy mb-6">Total: ₹{totalPrice}</p>
          <Button
            onClick={handlePayment}
            className="magnum-gold-button w-full"
          >
            Pay with Razorpay
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <RazorpayButton
      amount={totalPrice * 100} // Convert to paise
      orderId={orderId}
      onPaymentSuccess={(razorpayPaymentId: string) => {
        setPaymentId(razorpayPaymentId);
        setShow(false);
        alert(`Payment successful! Payment ID: ${razorpayPaymentId}`);
      }}
      onPaymentError={(error: any) => {
        setError(error.reason || "Payment failed");
        alert(`Payment failed: ${error.reason}`);
      }}
    />
  );
}
