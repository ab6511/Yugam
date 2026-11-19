import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Crown, Shield, TrendingUp, CheckCircle2, ChevronRight } from 'lucide-react';

interface ExecutivePageProps {
  onOpenAudit: () => void;
}

export const ExecutivePage: React.FC<ExecutivePageProps> = ({ onOpenAudit }) => {
  const [activeTab, setActiveTab] = useState<'creative' | 'distribution' | 'margins'>('creative');

  const monolithFeatures = [
    {
      id: 'm-1',
      code: 'MONOLITH 01',
      title: 'High-Velocity Video & Creative Lab',
      tagline: '30 to 60 Studio Assets Monthly',
      description: 'Psychological scriptwriting, 4K DaVinci color grading, and dynamic sound design engineered to convert cold attention into enterprise trust.',
      metric: '4.8x Engagement Lift',
      deliverables: ['Director-guided 4K filming kits', 'Cognitive dissonance hook engineering', '48-hour rapid turnaround']
    },
    {
      id: 'm-2',
      code: 'MONOLITH 02',
      title: 'Omnichannel Algorithmic Syndicate',
      tagline: '18.4M+ Monthly Qualified Reach',
      description: 'Systematic multi-channel distribution across TikTok, Instagram Reels, YouTube Shorts, LinkedIn, and X without platform penalization.',
      metric: 'Zero Vanity Fluff',
      deliverables: ['Multi-platform syndication matrix', 'Server-side CAPI tracking', 'Direct pipeline lead capture']
    },
    {
      id: 'm-3',
      code: 'MONOLITH 03',
      title: 'Unit Economics & Margin Expansion',
      tagline: 'Compounding Net Cashflow',
      description: 'Auditing contribution margins, payback periods, and average order values to turn break-even campaigns into high-margin wealth engines.',
      metric: '+64% Margin Surge',
      deliverables: ['Post-purchase upsell architecture', 'VIP SMS & behavioral email flows', 'LTV expansion protocols']
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#07080B] text-[#F3F4F6] selection:bg-[#D4AF37] selection:text-black overflow-hidden font-sans">
      
      {/* Ambient Liquid Gold Glow in Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-[#D4AF37]/15 via-[#F6C163]/10 to-transparent blur-[160px] rounded-full" />
        <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-[#996515]/10 blur-[180px] rounded-full" />
      </div>

      {/* Golden Horizontal Laser Flare (Signature detail from reference) */}
      <div className="hidden lg:block absolute right-12 xl:right-28 top-[44%] -translate-y-1/2 pointer-events-none z-10">
        <motion.div
          animate={{ scaleX: [0.85, 1.2, 0.85], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-28 xl:w-40 h-[2.5px] bg-[#D4AF37] rounded-full shadow-[0_0_25px_#D4AF37] blur-[0.4px]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-36 pb-28">
        
        {/* Top Gold Pill Badge */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#16140D]/90 border border-[#D4AF37]/35 text-xs font-mono text-[#E5C07B] shadow-xl backdrop-blur-md"
          >
            <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-semibold text-[#D4AF37]">Yugam Executive Signal</span>
            <span className="opacity-40">·</span>
            <span className="text-zinc-300">Style 01 // Luxury Monolith</span>
          </motion.div>
        </div>

        {/* The Exact Headline with Gold Sheen */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white leading-[1.04]"
          >
            Make your business <br className="hidden sm:inline" />
            <span className="text-white">impossible </span>
            <span className="text-[#D4AF37] drop-shadow-[0_0_40px_rgba(212,175,55,0.45)]">
              to ignore.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center space-x-2 text-[10px] sm:text-xs font-mono tracking-widest text-[#E5C07B] uppercase pt-1"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span>EXECUTIVE ALIGNED · PERCEPTION SYNCHRONIZED</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto pt-2"
          >
            Strategy, creative, content, digital presence and growth, brought together around your business.
          </motion.p>
        </div>

        {/* Dual Gold Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto relative overflow-hidden px-8 py-4 rounded-full bg-[#D4AF37] hover:bg-[#F6C163] text-black font-bold text-sm sm:text-base tracking-tight transition-all duration-300 shadow-[0_0_35px_rgba(212,175,55,0.4)] flex items-center justify-center space-x-2 active:scale-95 group"
          >
            <span className="relative z-10">Start a conversation</span>
            <ArrowRight className="w-4 h-4 text-black relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#monoliths"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#14120C] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 text-white font-medium text-sm sm:text-base tracking-tight transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Inspect Systems</span>
            <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
          </a>
        </motion.div>

        {/* Executive Proof Metrics */}
        <div className="mt-20 pt-10 border-t border-[#D4AF37]/20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              $58M+
            </div>
            <div className="text-xs text-[#E5C07B] mt-1 uppercase tracking-wider font-mono">
              Client Revenue Generated
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              220M+
            </div>
            <div className="text-xs text-[#E5C07B] mt-1 uppercase tracking-wider font-mono">
              Organic Video Views
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              4.2x
            </div>
            <div className="text-xs text-[#E5C07B] mt-1 uppercase tracking-wider font-mono">
              Median Blended ROAS
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Zero
            </div>
            <div className="text-xs text-[#E5C07B] mt-1 uppercase tracking-wider font-mono">
              Account-Manager Bureaucracy
            </div>
          </div>
        </div>

        {/* 3 MONOLITH CARDS (Design Style 1) */}
        <div id="monoliths" className="mt-24 space-y-6">
          <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              // EXECUTIVE GROWTH MONOLITHS
            </span>
            <span className="font-mono text-xs text-slate-400">
              DIRECT SENIOR OPERATOR DEPLOYMENT
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {monolithFeatures.map((m) => (
              <motion.div
                key={m.id}
                whileHover={{ y: -6 }}
                className="p-8 sm:p-10 rounded-3xl bg-[#0D0E14] border border-[#D4AF37]/25 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-2xl flex flex-col justify-between space-y-6 group relative overflow-hidden"
              >
                {/* Subtle gold corner reflection */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/10 blur-2xl transition-all rounded-full pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#D4AF37] font-bold bg-[#1C180E] border border-[#D4AF37]/30 px-3 py-1 rounded-full uppercase">
                      {m.code}
                    </span>
                    <span className="font-mono text-xs text-emerald-400 font-semibold">
                      {m.metric}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#F6C163] transition-colors">
                    {m.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {m.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#D4AF37]/15">
                    {m.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs font-mono text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#D4AF37]/15 flex items-center justify-between font-mono text-xs relative z-10">
                  <span className="text-slate-400 group-hover:text-white transition-colors">
                    Deploy Monolith
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#18160F] border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
