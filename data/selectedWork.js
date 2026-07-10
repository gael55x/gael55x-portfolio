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
    id: 'badge-guru',
    company: 'BitWork Solutions',
    role: 'Lead Software Engineer',
    title: 'Badge Guru — computer vision pipeline for manufacturing',
    problem:
      'Manual emblem processing capped manufacturing throughput: every badge design took about 10 minutes of hand work before it could go to production.',
    action:
      'Built the computer vision R&D behind scanner automation: an OpenCV rendering pipeline with ArUco marker detection, glare reduction, and vectorization that turns a physical scan into production-ready assets.',
    result:
      'Emblem processing cut from 10 minutes to 30 seconds (~20x) — automated, repeatable, and no longer the bottleneck on the line.',
    business:
      'More units through the manufacturing line per shift without adding headcount.',
    stack: ['Python', 'OpenCV', 'ArUco', 'FastAPI', 'AWS'],
  },
  {
    id: '8balldesigner',
    company: 'BitWork Solutions',
    role: 'Lead Software Engineer',
    title: '8BallDesigner.com — ecommerce serving thousands of customers',
    problem:
      'The store needed ecommerce reliable enough for a customer base in the thousands — checkout, shipping, and auth could not be weak links.',
    action:
      'Led engineering delivery across a lean frontend, backend, mobile, and DevOps team: architected Stripe/GoShippo ecommerce workflows, reworked auth with NextAuth + OAuth2/OIDC, and introduced blue-green deployments with rollback.',
    result:
      'Thousands of customers served with dependable checkout and shipment operations on a stabilized platform.',
    business:
      'An ecommerce store the business scales revenue on, with deploys that no longer risk downtime.',
    stack: ['React/Next.js', 'React Native', 'Stripe', 'PostgreSQL', 'AWS'],
    link: { href: 'https://8balldesigner.com', label: '8balldesigner.com' },
  },
];
