import { Card, CardContent } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <a href="/" className="text-2xl font-bold text-blue-600">SchoolMart</a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>

          <Card className="mb-6">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using SchoolMart's website and services, you accept and agree to be bound by the terms
                and provision of this agreement.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily access the materials on SchoolMart's website for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                The materials on SchoolMart's website are provided on an 'as is' basis. SchoolMart makes no warranties,
                expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
                implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
                of intellectual property or other violation of rights.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
              <p className="text-gray-700 mb-4">
                In no event shall SchoolMart or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the materials on SchoolMart's website.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">5. Contact Information</h2>
              <p className="text-gray-700">
                If you have any questions about these Terms and Conditions, please contact us at:
                <br />
                Email: wecare@schoolmart.in
                <br />
                Phone: +91 7666 477 477
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
