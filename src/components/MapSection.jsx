import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Car, ShieldCheck } from 'lucide-react';

export default function MapSection() {
  return (
    <section id="map" className="relative py-20 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#BF953F_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-gold-dark/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Stage Frame */}
        <div className="relative rounded-[40px] overflow-hidden glassmorphism border border-white/10 h-[380px] sm:h-[420px] flex items-center justify-center p-8 text-center shadow-2xl">
          
          {/* Animated Map Pins & Navigation Details */}
          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
            
            {/* Pulsing visual Pin */}
            <div className="relative mb-6">
              <motion.div 
                className="absolute -inset-4 bg-[#BF953F]/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="relative p-4 bg-gold-gradient text-black rounded-full shadow-[0_0_20px_rgba(191,149,63,0.45)] border-2 border-white/20"
              >
                <MapPin size={28} />
              </motion.div>
            </div>

            <h3 className="font-serif text-3xl font-bold text-white tracking-wide">
              Find Us in <span className="text-gold-gradient italic">Eluru</span>
            </h3>
            
            <p className="text-gray-300 text-sm sm:text-base font-light mt-3 leading-relaxed">
              We are located at **Satrampadu, Eluru**, situated directly **Opposite the Sowbhagya Lakshmi Temple**. An easily accessible and motivating women-focused environment designed to help you transform your health.
            </p>

            {/* Travel briefs icons row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full mt-10 text-left">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex gap-3 items-start">
                <Navigation size={18} className="text-[#FF7F50] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Access</h4>
                  <p className="text-[11px] text-gray-400 font-light mt-1">Located opposite the iconic Sowbhagya Lakshmi Temple in Satrampadu.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex gap-3 items-start">
                <Car size={18} className="text-[#BF953F] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Parking</h4>
                  <p className="text-[11px] text-gray-400 font-light mt-1">Dedicated customer parking spaces available directly in front of the club.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex gap-3 items-start">
                <ShieldCheck size={18} className="text-[#FFDAB9] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Women Only</h4>
                  <p className="text-[11px] text-gray-400 font-light mt-1">A highly private, secure, and supportive environment designed for women.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Directions link */}
          <div className="absolute bottom-6 right-6">
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white border border-white/10 hover:border-gold-medium hover:text-[#BF953F] transition-all duration-300 inline-block bg-black/60 shadow-md backdrop-blur-md"
            >
              Get Directions
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
