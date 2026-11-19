import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface CaseStudiesProps {
  onOpenAudit: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenAudit }) => {
  const caseStudies = [
    {
      client: 'Apex Health Systems',
      industry: 'High-Ticket DTC & Wellness',
      timeframe: '90-Day Sprint',
      results: [
        { label: 'Monthly Revenue', value: '$485K', lift: '+304%' },
        { label: 'Customer CAC', value: '$34.20', lift: '-62.8%' },
        { label: 'Organic Views', value: '14.2M', lift: 'from 40K' }
      ],
      quote: 'They didn’t just make videos; they re-architected our entire customer acquisition machine. We tripled our top-line while cutting ad costs in half.',
      author: 'Marcus Vance, Founder & CEO'
    },
    {
      client: 'Lumina Data Intelligence',
      industry: 'B2B Enterprise SaaS',
      timeframe: '120-Day Deployment',
      results: [
        { label: 'Inbound Pipeline', value: '$2.4M', lift: '+510%' },
        { label: 'Monthly Demos', value: '184 / mo', lift: '+340%' },
        { label: 'Executive Reach', value: '3.6M', lift: 'from zero' }
      ],
      quote: 'We spent $80,000 on traditional PR with nothing to show for it. Yugam engineered an inbound pipeline of $2.4M strictly through organic founder authority.',
      author: 'Elena Rostova, CTO'
    },
    {
      client: 'Solaris Active Studio',
      industry: 'Sustainable Apparel',
      timeframe: '60-Day Sprint',
      results: [
        { label: 'Average Order Value', value: '$188', lift: '+78%' },
        { label: 'Repeat Rate', value: '42.6%', lift: '+118%' },
        { label: 'Net Profit Margin', value: '28.4%', lift: '+14% pts' }
      ],
      quote: 'Yugam audited our unit economics and unlocked over $180,000 in bottom-line cash flow from our existing customer base without extra ad spend.',
      author: 'Julian Mercer, Co-Founder'
    }
  ];

  return (
    <section id="work" className="py-28 md:py-36 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header with scroll trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div className="max-w-xl">
            <span
              className="text-xs font-mono uppercase tracking-widest block mb-3 font-semibold"
              style={{ color: 'var(--accent)' }}
            >
              Selected Work
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Real results. Verified financial impact.
            </h2>
          </div>
          <p className="text-sm max-w-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Every engagement is measured by unit economics, blended customer acquisition cost, and gross profit expansion.
          </p>
        </motion.div>

        {/* Clean Case Studies List with staggered scroll animation */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-8 sm:p-12 rounded-3xl border transition-all duration-300 space-y-8 shadow-2xl"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-subtle)',
                boxShadow: '0 20px 40px -20px var(--accent-glow)'
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-6" style={{ borderColor: 'var(--border-subtle)' }}>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {study.client}
                  </h3>
                  <span className="text-xs font-mono mt-1 block opacity-60">
                    {study.industry} · {study.timeframe}
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {study.results.map((r, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="p-5 rounded-2xl border"
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      borderColor: 'var(--border-subtle)'
                    }}
                  >
                    <span className="text-xs font-mono uppercase block mb-1 opacity-60">
                      {r.label}
                    </span>
                    <div className="flex items-baseline space-x-2">
                      <span className="font-display text-3xl font-bold text-white">
                        {r.value}
                      </span>
                      <span className="text-xs font-mono font-semibold" style={{ color: 'var(--accent)' }}>
                        {r.lift}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <div className="pt-2">
                <p className="text-base italic leading-relaxed text-zinc-200">
                  "{study.quote}"
                </p>
                <span className="text-xs font-mono mt-3 block opacity-60">
                  — {study.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
