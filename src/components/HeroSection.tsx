import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import bg1 from "@/images/bg-1.png";
import vulti from "@/images/Vullti Agent idea.png";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg1})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Secure Your Crypto Assets with VultiSig
            </h1>
            <p className="text-xl text-white mb-8">
              The next-generation multi-signature wallet that combines security, convenience, and decentralization.
            </p>
            <Button className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 text-white rounded-md px-8 py-6 text-lg">
              Join Airdrop
            </Button>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <img
              src={vulti}
              alt="VultiSig Agent"
              className="w-full h-auto max-w-lg mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
