import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaPython,
  FaGitAlt,
  FaLinux,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiDjango,
  SiFastapi,
  SiTensorflow,
  SiMongodb,
  SiPostgresql,
  SiC,
  SiCplusplus,
  SiKubernetes,
  SiRedis,
  SiNginx,
  SiTypescript,
  SiExpress,
  SiMysql,
  SiFirebase,
} from 'react-icons/si';

export const about = {
  title: 'Positioning',
  lead:
    "I'm a lead engineer focused on production ML/CV, backend services, and platform security. I'm strongest where ambiguity is high: turning messy real-world inputs into reliable systems, instrumenting them, and shipping iteratively with CI/CD. I work across Bitwork (manufacturing/vision), Willed (consumer platform + security), and early-stage products. I write and speak about AI responsibly—especially where it touches money and people's data.",
  description:
    'Strategic focus: applied computer vision, secure platforms at scale, and full-stack delivery with DevOps discipline.',
  info: [
    { fieldName: 'Name', fieldValue: 'Gaille Amolong' },
    { fieldName: 'Phone', fieldValue: '(+63) 960 357 4478' },
    { fieldName: 'Experience', fieldValue: '4+ Years' },
    { fieldName: 'Email', fieldValue: 'gaille.amolong1@gmail.com' },
    { fieldName: 'Nationality', fieldValue: 'Filipino' },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Filipino, Cebuano, French (basic), Japanese (intermediate)',
    },
    { fieldName: 'Freelance', fieldValue: 'Available' },
  ],
};

export const experience = {
  title: 'Experience',
  description:
    'Lead and IC delivery across security-sensitive platforms, manufacturing AI, and early-stage growth products.',
  items: [
    {
      company: 'Willed',
      position: 'Software Engineer (Contract)',
      duration: 'Sep 2025 - Present',
      description:
        'Cybersecurity and platform work on a consumer product serving 150k+ users: SIEM/security-oriented initiatives, feature delivery, test automation, and CI/CD so releases stay safe and frequent.',
    },
    {
      company: 'Bitwork Solutions',
      position: 'Lead Software Engineer',
      duration: 'May 2025 - Present',
      description:
        'Lead engineering for computer vision and production systems: shipped a pipeline that reduced image processing from ~10 minutes to ~30 seconds (~20×), improved engraving precision ~25%, and increased manufacturing throughput ~40%. Own technical direction, mentoring, and delivery.',
    },
    {
      company: 'Bitwork Solutions',
      position: 'Software Engineer & DevOps Engineer',
      duration: 'Sep 2023 - May 2025',
      description:
        'Built full-stack applications, hardened deployment with Docker and AWS, and automated CI/CD so teams shipped predictably.',
    },
    {
      company: 'Referrin',
      position: 'Software Engineer',
      duration: '2024',
      description:
        'Full-stack and infrastructure work to support early adoption; helped the product scale past 5k+ users with reliable core flows and performance focus.',
    },
    {
      company: 'Medium',
      position: 'Technical Writer — AI in finance & cybersecurity',
      duration: 'June 2024 - Present',
      description:
        'Long-form articles on responsible AI in finance and security: explainability, threat models, and pragmatic controls for builders—not live trading execution.',
    },
    {
      company: 'AI Pilipinas',
      position: 'AI in Finance Advocate',
      duration: 'June 2024 - March 2025',
      description:
        'Conference talks and educational content on responsible AI adoption in financial services.',
    },
    {
      company: 'TidalStack',
      position: 'Freelance Full Stack Developer',
      duration: 'Jan 2024 - Mar 2024',
      description:
        'Delivered client web apps end-to-end with modern React/Node stacks and clear handoff documentation.',
    },
    {
      company: 'Minglanilla Science High School',
      position: 'Head Developer (Volunteer)',
      duration: 'Mar 2023 - Mar 2024',
      description:
        "Led the volunteer team shipping the school's official site and digital infrastructure; 2000+ students and staff gained a reliable information channel.",
    },
  ],
};

export const education = {
  title: 'Education & credentials',
  description:
    'Formal CS study plus focused certificates in cloud, AI, and markets—applied directly in production work.',
  items: [
    {
      institution: 'AWS',
      degree: 'AWS Specialization Certificate',
      duration: '2025',
      description:
        'Scalable architecture patterns and enterprise-grade deployment practices used in current platform work.',
    },
    {
      institution: 'Cebu Institute of Technology',
      degree: 'Bachelor of Science in Computer Science',
      duration: '2024-2028',
      description:
        'Algorithms, systems, software engineering, and advanced programming—paired with full-time industry roles.',
    },
    {
      institution: 'Harvard University (edX)',
      degree: 'CS50X',
      duration: '2021',
      description: 'Foundations in CS, data structures, and multi-language programming.',
    },
    {
      institution: 'Harvard University (edX)',
      degree: 'CS50Web',
      duration: '2023',
      description: 'Full-stack web with Django, JavaScript, and React.',
    },
    {
      institution: 'Harvard University (edX)',
      degree: 'CS50AI',
      duration: '2023',
      description: 'Search, knowledge, optimization, ML, and NLP fundamentals.',
    },
    {
      institution: 'DeepLearning.AI & Stanford (Coursera)',
      degree: 'Neural Networks and Deep Learning',
      duration: '2023-2024',
      description: 'CNNs, RNNs, LSTMs, and applied deep learning workflows.',
    },
    {
      institution: 'Yale (Coursera)',
      degree: 'Financial Markets',
      duration: '2024',
      description: 'Markets, risk, and portfolio intuition to contextualize fintech and AI work.',
    },
  ],
};

export const skills = {
  title: 'Technical breadth',
  description:
    'Stack depth where shipping matters: cloud, containers, backends, ML, and modern web—used in production, not slide decks alone.',
  skillList: [
    { icon: <FaAws />, name: 'AWS' },
    { icon: <FaDocker />, name: 'Docker' },
    { icon: <FaHtml5 />, name: 'HTML 5' },
    { icon: <FaCss3 />, name: 'CSS 3' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <SiDjango />, name: 'Django' },
    { icon: <SiFastapi />, name: 'FastAPI' },
    { icon: <SiTensorflow />, name: 'TensorFlow' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <FaLinux />, name: 'Linux' },
    { icon: <SiC />, name: 'C' },
    { icon: <SiCplusplus />, name: 'C++' },
    { icon: <SiKubernetes />, name: 'Kubernetes' },
    { icon: <SiRedis />, name: 'Redis' },
    { icon: <SiNginx />, name: 'Nginx' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <SiExpress />, name: 'Express' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <SiFirebase />, name: 'Firebase' },
  ],
};
