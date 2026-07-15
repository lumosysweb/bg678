import type {
  NavItem,
  StatItem,
  TrustBadge,
  FeatureCard,
  CategoryCard,
  GameCard,
  TimelineItem,
  VIPLevel,
  RewardCard,
  CommunityLink,
  Testimonial,
  FAQItem,
  FooterLinkGroup,
} from "@/types";

export const SITE = {
  name: "BG678",
  domain: "bg678.netlify.app",
  url: "https://bg678.netlify.app",
  tagline: "The Art of Winning, Redefined.",
  description:
    "BG678 (BG 678) is a free, independent guide to the BG678 game platform — covering BG678 login, BG678 register, APK download, bonuses, and the VIP rewards program, laid out in plain steps. This is an unofficial resource and is not affiliated with, endorsed by, or operated on behalf of any official BG678 brand.",
};

export const KEYWORDS = [
  "BG678",
  "BG 678",
  "BG678 game",
  "BG678 login",
  "BG678 register",
  "BG678 app",
  "BG678 apk",
  "BG678 download",
  "BG678 rewards",
  "BG678 bonus",
  "BG678 VIP",
  "BG678 withdrawal",
  "BG678 guide",
  "online gaming rewards platform",
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Games", href: "#categories" },
  { label: "Rewards", href: "#rewards" },
  { label: "VIP", href: "#vip" },
  { label: "Promotions", href: "#rewards" },
  { label: "Leaderboard", href: "#vip" },
  { label: "Download App", href: "#download" },
  { label: "Community", href: "#community" },
  { label: "Support", href: "#faq" },
];

export const STATS: StatItem[] = [
  { label: "Players Worldwide", value: 10, suffix: "M+" },
  { label: "Rewards Distributed", value: 500, prefix: "₹", suffix: "Cr+" },
  { label: "Support Availability", value: 24, suffix: "×7" },
  { label: "Withdrawal Speed", value: 60, suffix: "s" },
];

export const TRUST_BADGES: TrustBadge[] = [
  { label: "10M+ Players", icon: "users" },
  { label: "Fast Withdrawals", icon: "bolt" },
  { label: "Secure Platform", icon: "shield" },
  { label: "24×7 Support", icon: "headset" },
];

export const FEATURE_CARDS: FeatureCard[] = [
  {
    title: "Fast Withdrawals",
    description: "Cash out in under 60 seconds with automated, verified payment rails.",
    icon: "bolt",
    glow: "primary",
  },
  {
    title: "Secure Payments",
    description: "Bank-grade 256-bit encryption protects every transaction, every time.",
    icon: "shield",
    glow: "emerald",
  },
  {
    title: "24×7 Support",
    description: "A dedicated concierge team is always online, in every major language.",
    icon: "headset",
    glow: "blue",
  },
  {
    title: "Exclusive Rewards",
    description: "Daily bonuses, cashback and VIP perks stacked on top of your play.",
    icon: "gift",
    glow: "purple",
  },
];

export const CATEGORIES: CategoryCard[] = [
  { name: "Lottery", icon: "ticket", gradient: "from-purple-glow/25 via-purple-glow/5 to-transparent", count: "18" },
  { name: "Slots", icon: "reel", gradient: "from-blue-accent/25 via-blue-accent/5 to-transparent", count: "340+" },
  { name: "Crash", icon: "rocket", gradient: "from-danger/25 via-danger/5 to-transparent", count: "12" },
  { name: "Fishing", icon: "fish", gradient: "from-emerald/25 via-emerald/5 to-transparent", count: "26" },
  { name: "Original", icon: "diamond", gradient: "from-primary/25 via-purple-glow/10 to-transparent", count: "34" },
  { name: "Sports", icon: "trophy", gradient: "from-emerald/25 via-blue-accent/10 to-transparent", count: "48" },
  { name: "Live", icon: "cards", gradient: "from-purple-glow/25 via-blue-accent/10 to-transparent", count: "56" },
  { name: "Mini Games", icon: "dice", gradient: "from-blue-accent/25 via-emerald/10 to-transparent", count: "22" },
];

