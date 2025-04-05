
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-pink opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Garanta sua vaga agora, domine o instagram e impulsione suas vendas!
          </h2>
          
          <Button className="bg-black hover:bg-gray-900 text-white rounded-full px-8 py-6 text-lg font-bold">
            QUERO DOMINAR O INSTAGRAM AGORA!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
