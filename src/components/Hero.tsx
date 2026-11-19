import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-36 pb-20 md:pt-44 md:pb-28 atmospheric-teal teal-grid overflow-hidden">
      
      {/* Background radial spotlight behind the headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Horizontal Neon Laser Streak (exact detail from Panknox screenshot) */}
      <div className="hidden lg:block absolute right-12 xl:right-28 top-[46%] -translate-y-1/2 pointer-events-none">
        <div className="w-24 xl:w-36 h-[2px] bg-[#00df89] rounded-full shadow-[0_0_20px_#00df89] blur-[0.4px] animate-laser" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-8">
        
        {/* Top Signal Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#07241d]/90 border border-emerald-500/30 text-xs font-mono text-[#9ab7ae] shadow-lg shadow-emerald-950/40"
        >
          <span className="w-2 h-2 rounded-full bg-[#00df89] animate-pulse shadow-[0_0_8px_#00df89]" />
          <span className="text-[#00df89] font-medium">Yugam Signal</span>
          <span className="text-emerald-700">·</span>
          <span>System 01 // Unified attention</span>
        </motion.div>

        {/* Main Headline (Exact Panknox Typography & Color) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2"
        >
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white leading-[1.04]">
            Make your business <br className="hidden sm:inline" />
            <span className="text-white">impossible </span>
            <span className="text-[#00df89] drop-shadow-[0_0_40px_rgba(0,223,137,0.4)]">
              to ignore.
            </span>
          </h1>
        </motion.div>

        {/* Sub-signal Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center space-x-2 text-[10px] sm:text-xs font-mono tracking-widest text-[#00df89]/85 uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00df89]" />
          <span>SIGNAL LOCKED · PERCEPTION SYNCHRONIZED</span>
        </motion.div>

        {/* Subtitle Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[#8daaa1] text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto"
        >
          Strategy, creative, content, digital presence and growth, brought together around your business.
        </motion.p>

        {/* The Two Hero Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary Button */}
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#00df89] hover:bg-[#12f39c] text-[#021813] font-semibold text-sm sm:text-base tracking-tight transition-all duration-300 shadow-[0_0_35px_rgba(0,223,137,0.4)] hover:shadow-[0_0_50px_rgba(0,223,137,0.65)] flex items-center justify-center space-x-2 active:scale-95"
          >
            <span>Start a conversation</span>
            <ArrowRight className="w-4 h-4 text-[#021813]" />
          </button>

          {/* Secondary Button */}
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#07241f] border border-emerald-500/35 hover:border-emerald-400 text-white font-medium text-sm sm:text-base tracking-tight transition-all duration-300 hover:bg-[#0c352d] flex items-center justify-center space-x-2 active:scale-95"
          >
            <span>See our work</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-300" />
          </a>
        </motion.div>

        {/* Minimalist Proof Numbers */}
        <div className="mt-16 pt-8 border-t border-emerald-500/15 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              $58M+
            </div>
            <div className="text-xs text-[#8daaa1] mt-1 uppercase tracking-wider font-mono">
              Client Revenue Generated
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              220M+
            </div>
            <div className="text-xs text-[#8daaa1] mt-1 uppercase tracking-wider font-mono">
              Organic Video Views
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              4.2x
            </div>
            <div className="text-xs text-[#8daaa1] mt-1 uppercase tracking-wider font-mono">
              Median Blended ROAS
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Zero
            </div>
            <div className="text-xs text-[#8daaa1] mt-1 uppercase tracking-wider font-mono">
              Account-Manager Bureaucracy
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
