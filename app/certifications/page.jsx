'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GrLinkBottom } from "react-icons/gr";

const certifications = [
    {
        category: 'Cloud & Infrastructure',
        title: 'AWS Specialization Certificate',
        imageUrl: '/assets/certifications/aws/aws-gaille.png',  
        href: 'https://www.coursera.org/account/accomplishments/specialization/certificate/BVUU6YN41ENJ'
    },
    {
        category: 'Tech Certificates',
        title: 'CS50x',
        imageUrl: '/assets/certifications/harvard/CS50x.png',  
        href: 'https://certificates.cs50.io/6a52eed2-b05d-49a4-b6c7-1fbd9e9e6e7a.png?size=letter'
    },
    {
        category: 'Tech Certificates',
        title: 'CS50Web',
        imageUrl: '/assets/certifications/harvard/CS50W.png',  
        href: 'https://cs50.harvard.edu/certificates/1363956d-1111-4d5d-815d-ad68dad96e4a.png?size=letter'
    },
    {
        category: 'Tech Certificates',
        title: 'CS50AI',
        imageUrl: '/assets/certifications/harvard/CS50AI.png',  
        href: 'https://cs50.harvard.edu/certificates/3803696d-ad13-4ae5-b89a-f99477408a92'
    },
    {
        category: 'Tech Certificates',
        title: 'CS50P',
        imageUrl: '/assets/certifications/harvard/CS50P.png',  
        href: 'https://cs50.harvard.edu/certificates/60a710f0-7570-4413-850c-cee8bce47e26.png?size=letter'
    },
    {
        category: 'Tech Certificates',
        title: 'CS109x',
        imageUrl: '/assets/certifications/harvard/CS109x.png',  
        href: 'https://courses.edx.org/certificates/51d08af7dfe84f0ca68655cea5595f0e?_gl=1*1ugxddj*_ga*MTE5ODc2NDg3MS4xNzE3ODM3Njg4*_ga_D3KS4KMDT0*MTcxNzkyNTk5OS4zLjEuMTcxNzkyNjAwNy41Mi4wLjA.'
    },
    {
        category: 'Tech Certificates',
        title: 'Neural Networks & Deep Learning',
        imageUrl: '/assets/certifications/deeplearning/DPL-NeuralNets.png',  
        href: 'https://www.coursera.org/account/accomplishments/certificate/6D6HLVKBLEE5'
    },
    {
        category: 'Tech Certificates',
        title: 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization, and Optimization',
        imageUrl: '/assets/certifications/deeplearning/DPL-Improving%20Neural%20Nets.png',  
        href: 'https://www.coursera.org/account/accomplishments/certificate/TD7NTSJQWXB7'
    },
    {
        category: 'Tech Certificates',
        title: 'Structuring Machine Learning Projects',
        imageUrl: '/assets/certifications/deeplearning/DPL-Structuring%20ML%20projects.png',  
        href: 'https://www.coursera.org/account/accomplishments/certificate/7EDVYLFAC86Z'
    },
    {
        category: 'Tech Certificates',
        title: 'Convolutional Neural Networks',
        imageUrl: '/assets/certifications/deeplearning/DPL-CNNs.png',  
        href: 'https://www.coursera.org/account/accomplishments/certificate/GXEG9WVXBZUV'
    },
    {
        category: 'Tech Certificates',
        title: 'Sequence Models',
        imageUrl: '/assets/certifications/deeplearning/DPL-Sequence%20Models.png',  
        href: 'https://www.coursera.org/account/accomplishments/certificate/B2NTLMFMGMZP'
    },
    {
        category: 'Tech Certificates',
        title: 'NextJS 14 & React Full Course',
        imageUrl: '/assets/certifications/udemy/Nextjs14&React.png',  
        href: 'https://www.udemy.com/certificate/UC-17cd740a-20a1-4e29-a2d6-60861264bc86/'
    },
    {
        category: 'Finance Certificates',
        title: 'Financial Markets',
        imageUrl: '/assets/certifications/yale/Financial_Markets.png',  
        href: 'https://www.coursera.org/account/accomplishments/verify/6SVW4HMT6D4F'
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

const Certifications = () => {
    return (
        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
            <div className="container mx-auto">
                {Object.keys(groupedCertifications).map((category, index) => (
                    <div key={index} className='mb-12'>
                        <h2 className='justify-center items-center text-[42px] font-bold leading-none text-white mb-6'>{category}</h2>
                        <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
                            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                        >
                            {groupedCertifications[category].map((certification, certIndex) => (
                                <div key={certIndex} className='flex-1 flex flex-col items-center gap-6 group'>
                                    {/* Image */}
                                    <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${certification.imageUrl})` }}></div>
                                    {/* Title */}
                                    <h3 className='text-2xl font-bold leading-none text-white'>{certification.title}</h3>
                                    {/* Link */}
                                    <Link href={certification.href} className='mt-4'>
                                        <Button className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                                            <GrLinkBottom className='text-primary text-3xl' />
                                        </Button>
                                    </Link>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
