
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Aumente seu alcance",
    description: "Aprenda técnicas avançadas para expandir seu alcance orgânico no Instagram e atingir seu público-alvo."
  },
  {
    title: "Engaje sua audiência",
    description: "Descubra estratégias comprovadas para criar conteúdo que gera engajamento significativo e duradouro."
  },
  {
    title: "Converta seguidores",
    description: "Transforme seguidores passivos em clientes ativos com estratégias de conversão eficientes."
  },
  {
    title: "Cresça consistentemente",
    description: "Desenvolva um plano de crescimento sustentável para resultados duradouros no Instagram."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-brand-purple opacity-10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Por que escolher o InstaDom</h2>
          <p className="text-gray-300 text-lg">
            Nossa metodologia exclusiva foi desenvolvida para maximizar seus resultados no Instagram
            e transformar sua presença digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="w-6 h-6 text-brand-pink" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
