"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [gmail, setGmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGmailLogin = async () => {
    if (!gmail.endsWith("@gmail.com")) {
      setError("Please enter a valid Gmail address.");
      return;
    }

    setLoading(true);
    setError(null);

    const result = await signIn("credentials", {
      loginMethod: "gmail",
      email: gmail,
      redirect: false,
    });

    if (result?.ok) {
      router.push("/");
      router.refresh();
    } else {
      setError("Gmail login failed. Please try again.");
    }

    setLoading(false);
  };

  const handlePhoneLogin = async () => {
    if (!showOtp) {
      setError(null);
      setShowOtp(true);
      alert("OTP sent to " + phone + " (Use 123456 for demo)");
    } else {
      // Verify OTP
      setLoading(true);
      setError(null);
      const result = await signIn("credentials", {
        loginMethod: "phone",
        phone,
        otp,
        redirect: false,
      });

      if (result?.ok) {
        router.push("/");
        router.refresh();
      } else {
        setError("Invalid OTP. Use 123456 for demo.");
      }
      setLoading(false);
    }
  };

  return (
    <div className="magnum-page flex items-center justify-center px-4 py-12">
      <Card className="magnum-panel w-full max-w-md border-amber-300/20 bg-black/50 text-white">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <BrandLogo size={64} textClassName="text-3xl" />
          </div>
          <CardTitle className="text-2xl font-bold">Login to Magnum</CardTitle>
          <p className="magnum-copy mt-2">Choose your login method</p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="google" className="w-full">
            <TabsList className="grid w-full grid-cols-2 border border-amber-300/15 bg-white/5">
              <TabsTrigger value="google" className="text-zinc-300 data-[state=active]:bg-amber-300 data-[state=active]:text-black">
                <Mail className="w-4 h-4 mr-2" />
                Gmail
              </TabsTrigger>
              <TabsTrigger value="phone" className="text-zinc-300 data-[state=active]:bg-amber-300 data-[state=active]:text-black">
                <Phone className="w-4 h-4 mr-2" />
                Phone
              </TabsTrigger>
            </TabsList>

            <TabsContent value="google" className="mt-6">
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-amber-100">Gmail Address</label>
                  <Input
                    type="email"
                    placeholder="Enter your Gmail address"
                    value={gmail}
                    onChange={(e) => setGmail(e.target.value)}
                    className="border-amber-300/20 bg-white/5 text-white"
                  />
                </div>
                <Button
                  onClick={handleGmailLogin}
                  className="magnum-gold-button w-full"
                  disabled={loading || !gmail}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  {loading ? "Signing in..." : "Continue with Gmail"}
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="phone" className="mt-6 space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-amber-100">Phone Number</label>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={showOtp}
                  className="border-amber-300/20 bg-white/5 text-white"
                />
              </div>

              {showOtp && (
                <div>
                  <label className="mb-1 block text-sm font-medium text-amber-100">OTP</label>
                  <Input
                    type="text"
                    placeholder="Enter OTP (123456)"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="border-amber-300/20 bg-white/5 text-white"
                  />
                  <p className="mt-1 text-sm text-zinc-400">Demo OTP: 123456</p>
                </div>
              )}

              <Button
                onClick={handlePhoneLogin}
                className="magnum-gold-button w-full"
                disabled={loading || !phone || (showOtp && !otp)}
              >
                {loading ? "Verifying..." : showOtp ? "Verify OTP" : "Send OTP"}
              </Button>
            </TabsContent>
          </Tabs>

          {error && (
            <p className="mt-4 text-sm text-red-400">{error}</p>
          )}

          <div className="mt-6 text-center">
            <Button variant="link" className="text-amber-300 hover:text-amber-200" onClick={() => router.push("/")}>
              Back to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
