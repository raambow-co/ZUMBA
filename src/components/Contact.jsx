import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSent(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSent(false);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#080808] overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-dark/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[#FF7F50]/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-gold-light">
            FIND OUR LOCATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-white">
            Visit Our <span className="text-gold-gradient italic">Studio</span>
          </h2>
          <div className="w-12 h-1 bg-gold-gradient mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Split: Left Details & Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Column 1: Info Details */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                Visit Our Studio
              </h3>
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                Experience energetic Zumba sessions, weight-loss workouts, aerobics, and a motivating women-focused fitness environment designed to help you feel healthier, stronger, and more confident.
              </p>
            </div>

            {/* Info Cards */}
            <motion.div 
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
            >
              {/* Address Card */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="flex gap-4 p-5 rounded-2xl glassmorphism border border-white/5 hover:border-gold-medium/10 hover:shadow-[0_0_25px_rgba(191,149,63,0.15)] transition-all duration-300 shadow-lg"
              >
                <div className="p-3 rounded-xl bg-white/5 text-[#BF953F] h-fit">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-xs tracking-wider text-[#BF953F] uppercase">Studio Headquarters</h4>
                  <p className="text-gray-300 text-xs sm:text-sm font-light mt-1.5 leading-relaxed">
                    <strong>SUSHMA’S ZUMBA & WEIGHT LOSS CLUB</strong><br />
                    Opposite Sowbhagya Lakshmi Temple,<br />
                    Satrampadu, Eluru, Andhra Pradesh – 534006
                  </p>
                </div>
              </motion.div>

              {/* Call Card */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="flex gap-4 p-5 rounded-2xl glassmorphism border border-white/5 hover:border-gold-medium/10 hover:shadow-[0_0_25px_rgba(191,149,63,0.15)] transition-all duration-300 shadow-lg"
              >
                <div className="p-3 rounded-xl bg-white/5 text-[#BF953F] h-fit">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-xs tracking-wider text-[#BF953F] uppercase">Call Us</h4>
                  <p className="mt-1.5">
                    <a href="tel:+918179053183" className="text-gray-300 hover:text-[#BF953F] text-xs sm:text-sm font-semibold transition-colors">
                      +91 81790 53183
                    </a>
                  </p>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="flex gap-4 p-5 rounded-2xl glassmorphism border border-white/5 hover:border-gold-medium/10 hover:shadow-[0_0_25px_rgba(191,149,63,0.15)] transition-all duration-300 shadow-lg"
              >
                <div className="p-3 rounded-xl bg-white/5 text-[#BF953F] h-fit">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-xs tracking-wider text-[#BF953F] uppercase">Email Support</h4>
                  <p className="text-gray-300 text-xs sm:text-sm font-light mt-1.5">
                    <a href="mailto:sushmatanakala@gmail.com" className="text-gray-300 hover:text-[#BF953F] transition-colors font-semibold">
                      sushmatanakala@gmail.com
                    </a>
                  </p>
                </div>
              </motion.div>

              {/* Hours Card */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="flex gap-4 p-5 rounded-2xl glassmorphism border border-white/5 hover:border-gold-medium/10 hover:shadow-[0_0_25px_rgba(191,149,63,0.15)] transition-all duration-300 shadow-lg"
              >
                <div className="p-3 rounded-xl bg-white/5 text-[#BF953F] h-fit">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-xs tracking-wider text-[#BF953F] uppercase">Operating Hours</h4>
                  <p className="text-gray-300 text-xs font-light mt-1.5 leading-relaxed">
                    <span className="text-white font-medium">Zumba & Weight Loss:</span> Mon - Sat (06:00 AM - 11:30 AM | 04:30 PM - 08:30 PM)
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Column 2: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-10 rounded-3xl glassmorphism border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="h-1 w-full bg-gold-gradient absolute top-0 left-0 right-0" />
              
              {!sent ? (
                <>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2 tracking-wide text-left">
                    Send a Message
                  </h3>
                  <p className="text-gray-400 text-sm font-light mb-8 text-left">
                    Have questions about class batches or membership? Send us an inquiry.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="text-left">
                        <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-400">Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 text-sm text-white bg-white/5 rounded-xl border border-white/10 focus:border-[#BF953F] focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="text-left">
                        <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-400">Email</label>
                        <input
                          type="email"
                          required
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 text-sm text-white bg-white/5 rounded-xl border border-white/10 focus:border-[#BF953F] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="text-left">
                      <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-400">Subject</label>
                      <input
                        type="text"
                        required
                        placeholder="Trial Class Query / Weight Loss Program Batch / General"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 text-sm text-white bg-white/5 rounded-xl border border-white/10 focus:border-[#BF953F] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="text-left">
                      <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-400">Message</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Detail your queries here..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 text-sm text-white bg-white/5 rounded-xl border border-white/10 focus:border-[#BF953F] focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 mt-2 font-bold tracking-widest text-black bg-gold-gradient rounded-xl gold-glow-hover flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform duration-300 cursor-pointer"
                    >
                      <Send size={14} />
                      SEND INQUIRY
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-12 text-center flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="p-4 mb-6 rounded-full bg-gold-gradient text-black"
                  >
                    <CheckCircle2 size={40} />
                  </motion.div>
                  <h3 className="font-serif text-3xl font-bold text-gold-gradient mb-3">
                    Message Dispatched!
                  </h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your message regarding <span className="text-white font-semibold">"{formData.subject}"</span> has been dispatched to our desk. Our support team will get in touch with you shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-8 py-3 text-xs font-bold tracking-widest text-white border border-white/20 rounded-xl hover:bg-white/10 hover:border-white transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
