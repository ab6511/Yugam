import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Minus, Check, Sparkles } from 'lucide-react';

interface SystemsGridProps {
  onOpenAudit: () => void;
}

export const SystemsGrid: React.FC<SystemsGridProps> = ({ onOpenAudit }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const services = [
    {
      number: '01',
      code: 'U-01',
      title: 'Social Media & Algorithmic Growth',
      description: 'We turn your social channels into predictable customer generation engines. Through high-frequency testing across Instagram, TikTok, YouTube Shorts, and LinkedIn, we capture high-intent buyers organically.',
      deliverables: ['Omnichannel Syndication', 'Retention Hook Engineering', 'Organic-to-Pipeline Funnels', 'Platform Algorithm Calibration'],
      deepSpecs: 'Includes daily monitoring of algorithmic shifts, sub-3-second retention drops, and automated routing of high-intent social interactions directly into your conversion pipeline.'
    },
    {
      number: '02',
      code: 'U-02',
      title: 'High-Velocity Video Production',
      description: 'Attention is won or lost in the first three seconds. We script, produce, and edit 30 to 60 bespoke video assets each month designed with commercial psychology to convert viewers into paying clients.',
      deliverables: ['Psychological Scriptwriting', '4K Studio-Grade Editing', 'Dynamic Typography & Motion', 'High-CTR Visual Assets'],
      deepSpecs: 'Every video cut is color-graded in DaVinci Resolve with custom sound engineering and kinetic typography tailored to match your brand architecture.'
    },
    {
      number: '03',
      code: 'U-03',
      title: 'Paid Media & Conversion Architecture',
      description: 'We amplify proven organic winners with disciplined ad spend on Meta and Google. Every campaign is backed by high-speed landing pages engineered specifically to maximize conversion rates.',
      deliverables: ['Meta & Google Performance Campaigns', 'Sub-Second Headless Landers', 'Rigorous CRO & Split-Testing', 'Server-Side Attribution (CAPI)'],
      deepSpecs: 'Direct CPA containment protocols that prevent ad spend leakage into low-intent traffic pools.'
    },
    {
      number: '04',
      code: 'U-04',
      title: 'Revenue Engineering & Profitability',
      description: 'Top-line revenue is vanity if your contribution margin is zero. We audit your unit economics, design high-margin upsells, and deploy automated retention flows to expand customer lifetime value.',
      deliverables: ['Unit Economics & Margin Audit', 'Post-Purchase Upsell Architecture', 'Behavioral Email & SMS Workflows', 'LTV Expansion Protocols'],
      deepSpecs: 'Designed to unlock 20-35% in additional contribution margin from your existing audience without spending extra money on ads.'
    }
  ];

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="services" className="py-28 md:py-36 border-b relative" style={{ borderColor: 'var(--border-subtle)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header with scroll trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div className="max-w-xl">
            <span
              className="text-xs font-mono uppercase tracking-widest block mb-3 font-semibold"
              style={{ color: 'var(--accent)' }}
            >
              Capabilities // Systems
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Four systems. One integrated growth engine.
            </h2>
          </div>
          <p className="text-sm max-w-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            We operate as an extension of your leadership team. No handoffs to junior interns. Only experienced growth engineers.
          </p>
        </motion.div>

        {/* 2x2 Interactive Blueprint Cards with staggered scroll reveals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                layout
                className={`p-8 sm:p-10 rounded-3xl border transition-all duration-300 flex flex-col justify-between relative group ${
                  isExpanded ? 'shadow-2xl' : 'hover:border-opacity-60'
                }`}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: isExpanded ? 'var(--border-hover)' : 'var(--border-subtle)',
                  boxShadow: isExpanded ? '0 15px 35px -10px var(--accent-glow)' : 'none'
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="font-mono text-xs font-semibold px-3 py-1 rounded-full transition-colors"
                      style={{
                        color: 'var(--accent)',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      {service.code}
                    </span>
                    <button
                      onClick={() => toggleExpand(index)}
                      className="p-1.5 rounded-full text-zinc-400 hover:text-white transition-colors"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? <Minus className="w-4 h-4" style={{ color: 'var(--accent)' }} /> : <Plus className="w-4 h-4" />}
                    </button>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-zinc-100 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                    {service.description}
                  </p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mb-6"
                      >
                        <div
                          className="p-4 rounded-2xl font-mono text-xs text-zinc-300 leading-relaxed"
                          style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            border: '1px solid var(--border-subtle)'
                          }}
                        >
                          <span className="font-semibold block mb-1" style={{ color: 'var(--accent)' }}>
                            // TECHNICAL SPECIFICATION:
                          </span>
                          {service.deepSpecs}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <div className="pt-6 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                    <span className="text-xs font-mono uppercase tracking-wider block mb-3 opacity-60">
                      Deliverables:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <Check className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--accent)' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)' }}>
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                    >
                      {isExpanded ? 'Less info' : 'View full architecture'}
                    </button>

                    <button
                      onClick={onOpenAudit}
                      className="text-xs font-mono font-medium hover:underline transition-all flex items-center space-x-1"
                      style={{ color: 'var(--accent)' }}
                    >
                      <span>Deploy system</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
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
