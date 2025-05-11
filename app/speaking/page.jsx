'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BsArrowUpRight } from "react-icons/bs";

const speakingEvents = [
    {
        title: 'Building and Deploying an LSTM Mean Reversion Trading Strategy on AWS ECS and Docker Hub',
        description: 'Presented an in-depth look at how to build and deploy a machine learning model for financial trading, focusing on LSTM architectures for mean reversion strategies. The talk covered the entire workflow from model development to containerization with Docker and deployment on AWS ECS.',
        imageUrl: '/assets/speaker/GailleSpeaker-headline-poster.png',
        link: 'https://www.facebook.com/share/p/1JFYBUJL6y/'
    }
];

const advocacyActivities = [
    {
        title: 'AI Pilipinas - AI in Finance Advocate',
        description: 'Actively contributed to AI Pilipinas as an advocate for AI applications in finance, helping bridge the gap between cutting-edge AI technology and practical financial applications.',
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

const Speaking = () => {
    return (
        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
            <div className="container mx-auto">
                {/* Speaking Events Section */}
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeIn" } }}
                    className="mb-20"
                >
                    <h2 className='text-[42px] font-bold leading-none text-white mb-12 border-b border-white/20 pb-4'>Speaking Engagements</h2>
                    
                    {speakingEvents.map((event, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-8 mb-12">
                            <div className="w-full md:w-1/2 h-[600px] relative">
                                <Image 
                                    src={event.imageUrl} 
                                    alt={event.title}
                                    fill
                                    className="object-cover rounded-lg" 
                                />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
                                    <p className="text-white/60 mb-8">{event.description}</p>
                                </div>
                                <Link href={event.link} className="self-start">
                                    <Button className="bg-accent hover:bg-accent/80 text-white rounded-full px-6 py-3 flex items-center gap-2">
                                        View Presentation <BsArrowUpRight />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Advocacy Section */}
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
                >
                    <h2 className='text-[42px] font-bold leading-none text-white mb-12 border-b border-white/20 pb-4'>AI Advocacy</h2>
                    
                    {advocacyActivities.map((activity, index) => (
                        <div key={index} className="mb-16">
                            <h3 className="text-2xl font-bold text-white mb-4">{activity.title}</h3>
                            <p className="text-white/60 mb-8">{activity.description}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                {activity.imageUrls.map((url, imgIndex) => (
                                    <div key={imgIndex} className="h-[200px] relative rounded-lg overflow-hidden">
                                        <Image 
                                            src={url} 
                                            alt={`AI advocacy image ${imgIndex + 1}`}
                                            fill
                                            className="object-cover" 
                                        />
                                    </div>
                                ))}
                            </div>
                            
                            <div className="flex flex-wrap gap-4">
                                {activity.links.map((link, linkIndex) => (
                                    <Link key={linkIndex} href={link}>
                                        <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                                            View Activity {linkIndex + 1}
                                        </Button>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Speaking; 