import bg4 from "@/images/bg-2.png";

const WalletProblemsSection = () => {
  const problems = [
    {
      title: "Single Point of Failure",
      description: "Traditional wallets rely on a single private key, making them vulnerable to theft or loss.",
    },
    {
      title: "Complex Security",
      description: "Setting up multi-signature solutions is often complicated and requires technical expertise.",
    },
    {
      title: "Limited Recovery Options",
      description: "If you lose access to your wallet, recovering your funds can be difficult or impossible.",
    },
    {
      title: "Poor User Experience",
      description: "Many security solutions compromise usability, making them difficult for everyday users.",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg4})`,
        }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">Common Wallet Problems</h2>
        <p className="text-xl text-white text-center mb-12 max-w-3xl mx-auto">
          Traditional crypto wallets face several challenges that put your assets at risk.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-brand-dark/50 p-6 rounded-lg border border-gray-800 hover:border-brand-purple transition-colors backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">{problem.title}</h3>
              <p className="text-white">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WalletProblemsSection; 