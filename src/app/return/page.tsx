import { Card, CardContent } from "@/components/ui/card";
import { BrandLogo } from "@/components/brand-logo";

export default function ReturnPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <BrandLogo size={48} />
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Return Policy</h1>

          <Card className="mb-6">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">7-Day Return Policy</h2>
              <p className="text-gray-700 mb-4">
                At Magnum, we want you to be completely satisfied with your purchase. If you are not satisfied,
                you may return most items within 7 days of delivery for a full refund or exchange.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Return Conditions</h2>
              <p className="text-gray-700 mb-4">To be eligible for a return, items must be:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Unused and in the same condition as received</li>
                <li>In the original packaging with all tags attached</li>
                <li>Accompanied by the original receipt or proof of purchase</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Non-Returnable Items</h2>
              <p className="text-gray-700 mb-4">The following items cannot be returned:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Customized or personalized products</li>
                <li>Undergarments and socks (for hygiene reasons)</li>
                <li>Books that have been written in or damaged</li>
                <li>Items marked as "Final Sale"</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Return Process</h2>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Contact our customer service team within 7 days of delivery</li>
                <li>Provide your order number and reason for return</li>
                <li>Receive return authorization and shipping instructions</li>
                <li>Pack the item securely and ship it to our return center</li>
                <li>Once received and inspected, we will process your refund within 5-7 business days</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-700">
                For return authorization or questions about our return policy, please contact us at:
                <br />
                Email: wecare@schoolmart.in
                <br />
                Phone: +91 7666 477 477 (Mon-Sat, 10:00am to 6:00pm)
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
