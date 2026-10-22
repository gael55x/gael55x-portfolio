/** Benchmark claims link to the methodology, with the original date and scope. */
export const openSource = [
  {
    id: 'codemm',
    name: 'Codemm',
    category: 'Learning × Agent tooling',
    title: 'Supercharge your learning with Codemm.',
    description:
      'An open-source app for self-learners. Your own coding agent turns what you want to learn into a roadmap, personalized lessons, and hands-on coding exercises, with hints and guided practice when you get stuck. Codemm checks every exercise against its tests and grades your code in an offline Docker sandbox.',
    github: 'https://github.com/iignaite/Codemm',
    website: 'https://codemm.vercel.app/',
    launchVideo: 'https://www.facebook.com/share/v/17iA4UsfcP/',
    video: '/assets/codemm/codemm-launch.mp4',
    poster: '/assets/codemm/codemm-launch-poster.jpg',
    stack: 'TypeScript / MCP / Docker sandbox / Coding agents',
  },
  {
    id: 'snapline',
    name: 'Snapline',
    category: 'Design systems × Agent tooling',
    title: 'Keeps AI-generated UI on the design system',
    description:
      'A deterministic TSX scanner (TypeScript compiler API, no LLM) wired into Claude Code lifecycle hooks. It blocks agents mid-loop with exact repair contracts and gates completion until severe design-system drift is fixed.',
    benchmark:
      '0 of 30 runs drifted with Snapline in the July 2026 Claude Code experiment. Historical fixture evidence; repair loops added about 15% median wall time versus the raw agent.',
    github: 'https://github.com/gael55x/Snapline',
    npm: 'https://www.npmjs.com/package/@usesnapline/cli',
    evidence: 'https://github.com/gael55x/Snapline/blob/main/docs/benchmark.md',
    stack: 'TypeScript / Compiler API / Agent hooks',
  },
  {
    id: 'grape',
    name: 'Grape',
    category: 'Context infrastructure × Developer tools',
    title: 'Context transport for AI coding agents',
    description:
      'A repo-backed context continuity layer: dependency-tracked context artifacts compiled from the repository, per-session ledgers of what an agent has already seen, and MCP/CLI surfaces that send only what is new, changed, pinned, or stale.',
    benchmark:
      '31–52% less body-token context on the second turn across three unchanged-repository fixtures, recorded June 2026. These are fixture results, not production savings.',
    github: 'https://github.com/gael55x/Grape',
    npm: 'https://www.npmjs.com/package/grape-context',
    evidence: 'https://github.com/gael55x/Grape/blob/main/docs/v1/quality/benchmarks.md',
    stack: 'TypeScript / MCP / CLI / npm',
  },
];

export const projects = [
  {
    name: 'LayeredMemoryTrader',
    type: 'Research',
    description:
      'Trading-agent debates with short-, mid-, and long-term memory. A research project with backtests.',
    href: 'https://github.com/gael55x/LayeredMemoryTrader',
  },
  {
    name: 'BuhAI',
    type: 'Mobile prototype',
    description:
      'A Bisaya-language diabetes assistant exploring glucose forecasting and meal-context retrieval.',
    href: 'https://github.com/gael55x/BuhAI',
  },
  {
    name: 'DSA Visualizer',
    type: 'Learning tool',
    description: 'Step through data structures and algorithms with interactive controls.',
    href: 'https://dsa-visualizer-nine.vercel.app/',
  },
  {
    name: 'Minglanilla Science HS',
    type: 'Volunteer work',
    description: 'The school’s news and admissions web app, built with Django and PostgreSQL.',
  },
  {
    name: 'Ren',
    type: 'AI mobile',
    description:
      'React Native app with sentiment-aware flows and adaptive motivational content, backed by Flask + TensorFlow/NLTK. Designed, built, and shipped in one week.',
    href: 'https://github.com/gael55x/Ren',
  },
  {
    name: 'PhEASYCS',
    type: 'Edtech / NLP',
    description:
      'High-school project that placed 4th in the Division Science & Technology Fair: a physics Q&A bot built on TensorFlow NLP with TF-IDF features.',
    href: 'https://github.com/gael55x/PhEASYCS',
  },
];
