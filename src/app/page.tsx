"use client";

import { Cinzel, Manrope } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { states, getSchoolsByState } from "@/data/schools";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["600", "700"] });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function Home() {
  const router = useRouter();
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedSchool, setSelectedSchool] = useState<string>("");

  const filteredSchools = selectedState ? getSchoolsByState(selectedState) : [];

  const handleStartShopping = () => {
    if (selectedSchool) {
      router.push(`/school/${selectedSchool}`);
    }
  };

  return (
    <div className={`${manrope.className} min-h-screen bg-[#050505] text-white`}>
      {/* Header */}
      <header className="border-b border-amber-400/20 bg-black/90 backdrop-blur">
        <div className="container mx-auto flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <BrandLogo size={52} />
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <a href="tel:+919209169690" className="flex items-center gap-2 text-sm text-amber-100 transition hover:text-amber-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +91 9209169690
            </a>
            <Button variant="outline" size="sm" className="border-amber-400/40 bg-transparent text-amber-200 hover:bg-amber-400/10 hover:text-amber-100" onClick={() => router.push("/track-order")}>Track Order</Button>
            <Button variant="outline" size="sm" className="border-amber-300 bg-amber-300 text-black hover:bg-amber-200 hover:text-black" onClick={() => router.push("/login")}>Login</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.24),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(120,53,15,0.35),_transparent_28%)]" />
        <div className="container relative mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
              Quality You Can Trust
            </p>
            <h1 className={`${cinzel.className} mb-6 text-4xl font-bold leading-tight text-white md:text-6xl`}>
              Magnum School Uniform
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-8 text-zinc-300">
              Premium school uniform ordering with a strong black-and-gold identity, dependable service, and simple shopping by school.
            </p>

            {/* School Selector */}
            <div className="space-y-4 rounded-3xl border border-amber-300/20 bg-white/8 p-6 shadow-2xl shadow-amber-950/20 backdrop-blur">
              <h2 className={`${cinzel.className} mb-4 text-xl font-semibold text-amber-200`}>Select Your School</h2>

              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-amber-100">
                    State
                  </label>
                  <Select value={selectedState} onValueChange={(value) => {
                    setSelectedState(value);
                    setSelectedSchool("");
                  }}>
                    <SelectTrigger className="w-full border-amber-300/30 bg-black/30 text-white">
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    School
                  </label>
                  <Select
                    value={selectedSchool}
                    onValueChange={setSelectedSchool}
                    disabled={!selectedState}
                  >
                    <SelectTrigger className="w-full border-amber-300/30 bg-black/30 text-white">
                      <SelectValue placeholder="Select School" />
                    </SelectTrigger>
                    <SelectContent>
                      {filteredSchools.map((school) => (
                        <SelectItem key={school.id} value={school.id}>
                          {school.name} ({school.board})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  className="w-full bg-amber-300 text-black hover:bg-amber-200"
                  onClick={handleStartShopping}
                  disabled={!selectedSchool}
                >
                  Start Shopping
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-amber-300/20 bg-gradient-to-br from-[#17120b] via-black to-[#2f1c08] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.22),_transparent_35%)]" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-center">
                  <Image
                    src="/magnum-logo.jpeg"
                    alt="Magnum School Uniform"
                    width={360}
                    height={360}
                    className="h-auto w-full max-w-[320px] rounded-3xl border border-amber-300/20 object-cover shadow-2xl"
                    priority
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 text-sm text-amber-100 sm:grid-cols-3">
                  <div className="rounded-2xl border border-amber-300/15 bg-black/30 p-4 text-center">
                    <p className={`${cinzel.className} text-2xl text-amber-300`}>100+</p>
                    <p className="mt-1 text-zinc-300">Schools served</p>
                  </div>
                  <div className="rounded-2xl border border-amber-300/15 bg-black/30 p-4 text-center">
                    <p className={`${cinzel.className} text-2xl text-amber-300`}>Premium</p>
                    <p className="mt-1 text-zinc-300">Uniform quality</p>
                  </div>
                  <div className="rounded-2xl border border-amber-300/15 bg-black/30 p-4 text-center">
                    <p className={`${cinzel.className} text-2xl text-amber-300`}>Fast</p>
                    <p className="mt-1 text-zinc-300">Order support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="border-y border-amber-300/10 bg-[#0d0d0d] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-3xl border border-amber-300/15 bg-white/5 p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-300/15 text-amber-300">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className={`${cinzel.className} mb-2 text-lg font-semibold text-amber-200`}>Quality Products</h3>
              <p className="text-zinc-300">Premium uniforms crafted to match school standards and daily comfort.</p>
            </div>
            <div className="rounded-3xl border border-amber-300/15 bg-white/5 p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-300/15 text-amber-300">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className={`${cinzel.className} mb-2 text-lg font-semibold text-amber-200`}>Fast Delivery</h3>
              <p className="text-zinc-300">Responsive dispatch and order updates that keep parents informed.</p>
            </div>
            <div className="rounded-3xl border border-amber-300/15 bg-white/5 p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-300/15 text-amber-300">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className={`${cinzel.className} mb-2 text-lg font-semibold text-amber-200`}>Secure Payment</h3>
              <p className="text-zinc-300">Trusted checkout with clean order confirmation and tracking details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className={`${cinzel.className} mb-4 text-lg font-semibold text-amber-300`}>Information</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-zinc-300 hover:text-amber-300">About Us</a></li>
                <li><a href="/terms" className="text-zinc-300 hover:text-amber-300">Terms and Conditions</a></li>
                <li><a href="/faq" className="text-zinc-300 hover:text-amber-300">FAQs</a></li>
                <li><a href="/privacy" className="text-zinc-300 hover:text-amber-300">Privacy Policy</a></li>
                <li><a href="/return" className="text-zinc-300 hover:text-amber-300">Return Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className={`${cinzel.className} mb-4 text-lg font-semibold text-amber-300`}>Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-zinc-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +91 9209169690
                </li>
                <li className="text-zinc-300">Mon - Sat: 10:00am to 6:00pm</li>
                <li className="flex items-center gap-2 text-zinc-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  magnum_schools@gmail.com
                </li>
              </ul>
            </div>
            <div>
              <h3 className={`${cinzel.className} mb-4 text-lg font-semibold text-amber-300`}>Connect With Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-zinc-300 hover:text-amber-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className={`${cinzel.className} mb-4 text-lg font-semibold text-amber-300`}>Track Order</h3>
              <p className="text-sm text-gray-400 mb-2">Enter your order number to track</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Order Number"
                  className="flex-1 rounded border border-amber-300/20 bg-zinc-900 px-3 py-2 text-sm text-white"
                />
                <Button size="sm" className="bg-amber-300 text-black hover:bg-amber-200">Track</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-amber-300/10 pt-8 text-center text-sm text-zinc-400">
            Copyright © 2024 Magnum. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
