import React from 'react';
import { SPRINT_TIMELINE } from '../data/agencyData';
import { Clock, CheckCircle2, ArrowRight, ShieldAlert, Cpu } from 'lucide-react';

interface ProcessTimelineProps {
  onOpenAudit: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenAudit }) => {
  return (
    <section className="py-24 bg-[#090a10] border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400 mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>OPERATIONAL TIMELINE // PROTOCOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            From Zero to Scale in 21 Days. <br />
            <span className="text-zinc-500 font-normal">No 6-Week Onboarding. No Bureaucracy.</span>
          </h2>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed">
            Legacy agencies spend months making slide decks. We deploy a sprint framework inspired by high-frequency engineering teams. By Day 15, your brand has active winners live in market.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {SPRINT_TIMELINE.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-[#0c0e15] border border-zinc-800 relative flex flex-col justify-between space-y-6 hover:border-zinc-700 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
                    {item.phase}
                  </span>
                  <span className="font-mono text-[11px] text-zinc-400">
                    {item.timeframe}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base">
                  {item.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 font-mono text-[11px] text-emerald-400 flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero client micromanagement</span>
              </div>
            </div>
          ))}
        </div>

        {/* Anti-Bureaucracy Guarantee Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-lg bg-zinc-950 border border-zinc-800 flex flex-col lg:flex-row items-center justify-between gap-6 font-mono text-xs">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="space-y-1">
              <span className="text-white font-bold text-sm block">
                THE 7-DAY DEPLOYMENT GUARANTEE
              </span>
              <p className="text-zinc-400 text-xs">
                If the first cohort of psychological scripts and creative concepts is not delivered within 7 business days of onboarding, we work for free until they are.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenAudit}
            className="shrink-0 px-6 py-3 rounded bg-zinc-900 hover:bg-zinc-800 text-cyan-300 border border-cyan-500/40 uppercase tracking-wider font-bold transition-colors flex items-center space-x-2"
          >
            <span>Review Onboarding Protocol</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
