import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface GlassHorizonSectionProps {
  onOpenAudit: () => void;
}

export const GlassHorizonSection: React.FC<GlassHorizonSectionProps> = ({ onOpenAudit }) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(1);

  const portfolioItems = [
    {
      id: 'p-1',
      title: 'Apex Health Systems',
      category: 'HIGH-TICKET DTC',
      metric: '+304% MRR',
      sub: '$120K ➔ $485K / mo',
      tags: ['Video Lab', 'Reels Syndicate', 'CAC -62%'],
      glow: 'from-emerald-400 to-teal-500',
      description: '45 cinematic doctor-backed video reels engineered around cognitive pattern interrupts. Generated 14.2M views and scaled revenue by 3x in 90 days.'
    },
    {
      id: 'p-2',
      title: 'Lumina Data AI',
      category: 'B2B ENTERPRISE SAAS',
      metric: '$2.4M Pipeline',
      sub: '184 Demos / mo',
      tags: ['Founder Ghostwriting', 'LinkedIn Authority', 'Enterprise'],
      glow: 'from-cyan-400 to-emerald-500',
      description: 'Extracted deep domain knowledge into viral thought-leadership teardowns. Converted organic C-suite reach into $2.4M inbound deal pipeline.'
    },
    {
      id: 'p-3',
      title: 'Solaris Active Studio',
      category: 'SUSTAINABLE LUXURY',
      metric: '42.6% Repeat Rate',
      sub: 'AOV: $188 (+78%)',
      tags: ['Unit Economics', 'AOV Expansion', 'SMS Loops'],
      glow: 'from-teal-400 to-emerald-600',
      description: 'Audited contribution margins and built post-purchase upsell ladders. Unlocked $180,000+ net profit surplus without increasing ad spend.'
    }
  ];

  return (
    <section id="portfolio" className="py-28 md:py-36 border-b border-emerald-500/15 relative overflow-hidden bg-[#031311]">
      
      {/* Floating Ethereal Emerald & Teal Nebulas */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full bg-emerald-500/15 blur-[160px]"
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 -right-20 w-[650px] h-[650px] rounded-full bg-[#00df89]/10 blur-[180px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00df89] block mb-2 font-semibold">
              Selected Work // Glass Horizon
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Verified Commercial Impact.
            </h2>
          </div>
          <p className="text-sm text-[#8daaa1] max-w-sm font-mono leading-relaxed">
            Every engagement is measured by unit economics, blended customer acquisition cost, and gross profit expansion.
          </p>
        </div>

        {/* 3D Glass Cards Horizon (Style #4) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {portfolioItems.map((item, idx) => {
            const isActive = activeCardIndex === idx;

            return (
              <motion.div
                key={item.id}
                onClick={() => setActiveCardIndex(idx)}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.35 }}
                className={`cursor-pointer rounded-3xl p-8 sm:p-10 backdrop-blur-2xl border transition-all duration-500 relative flex flex-col justify-between overflow-hidden group shadow-2xl ${
                  isActive
                    ? 'bg-[#06241d]/90 border-emerald-500/50 shadow-[0_20px_60px_-15px_rgba(0,223,137,0.25)] ring-1 ring-emerald-500/30'
                    : 'bg-[#051c17]/60 border-emerald-500/20 hover:border-emerald-500/40'
                }`}
              >
                {/* Internal card glow */}
                <div
                  className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br ${item.glow} opacity-15 group-hover:opacity-35 blur-2xl transition-opacity`}
                />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-[#00df89] bg-[#082a22] border border-emerald-500/30 px-3 py-1 rounded-full font-semibold">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-[#8daaa1]">0{idx + 1}</span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-emerald-200 transition-colors">
                      {item.title}
                    </h3>
                    <div className="mt-2 flex items-baseline space-x-2">
                      <span className="font-display text-3xl font-extrabold text-white">
                        {item.metric}
                      </span>
                      <span className="text-xs font-mono text-[#00df89] font-semibold">
                        {item.sub}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#a4c5bb] leading-relaxed font-normal">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#041a15] border border-emerald-500/20 text-[#8daaa1]"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-emerald-500/15 flex items-center justify-between font-mono text-xs relative z-10">
                  <span className="text-[#8daaa1] group-hover:text-white transition-colors">
                    Inspect Telemetry
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#082b23] border border-emerald-500/30 flex items-center justify-center group-hover:bg-[#00df89] group-hover:text-black transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
