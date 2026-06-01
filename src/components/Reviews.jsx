import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Sparkles, TrendingUp } from 'lucide-react';

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviewsList = [
    {
      id: 0,
      name: "Priya Sharma",
      role: "Software Architect",
      type: "Zumba Fitness",
      quote: "Sushma's Zumba classes completely turned my health around! The high-energy beats are addictive, and Sushma is incredibly motivating. I lost 12 kgs in 4 months, and my endurance has skyrocketed.",
      rating: 5,
      avatar: "PS",
      before: "Low Stamina / Size XL",
      after: "High Endurance / Size M"
    },
    {
      id: 1,
      name: "Anjali Rao",
      role: "Creative Director & Bride",
      type: "Bridal Couture",
      quote: "I had my wedding lehenga customized here. The peacock maggam embroidery details and tailored precision fit were absolutely flawless. I felt like royalty on my special day!",
      rating: 5,
      avatar: "AR",
      before: "Standard Dress Pattern",
      after: "Flawless Bridal Custom Fit"
    },
    {
      id: 2,
      name: "Kavitha Menon",
      role: "Lifestyle Blogger",
      type: "Boutique Rentals",
      quote: "The rental catalog is a total game-changer. I rented an exquisite silk gown for a reception. The fabric was pristine, dry cleaning was sterile, and their tailors altered the sleeves in 15 minutes!",
      rating: 5,
      avatar: "KM",
      before: "Last-Minute Style Search",
      after: "Stunning Customized Designer Rental"
    },
    {
      id: 3,
      name: "Meera Krishnan",
      role: "Founder, Bloom Studio",
      type: "Zumba & Style",
      quote: "What Sushma has created is a gorgeous hub of women empowerment. I start my mornings with cardio zumba and source my premium drapes here. The premium attention to detail is world-class.",
      rating: 5,
      avatar: "MK",
      before: "Fatigue & Uninspired Styling",
      after: "Vibrant Energy & Bespoke Closet"
    }
  ];

  // Auto scroll testimonials every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviewsList.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Decorative peach radial orbs */}
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-[#FF7F50]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[250px] h-[250px] bg-gold-dark/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-gold-light">
            SOCIAL PROOF
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-white">
            Client <span className="text-gold-gradient italic">Transformations</span> & Reviews
          </h2>
          <div className="w-12 h-1 bg-gold-gradient mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials Auto-Scroller Row */}
        <div className="relative max-w-4xl mx-auto">
          
          <AnimatePresence mode="wait">
            {reviewsList.map((rev, index) => (
              index === activeIndex && (
                <motion.div
                  key={rev.id}
                  className="p-8 md:p-12 rounded-[32px] glassmorphism border border-white/10 relative shadow-2xl flex flex-col justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Quote icon watermark */}
                  <div className="absolute top-6 right-8 text-white/5 pointer-events-none">
                    <Quote size={100} />
                  </div>

                  <div>
                    {/* Stars & Category */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex gap-1 text-gold-medium">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} size={15} className="fill-gold-medium" />
                        ))}
                      </div>
                      <span className="text-[9px] tracking-widest font-extrabold text-[#BF953F] border border-[#BF953F]/30 bg-[#BF953F]/5 px-3 py-1 rounded-full uppercase">
                        {rev.type}
                      </span>
                    </div>

                    {/* Review text */}
                    <p className="font-serif text-lg sm:text-xl md:text-2xl text-gray-200 italic leading-relaxed font-light mb-8">
                      "{rev.quote}"
                    </p>
                  </div>

                  {/* Transformation Parameters (Before/After) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Before:</div>
                      <div className="text-xs text-gray-400 font-light">{rev.before}</div>
                    </div>
                    <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-white/5 pt-3 sm:pt-0 sm:pl-4">
                      <TrendingUp size={14} className="text-[#FF7F50] animate-pulse" />
                      <div className="text-[10px] uppercase font-bold text-[#FF7F50] tracking-wider">After:</div>
                      <div className="text-xs text-white font-semibold">{rev.after}</div>
                    </div>
                  </div>

                  {/* Customer bio info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-gradient text-black flex items-center justify-center font-display font-bold shadow-md">
                      {rev.avatar}
                    </div>
                    <div className="text-left">
                      <h4 className="font-display font-bold text-sm text-white">
                        {rev.name}
                      </h4>
                      <p className="text-xs text-gray-500 font-light">
                        {rev.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {reviewsList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx 
                    ? 'w-8 bg-gold-gradient shadow-md' 
                    : 'w-2.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
