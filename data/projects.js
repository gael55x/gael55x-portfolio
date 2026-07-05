export const projects = [
  {
    num: '01',
    category: 'AI DEVTOOLS',
    title: 'Snapline — Agent UI repair hook',
    problem:
      'AI coding agents write React/Tailwind UI that quietly drifts off the design system: raw hex colors, arbitrary values, hand-rolled buttons next to real components.',
    action:
      'Built a deterministic TSX scanner (TypeScript compiler API, no LLM) wired into Claude Code lifecycle hooks: it blocks the agent with exact repair contracts and gates completion until severe drift is fixed. Shipped as a pnpm monorepo with a CLI, Claude plugin, and a reproducible agent benchmark.',
    result:
      'Open-source agent UI repair hook with 9 drift rules, safe autofixes, and live hook overhead around 126ms per session.',
    businessImpact:
      'Design-system discipline that survives AI-generated code — enforced in the agent loop instead of caught in review.',
    stack: [
      { name: 'TypeScript' },
      { name: 'Node.js' },
      { name: 'Claude Code' },
      { name: 'TailwindCSS' },
      { name: 'shadcn/ui' },
      { name: 'pnpm' },
    ],
    image: '/assets/projects/Snapline.png',
    live: 'https://github.com/gael55x/Snapline',
    github: 'https://github.com/gael55x/Snapline',
    featured: true,
  },
  {
    num: '02',
    category: 'AI DEVTOOLS',
    title: 'Grape — Context transport for AI coding agents',
    problem:
      'Coding agents reread the same files, rules, and decisions every chat — burning tool calls rebuilding context they already had and keeping stale assumptions after the repo changes.',
    action:
      'Built a repo-backed context continuity layer: dependency-tracked context artifacts compiled from the repository, per-session ledgers of what an agent has already seen, and MCP/CLI surfaces that send only what is new, changed, pinned, or stale.',
    result:
      'Structured context packs (NEW / CHANGED / PINNED / OMIT_UNCHANGED / RESTORE_AVAILABLE) that cut repeated rereads across chats, tools, and handoffs.',
    businessImpact:
      'Agents that keep repository context across turns instead of rediscovering it — fewer tool calls, fewer stale-assumption bugs.',
    stack: [
      { name: 'TypeScript' },
      { name: 'Node.js' },
      { name: 'MCP' },
      { name: 'CLI' },
    ],
    image: '/assets/projects/Grape.png',
    live: 'https://github.com/gael55x/Grape',
    github: 'https://github.com/gael55x/Grape',
    featured: true,
  },
  {
    num: '03',
    category: 'AI HEALTHCARE',
    title: 'BuhAI — Personalized diabetes assistant',
    problem:
      'People with diabetes juggle glucose data, education, and timely guidance across disconnected tools.',
    action:
      'Built a React Native (Expo) client with a Python/Flask backend, LSTM-oriented prediction paths, ChromaDB + RAG, and Gemini for grounded recommendations.',
    result:
      'Shipped an integrated assistant with CGM-oriented flows and a personalized recommendation layer.',
    businessImpact:
      'Tighter feedback loops for users and a foundation for adherence-focused product iteration.',
    stack: [
      { name: 'React Native' },
      { name: 'Expo' },
      { name: 'Python' },
      { name: 'Flask' },
      { name: 'LSTM' },
      { name: 'ChromaDB' },
      { name: 'Gemini AI' },
      { name: 'SQLite' },
      { name: 'RAG' },
    ],
    image: '/assets/projects/BuhAI.png',
    live: 'https://github.com/gael55x/BuhAI',
    github: 'https://github.com/gael55x/BuhAI',
    featured: true,
  },
  {
    num: '04',
    category: 'EDTECH',
    title: 'DSA Visualizer — Algorithm learning platform',
    problem:
      'Students struggle to connect abstract data structures and algorithms to executable behavior.',
    action:
      'Engineered a Next.js app with step-by-step visualizations, Framer Motion transitions, and interactive controls for core algorithms.',
    result:
      'Used by 1000+ learners to practice and teach DS/A with less manual whiteboarding.',
    businessImpact:
      'Faster time-to-proficiency and lower support load for self-paced and classroom use.',
    stack: [
      { name: 'Next.js' },
      { name: 'React' },
      { name: 'JavaScript' },
      { name: 'TailwindCSS' },
      { name: 'Framer Motion' },
    ],
    image: '/assets/projects/DSAVisualizer.png',
    live: 'https://dsa-visualizer-nine.vercel.app/',
    github: 'https://github.com/gael55x/DSA-Visualizer',
    featured: true,
  },
  {
    num: '05',
    category: 'AI MENTAL HEALTH',
    title: 'Ren — Emotional support companion',
    problem:
      'Timely emotional support does not scale with human-only interventions.',
    action:
      'Delivered a React Native app with sentiment-aware flows and adaptive motivational content driven by NLP.',
    result:
      'Demonstrated scalable, privacy-conscious support patterns in a mobile-first UX.',
    businessImpact:
      'Prototype path for engagement and wellness journeys without replacing clinical care.',
    stack: [
      { name: 'React Native' },
      { name: 'AI/ML' },
      { name: 'NLP' },
      { name: 'Sentiment analysis' },
    ],
    image: '/assets/projects/Ren.png',
    live: 'https://drive.google.com/file/d/1WChA1UukGw8Ig5Xur3pGTuU1myfCAwdi/view?usp=sharing',
    github: 'https://github.com/gael55x/Ren',
    featured: false,
  },
  {
    num: '06',
    category: 'QUANT / ML OPS',
    title: 'LSTM mean-reversion — research stack',
    problem:
      'Mean-reversion hypotheses need reproducible training, serving, and containerized deployment for iteration.',
    action:
      'Implemented TensorFlow LSTM training, FastAPI service layer, Docker images, and AWS ECS-oriented deployment patterns.',
    result:
      'End-to-end research pipeline suitable for backtests and controlled experiments—not live trading claims.',
    businessImpact:
      'Faster strategy iteration with a clear boundary between research and production risk.',
    stack: [
      { name: 'Python' },
      { name: 'TensorFlow' },
      { name: 'LSTM' },
      { name: 'FastAPI' },
      { name: 'Docker' },
      { name: 'AWS ECS' },
    ],
    image: '/assets/speaker/gailleLecturing.png',
    live: 'https://github.com/gael55x/LSTM-Mean-Rev-Trading-Strat',
    github: 'https://github.com/gael55x/LSTM-Mean-Rev-Trading-Strat',
    featured: true,
  },
  {
    num: '07',
    category: 'LMS',
    title: 'GoLearnHub — Learning management',
    problem:
      'Cohorts need courses, assessments, progress, and lightweight real-time collaboration in one place.',
    action:
      'Built a MERN-style LMS with Socket.io for live collaboration, role-aware course flows, and dashboards.',
    result:
      'Consolidated learning operations for pilot deployments (demo hosted via repository).',
    businessImpact:
      'Lower operational overhead for educators running structured programs.',
    stack: [
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'MongoDB' },
      { name: 'Express' },
      { name: 'Socket.io' },
    ],
    image: '/assets/projects/Golearnhub.jpg',
    live: 'https://github.com/gael55x/GoLearnHub',
    github: 'https://github.com/gael55x/GoLearnHub',
    featured: false,
  },
  {
    num: '08',
    category: 'INSTITUTIONAL',
    title: 'MSHS official site — Digital infrastructure',
    problem:
      'A science high school lacked a modern web channel for news, admissions context, and student-facing information.',
    action:
      'Volunteer-led build with Django, PostgreSQL, Docker, Railway deployment, and NGINX at the edge.',
    result: 'Digital services used by 2000+ students and staff.',
    businessImpact:
      'Improved communication throughput and reduced manual information requests.',
    stack: [
      { name: 'Django' },
      { name: 'Docker' },
      { name: 'Railway' },
      { name: 'PostgreSQL' },
      { name: 'NGINX' },
    ],
    image: '/assets/projects/MSHS_Website (1).png',
    live: 'https://www.officialmingsci.com/',
    github: 'https://github.com/gael55x/MSHS-Website-For-Production-Heroku',
    featured: true,
  },
  {
    num: '09',
    category: 'OPERATIONS',
    title: 'Daddy Mikes — Restaurant management',
    problem:
      'Front-of-house and back-of-house data lived in disconnected spreadsheets and ad hoc tools.',
    action:
      'Implemented React + Node/Express + MySQL for orders, inventory, and basic analytics dashboards.',
    result:
      'Single operational hub for staff workflows (source-first delivery via GitHub).',
    businessImpact:
      'Fewer order errors and tighter inventory visibility for day-to-day operations.',
    stack: [
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'MySQL' },
      { name: 'Express' },
    ],
    image: '/assets/projects/Daddy_mikes.png',
    live: 'https://github.com/gael55x/restaurant-management',
    github: 'https://github.com/gael55x/restaurant-management',
    featured: false,
  },
  {
    num: '10',
    category: 'EDTECH / NLP',
    title: 'PhEASYCS — Physics tutoring assistant',
    problem:
      'One-to-one physics tutoring does not scale across large cohorts.',
    action:
      'Trained TF/NLP components (incl. TF–IDF features) for an interactive tutoring bot experience.',
    result:
      'Repeatable Q&A and concept drills without linear growth in instructor hours.',
    businessImpact:
      'Lower marginal cost per learner for introductory physics support.',
    stack: [
      { name: 'Python' },
      { name: 'TensorFlow' },
      { name: 'NLP' },
      { name: 'TF-IDF' },
    ],
    image: '/assets/projects/PhEASYCS.png',
    live: 'https://github.com/gael55x/PhEASYCS',
    github: 'https://github.com/gael55x/PhEASYCS',
    featured: false,
  },
  {
    num: '11',
    category: 'COMPUTER VISION',
    title: 'ARTIST — Neural style transfer',
    problem:
      'Creative teams need fast experimentation with style transfer quality and latency tradeoffs.',
    action:
      'Built a CNN-based neural style transfer pipeline in Python/TensorFlow for batch and interactive runs.',
    result:
      'Practical CV workflow for blending content and style with tunable parameters.',
    businessImpact:
      'R&D asset for creative tooling—not positioned as production SaaS.',
    stack: [
      { name: 'Python' },
      { name: 'TensorFlow' },
      { name: 'CNN' },
      { name: 'Style transfer' },
    ],
    image: '/assets/projects/ARTIST.jpg',
    live: 'https://github.com/gael55x/ARTIST',
    github: 'https://github.com/gael55x/ARTIST',
    featured: false,
  },
  {
    num: '12',
    category: 'CV / DETECTION',
    title: 'Car detection — YOLO-style object detection',
    problem:
      'Traffic and safety analytics need a credible baseline detector with standard CV metrics.',
    action:
      'Implemented detection with YOLO-oriented training, NMS, and IoU evaluation in TensorFlow.',
    result:
      'Demonstration-grade detector suitable for PoCs and dataset-specific tuning.',
    businessImpact:
      'De-risked path for safety analytics prototypes before fleet-scale investment.',
    stack: [
      { name: 'Python' },
      { name: 'TensorFlow' },
      { name: 'YOLO' },
      { name: 'NMS / IoU' },
    ],
    image: '/assets/projects/Car-Detection-AI-Model.png',
    live: 'https://github.com/gael55x/Car-Detection-AI-model-',
    github: 'https://github.com/gael55x/Car-Detection-AI-model-',
    featured: false,
  },
  {
    num: '13',
    category: 'RESEARCH',
    title: 'MusicAI — LSTM composition (R&D)',
    problem:
      'Exploratory need to map musical sequences to generative models for research demos.',
    action:
      'Trained LSTM/RNN models on symbolic/audio-derived features for composition experiments.',
    result:
      'Qualitative outputs and a reproducible training notebook/repo for creative AI coursework.',
    businessImpact:
      'Clearly labeled research—not a production music product.',
    stack: [
      { name: 'Python' },
      { name: 'TensorFlow' },
      { name: 'LSTM' },
      { name: 'Music generation' },
    ],
    image: '/assets/projects/MUSICAI.png',
    live: 'https://github.com/gael55x/MusicAI',
    github: 'https://github.com/gael55x/MusicAI',
    featured: false,
  },
];
