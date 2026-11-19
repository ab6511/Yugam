import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Compass, Sparkles } from 'lucide-react';

export type ActivePageType = 'page1' | 'page3' | 'page4';

interface PageSwitcherBarProps {
  activePage: ActivePageType;
  onSelectPage: (page: ActivePageType) => void;
  onOpenAudit: () => void;
}

export const PageSwitcherBar: React.FC<PageSwitcherBarProps> = ({ activePage, onSelectPage, onOpenAudit }) => {
  const pages: { id: ActivePageType; num: string; title: string; subtitle: string; icon: any }[] = [
    {
      id: 'page1',
      num: '01',
      title: 'Executive Monolith',
      subtitle: 'Dark Gold & Luxury',
      icon: Crown
    },
    {
      id: 'page3',
      num: '03',
      title: 'Architectural Blueprint',
      subtitle: 'Technical Wireframe & Hotspots',
      icon: Compass
    },
    {
      id: 'page4',
      num: '04',
      title: 'Glass Portfolio Horizon',
      subtitle: '3D Ethereal Glass & Nebulas',
      icon: Sparkles
    }
  ];

  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur-xl border-b transition-colors duration-300"
      style={{
        backgroundColor: activePage === 'page3' ? 'rgba(250, 249, 246, 0.95)' : 'rgba(7, 9, 15, 0.92)',
        borderColor: activePage === 'page3' ? 'rgba(30, 41, 59, 0.15)' : 'rgba(255, 255, 255, 0.12)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 font-mono">
        
        {/* Brand / Mode Indicator */}
        <div className="flex items-center space-x-2">
          <span
            className="w-2 h-2 rounded-full animate-ping"
            style={{
              backgroundColor: activePage === 'page1' ? '#D4AF37' : activePage === 'page3' ? '#E05A47' : '#00E5FF'
            }}
          />
          <span
            className="text-xs font-bold uppercase tracking-wider hidden sm:inline"
            style={{
              color: activePage === 'page3' ? '#0F172A' : '#FFFFFF'
            }}
          >
            YUGAM DYNAMICS
          </span>
        </div>

        {/* The 3 Page Switcher Tabs */}
        <div
          className="flex items-center space-x-1 p-1 rounded-full border shadow-inner"
          style={{
            backgroundColor: activePage === 'page3' ? '#F3F2EE' : 'rgba(255, 255, 255, 0.05)',
            borderColor: activePage === 'page3' ? 'rgba(30, 41, 59, 0.12)' : 'rgba(255, 255, 255, 0.1)'
          }}
        >
          {pages.map((p) => {
            const Icon = p.icon;
            const isSelected = activePage === p.id;

            return (
              <button
                key={p.id}
                onClick={() => onSelectPage(p.id)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center space-x-2 relative ${
                  isSelected
                    ? 'shadow-md font-bold'
                    : 'opacity-65 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: isSelected
                    ? p.id === 'page1' ? '#D4AF37' : p.id === 'page3' ? '#E05A47' : 'rgba(255, 255, 255, 0.15)'
                    : 'transparent',
                  color: isSelected
                    ? p.id === 'page4' ? '#00E5FF' : p.id === 'page1' ? '#000000' : '#FFFFFF'
                    : activePage === 'page3' ? '#334155' : '#E2E8F0',
                  border: isSelected && p.id === 'page4' ? '1px solid rgba(0, 229, 255, 0.4)' : 'none'
                }}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>Page {p.num}</span>
                <span className="hidden md:inline font-sans text-[11px] opacity-80">({p.title})</span>
              </button>
            );
          })}
        </div>

        {/* Direct Action Button */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenAudit}
            className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-sm active:scale-95"
            style={{
              backgroundColor: activePage === 'page1' ? '#D4AF37' : activePage === 'page3' ? '#E05A47' : '#00E5FF',
              color: '#000000'
            }}
          >
            Audit
          </button>
        </div>

      </div>
    </div>
  );
};