export const FEATURED_GAMES: GameCard[] = [
  { name: "Golden Fortune", category: "Slots", ribbon: "Trending", gradient: "from-primary/40 to-[#04231a]" },
  { name: "Aviator Rush", category: "Crash Games", ribbon: "Hot", gradient: "from-danger/40 to-[#1a0509]" },
  { name: "Royal Lottery", category: "Lottery", ribbon: "New", gradient: "from-purple-glow/40 to-[#0d0620]" },
  { name: "Dragon's Vault", category: "Original Games", ribbon: "Trending", gradient: "from-emerald/40 to-[#02150f]" },
  { name: "Deep Sea Hunt", category: "Fishing", ribbon: null, gradient: "from-blue-accent/40 to-[#04101f]" },
  { name: "Live Blackjack VIP", category: "Live Casino", ribbon: "Hot", gradient: "from-primary/30 to-purple-glow/20" },
  { name: "Champions League", category: "Sports", ribbon: null, gradient: "from-emerald/30 to-blue-accent/20" },
  { name: "Lucky Reels 7s", category: "Slots", ribbon: "New", gradient: "from-purple-glow/30 to-danger/20" },
];

export const TIMELINE: TimelineItem[] = [
  { title: "Instant Withdrawals", description: "Funds land in your account in under a minute, every time.", icon: "bolt" },
  { title: "Advanced Security", description: "256-bit encryption and continuous fraud monitoring protect every session.", icon: "shield" },
  { title: "24×7 Customer Support", description: "A dedicated concierge team is always online, in every major language.", icon: "headset" },
  { title: "Exclusive Bonuses", description: "Handpicked offers tailored to your play style and loyalty tier.", icon: "gift" },
  { title: "Daily Promotions", description: "Fresh rewards drop every single day across every category.", icon: "calendar" },
  { title: "Trusted Platform", description: "Independently audited and licensed for verified fair play.", icon: "check-badge" },
];

export const VIP_LEVELS: VIPLevel[] = [
  { level: "VIP 1", name: "Bronze Circle", requirement: "₹10,000 lifetime play", perks: ["1% Cashback", "Standard Support"], gradient: "from-[#3a2a12] to-[#16291E]" },
  { level: "VIP 2", name: "Silver Reserve", requirement: "₹50,000 lifetime play", perks: ["2% Cashback", "Priority Support", "Weekly Bonus"], gradient: "from-[#4a4a5a] to-[#16291E]" },
  { level: "VIP 3", name: "Gold Estate", requirement: "₹2,00,000 lifetime play", perks: ["3.5% Cashback", "Priority Support", "Higher Limits"], gradient: "from-[#6b4a12] to-[#16291E]" },
  { level: "VIP 4", name: "Platinum Vault", requirement: "₹5,00,000 lifetime play", perks: ["5% Cashback", "Dedicated Manager", "Birthday Gifts"], gradient: "from-[#5a5a6b] to-[#16291E]" },
  { level: "VIP 5", name: "Diamond Legacy", requirement: "₹10,00,000 lifetime play", perks: ["7% Cashback", "Unlimited Limits", "Bespoke Rewards"], gradient: "from-primary/40 to-[#16291E]" },
];

export const REWARD_CARDS: RewardCard[] = [
  { title: "Daily Bonus", description: "Claim a fresh reward every 24 hours, no strings attached.", icon: "sun", cta: "Claim Now", glow: "primary" },
  { title: "Referral Bonus", description: "Invite friends and earn a lifetime share of their play.", icon: "users", cta: "Invite & Earn", glow: "purple" },
  { title: "Weekly Cashback", description: "A percentage of your net play returned to you, every week.", icon: "wallet", cta: "View Cashback", glow: "emerald" },
  { title: "Lucky Spin", description: "One free spin daily for a chance at massive multipliers.", icon: "spin", cta: "Spin Now", glow: "blue" },
  { title: "Gift Codes", description: "Redeem exclusive codes dropped across our community channels.", icon: "gift", cta: "Redeem Code", glow: "primary" },
  { title: "Festival Rewards", description: "Celebrate every season with limited-time festival bonuses.", icon: "sparkle", cta: "Explore Rewards", glow: "purple" },
];

