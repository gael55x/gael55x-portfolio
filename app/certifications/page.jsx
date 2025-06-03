'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GrLinkBottom } from "react-icons/gr";
import { MdVerified } from "react-icons/md";

const certifications = [
    {
        category: 'Cloud & Infrastructure',
        title: 'AWS Specialization Certificate',
        description: 'Comprehensive certification covering AWS architecture, deployment, and management principles',
        imageUrl: '/assets/certifications/aws/aws-gaille.png',  
        href: 'https://www.coursera.org/account/accomplishments/specialization/certificate/BVUU6YN41ENJ',
        issuer: 'Amazon Web Services',
        date: 'Feb 2025'
    },
    {
        category: 'Tech Certificates',
        title: 'CS50x',
        description: 'Introduction to Computer Science covering algorithms, data structures, and programming concepts',
        imageUrl: '/assets/certifications/harvard/CS50x.png',  
        href: 'https://certificates.cs50.io/6a52eed2-b05d-49a4-b6c7-1fbd9e9e6e7a.png?size=letter',
        issuer: 'Harvard University',
        date: 'Dec 2021'
    },
    {
        category: 'Tech Certificates',
        title: 'CS50Web',
        description: 'Web Programming with Python and JavaScript, covering modern web development principles',
        imageUrl: '/assets/certifications/harvard/CS50W.png',  
        href: 'https://cs50.harvard.edu/certificates/1363956d-1111-4d5d-815d-ad68dad96e4a.png?size=letter',
        issuer: 'Harvard University',
        date: 'Aug 2023'
    },
    {
        category: 'Tech Certificates',
        title: 'CS50AI',
        description: 'Introduction to Artificial Intelligence with Python, covering machine learning concepts',
        imageUrl: '/assets/certifications/harvard/CS50AI.png',  
        href: 'https://cs50.harvard.edu/certificates/3803696d-ad13-4ae5-b89a-f99477408a92',
        issuer: 'Harvard University',
        date: 'Nov 2023'
    },
    {
        category: 'Tech Certificates',
        title: 'CS50P',
        description: 'Introduction to Programming with Python, covering programming fundamentals',
        imageUrl: '/assets/certifications/harvard/CS50P.png',  
        href: 'https://cs50.harvard.edu/certificates/60a710f0-7570-4413-850c-cee8bce47e26.png?size=letter',
        issuer: 'Harvard University',
        date: 'Jul 2022'
    },
    {
        category: 'Tech Certificates',
        title: 'CS109x',
        description: 'Data Science: Probability and Statistics concepts for data analysis',
        imageUrl: '/assets/certifications/harvard/CS109x.png',  
        href: 'https://courses.edx.org/certificates/51d08af7dfe84f0ca68655cea5595f0e?_gl=1*1ugxddj*_ga*MTE5ODc2NDg3MS4xNzE3ODM3Njg4*_ga_D3KS4KMDT0*MTcxNzkyNTk5OS4zLjEuMTcxNzkyNjAwNy41Mi4wLjA.',
        issuer: 'Harvard University',
        date: 'Dec 2023'
    },
    {
        category: 'Tech Certificates',
        title: 'Neural Networks & Deep Learning',
        description: 'Fundamentals of neural networks, activation functions, and forward/backpropagation',
        imageUrl: '/assets/certifications/deeplearning/DPL-NeuralNets.png',  
        href: 'https://www.coursera.org/account/accomplishments/certificate/6D6HLVKBLEE5',
        issuer: 'DeepLearning.AI',
        date: 'Jan 2024'
    },
    {
        category: 'Tech Certificates',
        title: 'Improving Deep Neural Networks',
        description: 'Advanced techniques in hyperparameter tuning, regularization, and optimization for neural networks',
        imageUrl: '/assets/certifications/deeplearning/DPL-Improving%20Neural%20Nets.png',  
        href: 'https://www.coursera.org/account/accomplishments/certificate/TD7NTSJQWXB7',
        issuer: 'DeepLearning.AI',
        date: 'Feb 2024'
    },
    {
        category: 'Tech Certificates',
        title: 'Structuring Machine Learning Projects',
        description: 'Best practices in organizing and managing machine learning project workflows',
        imageUrl: '/assets/certifications/deeplearning/DPL-Structuring%20ML%20projects.png',  
        href: 'https://www.coursera.org/account/accomplishments/certificate/7EDVYLFAC86Z',
        issuer: 'DeepLearning.AI',
        date: 'Mar 2024'
    },
    {
        category: 'Tech Certificates',
        title: 'Convolutional Neural Networks',
        description: 'Computer vision techniques using CNNs for image recognition and classification',
        imageUrl: '/assets/certifications/deeplearning/DPL-CNNs.png',  
        href: 'https://www.coursera.org/account/accomplishments/certificate/GXEG9WVXBZUV',
        issuer: 'DeepLearning.AI',
        date: 'Apr 2024'
    },
    {
        category: 'Tech Certificates',
        title: 'Sequence Models',
        description: 'RNNs, LSTMs, and attention models for natural language processing and time series data',
        imageUrl: '/assets/certifications/deeplearning/DPL-Sequence%20Models.png',  
        href: 'https://www.coursera.org/account/accomplishments/certificate/B2NTLMFMGMZP',
        issuer: 'DeepLearning.AI',
        date: 'May 2024'
    },
    {
        category: 'Tech Certificates',
        title: 'NextJS 14 & React Full Course',
        description: 'Comprehensive web development with React and Next.js 14 framework',
        imageUrl: '/assets/certifications/udemy/Nextjs14&React.png',  
        href: 'https://www.udemy.com/certificate/UC-17cd740a-20a1-4e29-a2d6-60861264bc86/',
        issuer: 'Udemy',
        date: 'Feb 2024'
    },
    {
        category: 'Tech Certificates',
        title: 'React Native Mobile Development',
        description: 'Cross-platform mobile app development using React Native framework',
        imageUrl: '/assets/certifications/react-native/react_native.png',  
        href: 'https://www.coursera.org/account/accomplishments/certificate/MS3HAMBGQUJ8',
        issuer: 'React Native Certification Program',
        date: 'Sep 2024'
    },
    {
        category: 'Finance Certificates',
        title: 'Financial Markets',
        description: 'Understanding financial markets, instruments, and investment strategies',
        imageUrl: '/assets/certifications/yale/Financial_Markets.png',  
        href: 'https://www.coursera.org/account/accomplishments/verify/6SVW4HMT6D4F',
        issuer: 'Yale University',
        date: 'Jan 2024'
    },
];

