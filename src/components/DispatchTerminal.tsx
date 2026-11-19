import React, { useState } from 'react';
import { DISPATCH_SIGNALS } from '../data/agencyData';
import { Terminal, Send, Check, Shield, Radio } from 'lucide-react';

export const DispatchTerminal: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeSignalIndex, setActiveSignalIndex] = useState(0);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <section id="signals" className="py-24 bg-[#08090d] border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400 mb-4">
            <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            <span>THE DISPATCH // 06</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            The Operational Signal. <br />
            <span className="text-zinc-500 font-normal">Direct Market Intelligence from the Frontlines.</span>
          </h2>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed">
            No fluff thought leadership. These are real-time algorithmic telemetry observations, platform arbitrage shifts, and unit economics memos dispatched directly from our internal Slack channels.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="rounded-lg border border-zinc-800 bg-[#090b10] shadow-2xl overflow-hidden font-mono text-xs">
          
          {/* Terminal Title Bar */}
          <div className="px-4 py-3 bg-[#0d0f17] border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="text-zinc-400 text-xs ml-2">YUGAM_SIGNAL_STREAM://v2026.4</span>
            </div>
            <div className="flex items-center space-x-2 text-[10px] text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>SYNCED: 100%</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 space-y-6">
            
            {/* Signal Selector Pills */}
            <div className="flex flex-wrap gap-2 border-b border-zinc-800/80 pb-4">
              {DISPATCH_SIGNALS.map((sig, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSignalIndex(idx)}
                  className={`px-3 py-1.5 rounded transition-all text-xs ${
                    activeSignalIndex === idx
                      ? 'bg-zinc-800 text-cyan-300 border border-cyan-500/40 font-bold'
                      : 'bg-zinc-900/60 text-zinc-500 hover:text-zinc-300 border border-zinc-800'
                  }`}
                >
                  [{sig.code}] {sig.topic}
                </button>
              ))}
            </div>

            {/* Active Signal Output Display */}
            <div className="p-5 rounded bg-zinc-950/80 border border-zinc-900 space-y-3">
              <div className="flex items-center justify-between text-zinc-500 text-[11px]">
                <span className="text-cyan-400 font-bold">
                  TRANSMISSION: {DISPATCH_SIGNALS[activeSignalIndex].code}
                </span>
                <span>RECEIVED: {DISPATCH_SIGNALS[activeSignalIndex].timestamp}</span>
              </div>

              <div className="text-zinc-200 text-sm leading-relaxed">
                <span className="text-emerald-400 mr-2">&gt;&gt;</span>
                {DISPATCH_SIGNALS[activeSignalIndex].summary}
              </div>

              <div className="pt-2 text-[11px] text-zinc-500 flex items-center space-x-2">
                <span className="text-zinc-600">// SOURCE:</span>
                <span>Internal Growth Analytics Lab // Verified with $450K+ Monthly Ad Testing Pool</span>
              </div>
            </div>

            {/* Terminal Newsletter Form */}
            <div className="p-5 rounded bg-zinc-900/40 border border-zinc-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-white font-bold block text-sm">
                  Subscribe to the Weekly Signal Dispatch
                </span>
                <span className="text-zinc-400 text-xs block">
                  Join 4,200+ founders and CMOs receiving our private weekly breakdown of video hooks, algorithmic shifts, and profit playbooks.
                </span>
              </div>

              {subscribed ? (
                <div className="px-4 py-2.5 rounded bg-emerald-950/60 border border-emerald-800/80 text-emerald-300 text-xs flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Subscribed to Signal Feed. Welcome aboard.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center w-full md:w-auto space-x-2">
                  <input
                    type="email"
                    required
                    placeholder="founder@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-3.5 py-2.5 rounded bg-zinc-950 border border-zinc-700 text-zinc-200 placeholder-zinc-600 text-xs focus:outline-none focus:border-cyan-400 w-full md:w-64"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded bg-cyan-400 hover:bg-cyan-300 text-black font-bold uppercase tracking-wider text-xs flex items-center space-x-1 shrink-0 transition-colors"
                  >
                    <span>Receive</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
