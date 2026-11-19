import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Palette } from 'lucide-react';

export type ThemeType = 'indigo' | 'cyan' | 'emerald' | 'solar';

interface ThemeSwitcherProps {
  currentTheme: ThemeType;
  onSelectTheme: (theme: ThemeType) => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ currentTheme, onSelectTheme }) => {
  const themes: { id: ThemeType; name: string; color: string; ring: string }[] = [
    { id: 'indigo', name: 'Cosmic Violet', color: '#818cf8', ring: 'ring-indigo-400' },
    { id: 'cyan', name: 'Electric Cyan', color: '#00e5ff', ring: 'ring-cyan-400' },
    { id: 'emerald', name: 'Mint Emerald', color: '#00df89', ring: 'ring-emerald-400' },
    { id: 'solar', name: 'Solar Gold', color: '#f59e0b', ring: 'ring-amber-400' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex items-center space-x-2 bg-[#0c0f24]/90 backdrop-blur-xl border border-white/15 px-3 py-2 rounded-full shadow-2xl"
      >
        <span className="text-[11px] font-mono text-zinc-400 px-1 hidden sm:inline flex items-center gap-1">
          <Palette className="w-3.5 h-3.5 text-zinc-300" />
          <span>Theme:</span>
        </span>

        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => onSelectTheme(t.id)}
            title={t.name}
            className={`w-6 h-6 rounded-full transition-all flex items-center justify-center relative ${
              currentTheme === t.id ? `ring-2 ring-offset-2 ring-offset-black ${t.ring} scale-110` : 'opacity-60 hover:opacity-100 hover:scale-105'
            }`}
            style={{ backgroundColor: t.color }}
          >
            {currentTheme === t.id && (
              <span className="w-1.5 h-1.5 rounded-full bg-black/80" />
            )}
          </button>
        ))}
      </motion.div>
    </div>
  );
};
