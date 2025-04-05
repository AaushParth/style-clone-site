
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Silva",
    role: "Empreendedora Digital",
    image: "",
    content: "O curso InstaDom transformou completamente minha presença no Instagram. Em apenas 2 meses, aumentei meus seguidores em 300% e minhas vendas dobraram!",
    stars: 5
  },
  {
    name: "Carlos Mendes",
    role: "Fotógrafo Profissional",
    image: "",
    content: "Depois de aplicar as estratégias do curso, consegui fechar parcerias com grandes marcas. As técnicas são simples de implementar e trazem resultados impressionantes.",
    stars: 5
  },
  {
    name: "Juliana Costa",
    role: "Proprietária de Loja Online",
    image: "",
    content: "Minha taxa de engajamento aumentou em 70% e as vendas pela plataforma triplicaram após aplicar o que aprendi no InstaDom. Investimento que valeu cada centavo!",
    stars: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 right-40 w-96 h-96 bg-brand-purple opacity-10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">O que nossos alunos dizem</h2>
          <p className="text-gray-300 text-lg">
            Centenas de pessoas já transformaram sua presença no Instagram com nossa metodologia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card border border-white/10 bg-black/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {Array(testimonial.stars).fill(0).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 border border-white/10">
                    <AvatarFallback className="bg-gradient-to-r from-brand-purple to-brand-pink">
                      {testimonial.name.split(' ').map(name => name[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium">{testimonial.name}</h4>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
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

export default TestimonialsSection;
