import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export const MarketGapComparison: React.FC = () => {
  const comparisons = [
    {
      title: 'Operational Access',
      legacy: 'Junior account managers passing messages to overseas freelancers.',
      yugam: 'Direct Slack access to senior creative directors and growth engineers.'
    },
    {
      title: 'Content Quality',
      legacy: 'Stock footage, generic Canva templates, and generic AI scripts.',
      yugam: 'Bespoke 4K studio production, psychological hooks, and cinematic motion design.'
    },
    {
      title: 'Attribution & Metrics',
      legacy: 'Vanity reports focusing on clicks, impressions, and follower count.',
      yugam: 'Contribution margin, customer acquisition cost (CAC), and net cash flow.'
    },
    {
      title: 'Deployment Speed',
      legacy: '4 to 6 weeks of onboarding meetings before a single creative goes live.',
      yugam: 'Sprint deployment with live creative assets launching within 7 business days.'
    }
  ];

  return (
    <section id="difference" className="py-28 md:py-36 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header with scroll trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <span
            className="text-xs font-mono uppercase tracking-widest block mb-3 font-semibold"
            style={{ color: 'var(--accent)' }}
          >
            The Difference
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Built to fix everything broken with traditional agencies.
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Most agencies are incentivized to burn your ad budget because their retainer is tied to percentage of spend. We align directly on your bottom-line profitability.
          </p>
        </motion.div>

        {/* Side-by-Side Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Legacy Agency */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="p-8 sm:p-10 rounded-3xl border space-y-6"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'rgba(255, 255, 255, 0.08)'
            }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block">
              The Standard Agency
            </span>
            <h3 className="font-display text-xl font-bold text-zinc-300">
              Retainer-first bureaucracy
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Designed to preserve billable hours and manage client expectations rather than drive commercial velocity.
            </p>
          </motion.div>

          {/* Yugam System */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="p-8 sm:p-10 rounded-3xl border space-y-6 shadow-2xl"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-hover)',
              boxShadow: '0 15px 35px -10px var(--accent-glow)'
            }}
          >
            <span className="text-xs font-mono uppercase tracking-widest font-semibold block" style={{ color: 'var(--accent)' }}>
              The Yugam System
            </span>
            <h3 className="font-display text-xl font-bold text-white">
              Direct operator deployment
            </h3>
            <p className="text-sm text-zinc-200 leading-relaxed">
              Designed like a high-growth tech lab. We embed directly into your communication channels, ship weekly creative cohorts, and optimize for net profit.
            </p>
          </motion.div>

        </div>

        {/* Clean List Comparison with row animations */}
        <div className="divide-y border-y" style={{ borderColor: 'var(--border-subtle)' }}>
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-start"
              style={{ borderColor: 'var(--border-subtle)' }}
            >
              <div className="md:col-span-3 font-display font-semibold text-white text-base">
                {item.title}
              </div>

              <div className="md:col-span-4 flex items-start space-x-2 text-zinc-400 text-sm">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{item.legacy}</span>
              </div>

              <div className="md:col-span-5 flex items-start space-x-2 text-white text-sm font-medium">
                <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                <span>{item.yugam}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
