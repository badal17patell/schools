import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand-logo";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="magnum-page">
      <header className="magnum-header">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <BrandLogo size={48} />
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>

          <Card className="magnum-panel mb-8 border-amber-300/15 bg-white/5 text-white">
            <CardContent className="p-8">
              <p className="magnum-copy mb-6 text-lg leading-relaxed">
                Magnum is a trusted online destination for school uniforms,
                serving over 100 prestigious schools across the country. We understand the
                importance of quality education and the role that proper uniforms and study
                materials play in a student's academic journey.
              </p>
              <p className="magnum-copy mb-6 text-lg leading-relaxed">
                Founded with a vision to simplify school shopping for parents, we have partnered
                with top schools to provide authentic, high-quality products that meet each
                institution's specific requirements.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="magnum-panel border-amber-300/15 bg-white/5 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-semibold mb-2">Quality First</h3>
                <p className="magnum-copy">We ensure every product meets the highest quality standards</p>
              </CardContent>
            </Card>
            <Card className="magnum-panel border-amber-300/15 bg-white/5 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-semibold mb-2">Fast Delivery</h3>
                <p className="magnum-copy">Quick and reliable delivery across India</p>
              </CardContent>
            </Card>
            <Card className="magnum-panel border-amber-300/15 bg-white/5 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">💯</div>
                <h3 className="font-semibold mb-2">Customer Satisfaction</h3>
                <p className="magnum-copy">Your satisfaction is our top priority</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mb-6">Why Choose Magnum?</h2>
          <Card className="magnum-panel border-amber-300/15 bg-white/5 text-white">
            <CardContent className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-amber-300">✓</span>
                  <span>Authorized vendor for 100+ top Indian schools</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-amber-300">✓</span>
                  <span>Premium quality uniforms and genuine books</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-amber-300">✓</span>
                  <span>Competitive prices with regular discounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-amber-300">✓</span>
                  <span>Easy returns and exchange policy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-amber-300">✓</span>
                  <span>Secure payment options</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-amber-300">✓</span>
                  <span>Dedicated customer support</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="mt-16 border-t border-amber-300/10 bg-black py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="magnum-muted">© 2024 Magnum. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
