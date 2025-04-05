
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "AULA 1",
    heading: "Como criar um Perfil de Sucesso no Instagram em 2024",
    description: "Aprenda as melhores práticas para criar um perfil atraente no Instagram, incluindo a escolha do tipo de perfil, bio atraente e estratégias de conteúdo.",
    gradient: "from-brand-purple to-brand-pink"
  },
  {
    title: "AULA 2",
    heading: "Conteúdo que Conecta e Engaja no Instagram",
    description: "Crie conteúdo relevante no Instagram, desde fotos e vídeos de alta qualidade até legendas personalizadas e hashtags estratégicas.",
    gradient: "from-brand-orange to-brand-pink"
  },
  {
    title: "AULA 3",
    heading: "Transformando seguidores em Clientes Pagantes",
    description: "Descubra técnicas eficazes para aumentar sua audiência, gerar conexão e converter seguidores em clientes pagantes.",
    gradient: "from-brand-pink to-brand-purple"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-brand-orange opacity-10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-brand-purple opacity-10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Veja o que você aprenderá:</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card overflow-hidden rotate-card">
              <CardContent className="p-0">
                <div className="p-1">
                  <div className={`bg-gradient-to-r ${feature.gradient} rounded-t-lg p-1`}></div>
                  <div className="p-6">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-brand-purple to-brand-orange">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-sm text-gray-400 mb-2">{feature.title}</h3>
                    <h4 className="text-xl font-bold mb-3">{feature.heading}</h4>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
