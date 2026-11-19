import React from 'react';
import { ArrowUp, Crosshair } from 'lucide-react';

export const BlueprintFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-paper-sheet text-charcoal border-t border-charcoal-line/20 py-16 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Architectural Title Block Table */}
        <div className="border border-charcoal-line/30 rounded-xl overflow-hidden mb-12 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 border-b border-charcoal-line/20 bg-paper-muted p-4 font-bold text-[11px] text-charcoal">
            <div>PROJECT: YUGAM SYSTEMS CORP</div>
            <div className="pl-0 md:pl-4">DISCIPLINE: GROWTH ARCHITECTURE</div>
            <div className="pl-0 md:pl-4">SCALE: 1:1 ENTERPRISE</div>
            <div className="pl-0 md:pl-4 text-terracotta">STATUS: ISSUED FOR PRODUCTION</div>
          </div>
          <div className="p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-paper-sheet">
            <div className="space-y-1">
              <span className="font-display font-extrabold text-xl text-charcoal flex items-center gap-1.5">
                <Crosshair className="w-5 h-5 text-terracotta" />
                YUGAM // ARCHITECTURAL DRAFTING LAB
              </span>
              <p className="text-xs text-charcoal-muted font-sans">
                Off-white drafting paper aesthetic with hairline charcoal gridlines and terracotta red engineering accents.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-[11px] text-charcoal-light">
              <a href="#transformation" className="hover:text-terracotta transition-colors">01. Timeline Carousel</a>
              <a href="#strategy-diagram" className="hover:text-terracotta transition-colors">02. Hotspot Diagram</a>
              <a href="#operators" className="hover:text-terracotta transition-colors">03. Credentials</a>
              <a href="#economics" className="hover:text-terracotta transition-colors">04. Economic Model</a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded bg-paper-muted hover:bg-terracotta hover:text-white transition-colors border border-charcoal-line/20 text-charcoal"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-charcoal-light">
          <div>
            © {new Date().getFullYear()} YUGAM ARCHITECTURAL SYSTEMS. ALL SPECIFICATIONS PATENT PENDING.
          </div>
          <div>
            SPECIFICATION CONTACT: operations@yugamgrowth.com
          </div>
        </div>

      </div>
    </footer>
  );
};
