import bg3 from "@/images/bg-2.png";
import tc from "@/images/tc.png";
import vs from "@/images/vs.png";
import we from "@/images/wewe-logo.png";
import defi from "@/images/DeFi_Technologies_Inc__DeFi_Technologies__Wholly_Owned_Subsidiar.jpg";
import zk from "@/images/zk_finance_logo.jpeg";
import ruji from "@/images/image-4-1024x538.png";

const PartnersSection = () => {
  const partners = [
    { name: "THORChain", logo: tc, treasury: true },
    { name: "VultiSig", logo: vs, treasury: true },
    { name: "WE", logo: we, treasury: true },
    { name: "DeFi Suisse", logo: defi, treasury: true },
    { name: "ZKFinance", logo: zk, treasury: true },
    { name: "RUJI", logo: ruji, treasury: true },
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg3})`,
        }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">Trusted by the best</h2>
        <p className="text-xl text-white text-center mb-12 max-w-3xl mx-auto">
          Join the growing list of industry leaders who trust VultiSig for their crypto security needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-brand-dark/50 p-6 rounded-lg border border-gray-800 hover:border-brand-purple transition-colors backdrop-blur-sm flex items-center space-x-4"
            >
              <div className="flex-shrink-0">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                {partner.treasury && (
                  <span className="text-sm text-brand-purple">Treasury</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection; 