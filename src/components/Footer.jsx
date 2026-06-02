import React, { useState } from 'react';
import { Sparkles, Mail, Calendar, Send, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setTimeout(() => {
        setSubscribed(true);
        setEmail('');
      }, 500);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-gold-dark/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-16">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-1.5">
              <span className="font-display font-black text-2xl tracking-widest text-gold-gradient">
                SUSHMA'S
              </span>
            </a>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Eluru's premier women-only destination combining the cardio energy of Certified Zumba sessions with the luxurious customization of a designer fashion boutique & rental studio.
            </p>
            {/* Contact Details */}
            <div className="space-y-2 text-xs text-gray-400 font-light pt-1">
              <p className="flex items-center gap-2">
                <span className="text-[#BF953F] font-semibold">Call:</span>
                <a href="tel:+918179053183" className="hover:text-[#BF953F] transition-colors font-semibold">+91 81790 53183</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#BF953F] font-semibold">Email:</span>
                <a href="mailto:sushmatanakala@gmail.com" className="hover:text-[#BF953F] transition-colors">sushmatanakala@gmail.com</a>
              </p>
              <p className="leading-relaxed">
                <span className="text-[#BF953F] font-semibold">Location:</span> Opposite Sowbhagya Lakshmi Temple, Satrampadu, Eluru
              </p>
            </div>
            {/* Socials */}
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/zumba_eluru/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-[#BF953F] hover:bg-white/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-[#BF953F] hover:bg-white/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@sushmasfitnessworld8866" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-[#BF953F] hover:bg-white/10 transition-all duration-300"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <polygon points="10 15 15 12 10 9" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-display font-bold text-xs tracking-widest uppercase text-white">
              QUICK NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Services', href: '#zumba' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Reviews', href: '#reviews' },
                { name: 'Contact', href: '#contact' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs text-gray-400 hover:text-[#BF953F] transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="font-display font-bold text-xs tracking-widest uppercase text-white">
              SUBSCRIBE TO THE CLUB
            </h4>
            <p className="text-gray-400 text-xs font-light leading-relaxed">
              Join our exclusive mailing list to receive announcements on style releases, masterclasses, seasonal weight-loss batches, and trunk shows.
            </p>

            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                required
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-4 pr-14 py-3 text-xs text-white bg-white/5 rounded-xl border border-white/10 focus:border-[#BF953F] focus:outline-none transition-colors"
                disabled={subscribed}
              />
              <button
                type="submit"
                disabled={subscribed}
                className={`absolute right-1.5 p-2 rounded-lg transition-all duration-300 ${
                  subscribed 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-gold-gradient text-black hover:scale-105'
                }`}
              >
                {subscribed ? <Check size={14} /> : <Send size={14} />}
              </button>
            </form>
            {subscribed && (
              <p className="text-[10px] text-emerald-400 font-medium tracking-wider">
                Successfully subscribed! Check your inbox soon.
              </p>
            )}
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 tracking-wider">
          <p>© {currentYear} SUSHMA'S ZUMBA & BOUTIQUE. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
