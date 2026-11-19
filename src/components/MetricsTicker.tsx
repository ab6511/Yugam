import React from 'react';
import { DollarSign, Eye, Target, Zap, ShieldAlert, Award } from 'lucide-react';

export const MetricsTicker: React.FC = () => {
  const metrics = [
    {
      icon: DollarSign,
      value: '$58.4M+',
      label: 'Client Revenue Engineered',
      sub: 'Verified Stripe & RevOps data',
      accent: 'text-emerald-400'
    },
    {
      icon: Eye,
      value: '220M+',
      label: 'Organic Views Siphoned',
      sub: 'Across IG, YT Shorts, TikTok & X',
      accent: 'text-cyan-400'
    },
    {
      icon: Target,
      value: '4.2x',
      label: 'Median Blended ROAS',
      sub: 'Paid traffic + Organic attribution',
      accent: 'text-amber-400'
    },
    {
      icon: Zap,
      value: '14 Days',
      label: 'To First Scaled Creative',
      sub: 'Rapid sprint deployment model',
      accent: 'text-emerald-400'
    },
    {
      icon: ShieldAlert,
      value: '0%',
      label: 'Account Manager Fluff',
      sub: 'Direct access to senior operators',
      accent: 'text-cyan-400'
    }
  ];

  return (
    <section className="bg-[#0b0d14] border-b border-zinc-800/80 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col space-y-1.5 border-l border-zinc-800/90 pl-4 transition-all hover:border-cyan-500/60"
              >
                <div className="flex items-center space-x-1.5">
                  <Icon className={`w-3.5 h-3.5 ${item.accent}`} />
                  <span className={`font-mono text-2xl sm:text-3xl font-extrabold tracking-tight ${item.accent}`}>
                    {item.value}
                  </span>
                </div>
                <span className="text-xs font-semibold text-zinc-200 tracking-wide uppercase">
                  {item.label}
                </span>
                <span className="text-[11px] font-mono text-zinc-500">
                  {item.sub}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
