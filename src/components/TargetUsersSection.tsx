import bg7 from "@/images/bg-1.png";

const TargetUsersSection = () => {
  const userTypes = [
    {
      title: "Individual Investors",
      description: "Protect your personal crypto investments with enterprise-grade security.",
      icon: "👤",
    },
    {
      title: "Businesses",
      description: "Secure company funds with multi-signature requirements and audit trails.",
      icon: "🏢",
    },
    {
      title: "DAOs",
      description: "Manage treasury funds with transparent and secure multi-signature controls.",
      icon: "🌐",
    },
    {
      title: "Developers",
      description: "Integrate VultiSig's security features into your applications.",
      icon: "💻",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg7})`,
        }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">Who Should Use VultiSig?</h2>
        <p className="text-xl text-white text-center mb-12 max-w-3xl mx-auto">
          Whether you're an individual investor or a large organization, VultiSig provides the security and flexibility you need.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {userTypes.map((userType, index) => (
            <div
              key={index}
              className="bg-brand-dark/50 p-6 rounded-lg border border-gray-800 hover:border-brand-purple transition-colors backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{userType.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{userType.title}</h3>
              <p className="text-white">{userType.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetUsersSection; 