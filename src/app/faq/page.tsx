import { Card, CardContent } from "@/components/ui/card";
import { BrandLogo } from "@/components/brand-logo";

export default function FAQPage() {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Select your school, browse products, add items to cart, and proceed to checkout. Follow the simple steps to complete your order."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI, net banking, and wallet payments. All transactions are secure and encrypted."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery typically takes 3-7 business days depending on your location. You will receive tracking details once your order is shipped."
    },
    {
      question: "Can I return or exchange products?",
      answer: "Yes, we have a 7-day return policy for unused products in original packaging. Uniforms can be exchanged for different sizes if unused."
    },
    {
      question: "Are the uniforms authentic?",
      answer: "Yes, we are authorized vendors for all partner schools. All uniforms are made as per school specifications with proper logos and quality standards."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes, we offer special discounts for bulk orders. Please contact our customer service team for more information."
    },
    {
      question: "How do I track my order?",
      answer: "You can track your order by visiting the 'Track Order' page and entering your order number and registered email address."
    },
    {
      question: "What if a product is out of stock?",
      answer: "If a product is out of stock, you can sign up for restock notifications. We typically restock popular items within 7-10 days."
    }
  ];

  return (
    <div className="magnum-page">
      <header className="magnum-header">
        <div className="container mx-auto px-4 py-4">
          <BrandLogo size={48} />
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="magnum-panel border-amber-300/15 bg-white/5 text-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="magnum-copy">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="magnum-panel-strong mt-8 border-amber-300/20 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
              <p className="magnum-copy mb-4">Our customer support team is here to help you.</p>
              <p className="magnum-copy">
                Call us: +91 9209169690<br />
                Email: magnum_schools@gmail.com
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
