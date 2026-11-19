import { SystemUnit, CaseStudy, ContentBlueprint, ComparisonPoint, Testimonial } from '../types';

export const SYSTEM_UNITS: SystemUnit[] = [
  {
    id: 'social-distribution',
    code: 'U-01',
    category: 'DISTRIBUTION PROTOCOL',
    title: 'Omnichannel Social & Algorithmic Flywheel',
    tagline: 'Algorithmic positioning engineered to hijack attention and siphon qualified enterprise & consumer buyers.',
    description: 'We dismantle the guesswork of social platforms. By utilizing high-velocity algorithmic testing, hook engineering, and cross-platform arbitrage (TikTok, Instagram Reels, YouTube Shorts, LinkedIn, X), we turn social channels into predictable top-of-funnel customer generation engines.',
    metrics: {
      primary: '18.4M+',
      label: 'Monthly Organic Views Generated'
    },
    deliverables: [
      'Multi-platform syndication architecture (IG, TikTok, YT, X, LinkedIn)',
      'Algorithmic hook testing matrix (A/B testing first 3 seconds)',
      'Organic-to-pipeline conversion capture mechanisms',
      'Daily active audience monitoring & engagement telemetry'
    ],
    techStack: ['Metricool Pro', 'Notion OS', 'Descript', 'CapCut Pro Enterprise', 'Sprout Telemetry'],
    systemHighlights: ['Sub-3-second retention optimization', 'Zero vanity posting — pipeline focused', 'Multi-channel format recycling without platform penalty'],
    badgeColor: 'cyan'
  },
  {
    id: 'content-production',
    code: 'U-02',
    category: 'CREATIVE LAB',
    title: 'High-Velocity Video & Content Production Lab',
    tagline: 'Studio-caliber short-form and long-form visual assets built with commercial psychology and zero filler.',
    description: 'Attention is the currency of the digital economy. We produce 30 to 60 bespoke video assets per month for your brand. From psychological scriptwriting to 4K cinematic color grading, sound design, and motion graphics, each piece is engineered with a single goal: converting passive scrollers into passionate buyers.',
    metrics: {
      primary: '4.8x',
      label: 'Average Engagement & Share Multiplier'
    },
    deliverables: [
      'Bespoke scriptwriting backed by audience psychology teardowns',
      'Remote 4K director-guided filming kits & studio production sprints',
      'Dynamic typography, custom audio branding, and motion SFX',
      'Thumb-stopping visual frames & high-CTR thumbnail variants'
    ],
    techStack: ['Adobe Premiere', 'After Effects', 'ElevenLabs Neural', 'DaVinci Resolve', 'Frame.io'],
    systemHighlights: ['48-hour turnarounds on reactive trends', 'Cinematic B-roll library curated per client', 'Hook retention analysis on every published cut'],
    badgeColor: 'emerald'
  },
  {
    id: 'performance-ads',
    code: 'U-03',
    category: 'ACQUISITION ENGINE',
    title: 'Performance Acquisition & Precision CRO',
    tagline: 'Paid media infrastructure built to scale profitable customer acquisition without diminishing returns.',
    description: 'We fuse hyper-tested creative assets with algorithmic bidding strategies across Meta, Google, and TikTok Ads. Every dollar invested is tracked to downstream revenue, paired with high-converting landers built specifically to double your baseline conversion rate.',
    metrics: {
      primary: '4.2x',
      label: 'Median Blended ROAS Achieved'
    },
    deliverables: [
      'Meta Advantage+ & Google Performance Max multi-tier campaigns',
      'Custom headless high-speed landing pages with <0.6s LCP',
      'Continuous conversion rate optimization (split-testing offers & copy)',
      'First-party server-side tracking (CAPI) and attribution dashboards'
    ],
    techStack: ['Meta Ads API', 'Triple Whale', 'Google Ads 360', 'VWO Split-Testing', 'Next.js Landers'],
    systemHighlights: ['Direct CPA containment protocols', 'Whitelisted creator ad amplification', 'Zero spend leakage into dead audiences'],
    badgeColor: 'amber'
  },
  {
    id: 'revenue-engineering',
    code: 'U-04',
    category: 'PROFIT MAXIMIZATION',
    title: 'Revenue Engineering & Unit Economics Lab',
    tagline: 'Fixing the leaky bucket: expanding LTV, average order value, and bottom-line profit margins.',
    description: 'Scale without profit is vanity. We audit your entire unit economics—from gross margins to payback periods. By engineering post-purchase upsell ladders, tiered enterprise pricing, and high-margin product bundles, we turn break-even campaigns into lucrative cash-flow drivers.',
    metrics: {
      primary: '+64%',
      label: 'Average Net Margin Expansion'
    },
    deliverables: [
      'Unit economics & contribution margin diagnostics',
      'High-margin upsell/cross-sell funnel implementation',
      'Cohort retention and churn-reduction architectures',
      'Pricing elasticity testing & recurring subscription mechanics'
    ],
    techStack: ['Stripe Billing', 'ProfitWell', 'Mixpanel', 'Recharge', 'HubSpot RevOps'],
    systemHighlights: ['Payback period reduced by 40%', 'Average order value (AOV) expansion protocols', 'Zero reliance on margin-eroding discount traps'],
    badgeColor: 'violet'
  },
  {
    id: 'founder-authority',
    code: 'U-05',
    category: 'NARRATIVE MONOPOLY',
    title: 'Founder Authority & Executive Ghostwriting',
    tagline: 'Positioning your executive team as category-defining voices on LinkedIn and X to win trust effortlessly.',
    description: 'People buy from people, not faceless corporations. We extract the deep domain knowledge trapped in your founders’ heads and translate it into viral essays, proprietary frameworks, and keynote narratives that attract inbound enterprise leads, top-tier talent, and investor capital.',
    metrics: {
      primary: '320K+',
      label: 'Avg Inbound Pipeline per Executive'
    },
    deliverables: [
      'Weekly 45-minute knowledge extraction interviews',
      'Ghostwritten daily LinkedIn & X long-form authority dispatches',
      'Tier-1 podcast placement pitches and PR amplification',
      'Proprietary IP frameworks and industry whitepaper creation'
    ],
    techStack: ['Substack', 'Buffer Enterprise', 'Typefully', 'Obsidian', 'Otter.ai Voice'],
    systemHighlights: ['Zero generic corporate jargon', 'Direct inbound deal generation from founders and VCs', 'Asset compounding over 12+ months'],
    badgeColor: 'cyan'
  },
  {
    id: 'retention-flywheel',
    code: 'U-06',
    category: 'LIFETIME VALUE',
    title: 'Autonomous Retention & Lifecycle Ecosystems',
    tagline: 'Turning one-time buyers into evangelical repeat customers via hyper-personalized email & SMS automation.',
    description: 'The highest ROI marketing is the marketing directed at people who already trust you. We architect behavioral lifecycle flows that trigger based on customer intent, repeat purchase windows, and micro-engagements, creating predictable recurring cashflow on autopilot.',
    metrics: {
      primary: '38.2%',
      label: 'Of Total Revenue Driven via Owned Media'
    },
    deliverables: [
      'Full lifecycle Klaviyo / Customer.io multi-branch automated flows',
      'Behavioral SMS segmentation & VIP customer loyalty loops',
      'Dynamic predictive replenishment & re-engagement triggers',
      'Deliverability diagnostics ensuring 99.4%+ inbox placement'
    ],
    techStack: ['Klaviyo Enterprise', 'Attentive SMS', 'Customer.io', 'Postscript', 'Gorgias'],
    systemHighlights: ['Zero spammy blasts; pure value-driven sequencing', 'Zero deliverability degradation', 'LTV compounding year over year'],
    badgeColor: 'emerald'
  }
];

