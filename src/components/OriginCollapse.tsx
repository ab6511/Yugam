import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers } from 'lucide-react';

export const OriginCollapse: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3);

  const layers = [
    {
      level: 'LAYER 00 // THE ROOT',
      title: 'Commercial Unit Margin & Economics',
      category: 'COMMERCIAL PREREQUISITE',
      summary: 'Before creating a single asset, we audit contribution margins, payback periods, and LTV. Creative without margin clarity is just burnt capital.',
      metrics: '38.4% Average Contribution Margin Target',
      specs: ['Gross margin stress-test', 'Customer payback velocity', 'Post-purchase upsell ladder']
    },
    {
      level: 'LAYER 01 // THE PSYCHOLOGY',
      title: 'Audience Cognitive Wedge',
      category: 'NARRATIVE MONOPOLY',
      summary: 'Identifying the unspoken pain points, industry myths, and pattern interrupts that make qualified buyers stop scrolling immediately.',
      metrics: '81.2% Sub-3-Second Retention Rate',
      specs: ['Cognitive dissonance triggers', 'Contrarian industry thesis', 'High-status positioning']
    },
    {
      level: 'LAYER 02 // THE ENGINE',
      title: 'Algorithmic Distribution Matrix',
      category: 'OMNICHANNEL SYNDICATION',
      summary: 'Formatting the message into platform-native algorithmic vehicles across Instagram Reels, TikTok, YouTube Shorts, LinkedIn, and X.',
      metrics: '1 Asset ➔ 5 Platform Native Cuts',
      specs: ['Platform-specific pacing', 'Server-side attribution (CAPI)', 'Automated pipeline routing']
    },
    {
      level: 'LAYER 03 // VISIBLE OUTPUT',
      title: 'High-Velocity 4K Creative Asset',
      category: 'FRONT-FACING MEDIA',
      summary: 'The final visible artifact: studio-grade video, custom typography, cinematic sound design, and instant commercial conversion mechanics.',
      metrics: '4.8x Average Share Multiplier',
      specs: ['Thumb-stopping visual frames', 'Dynamic kinetic typography', 'Direct call-to-action pipeline']
    }
  ];

  return (
    <section id="origin" className="py-28 md:py-36 border-b relative" style={{ borderColor: 'var(--border-subtle)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header with scroll animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-4"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--accent)'
            }}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>SYSTEMIC WORKFLOW REVERSAL</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            The Origin Collapse: <br />
            <span className="font-normal opacity-60">Tracing Creative Back to Unit Economics.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Most agencies create random videos and hope they work. Our system dynamically traces every visual asset back to root commercial constraints.
          </p>
        </motion.div>

        {/* Interactive Scrub Bar with hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 font-mono text-xs"
        >
          {layers.map((layer, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${
                activeStep === idx
                  ? 'text-white shadow-xl scale-[1.01]'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
              }`}
              style={{
                backgroundColor: activeStep === idx ? 'var(--bg-elevated)' : 'var(--bg-surface)',
                borderColor: activeStep === idx ? 'var(--border-hover)' : 'var(--border-subtle)',
                boxShadow: activeStep === idx ? '0 10px 25px -5px var(--accent-glow)' : 'none'
              }}
            >
              <div className="text-[10px] tracking-wider mb-1 font-semibold" style={{ color: 'var(--accent)' }}>
                {layer.level}
              </div>
              <div className="font-semibold truncate">
                {layer.title}
              </div>
              {activeStep === idx && (
                <motion.div
                  layoutId="activePillGlobal"
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ backgroundColor: 'var(--accent)' }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Dynamic Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-12 rounded-3xl border relative overflow-hidden shadow-2xl"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-hover)',
              boxShadow: '0 20px 45px -15px var(--accent-glow)'
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <span
                    className="font-mono text-xs px-3.5 py-1 rounded-full uppercase tracking-wider font-semibold"
                    style={{
                      color: 'var(--accent)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    {layers[activeStep].category}
                  </span>
                  <span className="font-mono text-xs opacity-60">
                    DEPTH: {3 - activeStep} STEP(S) FROM FRONT-END OUTPUT
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  {layers[activeStep].title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed max-w-2xl text-zinc-300">
                  {layers[activeStep].summary}
                </p>

                <div className="pt-2">
                  <span className="font-mono text-xs uppercase tracking-wider block mb-3 opacity-60">
                    Architectural Specifications:
                  </span>
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    {layers[activeStep].specs.map((spec, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-xl border text-zinc-200"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          borderColor: 'var(--border-subtle)'
                        }}
                      >
                        ✓ {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Metric Card Column */}
              <div
                className="lg:col-span-4 p-6 sm:p-8 rounded-2xl border space-y-4 shadow-xl"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-subtle)'
                }}
              >
                <span className="font-mono text-xs uppercase tracking-wider opacity-60 block">
                  System Telemetry:
                </span>
                <div className="font-display text-2xl font-bold text-white">
                  {layers[activeStep].metrics}
                </div>
                <p className="text-xs leading-relaxed font-mono opacity-80">
                  Every layer is systematically verified before capital allocation. Zero creative drift.
                </p>
                <div
                  className="pt-2 border-t flex items-center justify-between text-xs font-mono font-semibold"
                  style={{
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--accent)'
                  }}
                >
                  <span>STATUS: ALIGNED</span>
                  <span>100% VERIFIED</span>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
