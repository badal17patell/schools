"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TrackOrderPage() {
  const searchParams = useSearchParams();
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [trackingResult, setTrackingResult] = useState<null | {
    orderNumber: string;
    status: string;
    estimatedDelivery: string;
    items: string[];
    paymentId?: string;
  }>(null);

  useEffect(() => {
    const orderIdFromUrl = searchParams.get("orderId");
    const paymentIdFromUrl = searchParams.get("paymentId");

    if (!orderIdFromUrl) {
      return;
    }

    setOrderNumber(orderIdFromUrl);

    const storedOrder = sessionStorage.getItem("lastOrder");
    const parsedOrder = storedOrder ? JSON.parse(storedOrder) : null;

    setTrackingResult({
      orderNumber: orderIdFromUrl,
      status: parsedOrder?.status || "Confirmed",
      estimatedDelivery: "3-5 business days",
      items:
        parsedOrder?.items?.map(
          (item: { name: string; quantity: number; size?: string }) =>
            `${item.name}${item.size ? ` (${item.size})` : ""} x${item.quantity}`
        ) || ["Your order has been placed successfully."],
      paymentId: paymentIdFromUrl || parsedOrder?.paymentId || undefined,
    });
  }, [searchParams]);

  const handleTrack = () => {
    if (orderNumber && email) {
      setTrackingResult({
        orderNumber: orderNumber,
        status: "In Transit",
        estimatedDelivery: "3-5 business days",
        items: ["School Shirt - White", "School Trousers", "Mathematics Textbook"],
        paymentId: searchParams.get("paymentId") || undefined,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <a href="/" className="text-2xl font-bold text-blue-600">SchoolMart</a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Track Your Order</h1>

          {trackingResult && (
            <Card className="mb-8 border-green-200 bg-green-50">
              <CardContent className="pt-6">
                <p className="text-sm font-medium text-green-700">Payment successful</p>
                <p className="mt-2 text-lg font-semibold text-green-900">
                  Your order ID is {trackingResult.orderNumber}
                </p>
                <p className="mt-1 text-sm text-green-700">
                  Use this order ID on this page anytime to track your order.
                </p>
              </CardContent>
            </Card>
          )}

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Enter Order Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Order Number</label>
                  <Input
                    type="text"
                    placeholder="Enter your order number"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={handleTrack}
                  disabled={!orderNumber || !email}
                >
                  Track Order
                </Button>
              </div>
            </CardContent>
          </Card>

          {trackingResult && (
            <Card>
              <CardHeader>
                <CardTitle>Order Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Order Number:</span>
                    <span>{trackingResult.orderNumber}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Status:</span>
                    <Badge className="bg-green-600">{trackingResult.status}</Badge>
                  </div>
                  {trackingResult.paymentId && (
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Payment ID:</span>
                      <span>{trackingResult.paymentId}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Estimated Delivery:</span>
                    <span>{trackingResult.estimatedDelivery}</span>
                  </div>
                  <div>
                    <span className="font-medium">Items:</span>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      {trackingResult.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="mt-8 text-center text-gray-600">
            <p>Need help? Contact our customer support:</p>
            <p className="font-semibold mt-2">+91 7666 477 477</p>
            <p>wecare@schoolmart.in</p>
          </div>
        </div>
      </main>
    </div>
  );
}
