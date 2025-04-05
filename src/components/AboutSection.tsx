
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -bottom-40 right-20 w-96 h-96 bg-brand-purple opacity-10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Quem te ensinará</h2>
            <p className="text-gray-300 mb-4">
              Isabella Ferreira é especialista em marketing digital há mais de 5 anos. Teve a oportunidade de colaborar com grandes marcas e ajudar pequenas empresas a alcançarem grandes resultados na plataforma. Sua jornada a transformou em uma consultora que cria perfis de alto impacto, que quando bem trabalhados a longo prazo podem trazer engajamento significativo e crescimento no número de seguidores e nas vendas.
            </p>
            <p className="text-gray-300 mb-4">
              Seus conhecimentos, aliados a uma abordagem prática e estratégica, permitem que você obtenha os resultados que sempre buscou: crescimento significativo em engajamento, no número de seguidores e nas vendas.
            </p>
            <p className="text-gray-300 mb-6">
              No InstaDomination, ela compartilha todas essas estratégias comprovadas para impulsionar qualquer tipo de negócio ou marca pessoal e explorar ao máximo as ferramentas e conhecimentos valiosos de alguém que já trilhou na frente do crescimento e sucesso no Instagram.
            </p>
            <Button className="bg-gradient-to-r from-brand-purple to-brand-pink hover:opacity-90 text-white rounded-full px-8 py-6 text-lg font-bold">
              QUERO DOMINAR O INSTAGRAM AGORA!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
