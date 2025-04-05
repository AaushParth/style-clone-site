
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "THRESHOLD SIGNATURES",
    heading: "Custom Signature Requirements",
    description: "Set custom threshold requirements for transaction approvals. Define how many signatures are needed from your trusted circle.",
    gradient: "from-brand-purple to-brand-pink"
  },
  {
    title: "TRANSACTION MANAGEMENT",
    heading: "Complete Transaction History",
    description: "Track all your transactions with a comprehensive history log and detailed audit trail for enhanced transparency.",
    gradient: "from-brand-orange to-brand-pink"
  },
  {
    title: "SECURE RECOVERY",
    heading: "Multiple Recovery Options",
    description: "Implement secure recovery mechanisms to ensure you never lose access to your assets, even if a device is lost.",
    gradient: "from-brand-pink to-brand-purple"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-black/50 backdrop-blur-sm">
      {/* Background elements */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-brand-orange opacity-10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-brand-purple opacity-10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced Features</h2>
          <p className="text-gray-300 text-lg">
            Our multi-signature wallet comes with powerful features designed to provide
            maximum security while maintaining ease of use.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card overflow-hidden rotate-card border border-white/10 bg-black/30">
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
