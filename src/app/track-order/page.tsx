"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [trackingResult, setTrackingResult] = useState<null | {
    orderNumber: string;
    status: string;
    estimatedDelivery: string;
    items: string[];
  }>(null);

  const handleTrack = () => {
    if (orderNumber && email) {
      setTrackingResult({
        orderNumber: orderNumber,
        status: "In Transit",
        estimatedDelivery: "3-5 business days",
        items: ["School Shirt - White", "School Trousers", "Mathematics Textbook"],
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
