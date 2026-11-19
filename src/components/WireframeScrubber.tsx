import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, Compass } from 'lucide-react';

export const WireframeScrubber: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(0);

  const phases = [
    {
      code: 'PHASE 01 // FOUNDATION',
      title: 'Structural Diagnostic & Margin Audit',
      timeframe: 'DAYS 01 - 04',
      annotation: 'DIM: GROSS_MARGIN >= 38.5%',
      deliverable: 'Auditing current customer acquisition costs, churn vectors, and contribution margins before deploying a single asset.',
      wireframe: {
        label: 'FIG 1.1: CONTRIBUTION MARGIN LOAD MATRIX',
        nodes: ['CAC: $92 ➔ $34.20', 'LTV PAYBACK: 42 DAYS', 'MARGIN LEAKAGE: 0%'],
        diagramLines: [
          'M 20 80 L 120 40 L 220 70 L 320 20 L 420 50',
          'M 20 120 L 150 90 L 260 110 L 360 70 L 450 60',
        ]
      }
    },
    {
      code: 'PHASE 02 // CREATIVE LAB',
      title: 'Content Engine Scaffolding & Scripting',
      timeframe: 'DAYS 05 - 10',
      annotation: 'DIM: RETENTION_3S >= 78.4%',
      deliverable: '30 to 60 psychological video scripts engineered around audience cognitive dissonance and pattern interrupt frameworks.',
      wireframe: {
        label: 'FIG 2.3: HOOK RETENTION & SOUND WAVEFORM BLUEPRINT',
        nodes: ['SUB-3S HOOK TRUSS', 'DYNAMIC TYPO VECTOR', '4K DA VINCI GRADE'],
        diagramLines: [
          'M 10 70 Q 100 10 200 70 T 400 70',
          'M 10 90 Q 70 30 160 90 T 350 90',
        ]
      }
    },
    {
      code: 'PHASE 03 // DISTRIBUTION',
      title: 'Omnichannel Distribution Truss',
      timeframe: 'DAYS 11 - 16',
      annotation: 'DIM: REACH_MULTIPLIER = 4.8X',
      deliverable: 'Syndicating native creative formats across TikTok, Instagram Reels, YouTube Shorts, LinkedIn, and X with server-side CAPI tracking.',
      wireframe: {
        label: 'FIG 3.2: MULTI-PLATFORM SYNDICATION MATRIX',
        nodes: ['IG REELS NODE', 'TIKTOK VIRAL TRUSS', 'LINKEDIN PIPELINE'],
        diagramLines: [
          'M 50 100 L 200 30 L 350 100 Z',
          'M 200 30 L 200 140',
        ]
      }
    },
    {
      code: 'PHASE 04 // RETENTION',
      title: 'Compounding Cashflow & Unit Margin',
      timeframe: 'DAYS 17 - 21+',
      annotation: 'DIM: NET_MARGIN_EXPANSION = +64%',
      deliverable: 'Post-purchase bundle ladders and automated behavioral retention flows that turn single transactions into recurring enterprise equity.',
      wireframe: {
        label: 'FIG 4.4: COMPOUNDING LTV RETENTION ARCH',
        nodes: ['REPEAT PURCHASE: 42%', 'AOV EXPANSION: +78%', 'NET CASH SURPLUS'],
        diagramLines: [
          'M 30 130 C 120 130, 180 30, 420 20',
          'M 30 140 L 420 140',
        ]
      }
    }
  ];

  return (
    <section id="transformation" className="py-28 md:py-36 border-b border-emerald-500/15 relative bg-[#020e0c]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#082921] border border-emerald-500/30 text-xs font-mono text-[#00df89] mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>STYLE 03 // 4-PHASE WIREFRAME SCRUBBER</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              From Zero to Scale in 21 Days.
            </h2>
          </div>
          <p className="text-sm text-[#8daaa1] max-w-sm font-mono leading-relaxed">
            Drag the scrub slider below to physically navigate the 4 phases and watch the live CAD wireframes transform.
          </p>
        </div>

        {/* The 4-Phase Scrubber Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#051c17] border border-emerald-500/25 shadow-2xl space-y-8">
          
          {/* Header Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-emerald-500/15 gap-4">
            <div className="flex items-center space-x-2 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-[#00df89]" />
              <span className="text-white font-bold uppercase">PHYSICAL BLUEPRINT WIREFRAME SCRUBBING</span>
            </div>

            <div className="flex items-center space-x-2 font-mono text-xs">
              <button
                onClick={() => setActivePhase((prev) => (prev > 0 ? prev - 1 : phases.length - 1))}
                className="p-2 rounded-full border border-emerald-500/30 hover:border-[#00df89] text-[#8daaa1] hover:text-white transition-colors"
                title="Previous phase"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-3 py-1 bg-[#082b23] rounded-full border border-emerald-500/20 text-[#00df89] font-bold">
                {activePhase + 1} / {phases.length}
              </span>
              <button
                onClick={() => setActivePhase((prev) => (prev < phases.length - 1 ? prev + 1 : 0))}
                className="p-2 rounded-full border border-emerald-500/30 hover:border-[#00df89] text-[#8daaa1] hover:text-white transition-colors"
                title="Next phase"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Phase Scrubbing Tab Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">
            {phases.map((p, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhase(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${
                  activePhase === idx
                    ? 'bg-[#082921] border-emerald-500/50 text-white shadow-lg'
                    : 'bg-[#031512] border-emerald-500/15 text-[#8daaa1] hover:text-white hover:bg-[#06201a]'
                }`}
              >
                <div className="flex justify-between items-center text-[10px] text-[#8daaa1] mb-1">
                  <span>{p.code.split(' // ')[0]}</span>
                  <span className="text-[#00df89] font-bold">{p.timeframe}</span>
                </div>
                <div className="font-bold text-xs truncate">
                  {p.title}
                </div>
                {activePhase === idx && (
                  <motion.div
                    layoutId="activeWireframePill"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#00df89]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Range Slider for Physical Scrubbing */}
          <div className="space-y-2 pt-2">
            <div className="flex justify-between font-mono text-[11px] text-[#8daaa1] uppercase">
              <span>SCRUB CAD BLUEPRINT WIREFRAME:</span>
              <span className="text-[#00df89] font-semibold">{phases[activePhase].annotation}</span>
            </div>
            <input
              type="range"
              min="0"
              max="3"
              step="1"
              value={activePhase}
              onChange={(e) => setActivePhase(Number(e.target.value))}
              className="w-full h-2 bg-[#020d0b] rounded-lg appearance-none cursor-pointer accent-[#00df89]"
            />
          </div>

          {/* Dynamic CAD Blueprint Wireframe Box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#07241d] border border-emerald-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center space-x-3 font-mono text-xs">
                  <span className="px-3 py-0.5 rounded-full bg-[#082e25] border border-emerald-500/40 text-[#00df89] font-bold">
                    {phases[activePhase].code}
                  </span>
                  <span className="text-[#8daaa1]">{phases[activePhase].timeframe}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {phases[activePhase].title}
                </h3>

                <p className="text-sm text-[#a4c5bb] leading-relaxed">
                  {phases[activePhase].deliverable}
                </p>

                <div className="pt-2">
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    {phases[activePhase].wireframe.nodes.map((node, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-xl bg-[#031512] border border-emerald-500/25 text-[#00df89] font-medium"
                      >
                        ✓ {node}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right CAD SVG Schematic */}
              <div className="lg:col-span-6 p-6 rounded-2xl bg-[#031512] border border-emerald-500/25 relative font-mono text-xs shadow-inner">
                <div className="flex justify-between items-center text-[10px] text-[#8daaa1] border-b border-emerald-500/15 pb-3 mb-4">
                  <span className="text-[#00df89] font-bold">{phases[activePhase].wireframe.label}</span>
                  <span className="flex items-center gap-1">
                    <Maximize2 className="w-3 h-3 text-[#00df89]" />
                    SCALE 1:50
                  </span>
                </div>

                <div className="h-44 w-full flex items-center justify-center relative">
                  <svg className="w-full h-full stroke-[#00df89] fill-none stroke-[1.5]" viewBox="0 0 460 160">
                    <pattern id="cadGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0, 223, 137, 0.08)" strokeWidth="0.8" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#cadGrid)" />

                    {phases[activePhase].wireframe.diagramLines.map((line, i) => (
                      <motion.path
                        key={i}
                        d={line}
                        stroke={i === 0 ? '#00df89' : '#0d9488'}
                        strokeWidth={i === 0 ? '2' : '1.5'}
                        strokeDasharray={i === 1 ? '4 4' : 'none'}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                      />
                    ))}

                    <circle cx="120" cy="40" r="4" fill="#00df89" />
                    <circle cx="220" cy="70" r="4" fill="#0d9488" />
                    <circle cx="320" cy="20" r="4" fill="#00df89" />
                    <line x1="320" y1="10" x2="320" y2="30" stroke="#00df89" strokeWidth="1" />
                    <line x1="310" y1="20" x2="330" y2="20" stroke="#00df89" strokeWidth="1" />
                  </svg>
                </div>

                <div className="pt-3 border-t border-emerald-500/15 flex justify-between text-[10px] text-[#8daaa1]">
                  <span>COORDINATES: CAD_0{activePhase + 1}</span>
                  <span className="text-[#00df89] font-bold">100% SPEC VERIFIED</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
