
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-blue opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ready to secure your digital assets?
          </h2>
          
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust VultiSig to protect their cryptocurrency and digital assets with institutional-grade security.
          </p>
          
          <Button className="bg-brand-dark hover:bg-gray-900 text-white rounded-md px-8 py-6 text-lg font-bold">
            GET STARTED NOW
          </Button>
          
          <p className="mt-6 text-white/80 text-sm">
            No credit card required to get started
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
