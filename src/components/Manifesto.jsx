import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Zap } from 'lucide-react';

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative py-28 md:py-36 bg-[#030303] overflow-hidden">
      
      {/* High-impact energetic gradient background highlights (orange, peach, gold) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Pulsing neon orange radial glow */}
        <motion.div 
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#FF7F50]/10 rounded-full blur-[160px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 0.9, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Pulsing gold radial glow */}
        <motion.div 
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gold-medium/10 rounded-full blur-[160px]"
          animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Center peach light burst */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFDAB9]/5 rounded-full blur-[140px] opacity-80" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        
        {/* Golden badge icon */}
        <motion.div
          className="inline-flex p-4 rounded-full bg-gradient-to-tr from-[#BF953F]/10 via-[#FF7F50]/15 to-[#FFDAB9]/10 border border-[#BF953F]/20 mb-8 shadow-inner"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="text-gold-light" size={28} />
        </motion.div>

        {/* Emotionally Inspiring Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="text-[11px] tracking-[0.4em] font-extrabold uppercase bg-gradient-to-r from-[#FF7F50] via-[#FFDAB9] to-[#BF953F] bg-clip-text text-transparent">
            THE UNIFIED CREDO
          </span>
          
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Sweat in <span className="italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF7F50] to-[#FFDAB9]">Zumba</span>,<br className="sm:hidden" />
            Shine in <span className="font-bold text-gold-gradient">Couture</span>
          </h2>
        </motion.div>

        {/* Cinematic horizontal line separator */}
        <div className="flex justify-center items-center gap-3 my-8">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#FF7F50]" />
          <Heart className="text-[#FF7F50] fill-[#FF7F50]/20" size={14} />
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#BF953F]" />
        </div>

        {/* Deep inspiring core statement paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto font-serif text-xl sm:text-2xl md:text-3xl font-light italic leading-relaxed text-gray-200 tracking-wide"
        >
          “We believe a woman’s physical strength is the canvas of her creative grace. Here, we destroy limitations through high-energy beats, build cardios that burn stress, and craft custom garments that fit your unique soul. This is not just a gym, nor is it a boutique—it is a temple of tailored confidence.”
        </motion.p>

        {/* Dynamic highlights below text */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="p-6 rounded-2xl glassmorphism border border-white/5 relative overflow-hidden group hover:border-[#FF7F50]/20 transition-all duration-300">
            <Zap className="text-[#FF7F50] mb-2.5 mx-auto" size={20} />
            <h4 className="font-display font-bold text-xs tracking-widest text-white uppercase mb-1">UNBRIDLED POWER</h4>
            <p className="text-[11px] text-gray-400 font-light leading-relaxed">Igniting fitness stamina and cardiac wellness.</p>
          </div>
          
          <div className="p-6 rounded-2xl glassmorphism border border-white/5 relative overflow-hidden group hover:border-[#BF953F]/20 transition-all duration-300">
            <Sparkles className="text-gold-medium mb-2.5 mx-auto" size={20} />
            <h4 className="font-display font-bold text-xs tracking-widest text-white uppercase mb-1">BESPOKE BEAUTY</h4>
            <p className="text-[11px] text-gray-400 font-light leading-relaxed">Embellishing your style in customized drapes.</p>
          </div>
          
          <div className="p-6 rounded-2xl glassmorphism border border-white/5 relative overflow-hidden group hover:border-[#FFDAB9]/20 transition-all duration-300">
            <Heart className="text-[#FFDAB9] mb-2.5 mx-auto" size={20} />
            <h4 className="font-display font-bold text-xs tracking-widest text-white uppercase mb-1">PURE EMPOWERMENT</h4>
            <p className="text-[11px] text-gray-400 font-light leading-relaxed">Celebrating the physical strength of active women.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
