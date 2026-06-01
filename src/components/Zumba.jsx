import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Star, Zap, Dumbbell, ShieldCheck, Heart, Calendar } from 'lucide-react';

export default function Zumba({ onOpenBooking }) {
  const zumbaPrograms = [
    {
      title: "Zumba Classic Cardio",
      badge: "High Energy",
      desc: "An exhilarating, easy-to-follow, Latin-inspired calorie-burning dance fitness party.",
      calories: "600-800 kcal/hr",
      intensity: "High"
    },
    {
      title: "Zumba Toning & Sculpting",
      badge: "Muscle Focus",
      desc: "Incorporates lightweight maraca-like toning sticks to target specific muscle groups and build strength.",
      calories: "500-600 kcal/hr",
      intensity: "Medium-High"
    },
    {
      title: "Weight Loss Aerobics",
      badge: "Targeted Burn",
      desc: "High-intensity cardio tracks combined with core bodyweight training to accelerate fat burn.",
      calories: "700-900 kcal/hr",
      intensity: "Extreme"
    },
    {
      title: "Stretch & Restorative Flow",
      badge: "Flexibility",
      desc: "Post-workout yoga-inspired cool down focusing on muscle recovery, joint mobility, and breathing.",
      calories: "200-300 kcal/hr",
      intensity: "Low"
    }
  ];

  const schedule = [
    { batch: "Morning Batch A", time: "06:00 AM - 07:00 AM", focus: "Zumba Classic + Strength" },
    { batch: "Morning Batch B", time: "07:30 AM - 08:30 AM", focus: "Weight Loss Aerobics" },
    { batch: "Evening Batch A", time: "05:30 PM - 06:30 PM", focus: "Zumba Toning & Sculpt" },
    { batch: "Evening Batch B", time: "07:00 PM - 08:00 PM", focus: "Cardio Fiesta & Stretch" },
  ];

  return (
    <section id="zumba" className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Orange Glow Background Elements */}
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] bg-[#FF7F50]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-[#FF8C00]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span 
            className="text-[10px] tracking-[0.3em] font-bold uppercase text-[#FF7F50]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            FITNESS STUDIO
          </motion.span>
          <motion.h2 
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ignite Your Energy: <span className="text-[#FF7F50] italic">Zumba</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7F50] to-[#FFDAB9]">Aerobics</span>
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#FF7F50] to-[#FFDAB9] mx-auto mt-4 rounded-full" />
        </div>

        {/* Benefits Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 rounded-2xl glassmorphism border border-white/5 orange-glow text-center">
            <Flame className="text-[#FF7F50] mx-auto mb-4" size={32} />
            <h4 className="font-display font-semibold text-lg text-white mb-2">Torch 800+ Calories</h4>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Ditch the boring gym routine. Burn maximum calories through continuous dance choreography.
            </p>
          </div>
          <div className="p-6 rounded-2xl glassmorphism border border-white/5 orange-glow text-center">
            <Zap className="text-[#FFDAB9] mx-auto mb-4" size={32} />
            <h4 className="font-display font-semibold text-lg text-white mb-2">Elevate Stamina & Mood</h4>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Zumba increases endorphins, boosts cardiorespiratory stamina, and leaves you feeling ecstatic.
            </p>
          </div>
          <div className="p-6 rounded-2xl glassmorphism border border-white/5 orange-glow text-center">
            <Dumbbell className="text-[#FF7F50] mx-auto mb-4" size={32} />
            <h4 className="font-display font-semibold text-lg text-white mb-2">Tone & Define Muscles</h4>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Integrate resistance intervals to sculpt your legs, glutes, core, and shoulders simultaneously.
            </p>
          </div>
        </div>

        {/* Programs and Schedule Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Programs List */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-white mb-6">
              Our Core Zumba Curations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {zumbaPrograms.map((prog, idx) => (
                <motion.div 
                  key={idx}
                  className="p-5 rounded-2xl glassmorphism-light border border-white/5 hover:border-[#FF7F50]/20 transition-all duration-300 group hover:translate-y-[-2px]"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-bold tracking-wider text-black bg-[#FFDAB9] px-2 py-0.5 rounded-md uppercase">
                      {prog.badge}
                    </span>
                    <span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">
                      {prog.intensity} Intensity
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-base text-white mb-1.5 group-hover:text-[#FF7F50] transition-colors">
                    {prog.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed font-light mb-3">
                    {prog.desc}
                  </p>
                  <div className="text-[10px] tracking-wider text-[#FF7F50] font-bold uppercase">
                    Avg. Burn: {prog.calories}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timetable / Schedule */}
          <div className="lg:col-span-5 p-6 rounded-3xl glassmorphism border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Calendar size={180} />
            </div>
            
            <h3 className="font-serif text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Calendar className="text-[#FF7F50]" size={22} />
              Session Timetable
            </h3>

            <div className="space-y-4 relative z-10">
              {schedule.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between hover:bg-white/10 transition-colors"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold tracking-wider text-[#FFDAB9]">
                      {item.batch}
                    </span>
                    <span className="text-xs font-bold text-white tracking-widest bg-white/5 px-2 py-0.5 rounded">
                      {item.time}
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-400 font-light">
                    Focus: {item.focus}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onOpenBooking('zumba')}
              className="w-full mt-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-black bg-gradient-to-r from-[#FF7F50] to-[#FFDAB9] hover:scale-[1.02] transition-transform duration-300"
            >
              BOOK A FREE TRIAL CLASS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
