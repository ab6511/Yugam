import React, { useState } from 'react';
import { CONTENT_BLUEPRINTS } from '../data/agencyData';
import { Film, Play, Sparkles, CheckCircle2, Share2, Eye, Flame, ArrowUpRight, Copy, Check } from 'lucide-react';

interface ContentMatrixProps {
  onOpenAudit: () => void;
}

export const ContentMatrix: React.FC<ContentMatrixProps> = ({ onOpenAudit }) => {
  const [activeBlueprintId, setActiveBlueprintId] = useState(CONTENT_BLUEPRINTS[0].id);
  const [copiedHook, setCopiedHook] = useState(false);

  const activeBlueprint = CONTENT_BLUEPRINTS.find(b => b.id === activeBlueprintId) || CONTENT_BLUEPRINTS[0];

  const handleCopyHook = () => {
    navigator.clipboard.writeText(activeBlueprint.hook);
    setCopiedHook(true);
    setTimeout(() => setCopiedHook(false), 2000);
  };

  return (
    <section id="content-lab" className="py-24 bg-[#090a10] border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400 mb-4">
              <Film className="w-3.5 h-3.5" />
              <span>CONTENT ARCHITECTURE // 03</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              The High-Velocity Content Lab. <br />
              <span className="text-zinc-500 font-normal">Commercial Psychology Disguised as Viral Media.</span>
            </h2>
            <p className="mt-4 text-base text-zinc-400 leading-relaxed">
              We do not shoot pointless dance videos or post motivational quotes. Every second of footage we script, film, and edit is engineered around algorithmic retention hooks and conversion psychology.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenAudit}
              className="px-5 py-3 rounded bg-zinc-900 border border-emerald-500/40 text-emerald-300 font-mono text-xs uppercase tracking-wider hover:bg-emerald-500/10 transition-colors flex items-center space-x-2"
            >
              <span>Get 3 Custom Hooks For Your Brand</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Blueprint Selection Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {CONTENT_BLUEPRINTS.map((bp) => (
            <button
              key={bp.id}
              onClick={() => setActiveBlueprintId(bp.id)}
              className={`p-4 rounded-lg border text-left transition-all relative overflow-hidden ${
                activeBlueprintId === bp.id
                  ? 'bg-zinc-900 border-cyan-500 shadow-lg shadow-cyan-500/10'
                  : 'bg-[#0d0e15] border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center justify-between font-mono text-xs mb-1">
                <span className="text-zinc-500 uppercase">{bp.archetype}</span>
                <span className="text-cyan-400 font-semibold">{bp.targetPlatform}</span>
              </div>
              <h3 className="font-bold text-white text-sm sm:text-base">
                {bp.title}
              </h3>
              <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                {bp.psychologicalTrigger}
              </p>
            </button>
          ))}
        </div>

        {/* Active Blueprint Deep Dive Card */}
        <div className="rounded-lg border border-zinc-800 bg-[#0c0e15] p-6 sm:p-8 space-y-8">
          
          {/* Top Hook Preview */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-400" />
                The Sub-3-Second Algorithmic Hook Formula:
              </span>
              <button
                onClick={handleCopyHook}
                className="px-3 py-1 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-300 flex items-center space-x-1.5 transition-colors"
              >
                {copiedHook ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
                <span>{copiedHook ? 'Copied to Clipboard' : 'Copy Hook Script'}</span>
              </button>
            </div>

            <div className="p-4 sm:p-5 rounded bg-zinc-950/80 border border-cyan-500/30 text-white font-mono text-sm sm:text-base leading-relaxed relative">
              <div className="absolute top-2 right-2 text-[10px] text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/80">
                PSYCH TRIGGER: {activeBlueprint.psychologicalTrigger}
              </div>
              {activeBlueprint.hook}
            </div>
          </div>

          {/* Scene by Scene Timeline Script Architecture */}
          <div className="space-y-4">
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">
              // SCENE-BY-SCENE PRODUCTION RUNTIME BREAKDOWN:
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeBlueprint.scriptStructure.map((step, idx) => (
                <div key={idx} className="p-4 rounded bg-zinc-900/80 border border-zinc-800 space-y-2">
                  <div className="flex justify-between items-center font-mono text-xs">
                    <span className="text-cyan-400 font-bold">{step.step}</span>
                    <span className="text-zinc-500 text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded">
                      {step.pacing}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Benchmark Performance Telemetry */}
          <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-3.5 rounded bg-zinc-900/60 border border-zinc-800">
              <span className="text-zinc-500 block text-[10px] uppercase">30-SEC RETENTION BENCHMARK:</span>
              <span className="text-emerald-400 font-extrabold text-base block mt-0.5">
                {activeBlueprint.benchmarks.retentionRate}
              </span>
              <span className="text-zinc-600 text-[10px]">Algorithm prioritizes &gt;65%</span>
            </div>

            <div className="p-3.5 rounded bg-zinc-900/60 border border-zinc-800">
              <span className="text-zinc-500 block text-[10px] uppercase">AVERAGE ORGANIC SPREAD:</span>
              <span className="text-cyan-400 font-extrabold text-base block mt-0.5">
                {activeBlueprint.benchmarks.avgViews}
              </span>
              <span className="text-zinc-600 text-[10px]">Across short-form platforms</span>
            </div>

            <div className="p-3.5 rounded bg-zinc-900/60 border border-zinc-800">
              <span className="text-zinc-500 block text-[10px] uppercase">PIPELINE CONVERSION ATTRIBUTION:</span>
              <span className="text-amber-400 font-extrabold text-base block mt-0.5">
                {activeBlueprint.benchmarks.directConversions}
              </span>
              <span className="text-zinc-600 text-[10px]">Tracked to direct lead capture</span>
            </div>
          </div>

          {/* Multi-channel Syndication Matrix */}
          <div className="p-4 rounded bg-gradient-to-r from-zinc-900 via-zinc-900/60 to-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-zinc-300 font-bold block">
                ONE PRODUCTION SPRINT → FIVE DISTRIBUTION CHANNELS
              </span>
              <p className="text-zinc-500 text-[11px]">
                Every single video is refactored natively with custom formatting for Instagram Reels, TikTok, YouTube Shorts, LinkedIn Video, and X.
              </p>
            </div>
            <button
              onClick={onOpenAudit}
              className="shrink-0 px-4 py-2.5 bg-cyan-500 text-black font-bold uppercase rounded hover:bg-cyan-400 transition-colors"
            >
              Request Sample Script
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
