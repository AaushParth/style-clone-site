
import { Shield, Lock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const securityFeatures = [
  {
    icon: <Shield className="w-12 h-12 text-brand-blue" />,
    title: "Multi-Signature Security",
    description: "Require multiple signatures to authorize transactions, preventing single points of failure and enhancing protection against unauthorized access."
  },
  {
    icon: <Lock className="w-12 h-12 text-brand-teal" />,
    title: "Advanced Encryption",
    description: "All data is protected with military-grade encryption to ensure your assets remain secure at all times."
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-brand-purple" />,
    title: "Decentralized Control",
    description: "Distribute transaction approval across multiple devices or trusted individuals for enhanced security and peace of mind."
  },
];

const SecuritySection = () => {
  return (
    <section id="security" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-brand-purple opacity-10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Bank-Grade Security</h2>
          <p className="text-gray-300 text-lg">
            Our multi-signature wallet provides institutional-grade security for your digital assets
            with advanced protection mechanisms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="glass-card overflow-hidden rotate-card border border-white/10 bg-brand-dark/30">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Security visual element from Vultisig */}
        <div className="mt-20 flex justify-center">
          <img 
            src="https://vultisig.com/images/security-visual.png" 
            alt="Security visualization" 
            className="max-w-full rounded-xl shadow-lg border border-white/10"
          />
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
