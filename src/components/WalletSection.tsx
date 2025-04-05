
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const features = [
  "Multi-signature security",
  "Customizable approval thresholds",
  "Complete transaction history",
  "Secure key management",
  "Cross-platform compatibility"
];

const WalletSection = () => {
  return (
    <section id="wallet" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -bottom-40 right-20 w-96 h-96 bg-brand-purple opacity-10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-purple to-brand-blue opacity-20 rounded-3xl filter blur-xl"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="relative">
                {/* Mock wallet interface */}
                <div className="bg-black rounded-t-xl p-2 flex justify-between items-center border-b border-gray-800">
                  <div className="text-white text-xs">9:30</div>
                  <div className="text-white text-xs">VultiSig</div>
                  <div className="text-white text-xs">100%</div>
                </div>
                <img 
                  src="https://vultisig.com/images/wallet-demo.png" 
                  alt="Wallet Interface" 
                  className="w-full object-cover aspect-[4/5]"
                />
                {/* Wallet interface elements */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 flex flex-col">
                  <div className="flex justify-between mb-2">
                    <div className="text-sm font-bold text-white">Total Balance:</div>
                    <div className="text-sm font-bold text-white">4.586 BTC</div>
                  </div>
                  <div className="text-xs text-white/70">
                    Pending approvals: 2 transactions
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-brand-blue to-brand-teal rounded-lg rotate-12 animate-float"></div>
            <div className="absolute bottom-20 -left-10 w-16 h-16 bg-gradient-to-r from-brand-purple to-brand-blue rounded-lg -rotate-12 animate-float delay-200"></div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Manage Digital Assets with Confidence</h2>
            <p className="text-gray-300 mb-6">
              Our multi-signature wallet provides institutional-grade security for individuals and organizations looking to secure their digital assets with advanced protection mechanisms.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 text-white rounded-md px-8 py-6 text-lg font-bold">
              CREATE YOUR WALLET
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WalletSection;
