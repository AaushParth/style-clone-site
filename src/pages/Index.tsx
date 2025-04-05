import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DownloadSection from "@/components/DownloadSection";
import PartnersSection from "@/components/PartnersSection";
import WalletProblemsSection from "@/components/WalletProblemsSection";
import VultiSigSolutionSection from "@/components/VultiSigSolutionSection";
import BestFeaturesSection from "@/components/BestFeaturesSection";
import TargetUsersSection from "@/components/TargetUsersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <DownloadSection />
      <PartnersSection />
      <WalletProblemsSection />
      <VultiSigSolutionSection />
      <BestFeaturesSection />
      <TargetUsersSection />
      <Footer />
    </div>
  );
};

export default Index;
