import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/images/Logo_white.png";

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
        scrolled ? "bg-brand-dark/80 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="VultiSig" className="h-8" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#product">Product</NavLink>
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#backed-by">Backed By</NavLink>
          <NavLink href="#docs">Docs</NavLink>
          <NavLink href="#vult">$VULT</NavLink>
          <Button className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 text-white rounded-md px-6">
            Download Now
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
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink href="#product" onClick={() => setMobileMenuOpen(false)}>Product</NavLink>
            <NavLink href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</NavLink>
            <NavLink href="#backed-by" onClick={() => setMobileMenuOpen(false)}>Backed By</NavLink>
            <NavLink href="#docs" onClick={() => setMobileMenuOpen(false)}>Docs</NavLink>
            <NavLink href="#vult" onClick={() => setMobileMenuOpen(false)}>$VULT</NavLink>
            <Button className="bg-gradient-to-r from-brand-purple to-brand-blue text-white w-full rounded-md">
              Download Now
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
