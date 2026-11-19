import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ShieldCheck,
  GraduationCap,
  Lock,
  Cpu,
  HeartHandshake,
  CheckCircle2,
  Send,
  Users,
  Code,
  Briefcase,
  Flame,
  ArrowRight,
  Mail,
  Zap,
  Globe2
} from 'lucide-react';

export const Ventures: React.FC = () => {
  // Gatbandhan AI Waitlist state
  const [gatbandhanEmail, setGatbandhanEmail] = useState('');
  const [gatbandhanRole, setGatbandhanRole] = useState('Individual / Early User');
  const [gatbandhanSubmitted, setGatbandhanSubmitted] = useState(false);

  // Middle Bencher Waitlist state
  const [middleEmail, setMiddleEmail] = useState('');
  const [middleTrack, setMiddleTrack] = useState('Full-Stack Tech & AI');
  const [middleSubmitted, setMiddleSubmitted] = useState(false);

  const handleGatbandhanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gatbandhanEmail) return;
    setGatbandhanSubmitted(true);
  };

  const handleMiddleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!middleEmail) return;
    setMiddleSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0D12] text-[#F8FAFC] overflow-x-hidden selection:bg-amber-400 selection:text-black">
      
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-amber-500/15 via-indigo-500/10 to-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>YUGAM INNOVATION LAB // VENTURE STUDIO</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            Where Agency Execution Meets{' '}
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-indigo-300 bg-clip-text text-transparent">
              Product Innovation.
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Most agencies only build for clients. Yugam reinvests its engineering and creative horsepower into incubations that solve fundamental societal challenges across relationship discovery and modern education.
          </p>
        </div>
      </section>

      {/* =========================================================================
          FLAGSHIP 1: GATBANDHAN AI
          ========================================================================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-b from-[#131722] to-[#0E1119] border border-amber-500/30 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Subtle amber ambient glow */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Info & Story */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-semibold">
                  FLAGSHIP VENTURE 01
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  In Development • Launching Soon
                </span>
              </div>

              <div>
                <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight flex items-center gap-3">
                  Gatbandhan AI
                </h2>
                <div className="text-sm sm:text-base font-heading font-medium text-amber-400 mt-2">
                  100% Secure, Intelligent, and Efficient Matchmaking.
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                The modern matchmaking ecosystem is plagued by fake bot profiles, catfishing, commercial data selling, and superficial swiping fatigue. <strong className="text-white">Gatbandhan AI</strong> fundamentally rebuilds relationship discovery. By enforcing mandatory multi-layer biometric and government ID verification with privacy-preserving zero-knowledge proofs, we ensure every interaction is authentic and intentional.
              </p>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-white font-heading font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>100% Verified Profiles</span>
                  </div>
                  <p className="text-xs text-slate-400">Zero bots, zero fraudulent profiles, strict KYC.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-white font-heading font-bold text-sm">
                    <Lock className="w-4 h-4 text-amber-400" />
                    <span>End-to-End Privacy</span>
                  </div>
                  <p className="text-xs text-slate-400">Your contact info & photos remain masked until mutual intent.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-white font-heading font-bold text-sm">
                    <Cpu className="w-4 h-4 text-indigo-400" />
                    <span>AI Compatibility Engine</span>
                  </div>
                  <p className="text-xs text-slate-400">Values, lifestyle, and life goals matched beyond surface photos.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-white font-heading font-bold text-sm">
                    <HeartHandshake className="w-4 h-4 text-pink-400" />
                    <span>Curated Intent Matches</span>
                  </div>
                  <p className="text-xs text-slate-400">Quality over quantity: 3 curated matches a week, not endless swiping.</p>
                </div>
              </div>

            </div>

            {/* Right Column: Early Access Waitlist Form */}
            <div className="lg:col-span-5 bg-[#0B0D12] p-8 rounded-2xl border border-white/10 shadow-xl">
              <div className="mb-6">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">
                  EXCLUSIVE ALPHA ACCESS
                </span>
                <h3 className="font-heading font-bold text-xl text-white">
                  Join the Gatbandhan Waitlist
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Be among the first 1,000 verified founding members upon release.
                </p>
              </div>

              {gatbandhanSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="font-heading font-bold text-white text-base">
                    You're on the Gatbandhan VIP list!
                  </div>
                  <p className="text-xs text-slate-300">
                    We’ve reserved your early access pass. Watch your inbox ({gatbandhanEmail}) for the private invitation link.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleGatbandhanSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={gatbandhanEmail}
                        onChange={(e) => setGatbandhanEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      I Am Joining As
                    </label>
                    <select
                      value={gatbandhanRole}
                      onChange={(e) => setGatbandhanRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#131722] border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="Individual / Early User">Individual Looking for Verified Matchmaking</option>
                      <option value="Parent / Family Member">Family Member Exploring Safe Options</option>
                      <option value="Investor / Strategic Partner">Angel Investor / Strategic Partner</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 active:scale-98 flex items-center justify-center gap-2"
                  >
                    <span>Request Early Access</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3" />
                    <span>Zero spam. 100% strict data privacy.</span>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          FLAGSHIP 2: MIDDLE BENCHER
          ========================================================================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-b from-[#131722] to-[#0E1119] border border-indigo-500/30 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Subtle indigo ambient glow */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Info & Story */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-mono font-semibold">
                  FLAGSHIP VENTURE 02
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  Curriculum in Production • Launching Soon
                </span>
              </div>

              <div>
                <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight flex items-center gap-3">
                  Middle Bencher
                </h2>
                <div className="text-sm sm:text-base font-heading font-medium text-indigo-400 mt-2">
                  Practical Skills for the Real World.
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Traditional college degrees teach theory from outdated textbooks. Today’s high-paying tech and creative roles demand immediate execution. <strong className="text-white">Middle Bencher</strong> is an upcoming skill-building incubator created for the self-driven learner. We cut through academic fluff to teach production-ready skills: modern full-stack development, AI agent workflows, viral video storytelling, and performance marketing.
              </p>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-white font-heading font-bold text-sm">
                    <Code className="w-4 h-4 text-indigo-400" />
                    <span>Project-First Learning</span>
                  </div>
                  <p className="text-xs text-slate-400">No rote exams. You build live apps, real shoots, and ad campaigns.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-white font-heading font-bold text-sm">
                    <Users className="w-4 h-4 text-emerald-400" />
                    <span>Industry Mentorship</span>
                  </div>
                  <p className="text-xs text-slate-400">Mentored directly by Yugam’s senior engineers & growth leads.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-white font-heading font-bold text-sm">
                    <Briefcase className="w-4 h-4 text-amber-400" />
                    <span>Real Portfolio Building</span>
                  </div>
                  <p className="text-xs text-slate-400">Graduate with 4 verified production projects employers value.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-white font-heading font-bold text-sm">
                    <Flame className="w-4 h-4 text-rose-400" />
                    <span>Placement Direct Line</span>
                  </div>
                  <p className="text-xs text-slate-400">Top cohort performers get interviewed for Yugam & partner brands.</p>
                </div>
              </div>

            </div>

            {/* Right Column: Get Notified Form */}
            <div className="lg:col-span-5 bg-[#0B0D12] p-8 rounded-2xl border border-white/10 shadow-xl">
              <div className="mb-6">
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">
                  COHORT 01 NOTIFICATION
                </span>
                <h3 className="font-heading font-bold text-xl text-white">
                  Get Notified on Launch
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Seats are capped at 50 students per cohort to guarantee hands-on mentorship.
                </p>
              </div>

              {middleSubmitted ? (
                <div className="p-6 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="font-heading font-bold text-white text-base">
                    You're on the Cohort Notification list!
                  </div>
                  <p className="text-xs text-slate-300">
                    We'll email you at {middleEmail} as soon as syllabus previews and early-bird scholarship applications open.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleMiddleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={middleEmail}
                        onChange={(e) => setMiddleEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Skill Track You're Most Interested In
                    </label>
                    <select
                      value={middleTrack}
                      onChange={(e) => setMiddleTrack(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#131722] border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-400 transition-colors"
                    >
                      <option value="Full-Stack Tech & AI">Full-Stack Web (React, Node, AI Integrations)</option>
                      <option value="Video Editing & Cinema Production">Video Production & Viral Reel Editing</option>
                      <option value="Performance Marketing & ROAS">Performance Ads & Growth Strategy</option>
                      <option value="All of the above">All of the above (Full-Stack Operator)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-indigo-500/20 active:scale-98 flex items-center justify-center gap-2"
                  >
                    <span>Notify Me on Cohort 01</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <div className="text-[11px] text-slate-500 text-center">
                    Early-bird applicants receive a 30% scholarship grant.
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          MORE IN THE PIPELINE / INVESTOR COLLABORATION CARD
          ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white/[0.02] border border-white/10 p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono text-slate-400 tracking-widest uppercase">
              YUGAM R&D ECOSYSTEM
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              Are You an Investor, Builder, or Domain Expert?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We frequently partner with angel syndicates, venture capitalists, and veteran operators who want to co-build high-impact technology products. Connect directly with Yugam's founding team.
            </p>
            <div className="pt-4">
              <a
                href="mailto:hello@yugam.in?subject=Venture%20Lab%20Syndicate%20Inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white font-heading font-semibold text-xs tracking-wider uppercase border border-white/10 transition-colors"
              >
                <span>Connect With Yugam R&D</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
