/** Employer-focused case studies (Problem / Action / Result / Business) */
export const selectedWork = [
  {
    id: 'willed',
    company: 'Willed',
    role: 'Software Engineer, AI & Security Platform',
    title: 'Enterprise SIEM for a 170k+ user platform',
    problem:
      'A legal-tech platform serving 170,000+ users needed real detection visibility, SOC 2 readiness, and hardened authentication without slowing product delivery.',
    action:
      'Architected a custom enterprise SIEM with event-driven security pipelines, centralized alerting, and notification routing; built agentic security review and engineering workflows; enforced MFA and account lockout; led the Quasar-to-Nuxt.js frontend migration.',
    result:
      'Detection visibility across the platform, SOC 2-aligned controls and evidence, reduced account-takeover risk, and ~30% better frontend performance.',
    business:
      'Security posture that stands up to enterprise and compliance scrutiny while product velocity holds.',
    stack: ['Nuxt.js', 'Node.js', 'PostgreSQL', 'SIEM', 'OAuth2/OIDC', 'CI/CD'],
  },
  {
    id: 'referrin',
    company: 'Referrin Health',
    role: 'Contract Software Engineer, Platform & AI Product',
    title: 'Healthcare referral platform to controlled beta',
    problem:
      'A healthcare referral SaaS had to move from development into controlled alpha/beta across a network of 5,000+ providers and case managers — with the rollout safety healthcare demands.',
    action:
      'Owned major platform engineering: stabilized referral, organization, provider, waitlist, and case-manager workflows; established staging/production environments, CI/CD, and E2E testing standards; built Smartforms AI modules for document handling and referral routing; hardened runtime secrets and encrypted configuration.',
    result:
      'Core workflows stable across the 5,000+ provider network, safer release cycles, and AI-assisted intake reducing manual referral processing.',
    business:
      'A product healthcare operators can adopt: compliant, predictable, and faster at moving patients through referrals.',
    stack: ['React/Next.js', 'FastAPI', 'PostgreSQL', 'AWS', 'Docker', 'E2E testing'],
  },
  {
    id: 'bitwork',
    company: 'BitWork Solutions',
    role: 'Lead Software Engineer',
    title: 'Badge Guru vision pipeline & 8BallDesigner.com ecommerce',
    problem:
      'Two products, two bottlenecks. Badge Guru: manual emblem processing capped manufacturing throughput. 8BallDesigner.com: the store needed ecommerce reliable enough for a customer base in the thousands.',
    action:
      'For Badge Guru, built the computer vision R&D behind scanner automation — OpenCV rendering pipeline, ArUco detection, glare reduction, vectorization. For 8BallDesigner.com, led engineering delivery across a lean frontend, backend, mobile, and DevOps team: Stripe/GoShippo ecommerce workflows, auth rework with NextAuth + OAuth2/OIDC, and blue-green deployments with rollback.',
    result:
      'Badge Guru emblem processing cut from 10 minutes to 30 seconds (~20x). 8BallDesigner.com serving thousands of customers with dependable checkout and shipment operations.',
    business:
      'More units through the manufacturing line per shift, and an ecommerce store the business scales revenue on.',
    stack: ['React/Next.js', 'React Native', 'FastAPI', 'OpenCV', 'PostgreSQL', 'AWS'],
    link: { href: 'https://8balldesigner.com', label: '8balldesigner.com' },
  },
];