export const COMMUNITY_LINKS: CommunityLink[] = [
  { name: "Telegram", handle: "@bg678_official", icon: "telegram", href: "https://t.me/bg678_official" },
  { name: "Instagram", handle: "@bg678", icon: "instagram", href: "https://instagram.com/bg678" },
  { name: "WhatsApp", handle: "Chat with us", icon: "whatsapp", href: "https://wa.me/910000000000" },
  { name: "YouTube", handle: "BG678 Official", icon: "youtube", href: "https://youtube.com/@bg678" },
  { name: "Discord", handle: "BG678 Community", icon: "discord", href: "https://discord.gg/bg678" },
];

export const TESTIMONIALS: Testimonial[] = [
  { name: "Rohan Mehta", role: "VIP 4 Member", rating: 5, quote: "Withdrawals genuinely land in under a minute. The whole platform feels like a private members' club, not a betting site.", verified: true },
  { name: "Ananya Sharma", role: "VIP 2 Member", rating: 5, quote: "The design alone sold me, but the daily rewards and support quality are what kept me here.", verified: true },
  { name: "Vikram Nair", role: "VIP 5 Member", rating: 5, quote: "Diamond tier support is unreal — I have a dedicated manager who responds in minutes.", verified: true },
  { name: "Priya Kapoor", role: "VIP 1 Member", rating: 4, quote: "Clean, fast, and refreshingly premium. Nothing about it feels like a typical gaming site.", verified: true },
];

export const FAQ_ITEMS: FAQItem[] = [
  { question: "How fast are withdrawals processed on BG678?", answer: "Verified withdrawals are processed automatically and typically land in your account in under 60 seconds, 24 hours a day." },
  { question: "Is BG678 a licensed and secure platform?", answer: "Yes. BG678 operates with independently audited fairness certification and bank-grade 256-bit encryption across every transaction." },
  { question: "How does the VIP membership program work?", answer: "Players progress through five VIP tiers based on lifetime play, unlocking escalating cashback, dedicated support, and exclusive rewards at each level." },
  { question: "Can I download the BG678 app?", answer: "Yes, the BG678 Android app is available for direct APK download from the Download App section, with a lightweight, fast installation." },
  { question: "What support channels are available?", answer: "Our concierge team is available 24×7 via live chat, WhatsApp, and Telegram for instant assistance." },
];

export const FOOTER_LINKS: FooterLinkGroup[] = [
  {
    title: "Pages",
    links: [
      { label: "About BG678", href: "/about" },
      { label: "BG678 Login", href: "/login" },
      { label: "BG678 Register", href: "/register" },
      { label: "Download App", href: "#download" },
      { label: "VIP Club", href: "#vip" },
      { label: "Promotions", href: "#rewards" },
      { label: "Rewards Center", href: "#rewards" },
      { label: "Game Categories", href: "#categories" },
    ],
  },
  {
    title: "BG678 Guides",
    links: [
      { label: "BG678 Game", href: "/bg678-game" },
      { label: "APK Download Guide", href: "/apk-download" },
      { label: "VIP Club Guide", href: "/vip-club" },
      { label: "Bonus Offers", href: "/bonus-offers" },
      { label: "Withdrawal Guide", href: "/withdrawal-guide" },
      { label: "How To Play", href: "/how-to-play" },
      { label: "BG678 FAQ", href: "/faq" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Support Center", href: "/support" },
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Community", href: "#community" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-conditions" },
      { label: "Responsible Gaming", href: "/responsible-gaming" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];
