import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  Video,
  Instagram,
  Target,
  ShieldCheck,
  GraduationCap,
  TrendingUp,
  CheckCircle2,
  Users,
  Star,
  Zap,
  ChevronRight,
  Code2,
  BarChart3,
  Flame,
  Award
} from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0D12] text-[#F8FAFC] overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      
      {/* =========================================================================
          HERO SECTION (Panknox inspired: Laser glow, status pill, bold typography)
          ========================================================================= */}
      <section className="relative pt-16 pb-24 md:pt-28 md:pb-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-indigo-600/15 via-indigo-500/10 to-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-500/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* Status Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#131722]/90 border border-white/10 text-xs text-slate-300 shadow-xl backdrop-blur-md mb-8 hover:border-indigo-500/40 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[11px] tracking-wide text-indigo-300">YUGAM SIGNAL //</span>
            <span className="text-slate-200 font-medium">Full-Stack Growth Agency & Venture Studio</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight max-w-5xl text-white leading-[1.08]"
          >
            We Build, Shoot, and{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
                Scale Your Business.
              </span>
              {/* Laser glow bar underneath */}
              <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-[1px]" />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl font-normal leading-relaxed"
          >
            From high-converting websites and viral reels to precision Google & Meta ad campaigns—Yugam turns ambitious brands into market leaders while building proprietary tech for tomorrow.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white font-heading font-semibold text-sm tracking-wide shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all flex items-center justify-center gap-2 group active:scale-98"
            >
              <span>Explore Growth Packages</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/ventures"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#131722]/80 hover:bg-[#1A2030] border border-white/10 hover:border-amber-400/40 text-slate-200 hover:text-white font-heading font-medium text-sm transition-all flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span>Explore Upcoming Ventures</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Hero Live Metrics Card preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 w-full max-w-4xl p-1 rounded-2xl bg-gradient-to-b from-white/10 via-white/5 to-transparent shadow-2xl"
          >
            <div className="bg-[#131722]/90 rounded-2xl p-6 sm:p-8 backdrop-blur-xl border border-white/5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left divide-y md:divide-y-0 md:divide-x divide-white/10">
                <div className="pt-3 md:pt-0">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">Portfolio Brands</div>
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white flex items-baseline gap-1">
                    50+ <span className="text-indigo-400 text-sm font-normal">Scaled</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Retail, D2C, Tech & B2B</div>
                </div>

                <div className="pt-3 md:pt-0 md:pl-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">Lead Growth</div>
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-amber-400 flex items-baseline gap-1">
                    3.4x <span className="text-white text-sm font-normal">Avg.</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Within first 60 days</div>
                </div>

                <div className="pt-3 md:pt-0 md:pl-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">Production Rig</div>
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white flex items-baseline gap-1">
                    100% <span className="text-emerald-400 text-sm font-normal">In-House</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Zero freelance lag</div>
                </div>

                <div className="pt-3 md:pt-0 md:pl-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">Client Rating</div>
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white flex items-center gap-1.5">
                    4.9 <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Based on 38+ verified reviews</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================================
          CORE SERVICES BENTO GRID (The 4 Pillars of Yugam)
          ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-3">
              <Zap className="w-3.5 h-3.5 text-indigo-400" />
              <span>THE 4-PILLAR REVENUE SYSTEM</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Integrated Capabilities. No Fragmentation.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-400 text-sm sm:text-base max-w-md">
            Most agencies only do one thing well. We unite cutting-edge code, cinematic video shoots, social storytelling, and aggressive ad campaigns under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Pillar 1: Web Design & Development */}
          <div className="group relative rounded-2xl bg-[#131722] border border-white/10 p-8 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10">
            <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all" />
            
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>

            <div className="flex items-center justify-between mb-2">
              <h3 className="font-heading font-bold text-xl text-white group-hover:text-indigo-300 transition-colors">
                1. Web Design & Development
              </h3>
              <span className="text-xs font-mono text-slate-500">ENGINEERING</span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Fast, responsive, SEO-ready websites engineered to turn visitors into paying customers. Built with modern frameworks (React / Next.js) and optimized for high-speed conversion funnels.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-300 font-medium mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Custom UI/UX & Responsive Glassmorphic layouts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sub-second page speeds with Google Core Web Vitals score 95+</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Seamless CMS, CRM & payment gateway integrations</span>
              </li>
            </ul>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-wider text-indigo-400 group-hover:text-indigo-300"
            >
              <span>Explore Web Solutions</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Pillar 2: Content Creation & Shoots */}
          <div className="group relative rounded-2xl bg-[#131722] border border-white/10 p-8 hover:border-amber-500/50 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-amber-500/10">
            <div className="absolute top-0 right-0 w-44 h-44 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all" />
            
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
              <Video className="w-6 h-6" />
            </div>

            <div className="flex items-center justify-between mb-2">
              <h3 className="font-heading font-bold text-xl text-white group-hover:text-amber-300 transition-colors">
                2. Content Creation & Shoots
              </h3>
              <span className="text-xs font-mono text-slate-500">PRODUCTION</span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              End-to-end scripting, on-location video shoots, and high-retention editing tailored for modern algorithms. We bring full cinema gear directly to your office, store, or warehouse in Delhi NCR.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-300 font-medium mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Hook-driven viral reel and short-form scripting</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Professional 4K multi-camera setup, wireless audio & cinema lighting</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Fast post-production: motion captions, sound design, colour grading</span>
              </li>
            </ul>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-wider text-amber-400 group-hover:text-amber-300"
            >
              <span>Explore Shoot Production</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Pillar 3: Instagram & Social Management */}
          <div className="group relative rounded-2xl bg-[#131722] border border-white/10 p-8 hover:border-pink-500/50 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-pink-500/10">
            <div className="absolute top-0 right-0 w-44 h-44 bg-pink-500/10 rounded-full blur-3xl group-hover:bg-pink-500/20 transition-all" />
            
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6" />
            </div>

            <div className="flex items-center justify-between mb-2">
              <h3 className="font-heading font-bold text-xl text-white group-hover:text-pink-300 transition-colors">
                3. Instagram & Social Management
              </h3>
              <span className="text-xs font-mono text-slate-500">ORGANIC REACH</span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Complete account handling—content calendars, reel publishing, community engagement, and organic brand authority. We transform sleepy feeds into high-converting revenue magnets.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-300 font-medium mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Monthly 15-30 custom reels, carousels, and stories</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Daily community management, comment replies & DM funnels</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Consistent brand voice and aesthetic grid layout</span>
              </li>
            </ul>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-wider text-pink-400 group-hover:text-pink-300"
            >
              <span>Explore Social Handling</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Pillar 4: Performance Marketing (Google & Meta Ads) */}
          <div className="group relative rounded-2xl bg-[#131722] border border-white/10 p-8 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/10">
            <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all" />
            
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>

            <div className="flex items-center justify-between mb-2">
              <h3 className="font-heading font-bold text-xl text-white group-hover:text-emerald-300 transition-colors">
                4. Performance Marketing (Google & Meta Ads)
              </h3>
              <span className="text-xs font-mono text-slate-500">PAID SCALE</span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Data-backed paid acquisition campaigns designed to maximize ROAS and lower cost per lead. We align the ad copy, the video creative, and the landing page for razor-sharp conversion efficiency.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-300 font-medium mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>High-intent Google Search, Shopping, and YouTube Ads</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Meta (Facebook & Instagram) hyper-targeted audience funnels</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bi-weekly A/B creative testing and real-time ROAS dashboard</span>
              </li>
            </ul>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-wider text-emerald-400 group-hover:text-emerald-300"
            >
              <span>Explore Paid Advertising</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          YUGAM INNOVATION LAB SPOTLIGHT BANNER (Ventures Teaser)
          ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#131722] via-[#161B28] to-[#0E1119] border border-amber-500/30 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          {/* Subtle glowing orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[100px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>YUGAM INNOVATION LAB // PROPRIETARY VENTURES</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                We Don't Just Scale Other Brands.{' '}
                <span className="bg-gradient-to-r from-amber-400 to-indigo-400 bg-clip-text text-transparent">
                  We Build Our Own.
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Yugam operates as both a powerhouse agency and a digital product incubator. Explore our proprietary technology platforms currently under development:
              </p>

              {/* Mini cards for the 2 ventures */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-400/40 transition-colors">
                  <div className="flex items-center gap-2 text-white font-heading font-bold text-sm mb-1">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span>Gatbandhan AI</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    100% secure, multi-layer verified matchmaking platform eliminating fake profiles.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-indigo-400/40 transition-colors">
                  <div className="flex items-center gap-2 text-white font-heading font-bold text-sm mb-1">
                    <GraduationCap className="w-4 h-4 text-indigo-400" />
                    <span>Middle Bencher</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Project-first skill building bridging degrees with real tech and marketing careers.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
              <div className="text-center lg:text-right space-y-4">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                  Early Access & Investment Waitlist
                </div>
                <div className="text-3xl font-heading font-bold text-white">
                  Launching Q2 2026
                </div>
                <Link
                  to="/ventures"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-heading font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all active:scale-95"
                >
                  <span>Explore Innovation Lab</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SOCIAL PROOF & OUTCOMES STRIP
          ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>MEASURABLE OUTCOMES</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Real Revenue. Zero Fluff.
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            See how high-growth businesses leverage our integrated execution model to dominate their respective markets.
          </p>
        </div>

        {/* 2 Mini Featured Previews from Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          <div className="p-8 rounded-2xl bg-[#131722] border border-white/10 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                RETAIL & LIFESTYLE
              </span>
              <span className="text-emerald-400 font-heading font-bold text-sm">+340% Inquiries</span>
            </div>
            <h3 className="font-heading font-bold text-lg text-white mb-2">
              Urban Luxe Furnishings (Delhi NCR)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Replaced slow static WordPress website with a high-speed React storefront + conducted 2 studio shoots generating 16 localized Instagram reels. Backed by hyper-local Meta Ads targeting affluent homeowners.
            </p>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Timeframe: 60 Days</span>
              <span className="text-white font-medium">Outcome: 3.4x monthly qualified walk-in leads</span>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#131722] border border-white/10 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                B2B PROFESSIONAL SERVICES
              </span>
              <span className="text-amber-400 font-heading font-bold text-sm">-42% Cost Per Lead</span>
            </div>
            <h3 className="font-heading font-bold text-lg text-white mb-2">
              Apex Corporate Legal Advisors
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Restructured legacy Google Search campaigns, eliminated 60% negative keyword waste, and deployed a high-trust conversion landing page with video partner credentials.
            </p>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Timeframe: 45 Days</span>
              <span className="text-white font-medium">Outcome: High-intent retained inquiries doubled</span>
            </div>
          </div>

        </div>

        {/* View All Reviews Button */}
        <div className="text-center">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-heading font-medium text-xs tracking-wider uppercase transition-colors"
          >
            <span>Read All Client Reviews & Case Studies</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          FINAL BOTTOM CTA BANNER
          ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-r from-indigo-900/40 via-[#131722] to-amber-900/30 border border-white/10 p-10 sm:p-14 text-center overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Ready to Usher in Your Next Era of Growth?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Schedule a 30-minute discovery consultation with Yugam's growth partners. We'll audit your current digital footprint and propose an integrated roadmap tailored to your margins.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Book a Growth Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-200 font-heading font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>View Retainer Tiers</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
