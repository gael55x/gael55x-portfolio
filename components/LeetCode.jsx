'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BsArrowUpRight } from 'react-icons/bs';

const LeetCode = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto">
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeIn" } }}
                    className="flex flex-col lg:flex-row items-center gap-12"
                >
                    <div className="w-full lg:w-1/2 relative h-[400px] rounded-lg overflow-hidden">
                        <Image 
                            src="/assets/leetcode/leetcode-gaille.png" 
                            alt="LeetCode Profile" 
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-[42px] font-bold text-white mb-6">Coding Excellence</h2>
                        <p className="text-white/60 mb-8">
                            Continuously honing my algorithmic problem-solving skills through consistent practice on LeetCode. 
                            Regular practice of data structures and algorithms helps me develop efficient solutions for complex 
                            programming challenges in my day-to-day work.
                        </p>
                        <div className="flex flex-wrap gap-6 mb-8">
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-bold text-accent">200+</span>
                                <span className="text-white/60">Problems Solved</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-bold text-accent">Top 5%</span>
                                <span className="text-white/60">Global Ranking</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-bold text-accent">Daily</span>
                                <span className="text-white/60">Practice</span>
                            </div>
                        </div>
                        <Link href="https://leetcode.com/gael55x/" target="_blank" rel="noopener noreferrer">
                            <Button className="bg-accent hover:bg-accent/80 text-white rounded-full px-6 py-3 flex items-center gap-2">
                                View Profile <BsArrowUpRight />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LeetCode; 