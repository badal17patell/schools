import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand-logo";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <BrandLogo size={48} />
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>

          <Card className="mb-8">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Magnum is a trusted online destination for school uniforms,
                serving over 100 prestigious schools across the country. We understand the
                importance of quality education and the role that proper uniforms and study
                materials play in a student's academic journey.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded with a vision to simplify school shopping for parents, we have partnered
                with top schools to provide authentic, high-quality products that meet each
                institution's specific requirements.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-semibold mb-2">Quality First</h3>
                <p className="text-gray-600">We ensure every product meets the highest quality standards</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Quick and reliable delivery across India</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">💯</div>
                <h3 className="font-semibold mb-2">Customer Satisfaction</h3>
                <p className="text-gray-600">Your satisfaction is our top priority</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mb-6">Why Choose Magnum?</h2>
          <Card>
            <CardContent className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Authorized vendor for 100+ top Indian schools</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Premium quality uniforms and genuine books</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Competitive prices with regular discounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Easy returns and exchange policy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Secure payment options</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Dedicated customer support</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Magnum. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
