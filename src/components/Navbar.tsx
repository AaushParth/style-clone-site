
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/80 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gradient">VultiSig</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#security">Security</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#wallet">Wallet</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
          <Button className="bg-gradient-to-r from-brand-purple to-brand-pink hover:opacity-90 text-white rounded-full px-6">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink href="#security" onClick={() => setMobileMenuOpen(false)}>Security</NavLink>
            <NavLink href="#features" onClick={() => setMobileMenuOpen(false)}>Features</NavLink>
            <NavLink href="#wallet" onClick={() => setMobileMenuOpen(false)}>Wallet</NavLink>
            <NavLink href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</NavLink>
            <Button className="bg-gradient-to-r from-brand-purple to-brand-pink text-white w-full rounded-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-300 hover:text-white transition-colors font-medium"
    >
      {children}
    </a>
  );
};

export default Navbar;
