import bg5 from "@/images/bg-2.png";

const VultiSigSolutionSection = () => {
  const features = [
    {
      title: "Multi-Signature Security",
      description: "Require multiple approvals for transactions, eliminating single points of failure.",
      icon: "🔒",
    },
    {
      title: "Easy Setup",
      description: "Get started in minutes with our intuitive setup process.",
      icon: "⚡",
    },
    {
      title: "Flexible Recovery",
      description: "Multiple recovery options ensure you never lose access to your funds.",
      icon: "🔄",
    },
    {
      title: "User-Friendly",
      description: "Enterprise-grade security with a simple, intuitive interface.",
      icon: "🎯",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg5})`,
        }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">VultiSig: The Complete Solution</h2>
        <p className="text-xl text-white text-center mb-12 max-w-3xl mx-auto">
          VultiSig combines enterprise-grade security with an intuitive user experience.
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

export default VultiSigSolutionSection; 