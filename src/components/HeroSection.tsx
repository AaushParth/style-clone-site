
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-24 min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-purple opacity-30 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-orange opacity-30 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-3 py-1">
              Domine o Instagram
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="animated-gradient-text">Domine o</span>{" "}
              <span className="text-brand-orange">Instagram</span>{" "}
              <span className="block mt-2">e Impulsione seu negócio</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg">
              Aprenda as estratégias comprovadas para criar um perfil atraente, impulsionar o engajamento e transformar seguidores em clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-brand-purple to-brand-pink hover:opacity-90 text-white rounded-full px-8 py-6 text-lg">
                ME INSCREVER
              </Button>
              <Button variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-full px-8 py-6 text-lg">
                Saiba mais
              </Button>
            </div>
            
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink border-2 border-black"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-orange to-brand-pink border-2 border-black"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-pink to-brand-purple border-2 border-black"></div>
              </div>
              <span className="ml-4 text-sm text-gray-300">Mais de 10.000 pessoas já se inscreveram</span>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-orange opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
              <img 
                src="/lovable-uploads/6a7144b5-af98-4344-beef-e3759653feef.png" 
                alt="Instagram Domination" 
                className="relative z-10 rounded-2xl shadow-2xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated bottom banner */}
      <div className="absolute bottom-0 left-0 right-0 py-2 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          <span className="mx-4 text-sm uppercase tracking-widest text-gray-400">Inscreva-se</span>
          <span className="mx-4 text-sm uppercase tracking-widest text-gray-400">•</span>
          <span className="mx-4 text-sm uppercase tracking-widest text-gray-400">Gratuito</span>
          <span className="mx-4 text-sm uppercase tracking-widest text-gray-400">•</span>
          <span className="mx-4 text-sm uppercase tracking-widest text-gray-400">Inscreva-se</span>
          <span className="mx-4 text-sm uppercase tracking-widest text-gray-400">•</span>
          <span className="mx-4 text-sm uppercase tracking-widest text-gray-400">Gratuito</span>
          <span className="mx-4 text-sm uppercase tracking-widest text-gray-400">•</span>
          <span className="mx-4 text-sm uppercase tracking-widest text-gray-400">Inscreva-se</span>
          <span className="mx-4 text-sm uppercase tracking-widest text-gray-400">•</span>
          <span className="mx-4 text-sm uppercase tracking-widest text-gray-400">Gratuito</span>
          <span className="mx-4 text-sm uppercase tracking-widest text-gray-400">•</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
