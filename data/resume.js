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
    FaLinux
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
    SiFirebase
} from 'react-icons/si';

// about data 
export const about = {
    title: 'About Me', 
    description: 'Gaille Amolong is a passionate, persevering, ambitious, and experienced full-stack developer and AI advocate with over 4 years in the tech industry. Proficient in a wide range of technologies, Gaille is dedicated to building innovative solutions, particularly in AI and finance technology, and sharing knowledge through speaking engagements.',
    info: [
        {
            fieldName: "Name", 
            fieldValue: "Gaille Amolong"
        },
        {
            fieldName: "Phone", 
            fieldValue: "(+63) 960 357 4478"
        },
        {
            fieldName: "Experience", 
            fieldValue: "4+ Years"
        },
        {
            fieldName: "Email", 
            fieldValue: "gaille.amolong1@gmail.com"
        },
        {
            fieldName: "Nationality", 
            fieldValue: "Filipino"
        },
        {
            fieldName: "Languages", 
            fieldValue: "English, Filipino, Cebuano, French (basic), Japanese (intermediate)"
        },
        {
            fieldName: "Freelance", 
            fieldValue: "Available"
        }
    ]
};

// experience data
export const experience = {
    title: 'My experience',
    description: "This is Gaille's Journey as a software engineer and AI advocate",
    items: [
        {
            company: "Willed",
            position: "Software Engineer (Contract)",
            duration: "Sep 2025 - Present",
            description: "Focused on cybersecurity, feature development, and testing infrastructure for Willed’s core platform. I work on improving system security, building new product features, and maintaining robust CI/CD pipelines."
        },
        {
            company: "BitWork Solutions",
            position: "Lead Software Engineer",
            duration: "May 2025 - Present",
            description: "Leading development teams and architecting scalable solutions. Driving technical strategy and mentoring junior developers while delivering enterprise-grade applications."
        },
        {
            company: "BitWork Solutions",
            position: "Software Engineer & DevOps Engineer", 
            duration: "Sep 2023 - May 2025",
            description: "Built robust full-stack applications and implemented CI/CD pipelines. Managed cloud infrastructure and automated deployment processes using Docker and AWS."
        },
        {
            company: "Medium",
            position: "Technical Writer - AI in Finance and Cybersecurity", 
            duration: "June 2024 - Present",
            description: "Developing LSTM-based quantitative trading algorithms and predictive models. Researching machine learning applications for financial market analysis."
        },
        {
            company: "AI Pilipinas",
            position: "AI in Finance Advocate", 
            duration: "June 2024 - March 2025",
            description: "Promoting responsible AI adoption in financial services. Speaking at conferences and developing educational content on AI applications in fintech."
        },
        {
            company: "TidalStack",
            position: "Freelancer Full Stack Developer", 
            duration: "Jan 2024 - Mar 2024",
            description: "Delivered custom web applications using modern frameworks. Collaborated with clients to build responsive, user-centric solutions from concept to deployment."
        },
        {
            company: "Minglanilla Science High School",
            position: "Head Developer - Volunteer Work", 
            duration: "Mar 2023 - Mar 2024",
            description: "Led volunteer team to build the school's official website and digital infrastructure. Impacted 2000+ students and staff through improved digital services."
        },
    ]
};

// education data
export const education = {
    title: 'My education',
    description: "This is Gaille's Educational Journey as a software engineer and as a tech visionary. Gaille is always hungry in learning.",
    items: [
        {
            institution: "AWS",
            degree: "AWS Specialization Certificate", 
            duration: "2025",
            description: "Advanced cloud architecture and solutions. Mastering scalable infrastructure design and enterprise-grade cloud services deployment."
        },
        {
            institution: "Cebu Institute of Technology",
            degree: "Bachelor of Science in Computer Science", 
            duration: "2024-2028",
            description: "Comprehensive computer science fundamentals including algorithms, data structures, software engineering principles, and advanced programming concepts."
        },
        {
            institution: "Harvard University",
            degree: "CS50X", 
            duration: "2021",
            description: "Introduction to computer science and programming. Foundation in algorithmic thinking, data structures, and multiple programming languages."
        },
        {
            institution: "Harvard University",
            degree: "CS50Web", 
            duration: "2023",
            description: "Web programming with Python and JavaScript. Full-stack development using Django, React, and modern web technologies."
        },
        {
            institution: "Harvard University",
            degree: "CS50AI", 
            duration: "2023",
            description: "Artificial intelligence concepts and applications. Machine learning, neural networks, natural language processing, and computer vision."
        },
        {
            institution: "DeepLearning.AI & Stanford",
            degree: "Neural Networks and Deep Learning", 
            duration: "2023-2024",
            description: "Advanced deep learning specialization. Convolutional networks, RNNs, LSTMs, and practical applications in AI development."
        },
        {
            institution: "Yale University",
            degree: "Financial Markets Course", 
            duration: "2024",
            description: "Comprehensive understanding of financial markets, risk management, and investment principles. Foundation for AI in finance applications."
        }
    ]
};

// skills data
export const skills = {
    title: 'My skills',
    description: 'Gaille is a highly skilled full-stack developer and AI specialist, adept at leveraging a diverse array of technologies to build innovative and efficient solutions in both software development and financial technology.',
    skillList: [
        {
            icon: <FaAws />, 
            name: 'AWS'
        },
        {
            icon: <FaDocker />, 
            name: 'Docker'
        },
        {
            icon: <FaHtml5 />, 
            name: 'HTML 5'
        },
        {
            icon: <FaCss3 />, 
            name: 'CSS 3'
        },
        {
            icon: <FaJs />, 
            name: 'JavaScript'
        },
        {
            icon: <FaReact />, 
            name: 'React'
        },
        {
            icon: <SiNextdotjs />, 
            name: 'NextJS'
        },
        {
            icon: <FaNodeJs />, 
            name: 'NodeJS'
        },
        {
            icon: <FaPython />, 
            name: 'Python'
        },
        {
            icon: <SiDjango />, 
            name: 'Django'
        },
        {
            icon: <SiFastapi />, 
            name: 'FastAPI'
        },
        {
            icon: <SiTensorflow />, 
            name: 'TensorFlow'
        },
        {
            icon: <SiMongodb />, 
            name: 'MongoDB'
        },
        {
            icon: <SiPostgresql />, 
            name: 'PostgreSQL'
        },
        {
            icon: <FaGitAlt />, 
            name: 'Git'
        },
        {
            icon: <FaLinux />, 
            name: 'Linux'
        },
        {
            icon: <SiC />, 
            name: 'C'
        },
        {
            icon: <SiCplusplus />, 
            name: 'C++'
        },
        {
            icon: <SiKubernetes />, 
            name: 'Kubernetes'
        },
        {
            icon: <SiRedis />, 
            name: 'Redis'
        },
        {
            icon: <SiNginx />, 
            name: 'Nginx'
        },
        {
            icon: <SiTypescript />, 
            name: 'TypeScript'
        },
        {
            icon: <SiExpress />, 
            name: 'Express'
        },
        {
            icon: <SiMysql />, 
            name: 'MySQL'
        },
        {
            icon: <SiFirebase />, 
            name: 'Firebase'
        }
    ]
}; 
