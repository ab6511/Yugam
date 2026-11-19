import React, { useState } from 'react';
import { ArrowUpRight, Crosshair, Menu, X, FileText } from 'lucide-react';

interface BlueprintNavProps {
  onOpenAudit: () => void;
}

export const BlueprintNav: React.FC<BlueprintNavProps> = ({ onOpenAudit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-md stamped-border-b">
      
      {/* Top Drafting Meta Strip */}
      <div className="hidden md:flex items-center justify-between px-6 py-1.5 border-b border-charcoal-line/10 font-mono text-[10px] text-charcoal-light tracking-widest uppercase bg-[#F3F2EE]/60">
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta inline-block" />
            <span className="text-charcoal font-semibold">STATUS: SPECIFICATION APPROVED</span>
          </span>
          <span>DWG NO: YG-SYS-2026.04</span>
          <span>SCALE: 1:1 COMMERCIAL</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-terracotta font-semibold">[REV. C // TERRACOTTA ENGINE]</span>
          <span>SHEET 01 OF 04</span>
        </div>
      </div>

      {/* Main Architectural Bar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand / Title Block */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 rounded bg-charcoal text-paper flex items-center justify-center font-mono font-bold text-xs group-hover:bg-terracotta transition-colors shadow-sm">
            ⌖
          </div>
          <div>
            <span className="font-display font-extrabold text-lg text-charcoal tracking-tight block leading-none">
              YUGAM<span className="text-terracotta ml-0.5">.</span>ARCH
            </span>
            <span className="text-[10px] font-mono text-charcoal-light uppercase tracking-wider block mt-0.5">
              Structural Growth Systems
            </span>
          </div>
        </a>

        {/* Technical Nav Links */}
        <nav className="hidden lg:flex items-center space-x-8 font-mono text-xs text-charcoal-muted uppercase tracking-wider">
          <a href="#transformation" className="hover:text-terracotta transition-colors py-1 relative group">
            <span className="text-terracotta/70 font-semibold mr-1">01.</span>Timeline
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-terracotta transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#strategy-diagram" className="hover:text-terracotta transition-colors py-1 relative group">
            <span className="text-terracotta/70 font-semibold mr-1">02.</span>Wireframe Nodes
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-terracotta transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#operators" className="hover:text-terracotta transition-colors py-1 relative group">
            <span className="text-terracotta/70 font-semibold mr-1">03.</span>Credentials
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-terracotta transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#economics" className="hover:text-terracotta transition-colors py-1 relative group">
            <span className="text-terracotta/70 font-semibold mr-1">04.</span>Economic Model
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-terracotta transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={onOpenAudit}
            className="px-5 py-2.5 rounded bg-terracotta hover:bg-terracotta-hover text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-terracotta flex items-center space-x-1.5 active:scale-95"
          >
            <span>Order Specification</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-charcoal hover:text-terracotta"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-paper-sheet border-b border-charcoal-line/20 px-6 py-6 space-y-4 font-mono text-xs uppercase">
          <a
            href="#transformation"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-charcoal hover:text-terracotta py-1"
          >
            01. Timeline Wireframe
          </a>
          <a
            href="#strategy-diagram"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-charcoal hover:text-terracotta py-1"
          >
            02. Strategy Hotspot Diagram
          </a>
          <a
            href="#operators"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-charcoal hover:text-terracotta py-1"
          >
            03. Team Credentials
          </a>
          <a
            href="#economics"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-charcoal hover:text-terracotta py-1"
          >
            04. Economic Model
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAudit();
            }}
            className="w-full mt-2 py-3 rounded bg-terracotta text-white font-bold"
          >
            Order Specification →
          </button>
        </div>
      )}

    </header>
  );
};
