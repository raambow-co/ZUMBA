//auto check vercel uploading the code or not
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Sparkles, Shirt, Gem, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import bridalImg from '../assets/bridal_blouse.png';
import rentalsImg from '../assets/c8.jpeg';
import showcaseImg from '../assets/boutique_showcase.png';
import tailoringImg from '../assets/c6.jpg';

export default function Boutique({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const slides = [
    {
      id: 0,
      title: "Bespoke Bridal Couture",
      sub: "Signature Collections",
      desc: "Immerse yourself in pure luxury. Our bespoke bridal couture features hand-drawn designs, premium raw silks, and elaborate zardozi or maggam hand-embroidery. Designed specifically to celebrate your singular, magical moment.",
      image: bridalImg,
      icon: <Gem size={22} className="text-[#BF953F]" />,
      badge: "Bridal Gowns & Designer Outfits"
    },
    {
      id: 1,
      title: "Luxury Rental Wardrobe",
      sub: "Couture Without Investment",
      desc: "Step into high fashion sustainably. Access our handpicked catalogue of designer wedding lehengas, reception gowns, and festive wear. Perfect fits, sterile dry cleaning, and custom alterations completed inside our boutique.",
      image: rentalsImg,
      icon: <Shirt size={22} className="text-[#BF953F]" />,
      badge: "Party Wear & Occasion Rentals"
    },
    {
      id: 2,
      title: "Designer Gowns & Sarees",
      sub: "Tradition Meets Modernity",
      desc: "Explore a stunning fusion of traditional craftsmanship and modern fits. From heavy georgette drapes to premium Varanasi silk sarees and structured reception drapes, styled with an international design language.",
      image: showcaseImg,
      icon: <Sparkles size={22} className="text-[#BF953F]" />,
      badge: "Luxury Traditional & Fusion Wear"
    },
    {
      id: 3,
      title: "Boutique & Tailoring Workspace",
      sub: "Precision Cut & Flawless Fits",
      desc: "Experience custom tailoring in its truest form. Our expert designers offer styling consulting, precise anatomical measurements, luxury lining selections, and quick alterations to ensure your garments fit like a second skin.",
      image: tailoringImg,
      icon: <Scissors size={22} className="text-[#BF953F]" />,
      badge: "Custom Alterations & Master Stitching"
    }
  ];

  // Auto transition slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0
    })
  };

  return (
    <section id="boutique" className="relative py-24 md:py-32 bg-[#080808] overflow-hidden border-t border-white/5">
      {/* Gold aesthetic blur backgrounds */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-gold-dark/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] bg-gold-medium/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-gold-light">
            FASHION DESIGN STUDIO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-white">
            Curate Your Elegance: <span className="text-gold-gradient italic">The Couture Slideshow</span>
          </h2>
          <div className="w-12 h-1 bg-gold-gradient mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Slideshow View Area */}
        <div className="relative min-h-[580px] lg:min-h-[460px] glassmorphism-gold rounded-[40px] border border-[#BF953F]/15 p-6 md:p-10 lg:p-12 overflow-hidden shadow-2xl flex flex-col justify-center">

          <AnimatePresence mode="wait" custom={direction}>
            {slides.map((slide, index) => (
              index === currentSlide && (
                <motion.div
                  key={slide.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Left Side: Text info */}
                  <div className="lg:col-span-6 space-y-6 text-left">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="p-3.5 rounded-2xl bg-white/5 border border-[#BF953F]/20 shadow-[0_0_15px_rgba(191,149,63,0.1)]"
                        animate={{
                          boxShadow: ["0 0 10px rgba(191,149,63,0.1)", "0 0 20px rgba(191,149,63,0.35)", "0 0 10px rgba(191,149,63,0.1)"],
                          borderColor: ["rgba(191, 149, 63, 0.2)", "rgba(191, 149, 63, 0.6)", "rgba(191, 149, 63, 0.2)"]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {slide.icon}
                      </motion.div>
                      <div>
                        <span className="text-[9px] tracking-widest font-bold uppercase text-[#BF953F]">
                          {slide.sub}
                        </span>
                        <div className="text-[10px] text-gray-400 font-light mt-0.5">
                          {slide.badge}
                        </div>
                      </div>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-wide leading-tight">
                      {slide.title}
                    </h3>

                    <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
                      {slide.desc}
                    </p>

                    <button
                      onClick={() => onOpenBooking('boutique')}
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest text-black bg-gold-gradient shadow-[0_0_15px_rgba(191,149,63,0.2)] gold-glow-hover hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                    >
                      Book Styling Appointment
                      <ArrowRight size={14} />
                    </button>
                  </div>

                  {/* Right Side: Image holder with focuses */}
                  <div className="lg:col-span-6 relative">
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#BF953F]/15 via-transparent to-[#BF953F]/10 blur opacity-60 pointer-events-none" />

                    <motion.div
                      className="relative overflow-hidden rounded-3xl h-[280px] sm:h-[350px] w-full border border-white/10"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Artistic overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    </motion.div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute bottom-6 right-6 flex items-center gap-3 z-20">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-black/50 hover:bg-[#BF953F]/15 text-white/70 hover:text-white border border-white/10 hover:border-[#BF953F]/40 transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-black/50 hover:bg-[#BF953F]/15 text-white/70 hover:text-white border border-white/10 hover:border-[#BF953F]/40 transition-all duration-300 cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Page Slide indicators / dots */}
          <div className="absolute bottom-8 left-10 hidden sm:flex items-center gap-2.5 z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentSlide ? 1 : -1);
                  setCurrentSlide(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${currentSlide === idx
                    ? 'w-8 bg-gold-gradient shadow-[0_0_8px_rgba(191,149,63,0.5)]'
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
