import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Sparkles, Layers, Eye, TrendingUp, ShieldCheck, Play } from 'lucide-react';

interface GlassHorizonPageProps {
  onOpenAudit: () => void;
}

export const GlassHorizonPage: React.FC<GlassHorizonPageProps> = ({ onOpenAudit }) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(2);

  const portfolioItems = [
    {
      id: 'p-1',
      title: 'Apex Health Systems',
      category: 'HIGH-TICKET DTC',
      metric: '+304% MRR',
      sub: '$120K ➔ $485K / mo',
      tags: ['Video Lab', 'Reels Syndicate', 'CAC -62%'],
      glow: 'from-cyan-500 to-blue-600',
      description: '45 cinematic doctor-backed video reels engineered around cognitive pattern interrupts. Generated 14.2M views and scaled revenue by 3x in 90 days.'
    },
    {
      id: 'p-2',
      title: 'Lumina Data AI',
      category: 'B2B ENTERPRISE SAAS',
      metric: '$2.4M Pipeline',
      sub: '184 Demos / mo',
      tags: ['Founder Ghostwriting', 'LinkedIn Authority', 'Enterprise'],
      glow: 'from-violet-500 to-purple-600',
      description: 'Extracted deep domain knowledge into viral thought-leadership teardowns. Converted organic C-suite reach into $2.4M inbound deal pipeline.'
    },
    {
      id: 'p-3',
      title: 'Solaris Active Studio',
      category: 'SUSTAINABLE LUXURY',
      metric: '42.6% Repeat Rate',
      sub: 'AOV: $188 (+78%)',
      tags: ['Unit Economics', 'AOV Expansion', 'SMS Loops'],
      glow: 'from-emerald-400 to-teal-500',
      description: 'Audited contribution margins and built post-purchase upsell ladders. Unlocked $180,000+ net profit surplus without increasing ad spend.'
    },
    {
      id: 'p-4',
      title: 'Kinetix Endurance',
      category: 'PERFORMANCE APPAREL',
      metric: '4.8x Blended ROAS',
      sub: '28M+ Viral Reach',
      tags: ['TikTok Shop', 'Creator Funnel', 'High LTV'],
      glow: 'from-pink-500 to-rose-600',
      description: 'Whitelisted creator amplification combined with server-side CAPI attribution. Scaled profitable acquisition across TikTok and Meta.'
    },
    {
      id: 'p-5',
      title: 'Vanguard Private Capital',
      category: 'WEALTH ADVISORY',
      metric: '+$840K Closed',
      sub: 'Zero Cold Outbound',
      tags: ['Executive Monolith', 'X Dispatches', 'Keynotes'],
      glow: 'from-amber-400 to-orange-500',
      description: 'Architected founder narrative wedges and private investor podcasts. Created compounding category authority with ultra-high net-worth clients.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#04060F] text-white selection:bg-cyan-400 selection:text-black overflow-hidden font-sans">
      
      {/* Ethereal Floating Nebula Orbs behind the Glass */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-cyan-500/20 blur-[160px]"
        />
        <motion.div
          animate={{
            x: [0, -90, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full bg-violet-600/20 blur-[180px]"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] rounded-full bg-emerald-500/15 blur-[170px]"
        />
      </div>

      {/* Main Glass Horizon Content */}
      <div className="relative z-10 pt-36 pb-28 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/15 backdrop-blur-xl text-xs font-mono text-cyan-300 shadow-xl"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>DESIGN STYLE 04 // GLASS PORTFOLIO HORIZON</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]"
          >
            Ethereal Depth. <br />
            <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
              Glass Horizon Architecture.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            Interactive 3D glass cards with depth perspective and floating ambient nebulas. Hover or click to explore live commercial transformations.
          </motion.p>
        </div>

        {/* 3D HORIZONTAL GLASS CARDS HORIZON (Exact style #4 from image) */}
        <div className="relative py-8">
          
          {/* Card Navigation Indicators */}
          <div className="flex justify-center items-center space-x-2 mb-8 font-mono text-xs">
            {portfolioItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCardIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  activeCardIndex === idx
                    ? 'w-8 h-2 bg-gradient-to-r from-cyan-400 to-violet-400'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Cards Display Track */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {portfolioItems.map((item, idx) => {
              const isActive = activeCardIndex === idx;

              return (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveCardIndex(idx)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className={`cursor-pointer rounded-3xl p-8 backdrop-blur-2xl border transition-all duration-500 relative flex flex-col justify-between overflow-hidden group ${
                    isActive
                      ? 'bg-white/[0.08] border-white/30 shadow-[0_20px_60px_-15px_rgba(0,229,255,0.25)] ring-1 ring-white/20'
                      : 'bg-white/[0.03] border-white/10 hover:border-white/20 shadow-2xl'
                  }`}
                >
                  {/* Internal ambient card light reflect */}
                  <div
                    className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br ${item.glow} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`}
                  />

                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-widest uppercase text-cyan-300 bg-white/[0.06] border border-white/10 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-xs font-mono text-white/50">0{idx + 1}</span>
                    </div>

                    <div>
                      <h3 className="font-display text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                        {item.title}
                      </h3>
                      <div className="mt-2 flex items-baseline space-x-2">
                        <span className="font-display text-3xl font-extrabold text-white">
                          {item.metric}
                        </span>
                        <span className="text-xs font-mono text-emerald-400 font-semibold">
                          {item.sub}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((t, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs relative z-10">
                    <span className="text-slate-400 group-hover:text-white transition-colors">
                      Inspect Telemetry
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/15 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Floating Glass CTA Bar */}
        <div className="mt-16 p-8 rounded-3xl bg-white/[0.04] border border-white/15 backdrop-blur-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-1 relative z-10">
            <h3 className="font-display text-2xl font-bold text-white">
              Ready to construct your commercial growth horizon?
            </h3>
            <p className="text-sm text-slate-300">
              Direct senior growth partners. 7-day deployment guarantee. Zero account-manager fluff.
            </p>
          </div>

          <button
            onClick={onOpenAudit}
            className="shrink-0 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 hover:from-cyan-300 hover:to-violet-300 text-black font-semibold text-sm transition-all shadow-[0_0_30px_rgba(0,229,255,0.4)] relative z-10 active:scale-95"
          >
            Start a Conversation →
          </button>
        </div>

      </div>

    </div>
  );
};
