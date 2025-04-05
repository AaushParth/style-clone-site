
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SecuritySection from "@/components/SecuritySection";
import WalletSection from "@/components/WalletSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SecuritySection />
      <FeaturesSection />
      <WalletSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
