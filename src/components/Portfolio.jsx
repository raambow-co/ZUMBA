import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import c2Img from '../assets/c2.webp';
import c4Img from '../assets/c4.jpeg';
import c6Img from '../assets/c6.jpg';
import c8Img from '../assets/c8.jpeg';
import bridalBls from '../assets/bridal_blouse.png';
import boutiqueShow from '../assets/boutique_showcase.png';

export default function Portfolio() {
  const [rotation, setRotation] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxImg, setLightboxImg] = useState(null);
  const autoRotateTimer = useRef(null);

  const boutiqueItems = [
    { id: 0, image: c2Img, title: "Luxury Silk Couture Gown" },
    { id: 1, image: c4Img, title: "Bespoke Bridal Detailing" },
    { id: 2, image: c6Img, title: "Tailored Premium Patterns" },
    { id: 3, image: c8Img, title: "Embroidery Bridal Lehenga" },
    { id: 4, image: bridalBls, title: "Intricate Maggam Handwork" },
    { id: 5, image: boutiqueShow, title: "Gold Hangers Boutique Showroom" }
  ];

  const totalCards = boutiqueItems.length;
  const angleStep = 360 / totalCards; // 60 degrees spacing

  // Auto rotation timer loop
  const startAutoRotate = () => {
    stopAutoRotate();
    autoRotateTimer.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  const stopAutoRotate = () => {
    if (autoRotateTimer.current) {
      clearInterval(autoRotateTimer.current);
    }
  };

  useEffect(() => {
    startAutoRotate();
    return () => stopAutoRotate();
  }, []);

  const handleNext = () => {
    setRotation((prev) => prev - angleStep);
    setActiveIdx((prev) => (prev + 1) % totalCards);
  };

  const handlePrev = () => {
    setRotation((prev) => prev + angleStep);
    setActiveIdx((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const getRadius = () => {
    // Dynamic cylindrical radius depending on screen width
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      return 260; // Mobile projection radius
    }
    return 360; // Desktop projection radius
  };

  const radius = getRadius();

  return (
    <section id="portfolio" className="relative py-16 bg-[#030303] overflow-hidden border-t border-white/5">
      {/* Cinematic Golden Glow Radial Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gold-dark/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Rebuilt 3D Cylindrical Carousel Stage */}
        <div className="relative h-[360px] sm:h-[460px] md:h-[500px] flex items-center justify-center overflow-visible [perspective:1400px]">
          
          {/* Hardware-Accelerated 3D Cylinder Container */}
          <div 
            className="relative w-[220px] sm:w-[280px] md:w-[320px] h-[300px] sm:h-[400px] md:h-[420px] [transform-style:preserve-3d] will-change-transform"
            style={{
              transform: `translateZ(-${radius}px) rotateY(${rotation}deg)`,
              transition: 'transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
            }}
          >
            {boutiqueItems.map((item, idx) => {
              const itemAngle = idx * angleStep;
              const isCentered = idx === activeIdx;

              return (
                <div
                  key={item.id}
                  className="absolute inset-0 rounded-[28px] overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl select-none backface-hidden cursor-pointer"
                  style={{
                    transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                    transformStyle: 'preserve-3d',
                  }}
                  onClick={() => isCentered && setLightboxImg(item)}
                >
                  <div className="relative w-full h-full group">
                    {/* Filter-free pristine quality visual */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover pointer-events-none"
                    />

                    {/* Interactive center focus overlay */}
                    {isCentered && (
                      <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                        <div className="flex justify-end">
                          <div className="p-2.5 rounded-xl bg-white/10 text-white border border-white/10 backdrop-blur-md shadow-md">
                            <ZoomIn size={14} />
                          </div>
                        </div>
                        
                        <div>
                          <span className="text-[8px] font-bold tracking-widest text-[#BF953F] uppercase">BOUTIQUE COUTURE</span>
                          <h4 className="font-display font-semibold text-[11px] sm:text-xs text-white mt-1">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                    )}

                    {/* Non-focused card dim overlay */}
                    {!isCentered && (
                      <div className="absolute inset-0 bg-black/40 transition-opacity duration-700 pointer-events-none" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* 3D Stack Navigation Controls */}
        <div className="flex justify-center items-center gap-6 mt-6">
          <button
            onClick={() => { handlePrev(); startAutoRotate(); }}
            className="p-3.5 rounded-full bg-white/5 hover:bg-[#BF953F]/15 border border-white/10 hover:border-[#BF953F]/40 text-white/70 hover:text-white transition-all duration-300 shadow-md cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>

          <span className="text-[10px] text-gray-500 tracking-widest uppercase font-semibold">
            COLLECTION <span className="text-gold-light font-bold">{activeIdx + 1}</span> / {totalCards}
          </span>

          <button
            onClick={() => { handleNext(); startAutoRotate(); }}
            className="p-3.5 rounded-full bg-white/5 hover:bg-[#BF953F]/15 border border-white/10 hover:border-[#BF953F]/40 text-white/70 hover:text-white transition-all duration-300 shadow-md cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>

      {/* Lightbox pop-up */}
      <AnimatePresence>
        {lightboxImg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/96 backdrop-blur-md">
            <motion.div 
              className="absolute inset-0 cursor-zoom-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImg(null)}
            />

            <motion.div 
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <button 
                onClick={() => setLightboxImg(null)}
                className="absolute top-4 right-4 p-2 text-white/70 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              >
                <X size={20} />
              </button>

              <img 
                src={lightboxImg.image} 
                alt={lightboxImg.title}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
              />

              <div className="mt-4 text-center">
                <span className="text-[10px] font-bold tracking-wider text-[#BF953F] uppercase">
                  BOUTIQUE EDITORIAL
                </span>
                <h3 className="font-display font-semibold text-xs sm:text-sm text-white mt-1">
                  {lightboxImg.title}
                </h3>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
