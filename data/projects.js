/**
 * Tier 1 — open-source work with public receipts (stars, commits, releases,
 * npm packages, benchmarks). Stats verified against GitHub July 2026;
 * rounded down so they age safely.
 */
export const openSource = [
  {
    id: 'snapline',
    name: 'Snapline',
    tagline: 'Keeps AI-generated UI on the design system',
    category: 'AI devtools',
    what:
      'A deterministic TSX scanner (TypeScript compiler API, no LLM) wired into Claude Code lifecycle hooks. It blocks agents mid-loop with exact repair contracts and gates completion until severe design-system drift is fixed.',
    hardPart:
      'Proving it works: a reproducible benchmark of 240 live agent sessions (8 modes × 10 prompts × 3 attempts) — 0/30 drift with the hook on, versus 7–40% drift without it, at ~126ms overhead per hook call.',
    stats: [
      { value: '0/30', label: 'drift with hook on (vs 7–40% baseline)' },
      { value: '240', label: 'live agent sessions benchmarked' },
      { value: '~126ms', label: 'hook overhead' },
    ],
    stack: ['TypeScript', 'Compiler API', 'Claude Code hooks', 'pnpm monorepo'],
    github: 'https://github.com/gael55x/Snapline',
    npm: 'https://www.npmjs.com/package/@usesnapline/cli',
    npmLabel: '@usesnapline/cli',
  },
  {
    id: 'grape',
    name: 'Grape',
    tagline: 'Context transport for AI coding agents',
    category: 'AI infrastructure',
    what:
      'A repo-backed context continuity layer: dependency-tracked context artifacts compiled from the repository, per-session ledgers of what an agent has already seen, and MCP/CLI surfaces that send only what is new, changed, pinned, or stale.',
    hardPart:
      'Diffing context honestly. Grape ships benchmarks showing 31–52% context reduction across three fixtures — published with the caveats, because a benchmark you can’t interrogate is marketing.',
    stats: [
      { value: '400+', label: 'commits' },
      { value: '14', label: 'releases (v1.0.0 shipped)' },
      { value: '31–52%', label: 'context reduction, 3 fixtures' },
    ],
    stack: ['TypeScript', 'MCP', 'CLI', 'npm'],
    github: 'https://github.com/gael55x/Grape',
    npm: 'https://www.npmjs.com/package/grape-context',
    npmLabel: 'grape-context',
  },
  {
    id: 'codemm',
    name: 'Codemm',
    tagline: 'Local-first programming tutor with verified practice',
    category: 'AI education',
    what:
      'Chat a learning goal, get generated programming activities with tests, and run them in Docker sandboxes that grade real solutions — network-isolated, memory- and CPU-capped. Java, Python, C++, and SQL.',
    hardPart:
      'Making arbitrary generated code safe to execute: per-activity sandbox isolation and a verification loop where the tests, not the LLM, decide whether your solution passes.',
    stats: [
      { value: '430+', label: 'commits' },
      { value: '4', label: 'languages sandboxed' },
      { value: 'Docker', label: 'isolated grading runtime' },
    ],
    stack: ['TypeScript', 'Docker', 'LLM orchestration', 'SQL'],
    github: 'https://github.com/iignaite/Codemm',
    note: 'Now maintained under the iignaite org.',
  },
  {
    id: 'layered-memory-trader',
    name: 'LayeredMemoryTrader',
    tagline: 'Multi-agent LLM trading with layered memory',
    category: 'Quant research',
    what:
      'Trading agents with human-style short/mid/long-term memory (FAISS-backed) that debate to consensus before acting, backtested against buy-and-hold with Sharpe and max-drawdown reporting.',
    hardPart:
      'Getting agents to disagree productively: the debate mechanism weighs each memory layer’s recall differently, so a short-term signal can be overruled by long-term regime memory.',
    stats: [
      { value: '33★', label: 'GitHub stars, 6 forks' },
      { value: '3', label: 'memory layers per agent' },
      { value: 'FAISS', label: 'semantic memory recall' },
    ],
    stack: ['Python', 'FAISS', 'LLM agents', 'Backtesting'],
    github: 'https://github.com/gael55x/LayeredMemoryTrader',
  },
];

/** Tier 2/3 — compact cards. Honest scope, no inflated claims. */
export const projects = [
  {
    num: '01',
    category: 'AI HEALTHCARE',
    title: 'BuhAI — Diabetes assistant in Bisaya',
    description:
      'Personalized diabetes assistant for Filipinos: LSTM glucose forecasts (30/60 min) over CGM data, ChromaDB + RAG over logged meals, conversational guidance in Bisaya.',
    stack: ['React Native', 'Python', 'LSTM', 'ChromaDB', 'RAG', 'Gemini'],
    image: '/assets/projects/BuhAI.png',
    live: 'https://github.com/gael55x/BuhAI',
    github: 'https://github.com/gael55x/BuhAI',
  },
  {
    num: '02',
    category: 'EDTECH',
    title: 'DSA Visualizer — Algorithms you can watch',
    description:
      'Step-through visualizations of core data structures and algorithms with interactive controls. 140+ commits, deployed and in active use.',
    stack: ['Next.js', 'TypeScript', 'Framer Motion'],
    image: '/assets/projects/DSAVisualizer.png',
    live: 'https://dsa-visualizer-nine.vercel.app/',
    github: 'https://github.com/gael55x/DSA-Visualizer',
  },
  {
    num: '03',
    category: 'INSTITUTIONAL',
    title: 'MSHS official site — School infrastructure',
    description:
      'Volunteer-built official web app for Minglanilla Science High School: news portal, admissions info, reCAPTCHA-hardened auth. ~1.2k monthly users, zero downtime reported since launch.',
    stack: ['Django', 'PostgreSQL', 'Docker', 'NGINX'],
    image: '/assets/projects/MSHS_Website (1).png',
    live: 'https://www.officialmingsci.com/',
    github: 'https://github.com/gael55x/MSHS-Website-For-Production-Heroku',
  },
  {
    num: '04',
    category: 'AI MOBILE',
    title: 'Ren — Mood-adaptive support app',
    description:
      'React Native app with sentiment-aware flows and adaptive motivational content, backed by Flask + TensorFlow/NLTK. Designed, built, and shipped in one week.',
    stack: ['React Native', 'Flask', 'TensorFlow', 'NLP'],
    image: '/assets/projects/Ren.png',
    live: 'https://github.com/gael55x/Ren',
    github: 'https://github.com/gael55x/Ren',
  },
  {
    num: '05',
    category: 'EDTECH / NLP',
    title: 'PhEASYCS — Physics tutoring bot',
    description:
      'High-school project that placed 4th in the Division Science & Technology Fair: a physics Q&A bot built on TensorFlow NLP with TF-IDF features.',
    stack: ['Python', 'TensorFlow', 'NLP'],
    image: '/assets/projects/PhEASYCS.png',
    live: 'https://github.com/gael55x/PhEASYCS',
    github: 'https://github.com/gael55x/PhEASYCS',
  },
];
