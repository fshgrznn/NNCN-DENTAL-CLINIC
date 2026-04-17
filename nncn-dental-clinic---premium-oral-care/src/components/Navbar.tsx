import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { 
      name: 'Services', 
      href: '#services',
      dropdown: ['Cleaning', 'Restoration', 'Extraction', 'Whitening']
    },
    { 
      name: 'Treatments', 
      href: '#treatments',
      dropdown: ['Veneers', 'Braces', 'Crowns', 'Implants']
    },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-luxury-black/95 backdrop-blur-md py-3 shadow-2xl border-b border-gold-400/20' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center relative">
        
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-gold-400 p-2 absolute left-6"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Layout: Balanced Grid */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center w-full">
          
          {/* Left Links */}
          <div className="flex justify-end items-center space-x-12 pr-12 text-[10px] font-bold uppercase tracking-[0.25em]">
            {navLinks.slice(0, 3).map((link) => (
              <div key={link.name} className="group relative">
                <a 
                  href={link.href} 
                  className={`${isScrolled ? 'text-gold-200' : 'text-gold-100'} hover:text-white transition-colors duration-300 flex items-center gap-1.5`}
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>

          {/* Logo (Centered) */}
          <div className="px-8">
            <a href="#" className="flex flex-col items-center group">
              <span className="text-2xl font-serif font-bold luxury-gradient-text tracking-tighter">NNCN DENTAL</span>
              <div className="flex items-center gap-2 mt-0.5 opacity-70">
                <span className="text-[7px] uppercase tracking-[0.4em] text-gold-300 font-bold">Premium Oral Care</span>
              </div>
            </a>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-between pl-12">
            <div className="flex items-center space-x-12 text-[10px] font-bold uppercase tracking-[0.25em]">
              {navLinks.slice(3).map((link) => (
                <div key={link.name} className="group relative">
                  <a 
                    href={link.href} 
                    className={`${isScrolled ? 'text-gold-200' : 'text-gold-100'} hover:text-white transition-colors duration-300 flex items-center gap-1.5`}
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
            
            <a 
              href="#" 
              className="bg-gold-500 hover:bg-gold-400 text-white px-7 py-3 rounded-full text-[9px] font-bold tracking-[0.25em] transition-all duration-500 glow-button hover:-translate-y-0.5 ml-4"
            >
              BOOK NOW
            </a>
          </div>
        </div>

        {/* Mobile Logo (Center) */}
        <div className="lg:hidden mx-auto">
          <a href="#" className="flex flex-col items-center group">
            <span className="text-xl font-serif font-bold luxury-gradient-text tracking-tighter">NNCN DENTAL</span>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-luxury-black border-b border-gold-400/20 py-8 px-6 space-y-6"
          >
            {navLinks.map((link) => (
              <div key={link.name}>
                <a 
                  href={link.href} 
                  className="text-xl font-serif text-gold-200 block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
                {link.dropdown && (
                  <div className="mt-2 pl-4 flex flex-wrap gap-2">
                    {link.dropdown.map(sub => (
                      <span key={sub} className="text-[10px] uppercase tracking-wider text-white/50 border border-white/10 px-2 py-1">
                        {sub}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a 
              href="#" 
              className="block w-full text-center bg-gold-500 text-white py-4 font-bold tracking-widest"
            >
              BOOK APPOINTMENT
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
