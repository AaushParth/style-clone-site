import { Button } from "@/components/ui/button";
import bg2 from "@/images/bg-2.png";

const DownloadSection = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg2})`,
        }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">Download VultiSig</h2>
        <p className="text-xl text-white text-center mb-12 max-w-3xl mx-auto">
          Get started with VultiSig today and take control of your crypto security.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-[#1A237E] hover:bg-[#283593] text-white px-8 py-4 rounded-lg text-lg transition-colors">
            Download for Windows
          </button>
          <button className="bg-[#1A237E] hover:bg-[#283593] text-white px-8 py-4 rounded-lg text-lg transition-colors">
            Download for Mac
          </button>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection; 