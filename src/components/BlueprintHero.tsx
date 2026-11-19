import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Crosshair, Layers, Sliders, Maximize2 } from 'lucide-react';

interface BlueprintHeroProps {
  onOpenAudit: () => void;
}

export const BlueprintHero: React.FC<BlueprintHeroProps> = ({ onOpenAudit }) => {
  const [activePhase, setActivePhase] = useState<number>(0);

  const phases = [
    {
      code: 'PHASE 01 // FOUNDATION',
      title: 'Structural Diagnostic & Margin Audit',
      timeframe: 'DAYS 01 - 04',
      annotation: 'DIM: GROSS_MARGIN >= 38.5%',
      deliverable: 'Auditing current customer acquisition costs, churn vectors, and contribution margins before deploying a single asset.',
      wireframe: {
        type: 'diagnostic',
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
        type: 'content',
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
        type: 'distribution',
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
        type: 'scaling',
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
    <section className="relative pt-12 pb-24 drafting-grid border-b border-charcoal-line/15 overflow-hidden">
      
      {/* Self-Drawing Horizontal Hairline Grid Lines (Choreographed Entrance) */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-24 left-0 right-0 h-[1px] bg-charcoal-line/20 origin-left pointer-events-none"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-16 left-0 right-0 h-[1px] bg-charcoal-line/15 origin-left pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Architectural Dimension Caliper Annotation */}
        <div className="flex items-center space-x-2 font-mono text-[11px] text-charcoal-light uppercase tracking-widest mb-6">
          <span className="text-terracotta font-semibold">├─── SPECIFICATION: YG-2026.04</span>
          <span className="text-charcoal-line/40">──────────────────────────────</span>
          <span className="hidden sm:inline">STRUCTURAL BLUEPRINT ───┤</span>
        </div>

        {/* Massive Headline Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-charcoal tracking-tight leading-[1.04]">
              Engineering Commercial Architecture for <span className="text-terracotta underline decoration-terracotta/30 underline-offset-8">High-Growth</span> Brands.
            </h1>
          </div>
          <div className="lg:col-span-4 space-y-4 font-mono text-xs text-charcoal-muted leading-relaxed pb-2">
            <p>
              We dismantle unstructured agency guesswork. We engineer modular business transformation: viral content production, algorithmic distribution trusses, and bottom-line profit mechanics.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={onOpenAudit}
                className="px-6 py-3 rounded bg-charcoal hover:bg-terracotta text-white font-mono text-xs uppercase tracking-wider font-semibold transition-colors flex items-center space-x-2"
              >
                <span>Order Blueprint Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* INTERACTIVE 4-PHASE TIMELINE CAROUSEL WITH PHYSICAL WIREFRAME SCRUBBING */}
        <div id="transformation" className="p-6 sm:p-10 rounded-2xl bg-paper-sheet border border-charcoal-line/20 shadow-blueprint space-y-8 relative">
          
          {/* Carousel Title Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-charcoal-line/15 gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-terracotta" />
                <span className="font-mono text-xs font-bold text-charcoal uppercase tracking-wider">
                  INTERACTIVE TRANSFORMATION CAROUSEL // 4-PHASE DEPLOYMENT
                </span>
              </div>
              <span className="font-mono text-[11px] text-charcoal-light block mt-1">
                Drag slider or click tabs to scrub architectural wireframes in real-time
              </span>
            </div>

            {/* Stepper Controls */}
            <div className="flex items-center space-x-2 font-mono text-xs">
              <button
                onClick={() => setActivePhase((prev) => (prev > 0 ? prev - 1 : phases.length - 1))}
                className="p-2 rounded border border-charcoal-line/20 hover:border-terracotta hover:text-terracotta transition-colors"
                title="Previous phase"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-3 py-1 bg-paper-muted rounded border border-charcoal-line/10 text-charcoal font-semibold">
                {activePhase + 1} / {phases.length}
              </span>
              <button
                onClick={() => setActivePhase((prev) => (prev < phases.length - 1 ? prev + 1 : 0))}
                className="p-2 rounded border border-charcoal-line/20 hover:border-terracotta hover:text-terracotta transition-colors"
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
                className={`p-3.5 rounded-xl border text-left transition-all duration-300 relative overflow-hidden ${
                  activePhase === idx
                    ? 'bg-paper-muted border-terracotta shadow-sm'
                    : 'bg-paper-sheet border-charcoal-line/15 hover:border-charcoal-line/40 text-charcoal-muted'
                }`}
              >
                <div className="flex justify-between items-center text-[10px] text-charcoal-light mb-1">
                  <span>{p.code.split(' // ')[0]}</span>
                  <span className="text-terracotta font-semibold">{p.timeframe}</span>
                </div>
                <div className="font-bold text-charcoal text-xs truncate">
                  {p.title}
                </div>
                {activePhase === idx && (
                  <motion.div
                    layoutId="activeBlueprintTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-terracotta"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Interactive Scrubbing Range Slider */}
          <div className="space-y-2 pt-2">
            <div className="flex justify-between font-mono text-[11px] text-charcoal-light uppercase">
              <span>SCRUB TIMELINE SPECIFICATION</span>
              <span className="text-terracotta font-semibold">{phases[activePhase].annotation}</span>
            </div>
            <input
              type="range"
              min="0"
              max="3"
              step="1"
              value={activePhase}
              onChange={(e) => setActivePhase(Number(e.target.value))}
              className="w-full h-2 bg-paper-darker rounded-lg appearance-none cursor-pointer accent-terracotta"
            />
          </div>

          {/* Wireframe Display Canvas */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="p-6 sm:p-8 rounded-xl bg-paper-muted border border-charcoal-line/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              
              {/* Left Column: Technical Narrative */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center space-x-3 font-mono text-xs">
                  <span className="px-2.5 py-0.5 rounded bg-terracotta-light border border-terracotta/30 text-terracotta font-bold">
                    {phases[activePhase].code}
                  </span>
                  <span className="text-charcoal-light">{phases[activePhase].timeframe}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
                  {phases[activePhase].title}
                </h3>

                <p className="text-sm text-charcoal-muted leading-relaxed font-sans">
                  {phases[activePhase].deliverable}
                </p>

                <div className="pt-2">
                  <span className="font-mono text-[10px] uppercase text-charcoal-light block mb-2">
                    Verified Blueprint Calipers:
                  </span>
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    {phases[activePhase].wireframe.nodes.map((node, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded bg-paper-sheet border border-charcoal-line/20 text-charcoal font-medium shadow-xs"
                      >
                        ⌖ {node}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Architectural Wireframe Blueprint Canvas */}
              <div className="lg:col-span-6 p-6 rounded-xl bg-paper-sheet border border-charcoal-line/20 relative shadow-inner overflow-hidden font-mono text-xs">
                
                <div className="flex justify-between items-center text-[10px] text-charcoal-light border-b border-charcoal-line/10 pb-3 mb-4">
                  <span className="text-terracotta font-bold">{phases[activePhase].wireframe.label}</span>
                  <span className="flex items-center gap-1">
                    <Maximize2 className="w-3 h-3 text-charcoal-light" />
                    SCALE 1:50
                  </span>
                </div>

                {/* SVG Technical Schematic Wireframe */}
                <div className="h-44 w-full flex items-center justify-center relative">
                  <svg className="w-full h-full stroke-charcoal fill-none stroke-[1.5]" viewBox="0 0 460 160">
                    {/* Background drafting grid lines */}
                    <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(30, 41, 59, 0.08)" strokeWidth="0.8" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#gridPattern)" />

                    {/* Architectural Wireframe Paths */}
                    {phases[activePhase].wireframe.diagramLines.map((line, i) => (
                      <motion.path
                        key={i}
                        d={line}
                        stroke={i === 0 ? '#E05A47' : '#0F172A'}
                        strokeWidth={i === 0 ? '2' : '1.5'}
                        strokeDasharray={i === 1 ? '4 4' : 'none'}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                      />
                    ))}

                    {/* Nodes / Caliper Anchor Points */}
                    <circle cx="120" cy="40" r="4" fill="#E05A47" />
                    <circle cx="220" cy="70" r="4" fill="#0F172A" />
                    <circle cx="320" cy="20" r="4" fill="#E05A47" />

                    {/* Dimension Crosshairs */}
                    <line x1="320" y1="10" x2="320" y2="30" stroke="#E05A47" strokeWidth="1" />
                    <line x1="310" y1="20" x2="330" y2="20" stroke="#E05A47" strokeWidth="1" />
                  </svg>
                </div>

                <div className="pt-3 border-t border-charcoal-line/10 flex justify-between text-[10px] text-charcoal-light">
                  <span>COORDINATES: SEC_0{activePhase + 1}</span>
                  <span className="text-terracotta font-semibold">TOLERANCE: +/- 0.02%</span>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
