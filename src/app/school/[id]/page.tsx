"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => router.push("/")} className="text-2xl font-bold text-blue-600">
              SchoolMart
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
              <span>{school.name}</span>
              <span>•</span>
              <span>{school.city}, {school.state}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={() => router.push("/track-order")}>
              Track Order
            </Button>
            <Button variant="outline" size="sm" onClick={() => router.push("/cart")}>
              Cart ({useCart().totalItems})
            </Button>
            <Button variant="outline" size="sm">Login</Button>
          </div>
        </div>
      </header>

      {/* School Info Banner */}
      <div className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">{school.name}</h1>
          <p className="text-blue-100">
            {school.city}, {school.state} • {school.board} Board
          </p>
        </div>
      </div>

      {/* Products Section */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="uniforms" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="uniforms">Uniforms ({uniforms.length})</TabsTrigger>
            <TabsTrigger value="books">Books ({books.length})</TabsTrigger>
            <TabsTrigger value="accessories">Accessories ({accessories.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="uniforms">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {uniforms.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="bg-gray-200 h-48 flex items-center justify-center">
                      <Image
                        src="/next.svg"
                        alt={product.name}
                        width={100}
                        height={100}
                        className="opacity-50"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                    <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                    {product.sizes && (
                      <div className="mb-2">
                        <Select
                          value={selectedSize[product.id] || ""}
                          onValueChange={(value) =>
                            setSelectedSize((prev) => ({ ...prev, [product.id]: value }))
                          }
                        >
                          <SelectTrigger className="w-full">
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
                      <span className="text-2xl font-bold text-blue-600">₹{product.price}</span>
                      <Badge variant="secondary">{product.quantity} in stock</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button
                      className="w-full"
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
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="bg-gray-200 h-48 flex items-center justify-center">
                      <Image
                        src="/next.svg"
                        alt={product.name}
                        width={100}
                        height={100}
                        className="opacity-50"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                    <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">₹{product.price}</span>
                      <Badge variant="secondary">{product.quantity} in stock</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button
                      className="w-full"
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
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="bg-gray-200 h-48 flex items-center justify-center">
                      <Image
                        src="/next.svg"
                        alt={product.name}
                        width={100}
                        height={100}
                        className="opacity-50"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                    <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">₹{product.price}</span>
                      <Badge variant="secondary">{product.quantity} in stock</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button
                      className="w-full"
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
