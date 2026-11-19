import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';

export const TeamCredentials: React.FC = () => {
  const operators = [
    {
      id: 'op-1',
      code: 'OP-01 // CREATIVE DIRECTION',
      name: 'Julian Mercer',
      title: 'Partner & Chief Creative Architect',
      trackRecord: '$38M+ Inbound Revenue Engineered',
      specialties: ['Sub-3-Second Hook Engineering', '4K Studio Production Sprints', 'Cognitive Dissonance Scripting'],
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
      background: 'Former Creative Lead at Tier-1 Performance Studio; directed over 400+ viral commercial campaigns.'
    },
    {
      id: 'op-2',
      code: 'OP-02 // REVENUE ARCHITECTURE',
      name: 'Marcus Sterling',
      title: 'Partner & Unit Economics Engineer',
      trackRecord: '64% Average Contribution Margin Expansion',
      specialties: ['Pricing Elasticity Diagnostics', 'Post-Purchase Upsell Ladders', 'Blended CAC Containment'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
      background: 'Ex-Hedge Fund Quantitative Analyst; built attribution & pricing models for $100M+ ARR enterprises.'
    },
    {
      id: 'op-3',
      code: 'OP-03 // DISTRIBUTION SYSTEMS',
      name: 'Elena Rostova',
      title: 'Partner & Head of Media Distribution',
      trackRecord: '220M+ Organic Views Arbitraged',
      specialties: ['TikTok & Reels Algorithm Optimization', 'Server-Side CAPI Infrastructure', 'Executive Narrative Monopolies'],
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80',
      background: 'Built organic-to-paid distribution systems scaling 18 consumer & SaaS brands from seed to Series B.'
    }
  ];

  return (
    <section id="operators" className="py-28 md:py-36 border-b border-emerald-500/15 relative bg-[#020e0c]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00df89] block mb-2 font-semibold">
              Senior Operators // Zero Bureaucracy
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Direct Senior Engineers.
            </h2>
          </div>
          <p className="text-sm text-[#8daaa1] max-w-sm font-mono leading-relaxed">
            Hover over any portrait to inspect credentials and verified commercial track records.
          </p>
        </div>

        {/* 3 Operator Cards with Photo Mask & Sliding Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {operators.map((op) => (
            <div
              key={op.id}
              className="group relative rounded-3xl bg-[#051c17] border border-emerald-500/25 shadow-2xl hover:border-emerald-500/50 transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              
              {/* Photo Container with Monochrome-to-Color Transition & Slide-Up Mask */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-[#031311]">
                
                {/* Portrait Image: Grayscale by default, color on hover */}
                <img
                  src={op.image}
                  alt={op.name}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Dimension Overlay */}
                <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] text-white bg-[#031512]/90 border border-emerald-500/30 px-3 py-1 rounded-full backdrop-blur-sm">
                  <span>{op.code}</span>
                  <span className="text-[#00df89] font-bold">ONLINE</span>
                </div>

                {/* Behind-the-Mask Sliding Credentials Drawer */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020e0c] via-[#020e0c]/95 to-transparent p-6 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out font-sans">
                  
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#00df89] font-bold block mb-1">
                    VERIFIED CREDENTIALS // TRACK RECORD
                  </span>

                  <h4 className="font-display text-xl font-bold text-white mb-1">
                    {op.name}
                  </h4>

                  <p className="font-mono text-xs text-[#00df89] font-semibold mb-3">
                    {op.trackRecord}
                  </p>

                  <p className="text-xs text-[#a4c5bb] leading-relaxed mb-4">
                    {op.background}
                  </p>

                  <div className="space-y-1.5 font-mono text-[11px] text-zinc-200 border-t border-emerald-500/20 pt-3">
                    {op.specialties.map((spec, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Check className="w-3 h-3 text-[#00df89] shrink-0" />
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>

              {/* Card Footer Info */}
              <div className="p-6 border-t border-emerald-500/15 bg-[#051c17] flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-[#00df89] transition-colors">
                    {op.name}
                  </h3>
                  <span className="font-mono text-xs text-[#8daaa1] block">
                    {op.title}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#082921] border border-emerald-500/30 flex items-center justify-center group-hover:bg-[#00df89] group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
