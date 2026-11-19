import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRight, Menu, X, Sparkles, Rocket } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Ventures', path: '/ventures', badge: 'Lab' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-amber-500 p-[1px] shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-[#0B0D12] rounded-xl flex items-center justify-center group-hover:bg-[#131722] transition-colors">
                <span className="font-heading font-extrabold text-base bg-gradient-to-r from-indigo-400 to-amber-300 bg-clip-text text-transparent">
                  Y
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl text-white tracking-tight flex items-center">
                YUGAM
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-amber-400 ml-1.5 animate-pulse" />
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase -mt-0.5">
                Agency & Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative flex items-center space-x-1.5 ${
                    isActive
                      ? 'text-white bg-white/[0.08]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`
                }
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold bg-gradient-to-r from-indigo-500/20 to-amber-500/20 border border-indigo-500/40 text-amber-300 rounded">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <Link
              to="/contact"
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-heading font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-indigo-500/25 active:scale-95 flex items-center space-x-1.5"
            >
              <span>Book a Growth Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center space-x-2">
            <Link
              to="/contact"
              className="px-3 py-1.5 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-semibold sm:hidden"
            >
              Growth Call
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/[0.04] border border-white/10"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0D12]/95 border-b border-white/10 px-6 py-6 space-y-3 backdrop-blur-2xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-white bg-indigo-500/20 border border-indigo-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`
              }
            >
              <div className="flex items-center justify-between">
                <span>{link.name}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded">
                    {link.badge}
                  </span>
                )}
              </div>
            </NavLink>
          ))}

          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-heading font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/25"
            >
              <span>Book a Growth Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