const groupByCategory = (certifications) => {
    return certifications.reduce((acc, cert) => {
        if (!acc[cert.category]) {
            acc[cert.category] = [];
        }
        acc[cert.category].push(cert);
        return acc;
    }, {});
};

const groupedCertifications = groupByCategory(certifications);

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Certifications = () => {
    return (
        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
            <div className="container mx-auto">
                {/* Page Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold text-white mb-4">My Certifications</h1>
                    <div className="h-1 w-32 bg-accent mx-auto mb-6 rounded-full"></div>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg">
                        Continuous learning and professional development across cloud, AI, and full-stack technologies.
                    </p>
                </motion.div>
                
                {Object.keys(groupedCertifications).map((category, index) => (
                    <div key={index} className='mb-16'>
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <div className="h-1 w-8 bg-accent rounded-full"></div>
                            <h2 className='text-[42px] font-bold leading-none text-white'>{category}</h2>
                        </motion.div>
                        
                        <motion.div 
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                        >
                            {groupedCertifications[category].map((certification, certIndex) => (
                                <motion.div 
                                    key={certIndex} 
                                    variants={item}
                                    className='group'
                                >
                                    <div className="bg-gradient-to-br from-[#1e1e2a] to-[#2d2d3a] rounded-xl overflow-hidden shadow-lg border border-white/5 hover:border-accent/20 transition-all duration-300">
                                        {/* Image */}
                                        <div className="relative">
                                            <div className="w-full h-52 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                                                style={{ backgroundImage: `url(${certification.imageUrl})` }}
                                            ></div>
                                            <div className="absolute top-4 right-4 bg-accent/90 text-white p-2 rounded-full shadow-lg">
                                                <MdVerified className="text-lg" />
                                            </div>
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className='text-xl font-bold leading-tight text-white group-hover:text-accent transition-colors'>{certification.title}</h3>
                                            </div>
                                            <div className="flex justify-between mb-4">
                                                <span className="text-white/50 text-sm">{certification.issuer}</span>
                                                <span className="text-accent text-sm">{certification.date}</span>
                                            </div>
                                            <p className="text-white/70 text-sm mb-6">{certification.description}</p>
                                            
                                            {/* Link */}
                                            <Link href={certification.href} target="_blank" rel="noopener noreferrer">
                                                <Button className='w-full bg-white/5 hover:bg-accent text-white border border-white/10 hover:border-accent group-hover:bg-accent transition-all duration-300 flex justify-center items-center gap-2 py-5'>
                                                    View Certificate <GrLinkBottom className='text-lg' />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
