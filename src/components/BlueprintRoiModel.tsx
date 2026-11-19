import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calculator, FileSpreadsheet } from 'lucide-react';

interface BlueprintRoiModelProps {
  onOpenAuditWithRevenue: (revenue: string) => void;
}

export const BlueprintRoiModel: React.FC<BlueprintRoiModelProps> = ({ onOpenAuditWithRevenue }) => {
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(65000);
  const [adSpend, setAdSpend] = useState<number>(12000);

  const projectedRevenue = Math.round(monthlyRevenue * 2.8);
  const additionalMonthlyRevenue = projectedRevenue - monthlyRevenue;
  const estimatedProfitLift = Math.round(additionalMonthlyRevenue * 0.28);
  const estimatedCacDrop = 48;

  return (
    <section id="economics" className="py-24 drafting-grid border-b border-charcoal-line/15 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-paper-sheet border border-charcoal-line/20 font-mono text-xs text-terracotta mb-3">
            <FileSpreadsheet className="w-3.5 h-3.5 text-terracotta" />
            <span>04. ECONOMIC LOAD MODEL // SPEC SHEET</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
            Financial Attribution & Margin Simulation.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-charcoal-muted leading-relaxed font-mono">
            Calibrate your current business baseline to project bottom-line profit expansion under the structural growth engine.
          </p>
        </div>

        {/* Drafting Paper Model Container */}
        <div className="p-8 sm:p-12 rounded-2xl bg-paper-sheet border border-charcoal-line/20 shadow-blueprint grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-8 font-mono">
            
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-charcoal font-semibold uppercase">CURRENT MONTHLY REVENUE:</span>
                <span className="text-terracotta font-bold text-sm bg-terracotta-light border border-terracotta/20 px-2 py-0.5 rounded">
                  ${monthlyRevenue.toLocaleString()} / mo
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="300000"
                step="5000"
                value={monthlyRevenue}
                onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                className="w-full h-2 bg-paper-darker rounded-lg appearance-none cursor-pointer accent-terracotta"
              />
              <div className="flex justify-between text-[10px] text-charcoal-light">
                <span>$10,000</span>
                <span>$150,000</span>
                <span>$300,000+</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-charcoal font-semibold uppercase">MONTHLY AD & MEDIA SPEND:</span>
                <span className="text-terracotta font-bold text-sm bg-terracotta-light border border-terracotta/20 px-2 py-0.5 rounded">
                  ${adSpend.toLocaleString()} / mo
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="75000"
                step="1000"
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full h-2 bg-paper-darker rounded-lg appearance-none cursor-pointer accent-terracotta"
              />
              <div className="flex justify-between text-[10px] text-charcoal-light">
                <span>$2,000</span>
                <span>$35,000</span>
                <span>$75,000+</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-paper-muted border border-charcoal-line/10 text-xs text-charcoal-muted leading-relaxed font-sans">
              * Modeled across 48 verified commercial partner accounts. Projections combine high-frequency organic retention with paid media attribution.
            </div>

          </div>

          {/* Results Display Column */}
          <div className="lg:col-span-6 space-y-8 lg:border-l lg:border-charcoal-line/15 lg:pl-12 font-mono">
            
            <div>
              <span className="text-[10px] text-charcoal-light uppercase tracking-wider block mb-1">
                PROJECTED RUN-RATE AFTER 90-DAY DEPLOYMENT:
              </span>
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
                ${projectedRevenue.toLocaleString()}
                <span className="text-sm font-normal text-charcoal-light ml-2">/ month</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-charcoal-line/10">
              <div>
                <span className="text-[10px] text-charcoal-light uppercase block">
                  EST. NET PROFIT EXPANSION:
                </span>
                <span className="font-display text-2xl font-bold text-terracotta mt-1 block">
                  +${estimatedProfitLift.toLocaleString()}
                  <span className="text-xs font-normal text-charcoal-light ml-1">/ mo</span>
                </span>
              </div>

              <div>
                <span className="text-[10px] text-charcoal-light uppercase block">
                  BLENDED CAC CONTAINMENT:
                </span>
                <span className="font-display text-2xl font-bold text-charcoal mt-1 block">
                  -{estimatedCacDrop}%
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenAuditWithRevenue(`$${monthlyRevenue.toLocaleString()}/mo`)}
                className="w-full py-4 rounded bg-terracotta hover:bg-terracotta-hover text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-terracotta flex items-center justify-center space-x-2"
              >
                <span>Lock Specification & Order Audit</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
