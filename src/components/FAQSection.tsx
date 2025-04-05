
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a multi-signature wallet?",
    answer: "A multi-signature wallet is a digital wallet that requires multiple private keys to authorize a transaction, rather than just one. This provides an additional layer of security as multiple parties must approve transactions."
  },
  {
    question: "How secure is VultiSig?",
    answer: "VultiSig employs bank-grade security measures including multi-signature technology, advanced encryption, and secure key management. Our solution is built with security as the primary focus."
  },
  {
    question: "What happens if I lose one of my devices?",
    answer: "Our wallet includes secure recovery options. Depending on your setup, you can recover access using your remaining authorized devices or through a predetermined recovery process."
  },
  {
    question: "Can I customize signature requirements?",
    answer: "Yes, you can set custom threshold requirements for transaction approvals. For example, you might require 2 out of 3, or 3 out of 5 signatures for different types of transactions."
  },
  {
    question: "Is VultiSig compatible with hardware wallets?",
    answer: "Yes, VultiSig is designed to work seamlessly with popular hardware wallets for enhanced security and key management."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-black/50 backdrop-blur-sm">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange opacity-10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-gray-300 text-lg">
            Find answers to common questions about our multi-signature wallet
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-white/10 rounded-lg bg-black/30 px-6">
                <AccordionTrigger className="text-left text-lg font-medium py-4">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
