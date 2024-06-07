'use client';

import {BsArrowDownRight} from 'react-icons/bs';
import Link from 'next/link';

const services = [ 
    {
        num: '1',
        title: 'Web Development',
        description: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
        href: '/'
    },
    {
        num: '2',
        title: 'AI development',
        description: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
        href: '/'
    },
    {
        num: '3',
        title: 'Development Operations',
        description: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
        href: '/'
    },
    {
        num: '4',
        title: 'Bug fixing',
        description: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
        href: '/'
    },
    {
        num: '5',
        title: 'Cybersecurity',
        description: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
        href: '/'
    },
]

import { motion } from 'framer-motion';

const Services = () => {
    return (
        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
            <div className="container mx-auto">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}>
                    {services.map((service, index) => (
                        <div key={index}>
                            {/* top */}
                            <div className="flex items-center justify-between">
                                <div>{service.num}</div>
                                <Link href={service.href}>
                                    <BsArrowDownRight />
                                </Link>
                            </div>
                            {/* title */}
                            <h2>{service.title}</h2>
                            {/* description */}
                            <p>{service.description}</p>
                            {/* border */}
                            <div className="border-b border-white w-full my-4"></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;