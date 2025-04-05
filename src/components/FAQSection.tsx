
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo terei acesso ao curso?",
    answer: "Você terá acesso vitalício ao conteúdo do curso, incluindo todas as atualizações futuras."
  },
  {
    question: "O curso é indicado para iniciantes?",
    answer: "Sim, o curso foi estruturado para atender tanto iniciantes quanto usuários avançados do Instagram. Começamos com os fundamentos e progredimos para estratégias mais sofisticadas."
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Os alunos geralmente começam a ver resultados nas primeiras semanas após aplicar as estratégias ensinadas. No entanto, os resultados mais significativos acontecem após 2-3 meses de implementação consistente."
  },
  {
    question: "Existe suporte para dúvidas?",
    answer: "Sim, oferecemos suporte completo através de um grupo exclusivo onde você poderá tirar suas dúvidas diretamente com nossos especialistas."
  },
  {
    question: "Existe garantia de resultados?",
    answer: "Oferecemos garantia de satisfação de 30 dias. Se você não ficar satisfeito com o conteúdo, devolveremos 100% do seu investimento, sem perguntas."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-black/50 backdrop-blur-sm">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange opacity-10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Perguntas Frequentes</h2>
          <p className="text-gray-300 text-lg">
            Tudo o que você precisa saber antes de se inscrever
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
