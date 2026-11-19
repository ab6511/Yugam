import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Crosshair, Check } from 'lucide-react';

interface HotspotNode {
  id: string;
  name: string;
  label: string;
  x: number;
  y: number;
  code: string;
  category: string;
  deliverables: string[];
  kpi: string;
  description: string;
}

export const StrategyHotspotDiagram: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<HotspotNode | null>(null);

  const hotspots: HotspotNode[] = [
    {
      id: 'node-attention',
      name: 'Algorithmic Attention Top-Truss',
      label: 'NODE 01: ATTENTION',
      x: 22,
      y: 35,
      code: 'SPEC_ATTN_4.2',
      category: 'ORGANIC DISTRIBUTION',
      kpi: '18.4M+ Monthly Views (Sub-3s Retention > 78%)',
      description: 'High-frequency short-form video creative engineered to siphon organic platform traffic into owned pipeline channels.',
      deliverables: ['Omnichannel syndication (IG, TikTok, YT, X)', 'Cognitive dissonance hook engineering', 'Daily algorithmic shift tracking']
    },
    {
      id: 'node-conversion',
      name: 'High-Velocity Conversion Gateway',
      label: 'NODE 02: CONVERSION',
      x: 50,
      y: 25,
      code: 'SPEC_GATE_2.1',
      category: 'HEADLESS ACQUISITION',
      kpi: '4.2x Blended ROAS (< 0.6s LCP Landers)',
      description: 'Headless conversion architecture engineered to eliminate bounce rate. Every visitor lands on dynamic split-tested pages tailored to their ad hook.',
      deliverables: ['Sub-second landing page architecture', 'Meta & Google Advantage+ campaigns', 'Server-side attribution (CAPI)']
    },
    {
      id: 'node-economics',
      name: 'Contribution Margin Stress-Core',
      label: 'NODE 03: UNIT MARGIN',
      x: 75,
      y: 45,
      code: 'SPEC_ECON_1.8',
      category: 'PROFIT MAXIMIZATION',
      kpi: '+64% Contribution Margin Expansion',
      description: 'Optimizes pricing tiers, eliminates discount traps, and accelerates customer payback periods to under 30 days.',
      deliverables: ['Unit economics stress testing', 'Post-purchase upsell ladders', 'AOV bundle optimization']
    },
    {
      id: 'node-retention',
      name: 'Autonomous Retention Arch',
      label: 'NODE 04: RETENTION',
      x: 50,
      y: 75,
      code: 'SPEC_RET_3.0',
      category: 'OWNED MEDIA ECOSYSTEM',
      kpi: '38.2% Revenue Driven via Owned Channels',
      description: 'Automated behavioral lifecycle messaging. Converts first-time transactions into compounding repeat purchase loops without re-paying ad networks.',
      deliverables: ['Behavioral Klaviyo lifecycle flows', 'Predictive replenishment triggers', 'VIP SMS loyalty sequencing']
    }
  ];

  return (
    <section id="strategy" className="py-28 md:py-36 border-b border-emerald-500/15 relative bg-[#031311]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#082921] border border-emerald-500/30 font-mono text-xs text-[#00df89] mb-3 font-semibold">
            <Crosshair className="w-3.5 h-3.5" />
            <span>FIG 02 // STRUCTURAL HOTSPOT SCHEMATIC</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Business Strategy Blueprint.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#8daaa1] leading-relaxed font-mono">
            Click the mint <span className="text-[#00df89] font-bold">[+]</span> nodes to open compact architectural specifications for each system layer.
          </p>
        </div>

        {/* Blueprint Schematic Canvas with Interactive Hotspots */}
        <div className="relative rounded-3xl bg-[#06201a] border border-emerald-500/30 p-8 sm:p-14 shadow-2xl min-h-[520px] flex items-center justify-center overflow-hidden">
          
          {/* Drafting Dimensions Overlay */}
          <div className="absolute top-4 left-6 right-6 flex justify-between font-mono text-[10px] text-[#8daaa1] uppercase border-b border-emerald-500/15 pb-2">
            <span>SCHEMATIC: COMPLETE ENTERPRISE FLYWHEEL</span>
            <span className="text-[#00df89] font-semibold">4 ANCHORED SPEC NODES</span>
          </div>

          {/* Background Connecting Architectural Trusses (SVG Lines) */}
          <svg className="absolute inset-0 w-full h-full stroke-emerald-500/20 fill-none stroke-[1.5] pointer-events-none">
            <path d="M 22% 35% L 50% 25% L 75% 45% L 50% 75% Z" strokeDasharray="5 5" />
            <path d="M 22% 35% L 75% 45%" strokeDasharray="3 3" />
            <path d="M 50% 25% L 50% 75%" strokeDasharray="3 3" />
            <circle cx="50%" cy="50%" r="30" stroke="rgba(0, 223, 137, 0.2)" strokeWidth="1" />
            <circle cx="50%" cy="50%" r="4" fill="#00df89" />
          </svg>

          {/* Hotspot Interactive Nodes */}
          {hotspots.map((node) => {
            const isActive = activeHotspot?.id === node.id;

            return (
              <div
                key={node.id}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              >
                {/* Hotspot Button */}
                <button
                  onClick={() => setActiveHotspot(isActive ? null : node)}
                  className={`relative group w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#00df89] text-[#021813] shadow-[0_0_25px_rgba(0,223,137,0.6)] scale-110'
                      : 'bg-[#082a22] border border-emerald-500/40 text-[#00df89] hover:bg-[#00df89] hover:text-black hover:scale-105 shadow-md'
                  }`}
                  aria-label={node.name}
                >
                  <Plus className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-45' : 'group-hover:rotate-90'}`} />
                  <span className="absolute -inset-1 rounded-full border border-emerald-400/40 animate-ping pointer-events-none opacity-40" />
                </button>

                {/* Node Label Badge */}
                <span className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] text-[#00df89] bg-[#031512]/90 border border-emerald-500/30 px-2 py-0.5 rounded shadow-xs pointer-events-none">
                  {node.label}
                </span>

                {/* Compact Anchored Popover Modal */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-14 left-1/2 -translate-x-1/2 w-72 sm:w-80 p-5 rounded-2xl bg-[#041a15] border border-emerald-500/60 shadow-2xl z-30 font-sans text-left space-y-3"
                    >
                      <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
                        <span className="font-mono text-[10px] text-[#00df89] font-bold uppercase tracking-wider">
                          [{node.code}] {node.category}
                        </span>
                        <button
                          onClick={() => setActiveHotspot(null)}
                          className="p-1 rounded text-[#8daaa1] hover:text-white hover:bg-emerald-500/10 transition-colors"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <h4 className="font-display font-bold text-base text-white leading-tight">
                        {node.name}
                      </h4>

                      <p className="text-xs text-[#a4c5bb] leading-relaxed">
                        {node.description}
                      </p>

                      <div className="p-2.5 rounded-xl bg-[#072921] border border-emerald-500/30 font-mono text-xs text-[#00df89] font-semibold">
                        TARGET KPI: {node.kpi}
                      </div>

                      <div className="space-y-1 pt-1 font-mono text-[11px] text-zinc-200">
                        {node.deliverables.map((item, i) => (
                          <div key={i} className="flex items-center space-x-1.5">
                            <Check className="w-3 h-3 text-[#00df89] shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}

          {/* Central Blueprint Axis Callout */}
          <div className="text-center font-mono text-xs text-[#8daaa1] z-10 pointer-events-none max-w-xs">
            <span className="font-bold text-white block mb-1">CORE EQUILIBRIUM AXIS</span>
            <span className="text-[11px]">All nodes synchronize to drive contribution cashflow</span>
          </div>

        </div>

      </div>
    </section>
  );
};
