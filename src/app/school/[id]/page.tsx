"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { BrandLogo } from "@/components/brand-logo";
import { getSchoolById, schools } from "@/data/schools";
import { getProductsBySchool, getProductsByCategory } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function SchoolPage() {
  const params = useParams();
  const router = useRouter();
  const schoolId = params.id as string;
  const school = getSchoolById(schoolId);
  const allProducts = getProductsBySchool(schoolId);
  const [selectedSize, setSelectedSize] = useState<{ [key: string]: string }>({});
  const { addToCart } = useCart();

  if (!school) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">School Not Found</h1>
          <Button onClick={() => router.push("/")}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  const uniforms = getProductsByCategory(schoolId, "uniform");
  const books = getProductsByCategory(schoolId, "book");
  const accessories = getProductsByCategory(schoolId, "accessory");

  const handleAddToCart = (product: (typeof allProducts)[0]) => {
    const size = selectedSize[product.id] || product.sizes?.[0];
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      size,
      image: product.image,
    });
  };

  return (
    <div className="magnum-page">
      {/* Header */}
      <header className="magnum-header">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <BrandLogo size={48} />
            <div className="hidden md:flex items-center gap-2 text-sm text-zinc-400">
              <span>{school.name}</span>
              <span>•</span>
              <span>{school.city}, {school.state}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="magnum-outline-button" onClick={() => router.push("/track-order")}>
              Track Order
            </Button>
            <Button variant="outline" size="sm" className="magnum-outline-button" onClick={() => router.push("/cart")}>
              Cart ({useCart().totalItems})
            </Button>
            <Button variant="outline" size="sm" className="magnum-gold-button" onClick={() => router.push("/login")}>Login</Button>
          </div>
        </div>
      </header>

      {/* School Info Banner */}
      <div className="border-b border-amber-300/15 bg-gradient-to-r from-black via-zinc-950 to-amber-950/60 py-8 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">{school.name}</h1>
          <p className="text-zinc-300">
            {school.city}, {school.state} • {school.board} Board
          </p>
        </div>
      </div>

      {/* Products Section */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="uniforms" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-3 border border-amber-300/15 bg-white/5">
            <TabsTrigger value="uniforms" className="text-zinc-300 data-[state=active]:bg-amber-300 data-[state=active]:text-black">Uniforms ({uniforms.length})</TabsTrigger>
            <TabsTrigger value="books" className="text-zinc-300 data-[state=active]:bg-amber-300 data-[state=active]:text-black">Books ({books.length})</TabsTrigger>
            <TabsTrigger value="accessories" className="text-zinc-300 data-[state=active]:bg-amber-300 data-[state=active]:text-black">Accessories ({accessories.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="uniforms">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {uniforms.map((product) => (
                <Card key={product.id} className="magnum-panel overflow-hidden border-amber-300/15 bg-white/5 text-white transition-shadow hover:shadow-lg hover:shadow-amber-950/20">
                  <CardHeader className="p-0">
                    <div className="relative flex h-48 items-center justify-center bg-white/10">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                        unoptimized
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                      <p className="mb-2 text-sm text-zinc-400">{product.description}</p>
                    {product.sizes && (
                      <div className="mb-2">
                        <Select
                          value={selectedSize[product.id] || ""}
                          onValueChange={(value) =>
                            setSelectedSize((prev) => ({ ...prev, [product.id]: value }))
                          }
                        >
                          <SelectTrigger className="w-full border-amber-300/20 bg-white/5 text-white">
                            <SelectValue placeholder="Select Size" />
                          </SelectTrigger>
                          <SelectContent>
                            {product.sizes.map((size) => (
                              <SelectItem key={size} value={size}>
                                {size}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-amber-300">₹{product.price}</span>
                      <Badge variant="secondary" className="bg-white/10 text-amber-100">{product.quantity} in stock</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button
                      className="magnum-gold-button w-full"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="books">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {books.map((product) => (
                <Card key={product.id} className="magnum-panel overflow-hidden border-amber-300/15 bg-white/5 text-white transition-shadow hover:shadow-lg hover:shadow-amber-950/20">
                  <CardHeader className="p-0">
                    <div className="relative flex h-48 items-center justify-center bg-white/10">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                        unoptimized
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                      <p className="mb-2 text-sm text-zinc-400">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-amber-300">₹{product.price}</span>
                      <Badge variant="secondary" className="bg-white/10 text-amber-100">{product.quantity} in stock</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button
                      className="magnum-gold-button w-full"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="accessories">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {accessories.map((product) => (
                <Card key={product.id} className="magnum-panel overflow-hidden border-amber-300/15 bg-white/5 text-white transition-shadow hover:shadow-lg hover:shadow-amber-950/20">
                  <CardHeader className="p-0">
                    <div className="relative flex h-48 items-center justify-center bg-white/10">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                        unoptimized
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                      <p className="mb-2 text-sm text-zinc-400">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-amber-300">₹{product.price}</span>
                      <Badge variant="secondary" className="bg-white/10 text-amber-100">{product.quantity} in stock</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button
                      className="magnum-gold-button w-full"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
