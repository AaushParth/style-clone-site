
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const features = [
  "Estratégias exclusivas de crescimento",
  "Técnicas avançadas de engajamento",
  "Métodos comprovados de conversão",
  "Suporte personalizado de especialistas"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -bottom-40 right-20 w-96 h-96 bg-brand-purple opacity-10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-purple to-brand-pink opacity-20 rounded-3xl filter blur-xl"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="relative">
                {/* Mock Instagram app */}
                <div className="bg-black rounded-t-xl p-2 flex justify-between items-center border-b border-gray-800">
                  <div className="text-white text-xs">9:30</div>
                  <div className="text-white text-xs">Instagram</div>
                  <div className="text-white text-xs">100%</div>
                </div>
                <img 
                  src="/lovable-uploads/6a7144b5-af98-4344-beef-e3759653feef.png" 
                  alt="Instagram Profile" 
                  className="w-full object-cover aspect-[4/5]"
                />
                {/* Instagram interface elements */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-2 flex flex-col">
                  <div className="flex justify-between mb-2">
                    <div className="flex space-x-3">
                      <div className="w-6 h-6 rounded-full bg-white"></div>
                      <div className="w-6 h-6 rounded-full bg-white"></div>
                      <div className="w-6 h-6 rounded-full bg-white"></div>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-white"></div>
                  </div>
                  <div className="text-xs text-white">
                    <span className="font-bold">2.547</span> curtidas
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-brand-orange to-brand-pink rounded-lg rotate-12 animate-float"></div>
            <div className="absolute bottom-20 -left-10 w-16 h-16 bg-gradient-to-r from-brand-purple to-brand-orange rounded-lg -rotate-12 animate-float delay-200"></div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A especialista por trás do método</h2>
            <p className="text-gray-300 mb-6">
              Isabella Ferreira é especialista em marketing digital há mais de 5 anos, com foco especial no Instagram. Já ajudou mais de 2.000 empresas e empreendedores a aumentarem significativamente sua presença digital e, consequentemente, suas vendas.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-pink flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-gradient-to-r from-brand-purple to-brand-pink hover:opacity-90 text-white rounded-full px-8 py-6 text-lg font-bold">
              QUERO APRENDER AGORA!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