export const COMPARISON_POINTS: ComparisonPoint[] = [
  {
    id: 'bureaucracy',
    category: 'Operating Structure',
    legacyAgency: 'Junior account managers playing telephone between clients and outsourced offshore contractors.',
    yugamEngine: 'Direct senior growth engineers, creative directors, and media buyers embedded right into your Slack.',
    impactVerdict: '10x faster execution speed, zero dilution of creative vision.'
  },
  {
    id: 'creative',
    category: 'Creative Production',
    legacyAgency: 'Stock footage, generic Canva templates, and robotic ChatGPT copy that damages your brand reputation.',
    yugamEngine: 'Bespoke 4K studio production, psychological hook scripts, and cinematic motion design that builds brand equity.',
    impactVerdict: '400%+ increase in view-through rates and high-intent shares.'
  },
  {
    id: 'metrics',
    category: 'Attribution & Metrics',
    legacyAgency: 'Dazzling you with vanity metrics: impressions, clicks, and vague “brand awareness” reports.',
    yugamEngine: 'Ruthless focus on unit economics: Contribution Margin, Blended CAC, Net Cash Flow, and Pipeline Revenue.',
    impactVerdict: 'Real cash in bank, predictable revenue modeling.'
  },
  {
    id: 'speed',
    category: 'Deployment Velocity',
    legacyAgency: '30-45 day “onboarding and discovery” filled with bureaucratic zoom meetings before a single ad runs.',
    yugamEngine: 'Day 1 audit, Day 4 live sprint, Day 7 first asset cohort deployed into live market environments.',
    impactVerdict: 'Immediate market feedback and revenue acceleration.'
  },
  {
    id: 'incentives',
    category: 'Commercial Alignment',
    legacyAgency: 'Incentivized to spend more of your money blindly because their retainer is tied to % of ad spend.',
    yugamEngine: 'Aligned on gross profit, revenue growth, and scalable margin expansion with performance incentives.',
    impactVerdict: 'We only win when your bottom-line profitability explodes.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'apex-wellness',
    clientName: 'Apex Health Systems',
    industry: 'High-Ticket DTC & Wellness',
    timeframe: '90-Day Sprint',
    challenge: 'Stuck at $120K/mo MRR with soaring Meta ad acquisition costs ($92 CAC) and low organic social presence.',
    architecture: 'Deployed Unit 01 (Social Engine) and Unit 02 (Creative Lab). Produced 45 cinematic reels highlighting doctor-backed biohacking protocols, paired with a high-speed custom quiz funnel.',
    results: [
      { label: 'Monthly Revenue', value: '$485K', change: '+304%' },
      { label: 'Customer CAC', value: '$34.20', change: '-62.8%' },
      { label: 'Organic Views', value: '14.2M', change: 'from 40K' }
    ],
    testimonial: {
      quote: 'The Yugam team operates like a high-end skunkworks lab. They didn’t just make videos; they re-architected our entire acquisition machine. In 90 days, we tripled our top-line while slashing ad spend.',
      author: 'Marcus Vance',
      role: 'Founder & CEO',
      company: 'Apex Health Systems',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    },
    tags: ['DTC Scale', 'Video Production', 'CAC Reduction']
  },
  {
    id: 'lumina-saas',
    clientName: 'Lumina Data Intelligence',
    industry: 'B2B Enterprise SaaS',
    timeframe: '120-Day Deployment',
    challenge: 'Invisible on LinkedIn and X. Outbound email response rates were plummeting below 0.8% and pipeline was drying up.',
    architecture: 'Installed Unit 05 (Founder Authority) and Unit 06 (Retention Engine). Ghostwrote high-signal industry teardowns for the CTO and CEO, complemented by an interactive data ROI calculator that captured 600+ enterprise leads.',
    results: [
      { label: 'Inbound Pipeline', value: '$2.4M', change: '+510%' },
      { label: 'Demo Bookings', value: '184 / mo', change: '+340%' },
      { label: 'Executive Reach', value: '3.6M', change: 'from zero' }
    ],
    testimonial: {
      quote: 'We spent $80,000 with a traditional PR agency with zero enterprise deals to show for it. Yugam engineered an inbound pipeline of $2.4M in 4 months strictly through organic authority and smart hooks.',
      author: 'Elena Rostova',
      role: 'Chief Technology Officer',
      company: 'Lumina Data',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80'
    },
    tags: ['B2B SaaS', 'Founder Ghostwriting', 'Enterprise Leads']
  },
  {
    id: 'solaris-apparel',
    clientName: 'Solaris Active Studio',
    industry: 'Sustainable Luxury Apparel',
    timeframe: '60-Day Sprint',
    challenge: 'Great products but razor-thin margins due to single-item purchases and zero repeat customer lifecycle mechanics.',
    architecture: 'Activated Unit 04 (Unit Economics) and Unit 06 (Autonomous Retention). Implemented post-purchase bundle ladders, VIP private drop access, and SMS-based automated concierge.',
    results: [
      { label: 'Average Order Value', value: '$188', change: '+78%' },
      { label: 'Repeat Purchase Rate', value: '42.6%', change: '+118%' },
      { label: 'Net Profit Margin', value: '28.4%', change: '+14.2% pts' }
    ],
    testimonial: {
      quote: 'Most agencies just want you to burn ad budget. Yugam came in, audited our unit economics, and unlocked over $180,000 in pure bottom-line cash flow from our existing customer base without spending an extra dime on ads.',
      author: 'Julian Mercer',
      role: 'Co-Founder & COO',
      company: 'Solaris Studio',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
    },
    tags: ['E-Commerce', 'Unit Economics', 'AOV Expansion']
  }
];

