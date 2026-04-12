/** Employer-focused case studies (Problem / Action / Result / Business) */
export const selectedWork = [
  {
    id: 'bitwork',
    company: 'Bitwork Solutions',
    role: 'Lead Software Engineer',
    title: 'Vision & manufacturing throughput',
    problem:
      'Image processing pipeline latency capped line throughput and slowed quality feedback loops for manufacturing workflows.',
    action:
      'Led computer vision pipeline design, profiling, and deployment—model/serving choices, batching, and integration with production tooling.',
    result:
      'Cut end-to-end processing from ~10 minutes to ~30 seconds (~20x); improved engraving precision ~25% and throughput ~40%.',
    business:
      'More units verified per shift, fewer rework cycles, and predictable latency operators can rely on.',
    stack: ['React/Next.js', 'FastAPI', 'OpenCV', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    id: 'willed',
    company: 'Willed',
    role: 'Software Engineer',
    title: 'Security & platform (150k+ users)',
    problem:
      'Ship product features without expanding attack surface; maintain visibility into security signals and a safe release cadence.',
    action:
      'Led SIEM/security-oriented work, feature delivery, and test/CI infrastructure on the core platform.',
    result:
      'Supported a consumer platform serving 150k+ users with stronger security posture and sustainable delivery practices.',
    business:
      'Trust and compliance readiness while keeping product velocity.',
    stack: ['Nuxt.js', 'Node.js', 'PostgreSQL', 'CI/CD', 'GCP', 'Quasar'],
  },
  {
    id: 'referrin',
    company: 'Referrin',
    role: 'Engineering (early-stage)',
    title: 'Full-stack & infra for early adoption',
    problem:
      'Prove the product through early traction with reliable UX, auth, and performance as usage grew.',
    action:
      'Full-stack and infrastructure work—core flows, performance, and foundations for growth.',
    result:
      'Helped scale the product past 5k+ users and supported early adoption milestones.',
    business:
      'Faster learning cycles for the team and a dependable experience for first customers.',
    stack: ['React/Next.js', 'FastAPI', 'PostgreSQL', 'AWS', 'Docker'],
  },
];
