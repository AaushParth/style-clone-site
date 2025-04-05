import bg6 from "@/images/bg-1.png";

const BestFeaturesSection = () => {
  const features = [
    {
      title: "Advanced Security",
      description: "State-of-the-art encryption and multi-signature technology.",
      icon: "🛡️",
    },
    {
      title: "Cross-Chain Support",
      description: "Manage assets across multiple blockchains from one interface.",
      icon: "⛓️",
    },
    {
      title: "Smart Recovery",
      description: "Advanced recovery options with customizable security levels.",
      icon: "🔑",
    },
    {
      title: "24/7 Support",
      description: "Dedicated support team available around the clock.",
      icon: "💬",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg6})`,
        }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">Why Choose VultiSig?</h2>
        <p className="text-xl text-white text-center mb-12 max-w-3xl mx-auto">
          VultiSig offers cutting-edge features that set it apart in the crypto security space.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-brand-dark/50 p-6 rounded-lg border border-gray-800 hover:border-brand-purple transition-colors backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestFeaturesSection; 