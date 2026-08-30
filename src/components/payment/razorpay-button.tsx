"use client";

import { useEffect, useState } from "react";

export function RazorpayButton({
  amount,
  orderId,
  onPaymentSuccess,
  onPaymentError,
}: {
  amount: number; // amount in paise (e.g., 50000 = ₹500)
  orderId: string;
  onPaymentSuccess: (paymentId: string) => void;
  onPaymentError: (error: any) => void;
}) {
  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      const rzp = (window as any).Razorpay;
      if (rzp) {
        rzp.on("payment.failed", (handlerError: any) => {
          onPaymentError(handlerError);
        });

        rzp.open({
          key: "rzp_test_TW0YkUTV5xTJG6",
          amount: amount,
          currency: "INR",
          name: "Magnum",
          description: "Magnum School Uniform Order",
          order_id: orderId,
          theme: {
            color: "#F37254",
          },
          handler: (response: any) => {
            onPaymentSuccess(response.razorpay_payment_id);
          },
          notes: {
            address: "Magnum",
            contact: "+91 7666 477 477",
          },
        });
      } else {
        onPaymentError(new Error("Razorpay script not loaded"));
      }
    };
    script.onerror = () => {
      onPaymentError(new Error("Failed to load Razorpay script"));
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [amount, orderId, onPaymentSuccess, onPaymentError]);

  return null;
}
