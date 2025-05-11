'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BsArrowUpRight, BsCalendarEvent, BsMic } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";

const speakingEvents = [
    {
        title: 'Building and Deploying an LSTM Mean Reversion Trading Strategy on AWS ECS and Docker Hub',
        description: 'I presented an in-depth look at how to build and deploy a machine learning model for financial trading, focusing on LSTM architectures for mean reversion strategies. The talk covered the entire workflow from model development to containerization with Docker and deployment on AWS ECS.',
        imageUrl: '/assets/speaker/GailleSpeaker-headline-poster.png',
        link: 'https://www.facebook.com/share/p/1JFYBUJL6y/',
        date: 'February 2025',
        venue: 'AI Conference, Cebu'
    }
];

const advocacyActivities = [
    {
        title: 'AI Pilipinas - AI in Finance Advocate',
        description: 'Actively contributed to AI Pilipinas as an advocate for AI applications in finance, helping bridge the gap between cutting-edge AI technology and practical financial applications.',
        quote: 'Artificial intelligence is transforming finance - from algorithmic trading to risk assessment. My mission is to make these tools accessible to Filipino professionals.',
        imageUrls: [
            '/assets/speaker/gaillespeaker.png',
            '/assets/speaker/gailleLecturing.png',
            '/assets/speaker/groupofspeakers.png'
        ],
        links: [
            'https://www.facebook.com/photo.php?fbid=122142267998352154&set=pb.61560564626776.-2207520000&type=3',
            'https://www.facebook.com/photo/?fbid=122137305662352154&set=a.122108963252352154',
            'https://www.facebook.com/photo/?fbid=122135173460352154&set=a.122108963252352154',
            'https://www.facebook.com/photo/?fbid=122132745380352154&set=a.122108963252352154',
            'https://www.facebook.com/photo/?fbid=122130015434352154&set=a.122108963252352154'
        ]
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Speaking = () => {
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
                    <h1 className="text-5xl font-bold text-white mb-4">Speaking & Advocacy</h1>
                    <div className="h-1 w-32 bg-accent mx-auto mb-6 rounded-full"></div>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg">
                        Sharing knowledge and advocating for the responsible application of artificial intelligence in finance and beyond.
                    </p>
                </motion.div>
                
                {/* Speaking Events Section */}
                <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="mb-24"
                >
                    <motion.h2 
                        variants={item}
                        className='text-[42px] font-bold leading-none text-white mb-12 flex items-center gap-3'
                    >
                        <BsMic className="text-accent" /> Speaking Engagements
                    </motion.h2>
                    
                    {speakingEvents.map((event, index) => (
                        <motion.div 
                            key={index} 
                            variants={item}
                            className="relative bg-gradient-to-br from-[#1e1e2a] to-[#2d2d3a] rounded-2xl overflow-hidden shadow-lg"
                        >
                            <div className="absolute inset-0 bg-accent/5 z-0"></div>
                            <div className="relative z-10 flex flex-col md:flex-row">
                                <div className="w-full md:w-1/2 h-[400px] relative">
                                    <Image 
                                        src={event.imageUrl} 
                                        alt={event.title}
                                        fill
                                        className="object-cover" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e2a] to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 bg-accent/90 text-white py-2 px-4 rounded-full flex items-center gap-2">
                                        <BsCalendarEvent />
                                        <span>{event.date}</span>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col justify-between p-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                                        <p className="text-white/70 mb-4 text-sm">{event.venue}</p>
                                        <p className="text-white/70 mb-8">{event.description}</p>
                                    </div>
                                    <Link href={event.link} className="self-start">
                                        <Button className="bg-accent hover:bg-accent/80 text-white rounded-full px-6 py-3 flex items-center gap-2 shadow-lg shadow-accent/20 transform hover:-translate-y-1 transition-all">
                                            View Presentation <BsArrowUpRight />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Advocacy Section */}
                <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.h2 
                        variants={item}
                        className='text-[42px] font-bold leading-none text-white mb-12 flex items-center gap-3'
                    >
                        <span className="text-accent">#</span> AI Advocacy
                    </motion.h2>
                    
                    {advocacyActivities.map((activity, index) => (
                        <motion.div key={index} variants={item} className="mb-16">
                            <div className="bg-gradient-to-br from-[#1e1e2a] to-[#2d2d3a] rounded-2xl p-8 shadow-lg mb-8">
                                <h3 className="text-2xl font-bold text-white mb-4">{activity.title}</h3>
                                <p className="text-white/70 mb-8">{activity.description}</p>
                                
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                                    <FaQuoteLeft className="text-accent text-3xl mb-4 opacity-50" />
                                    <p className="text-white/90 italic text-lg">{activity.quote}</p>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                {activity.imageUrls.map((url, imgIndex) => (
                                    <motion.div 
                                        key={imgIndex} 
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: imgIndex * 0.2 }}
                                        className="h-[250px] relative rounded-xl overflow-hidden shadow-lg group"
                                    >
                                        <Image 
                                            src={url} 
                                            alt={`AI advocacy image ${imgIndex + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </motion.div>
                                ))}
                            </div>
                            
                            <div className="flex flex-wrap gap-4 justify-center">
                                {activity.links.map((link, linkIndex) => (
                                    <Link key={linkIndex} href={link}>
                                        <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white shadow-lg transform hover:-translate-y-1 transition-all">
                                            View Activity {linkIndex + 1} <BsArrowUpRight />
                                        </Button>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Speaking; 