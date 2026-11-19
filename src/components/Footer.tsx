import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Phone, MapPin, Instagram, Linkedin, Youtube, Clock, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090D] border-t border-white/10 text-slate-300 font-sans relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-white/10">

          {/* Column 1: Brand & Social */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-heading font-extrabold text-2xl text-white tracking-tight flex items-center">
                YUGAM
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-indigo-400 to-amber-400 ml-1.5" />
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              <strong className="text-white">"Yugam"</strong> represents an era of exponential growth. We bridge the gap between creative storytelling, high-speed engineering, and performance marketing while building scalable tech for tomorrow.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-400 hover:bg-indigo-500/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-400 hover:bg-indigo-500/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-400 hover:bg-indigo-500/10 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-xs text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-medium">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Growth Packages & Pricing</Link>
              </li>
              <li>
                <Link to="/ventures" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Yugam Innovation Lab</span>
                  <span className="px-1.5 py-0.5 text-[9px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded">NEW</span>
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-white transition-colors">Client Reviews & Case Studies</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Our Story</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Careers</span>
                  <span className="px-1.5 py-0.5 text-[9px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded">Hiring</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact & Location</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Growth Services */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-xs text-white uppercase tracking-wider">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-medium">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">High-Converting Web Design</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">On-Location Video Shoots</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Scriptwriting & Viral Reels</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Complete Instagram Handling</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Meta (FB & IG) Ads Management</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Google Search & Performance Max</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Full-Funnel CRO & Unit Economics</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Noida Headquarters & Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-xs text-white uppercase tracking-wider">
              Office & Direct Contact
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">Yugam Headquarters</strong>
                  Sector 62, Noida, Uttar Pradesh 201309, India
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mon – Sat: 10:00 AM – 7:00 PM IST</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href="mailto:hello@yugam.in" className="hover:text-white transition-colors">hello@yugam.in</a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-amber-400 hover:text-amber-300"
              >
                <span>Get Directions on Map →</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} YUGAM GROWTH CORP. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>HQ NOIDA: ACTIVE</span>
            </span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] text-slate-300 transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
