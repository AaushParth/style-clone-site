
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-pink opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Pronto para transformar sua presença no Instagram?
          </h2>
          
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de alunos que já estão conquistando resultados extraordinários com a metodologia InstaDom.
          </p>
          
          <Button className="bg-black hover:bg-gray-900 text-white rounded-full px-8 py-6 text-lg font-bold">
            QUERO DOMINAR O INSTAGRAM AGORA!
          </Button>
          
          <p className="mt-6 text-white/80 text-sm">
            Garantia de 30 dias ou seu dinheiro de volta
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
