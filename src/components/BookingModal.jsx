import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, Sparkles } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, defaultTab = 'zumba' }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    serviceType: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      serviceType: '',
      notes: ''
    });
    setSubmitted(false);
    onClose();
  };

  const zumbaServices = [
    'Zumba Fitness Pro',
    'Aerobics Energy Beat',
    'Weight Loss Express',
    'Personal Wellness Coaching'
  ];

  const boutiqueServices = [
    'Custom Bridal Styling',
    'Premium Tailoring & Measurement',
    'Luxury Outfit Rentals',
    'Personal Wardrobe Styling'
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        {/* Backdrop click */}
        <motion.div 
          className="absolute inset-0 bg-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Card */}
        <motion.div 
          className="relative w-full max-w-lg overflow-hidden rounded-3xl glassmorphism gold-glow border border-white/10"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
        >
          {/* Top Decorative Gold Bar */}
          <div className="h-1.5 w-full bg-gold-gradient" />

          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/60 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>

          {!submitted ? (
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="mb-6 text-center">
                <h3 className="font-serif text-3xl font-bold tracking-wide text-gold-gradient">
                  Begin Your Journey
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  Select a session and reserve your spot below.
                </p>
              </div>

              {/* Tabs */}
              <div className="flex p-1 mb-6 rounded-xl bg-white/5 border border-white/10">
                <button
                  onClick={() => { setActiveTab('zumba'); setFormData({ ...formData, serviceType: '' }); }}
                  className={`flex-1 py-2 text-center rounded-lg text-sm font-semibold tracking-wider transition-all duration-300 ${
                    activeTab === 'zumba'
                      ? 'bg-gold-gradient text-black shadow-md'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  ZUMBA & FITNESS
                </button>
                <button
                  onClick={() => { setActiveTab('boutique'); setFormData({ ...formData, serviceType: '' }); }}
                  className={`flex-1 py-2 text-center rounded-lg text-sm font-semibold tracking-wider transition-all duration-300 ${
                    activeTab === 'boutique'
                      ? 'bg-gold-gradient text-black shadow-md'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  BOUTIQUE & STYLE
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Service Selection */}
                <div>
                  <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-400">
                    Select Program
                  </label>
                  <select
                    required
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 text-sm text-white bg-white/5 rounded-xl border border-white/10 focus:border-[#BF953F] focus:outline-none transition-colors"
                  >
                    <option value="" disabled className="bg-neutral-900">
                      Choose an option...
                    </option>
                    {(activeTab === 'zumba' ? zumbaServices : boutiqueServices).map((service, idx) => (
                      <option key={idx} value={service} className="bg-neutral-900 text-white">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-400">
                    Full Name
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-4 top-3.5 text-gray-500" />
                    <input
                      type="text"
                      required
                      placeholder="Sushma Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 text-sm text-white bg-white/5 rounded-xl border border-white/10 focus:border-[#BF953F] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Grid for Email & Phone */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-400">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-4 top-3.5 text-gray-500" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 81790 53183"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 text-sm text-white bg-white/5 rounded-xl border border-white/10 focus:border-[#BF953F] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-400">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-4 top-3.5 text-gray-500" />
                      <input
                        type="email"
                        required
                        placeholder="sushma@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 text-sm text-white bg-white/5 rounded-xl border border-white/10 focus:border-[#BF953F] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Grid for Date & Time */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-400">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar size={16} className="absolute left-4 top-3.5 text-gray-500" />
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 text-sm text-white bg-white/5 rounded-xl border border-white/10 focus:border-[#BF953F] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-400">
                      Preferred Time
                    </label>
                    <div className="relative">
                      <Clock size={16} className="absolute left-4 top-3.5 text-gray-500" />
                      <input
                        type="time"
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 text-sm text-white bg-white/5 rounded-xl border border-white/10 focus:border-[#BF953F] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full py-4 mt-2 font-bold tracking-widest text-black bg-gold-gradient rounded-xl gold-glow-hover hover:scale-[1.02] transition-all duration-300"
                >
                  CONFIRM APPOINTMENT
                </button>
              </form>
            </div>
          ) : (
            /* Success State */
            <div className="p-8 md:p-12 text-center flex flex-col items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                className="p-4 mb-6 rounded-full bg-gold-gradient text-black"
              >
                <CheckCircle2 size={48} />
              </motion.div>

              <h3 className="font-serif text-3xl font-bold text-gold-gradient mb-3">
                Booking Confirmed!
              </h3>
              
              <div className="space-y-2 mb-8 text-sm text-gray-300">
                <p>Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your request has been successfully submitted.</p>
                <div className="p-4 mt-4 text-left rounded-xl bg-white/5 border border-white/5 space-y-1.5">
                  <div className="flex items-center gap-2"><Sparkles size={14} className="text-gold-light" /> <span className="text-gray-400">Service:</span> {formData.serviceType}</div>
                  <div className="flex items-center gap-2"><Calendar size={14} className="text-gold-light" /> <span className="text-gray-400">Date:</span> {formData.date}</div>
                  <div className="flex items-center gap-2"><Clock size={14} className="text-gold-light" /> <span className="text-gray-400">Time:</span> {formData.time}</div>
                </div>
                <p className="text-xs text-gray-500 pt-2">Our team will call you shortly to confirm details.</p>
              </div>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-8 py-3 text-sm font-bold tracking-widest text-white border border-white/20 rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                CLOSE WINDOW
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
