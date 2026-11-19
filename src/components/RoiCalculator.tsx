import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenAuditWithRevenue: (revenue: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenAuditWithRevenue }) => {
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(60000);
  const [adSpend, setAdSpend] = useState<number>(10000);

  const projectedRevenue = Math.round(monthlyRevenue * 2.8);
  const additionalMonthlyRevenue = projectedRevenue - monthlyRevenue;
  const estimatedProfitLift = Math.round(additionalMonthlyRevenue * 0.28);
  const estimatedCacDrop = 48;

  return (
    <section id="calculator" className="py-28 md:py-36 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header with scroll trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span
            className="text-xs font-mono uppercase tracking-widest block mb-3 font-semibold"
            style={{ color: 'var(--accent)' }}
          >
            Financial Modeling
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Estimate your growth potential.
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            See how high-velocity organic content and full-funnel distribution expand your revenue without proportionally inflating ad spend.
          </p>
        </motion.div>

        {/* Clean Calculator Card with scroll trigger */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 sm:p-12 rounded-3xl border shadow-2xl relative overflow-hidden"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-hover)',
            boxShadow: '0 25px 50px -20px var(--accent-glow)'
          }}
        >
          {/* Controls */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-zinc-200">Current Monthly Revenue</span>
                <span className="font-mono text-base font-bold" style={{ color: 'var(--accent)' }}>
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
                className="w-full h-1.5 rounded-lg appearance-none cursor-pointer"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  accentColor: 'var(--accent)'
                }}
              />
              <div className="flex justify-between text-[11px] font-mono opacity-60">
                <span>$10,000</span>
                <span>$150,000</span>
                <span>$300,000+</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-zinc-200">Monthly Ad & Marketing Spend</span>
                <span className="font-mono text-base font-bold" style={{ color: 'var(--accent)' }}>
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
                className="w-full h-1.5 rounded-lg appearance-none cursor-pointer"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  accentColor: 'var(--accent)'
                }}
              />
              <div className="flex justify-between text-[11px] font-mono opacity-60">
                <span>$2,000</span>
                <span>$35,000</span>
                <span>$75,000+</span>
              </div>
            </div>

            <p className="text-xs leading-relaxed pt-2 opacity-60">
              * Modeled across 48 client partners over a standard 90-day sprint cycle.
            </p>

          </div>

          {/* Results Summary */}
          <div className="lg:col-span-6 space-y-8 lg:border-l lg:pl-12" style={{ borderColor: 'var(--border-subtle)' }}>
            
            <div>
              <span className="text-xs font-mono uppercase tracking-wider block mb-1 opacity-60">
                Projected Monthly Revenue Run-Rate
              </span>
              <div className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
                ${projectedRevenue.toLocaleString()}
                <span className="text-sm font-normal opacity-60 ml-2">/ month</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider block opacity-60">
                  Est. Net Profit Expansion
                </span>
                <span className="font-display text-2xl font-bold mt-1 block" style={{ color: 'var(--accent)' }}>
                  +${estimatedProfitLift.toLocaleString()}
                  <span className="text-xs font-normal opacity-60 ml-1">/ mo</span>
                </span>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider block opacity-60">
                  Blended CAC Reduction
                </span>
                <span className="font-display text-2xl font-bold mt-1 block" style={{ color: 'var(--accent)' }}>
                  -{estimatedCacDrop}%
                </span>
              </div>
            </div>

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenAuditWithRevenue(`$${monthlyRevenue.toLocaleString()}/mo`)}
                className="w-full py-4 rounded-full text-black font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 shadow-2xl relative overflow-hidden group"
                style={{
                  backgroundColor: 'var(--accent)',
                  boxShadow: '0 0 35px var(--accent-glow)'
                }}
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                <span className="relative z-10">Discuss This Growth Model</span>
                <ArrowRight className="w-4 h-4 text-black relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
