import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Minus, Check } from 'lucide-react';

interface BlueprintSystemsProps {
  onOpenAudit: () => void;
}

export const BlueprintSystems: React.FC<BlueprintSystemsProps> = ({ onOpenAudit }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const units = [
    {
      code: 'UNIT 01 // DISTRIBUTION',
      title: 'Omnichannel Social & Algorithmic Scaffolding',
      caliper: '├─ 18.4M+ ORGANIC REACH ─┤',
      description: 'Engineered top-of-funnel attention. We turn social platforms into reliable pipeline siphons across TikTok, Instagram Reels, YouTube Shorts, LinkedIn, and X.',
      deliverables: ['Multi-platform content syndication matrix', '3-second algorithmic hook testing protocol', 'Organic-to-pipeline conversion triggers', 'Audience retention telemetry'],
      specDoc: 'SPEC-01: Incorporates sub-3-second pattern interrupts and native format recycling without platform shadowban penalties.'
    },
    {
      code: 'UNIT 02 // CREATIVE LAB',
      title: 'High-Velocity Video Production Lab',
      caliper: '├─ 4.8X SHARE MULTIPLIER ─┤',
      description: 'Studio-caliber short-form and long-form visual assets built with commercial psychology. 30 to 60 bespoke video assets scripted, shot, and mastered each month.',
      deliverables: ['Psychological scriptwriting & narrative hooks', 'Remote 4K director-guided filming kits', 'Dynamic typography, color grading & sound FX', 'High-CTR thumbnail variants'],
      specDoc: 'SPEC-02: Every master asset is color-graded in DaVinci Resolve with custom sound design tailored to psychological triggers.'
    },
    {
      code: 'UNIT 03 // PERFORMANCE',
      title: 'Performance Acquisition & Headless CRO',
      caliper: '├─ 4.2X BLENDED ROAS ─┤',
      description: 'Paid media infrastructure built to scale profitable customer acquisition without diminishing returns, paired with sub-second high-speed landing pages.',
      deliverables: ['Meta Advantage+ & Google Ads P-Max funnels', 'Headless landing pages (<0.6s LCP)', 'Continuous conversion split-testing', 'First-party server-side CAPI attribution'],
      specDoc: 'SPEC-03: Real-time contribution margin containment preventing budget leakage into low-intent audience segments.'
    },
    {
      code: 'UNIT 04 // ECONOMICS',
      title: 'Revenue Engineering & Margin Expansion',
      caliper: '├─ +64% NET MARGIN EXPANSION ─┤',
      description: 'Fixing the leaky bucket: expanding LTV, average order value, and bottom-line profit margins with post-purchase upsell ladders and retention ecosystems.',
      deliverables: ['Unit economics & contribution margin diagnostics', 'High-margin upsell/cross-sell funnels', 'Cohort retention & churn reduction architectures', 'Recurring subscription mechanics'],
      specDoc: 'SPEC-04: Eliminates margin-eroding discount traps and accelerates customer payback periods by an average of 42%.'
    }
  ];

  return (
    <section id="systems" className="py-24 drafting-grid border-b border-charcoal-line/15 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-terracotta block mb-2 font-semibold">
              Specification Units // Modular Infrastructure
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
              Four Structural Growth Systems.
            </h2>
          </div>
          <p className="text-sm text-charcoal-muted max-w-sm font-mono leading-relaxed">
            Each modular system operates independently or compounds as a unified organic-to-paid revenue machine.
          </p>
        </div>

        {/* 2x2 Drafting Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {units.map((unit, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                layout
                className={`p-8 sm:p-10 rounded-2xl border transition-all duration-300 flex flex-col justify-between relative ${
                  isExpanded
                    ? 'bg-paper-sheet border-terracotta shadow-blueprint-hover'
                    : 'bg-paper-sheet border-charcoal-line/20 hover:border-charcoal-line/40 shadow-blueprint'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-terracotta bg-terracotta-light border border-terracotta/20 px-3 py-1 rounded">
                      {unit.code}
                    </span>
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      className="p-1 rounded text-charcoal-light hover:text-charcoal hover:bg-paper-muted"
                      aria-label="Toggle specs"
                    >
                      {isExpanded ? <Minus className="w-4 h-4 text-terracotta" /> : <Plus className="w-4 h-4" />}
                    </button>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-charcoal mb-2">
                    {unit.title}
                  </h3>

                  {/* Drafting Caliper Line */}
                  <div className="font-mono text-xs text-charcoal-light my-3 tracking-wider">
                    {unit.caliper}
                  </div>

                  <p className="text-sm text-charcoal-muted leading-relaxed mb-6 font-sans">
                    {unit.description}
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
                        <div className="p-4 rounded-xl bg-paper-muted border border-charcoal-line/15 font-mono text-xs text-charcoal leading-relaxed">
                          <span className="text-terracotta font-bold block mb-1">
                            // ARCHITECTURAL SPECIFICATION:
                          </span>
                          {unit.specDoc}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <div className="pt-6 border-t border-charcoal-line/10">
                    <span className="font-mono text-[10px] uppercase text-charcoal-light block mb-3">
                      Required Deliverables:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs text-charcoal">
                      {unit.deliverables.map((item, i) => (
                        <li key={i} className="flex items-center space-x-1.5">
                          <Check className="w-3.5 h-3.5 text-terracotta shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-charcoal-line/10 flex items-center justify-between font-mono text-xs">
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      className="text-charcoal-light hover:text-charcoal transition-colors"
                    >
                      {isExpanded ? 'Collapse spec sheet' : 'Expand full specification'}
                    </button>

                    <button
                      onClick={onOpenAudit}
                      className="text-terracotta font-semibold hover:underline flex items-center space-x-1"
                    >
                      <span>Order unit</span>
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
