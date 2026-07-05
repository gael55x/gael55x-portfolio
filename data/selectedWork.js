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
    title: 'Vision R&D & ecommerce for 5,000+ users',
    problem:
      'Manual emblem processing capped manufacturing throughput, and the 8-Ball/Badge Guru platforms needed reliable ecommerce handling hundreds of transactions per hour.',
    action:
      'Led a lean team across frontend, backend, mobile, and DevOps; built computer vision R&D for the rendering pipeline (OpenCV, ArUco detection, glare reduction, vectorization); architected Stripe/GoShippo ecommerce workflows; reworked auth with NextAuth + OAuth2/OIDC; introduced blue-green deployments with rollback.',
    result:
      'Emblem processing cut from 10 minutes to 30 seconds (~20x), 5,000+ users on stabilized platforms, and dependable checkout/shipment operations.',
    business:
      'More units through the line per shift and an ecommerce operation the business can scale on.',
    stack: ['React/Next.js', 'React Native', 'FastAPI', 'OpenCV', 'PostgreSQL', 'AWS'],
  },
];
