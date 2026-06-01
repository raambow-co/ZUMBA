import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Zumba from './components/Zumba';
import Boutique from './components/Boutique';
import Manifesto from './components/Manifesto';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingTab, setBookingTab] = useState('zumba');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 600) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const openBooking = (tabType) => {
    setBookingTab(tabType);
    setBookingOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white">
      {/* Sticky Header / Navbar */}
      <Navbar onOpenBooking={openBooking} />

      {/* 1. Hero Landing Section (Visual-first, H1 background, H2 floating elements) */}
      <Hero onOpenBooking={openBooking} />

      {/* 3. Zumba Fitness & Studio Section */}
      <Zumba onOpenBooking={openBooking} />

      {/* 4. Boutique & Fashion Section (Slideshow carousel of 4 key boutique lines) */}
      <Boutique onOpenBooking={openBooking} />

      {/* 5. Manifesto Section (Vibrant gradient emotional credo placed below Zumba & Boutique) */}
      <Manifesto />

      {/* 6. Portfolio Section (Interactive 3D carousel using boutique assets) */}
      <Portfolio />

      {/* 7. Customer Reviews & Transformations Section (Dedicated Glassmorphic Testimonials) */}
      <Reviews />

      {/* 8. Contact Section (Inquiries and Operating Coordinates) */}
      <Contact />

      {/* 9. Dedicated full-width Maps Section */}
      <MapSection />

      {/* Bottom Footer credits & newsletter links */}
      <Footer />

      {/* Global Booking Modal Dialog */}
      <BookingModal 
        isOpen={bookingOpen} 
        onClose={() => setBookingOpen(false)} 
        defaultTab={bookingTab} 
      />

      {/* Floating Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full glassmorphism text-white border border-[#BF953F]/30 hover:border-[#BF953F] hover:text-[#BF953F] shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-pointer"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
