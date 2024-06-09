'use client';

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GrLinkBottom } from "react-icons/gr";

const certifications = [
    {
        category: 'Tech',
        title: 'Web Development',
        imageUrl: '/assets/resume/bitwork_solutions_logo.jpg',  
        href: '/'
    },
    {
        category: 'Tech',
        title: 'AI Development',
        imageUrl: '/assets/resume/bitwork_solutions_logo.jpg',  
        href: '/'
    },
    {
        category: 'Tech',
        title: 'DevOps',
        imageUrl: '/assets/resume/bitwork_solutions_logo.jpg',  
        href: '/'
    },
    {
        category: 'Finance',
        title: 'SEO',
        imageUrl: '/assets/resume/bitwork_solutions_logo.jpg',  
        href: '/'
    },
    {
        category: 'Finance',
        title: 'Cybersecurity',
        imageUrl: '/assets/resume/bitwork_solutions_logo.jpg',  
        href: '/'
    },
    {
        category: 'Finance',
        title: 'Bug Fixing',
        imageUrl: '/assets/resume/bitwork_solutions_logo.jpg',  
        href: '/'
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
