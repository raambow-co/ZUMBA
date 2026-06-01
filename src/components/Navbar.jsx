import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#zumba' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 80, // Navbar height offset
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg' 
            : 'py-6 bg-black/40 backdrop-blur-sm border-b border-white/5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-1.5 group">
            <span className="font-display font-black text-2xl tracking-widest text-gold-gradient group-hover:opacity-90 transition-opacity">
              SUSHMA'S
            </span>
            <span className="text-[10px] tracking-[0.25em] text-white/50 self-end mb-1 hidden sm:inline-block font-sans font-bold">
              ZUMBA & BOUTIQUE
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-semibold tracking-widest uppercase text-gray-300 hover:text-[#BF953F] transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-gradient transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA & Mobile Icon */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenBooking('zumba')}
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-black bg-gold-gradient hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_15px_rgba(191,149,63,0.2)] hover:shadow-[0_0_25px_rgba(191,149,63,0.4)]"
            >
              <Sparkles size={12} />
              Join Now
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-white hover:text-[#BF953F] transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-[#0A0A0A] border-l border-white/10 p-8 flex flex-col justify-between"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex justify-between items-center mb-12">
                  <span className="font-display font-black text-xl tracking-widest text-gold-gradient">
                    SUSHMA'S
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-white/70 hover:text-white rounded-full bg-white/5"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-sm font-semibold tracking-widest uppercase text-gray-300 hover:text-[#BF953F] transition-colors py-2 border-b border-white/5"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Drawer CTA */}
              <div className="mt-8">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking('zumba');
                  }}
                  className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-black bg-gold-gradient flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(191,149,63,0.2)]"
                >
                  <Sparkles size={14} />
                  Join Now
                </button>
                <p className="text-center text-[10px] text-gray-500 mt-4 tracking-wider">
                  FITNESS & FASHION EMPOWERMENT
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
