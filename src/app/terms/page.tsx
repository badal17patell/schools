import { Card, CardContent } from "@/components/ui/card";
import { BrandLogo } from "@/components/brand-logo";

export default function TermsPage() {
  return (
    <div className="magnum-page">
      <header className="magnum-header">
        <div className="container mx-auto px-4 py-4">
          <BrandLogo size={48} />
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>

          <Card className="magnum-panel mb-6 border-amber-300/15 bg-white/5 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="magnum-copy mb-4">
                By accessing and using Magnum's website and services, you accept and agree to be bound by the terms
                and provision of this agreement.
              </p>
            </CardContent>
          </Card>

          <Card className="magnum-panel mb-6 border-amber-300/15 bg-white/5 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <p className="magnum-copy mb-4">
                Permission is granted to temporarily access the materials on Magnum's website for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </CardContent>
          </Card>

          <Card className="magnum-panel mb-6 border-amber-300/15 bg-white/5 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
              <p className="magnum-copy mb-4">
                The materials on Magnum's website are provided on an 'as is' basis. Magnum makes no warranties,
                expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
                implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
                of intellectual property or other violation of rights.
              </p>
            </CardContent>
          </Card>

          <Card className="magnum-panel mb-6 border-amber-300/15 bg-white/5 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
              <p className="magnum-copy mb-4">
                In no event shall Magnum or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the materials on Magnum's website.
              </p>
            </CardContent>
          </Card>

          <Card className="magnum-panel-strong border-amber-300/20 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">5. Contact Information</h2>
              <p className="magnum-copy">
                If you have any questions about these Terms and Conditions, please contact us at:
                <br />
                Email: magnum_schools@gmail.com
                <br />
                Phone: +91 9209169690
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
