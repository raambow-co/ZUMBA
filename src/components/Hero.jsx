import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Activity, Scissors } from 'lucide-react';
import h1Img from '../assets/h1.jpeg';
import h2Img from '../assets/c2.webp';

export default function Hero({ onOpenBooking }) {
  const stats = [
    { value: '500+', label: 'Happy Clients' },
    { value: '5+ Years', label: 'Experience' },
    { value: 'Zumba Certified', label: 'Fitness Experts' },
    { value: 'Bespoke Styles', label: 'Tailoring & Rentals' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-black">
      {/* H1 Main Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] pointer-events-none scale-105"
        style={{ backgroundImage: `url(${h1Img})` }}
      />

      {/* Dark Cinematic Overlays for Depth and Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/30 to-black/95 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_20%,rgba(0,0,0,0.85)_100%)] z-0 pointer-events-none" />

      {/* Luxury Golden Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-gold-dark/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#FF7F50]/5 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Main Content Area - Split Editorial Layout */}
      <div className="relative z-10 flex-1 flex items-center w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Column: Premium Brand Badge and CTA Triggers */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center items-start text-left space-y-8">
            {/* Red Tagline Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/50 border border-white/10 backdrop-blur-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Sparkles size={12} className="text-red-500 animate-pulse" />
              <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-red-500">
                Sushma's Exclusive Hub
              </span>
            </motion.div>

            {/* Cinematic subtitle hook without main paragraphs */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="border-l-2 border-[#BF953F]/40 pl-6 space-y-2 max-w-lg"
            >
              <h2 className="font-serif text-lg tracking-widest text-[#BF953F] uppercase font-semibold">ELITE FITNESS & COUTURE</h2>
              <p className="text-white text-xs tracking-wider uppercase font-bold leading-relaxed">
                An international-quality sanctuary for women's lifestyle and physique empowerment.
              </p>
            </motion.div>

            {/* Premium Social Media Connect Icons */}
            <motion.div 
              className="flex items-center gap-4 pt-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              <span className="text-[10px] tracking-[0.25em] font-bold uppercase text-gray-500">Connect:</span>
              <div className="flex gap-3">
                <a 
                  href="https://www.instagram.com/zumba_eluru/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-gradient-to-tr hover:from-yellow-600 hover:via-red-500 hover:to-purple-600 hover:border-transparent transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-blue-600 hover:border-transparent transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/@sushmasfitnessworld8866" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-red-600 hover:border-transparent transition-all duration-300 hover:scale-110"
                  aria-label="YouTube"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <polygon points="10 15 15 12 10 9" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* CTA Action Buttons side-by-side - DESKTOP ONLY */}
            <motion.div 
              className="hidden lg:flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <button
                onClick={() => onOpenBooking('zumba')}
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-white bg-transparent border-2 border-white/10 hover:border-[#FF7F50] hover:bg-[#FF7F50]/15 hover:shadow-[0_0_20px_rgba(255,127,80,0.25)] transition-all duration-300 cursor-pointer"
              >
                <Activity size={14} className="text-[#FF7F50]" />
                Join Zumba Classes
              </button>
              
              <button
                onClick={() => onOpenBooking('boutique')}
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-black bg-gold-gradient shadow-[0_0_15px_rgba(191,149,63,0.3)] gold-glow-hover hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <Scissors size={14} />
                Explore Boutique
                <ArrowRight size={14} />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Layered H2 Floating Image Card */}
          <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end items-center">
            <motion.div 
              className="relative w-full max-w-[290px] sm:max-w-[340px] p-3.5 rounded-[32px] glassmorphism-gold border border-[#BF953F]/25 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] gold-glow cursor-pointer"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: [0, -14, 0] 
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.25 },
                scale: { duration: 0.8, delay: 0.25 },
                y: {
                  repeat: Infinity,
                  duration: 5.5,
                  ease: "easeInOut"
                }
              }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              onClick={() => onOpenBooking('boutique')}
            >
              {/* Outer shadow card ring */}
              <div className="absolute -inset-0.5 rounded-[34px] bg-gradient-to-r from-[#BF953F]/20 via-transparent to-[#BF953F]/10 blur opacity-75 pointer-events-none" />
              
              <img 
                src={h2Img} 
                alt="Sushma's Luxury Couture"
                className="w-full h-[280px] sm:h-[360px] object-cover rounded-[24px] border border-white/5 shadow-inner"
              />
              
              {/* Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/5 flex items-center justify-between">
                <span className="text-[9px] tracking-widest text-gold-light uppercase font-bold">LIFESTYLE CAMPAIGN</span>
                <span className="text-[9px] text-gray-400 font-light uppercase">COLL. NO. 5</span>
              </div>
            </motion.div>
          </div>

          {/* CTA Action Buttons side-by-side - MOBILE ONLY */}
          <motion.div 
            className="col-span-1 lg:hidden flex flex-col sm:flex-row gap-4 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button
              onClick={() => onOpenBooking('zumba')}
              className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-white bg-transparent border-2 border-white/10 hover:border-[#FF7F50] hover:bg-[#FF7F50]/15 hover:shadow-[0_0_20px_rgba(255,127,80,0.25)] transition-all duration-300 cursor-pointer w-full"
            >
              <Activity size={14} className="text-[#FF7F50]" />
              Join Zumba Classes
            </button>
            
            <button
              onClick={() => onOpenBooking('boutique')}
              className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-black bg-gold-gradient shadow-[0_0_15px_rgba(191,149,63,0.3)] gold-glow-hover hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer w-full"
            >
              <Scissors size={14} />
              Explore Boutique
              <ArrowRight size={14} />
            </button>
          </motion.div>

        </div>
      </div>

      {/* Bottom Floating Stats Section */}
      <div className="relative z-10 w-full px-6 md:px-12 pb-10">
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl glassmorphism-light border border-white/5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-3 border-r last:border-r-0 border-white/5 flex flex-col justify-center items-center"
            >
              <span className="font-display font-extrabold text-lg sm:text-2xl text-gold-gradient tracking-wide">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-gray-400 tracking-widest uppercase mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
