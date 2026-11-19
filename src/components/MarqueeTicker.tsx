import React from 'react';
import { motion } from 'framer-motion';

export const MarqueeTicker: React.FC = () => {
  const items = [
    'VIRAL RETENTION HOOKS',
    'OMNICHANNEL SOCIAL DISTRIBUTION',
    '4K STUDIO VIDEO PRODUCTION',
    'PERFORMANCE CRO & ATTRIBUTION',
    'UNIT ECONOMICS & MARGIN EXPANSION',
    'ZERO ACCOUNT-MANAGER BUREAUCRACY',
    '7-DAY RAPID DEPLOYMENT',
    '4.2X MEDIAN BLENDED ROAS'
  ];

  return (
    <div
      className="relative w-full overflow-hidden py-4 select-none border-y transition-colors duration-400"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderColor: 'var(--border-subtle)'
      }}
    >
      <div className="flex w-max">
        <motion.div
          className="flex space-x-12 shrink-0 pr-12 items-center font-mono text-xs tracking-widest uppercase transition-colors"
          style={{ color: 'var(--text-muted)' }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 25,
          }}
        >
          {[...items, ...items, ...items, ...items].map((text, idx) => (
            <div key={idx} className="flex items-center space-x-6">
              <span className="hover:text-white transition-colors cursor-default">
                {text}
              </span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