export const CONTENT_BLUEPRINTS: ContentBlueprint[] = [
  {
    id: 'contrarian-wedge',
    title: 'The Industry Myth Sledgehammer',
    archetype: 'Authority & Disruptor Hook',
    targetPlatform: 'Reels / TikTok / YouTube Shorts',
    hook: '"Everyone in [Industry] tells you to do [X]. Here is the mathematical reason why doing that is silently bankrupting your business..."',
    psychologicalTrigger: 'Cognitive Dissonance + Pattern Interrupt',
    scriptStructure: [
      { step: '00:00 - 00:03', description: 'Hard contrarian claim backed by visual proof or cash ledger.', pacing: 'High-Impact Cut' },
      { step: '00:03 - 00:15', description: 'Deconstruct why conventional advice fails using real data.', pacing: 'Paced Breakdown' },
      { step: '00:15 - 00:40', description: 'Introduce the Proprietary Alternative (The "Hidden Mechanism").', pacing: 'Educational Authority' },
      { step: '00:40 - 00:55', description: 'Call to action: Direct link to download the exact audit framework.', pacing: 'Frictionless Conversion' }
    ],
    benchmarks: {
      retentionRate: '72% at 30s',
      avgViews: '240K - 1.2M',
      directConversions: '3.8% to email/lead'
    }
  },
  {
    id: 'teardown-blueprint',
    title: 'The $10M System Teardown',
    archetype: 'Curiosity & Intellectual Voyeurism',
    targetPlatform: 'LinkedIn / X / YouTube Shorts',
    hook: '"I analyzed how [Recognized Market Leader] scaled from $1M to $10M with a 4-person team. Here is the exact backend diagram they hide:"',
    psychologicalTrigger: 'Inside Secret / Status Acquisition',
    scriptStructure: [
      { step: '00:00 - 00:05', description: 'Show the macro architecture or financial spreadsheet.', pacing: 'Visual Hook' },
      { step: '00:05 - 00:20', description: 'Step 1: The Traffic Arbitrage engine they quietly run.', pacing: 'Fast Exposition' },
      { step: '00:20 - 00:45', description: 'Step 2: The Retention loophole generating 60% of profits.', pacing: 'High Value Delivery' },
      { step: '00:45 - 01:00', description: 'How to replicate this in your own company within 14 days.', pacing: 'Direct Pitch' }
    ],
    benchmarks: {
      retentionRate: '68% at 45s',
      avgViews: '180K - 850K',
      directConversions: '5.2% bookmark/share'
    }
  },
  {
    id: 'transformation-ledger',
    title: 'The Real-Time Profit Audit',
    archetype: 'Social Proof & Radical Transparency',
    targetPlatform: 'Instagram Reels / TikTok / YouTube',
    hook: '"Client came to us burning $15K/mo on ads with zero net profit. Here is the exact 3-step surgical fix we made in 72 hours:"',
    psychologicalTrigger: 'Relatability + Tangible Verification',
    scriptStructure: [
      { step: '00:00 - 00:04', description: 'Screen recording of the broken dashboard / bad CPA.', pacing: 'Authentic Screen Grab' },
      { step: '00:04 - 00:22', description: 'Step 1: Killing the 3 vanity ad sets wasting 65% of budget.', pacing: 'Ruthless Optimization' },
      { step: '00:22 - 00:48', description: 'Step 2: Deploying 2 psychological angle hooks that dropped CAC.', pacing: 'Visual Evidence' },
      { step: '00:48 - 01:00', description: 'Final dashboard: $84,000 net profit generated. Book audit.', pacing: 'Proof CTA' }
    ],
    benchmarks: {
      retentionRate: '81% at 30s',
      avgViews: '320K - 2.4M',
      directConversions: '6.4% to diagnostic audit'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: 'They don’t make vanity TikToks. Every single video they scripted and produced for us had a commercial purpose. We closed $340,000 in deals directly attributed to inbound DMs from their videos.',
    name: 'Soren Kjaer',
    role: 'Managing Partner',
    company: 'Nordic Growth Capital',
    metricBadge: '+$340K Direct Inbound',
    industry: 'Private Equity & Advisory',
    verified: true
  },
  {
    id: 't-2',
    quote: 'Working with Yugam is like hiring a team of ex-hedge fund analysts who happen to be world-class creative directors. Our blend of organic social and paid ads finally clicks together.',
    name: 'Amara Chen',
    role: 'VP of Growth',
    company: 'Synapse AI Workspace',
    metricBadge: '4.8x ROAS Sustained',
    industry: 'Enterprise Software',
    verified: true
  },
  {
    id: 't-3',
    quote: 'Before Yugam, we cycled through 4 different social media agencies. All of them charged huge retainers and delivered nothing but stock Canva graphics. Yugam delivered 32 custom videos in month 1 alone.',
    name: 'Darius Thorne',
    role: 'Founder',
    company: 'Titan Endurance Co.',
    metricBadge: '+240% Net Profit Lift',
    industry: 'Performance Gear',
    verified: true
  }
];

export const DISPATCH_SIGNALS = [
  {
    code: 'SIGNAL-409',
    timestamp: '14 MINS AGO',
    topic: 'META REELS ALGORITHM UPDATE',
    summary: 'Watch-time weight increased by 28%. Static hook cards are decaying. Dynamic 1.2s text transitions showing 41% higher completion rates.'
  },
  {
    code: 'SIGNAL-408',
    timestamp: '2 HOURS AGO',
    topic: 'B2B LINKEDIN ENGAGEMENT ARBITRAGE',
    summary: 'Document carousel decay offset by deep-dive founder teardowns. Average comments per qualified C-suite buyer up 3.4x on data-driven case studies.'
  },
  {
    code: 'SIGNAL-407',
    timestamp: 'YESTERDAY',
    topic: 'TIKTOK SHOP & SOCIAL COMMERCE',
    summary: 'Native affiliate creator amplification yielding 2.8x cheaper blended CPA than standard video view objective ads.'
  }
];

export const SPRINT_TIMELINE = [
  {
    phase: 'PHASE 01',
    timeframe: 'DAYS 01 - 03',
    title: 'Diagnostic Teardown & Unit Economics Audit',
    description: 'We audit your entire commercial stack: current social reach, customer CAC, retention curves, gross margins, and competitor positioning. We identify the top 3 highest-leverage profit leaks.'
  },
  {
    phase: 'PHASE 02',
    timeframe: 'DAYS 04 - 08',
    title: 'Creative Matrix & Script Engineering',
    description: 'Our creative directors write 30 tailored psychological video scripts, hook angles, and authority essays. We deliver custom filming kits and conduct 1-on-1 director coaching sessions.'
  },
  {
    phase: 'PHASE 03',
    timeframe: 'DAYS 09 - 14',
    title: 'Studio Post-Production & Sound Architecture',
    description: 'Our editing lab transforms raw footage into cinematic, high-velocity assets complete with custom motion graphics, sound design, and platform-specific typography.'
  },
  {
    phase: 'PHASE 04',
    timeframe: 'DAYS 15 - 21+',
    title: 'Algorithmic Deployment & Profit Scaling',
    description: 'Assets are deployed into live market environments with automated attribution tracking. Winning creatives are amplified with performance ad spend to drive compounding MRR.'
  }
];
