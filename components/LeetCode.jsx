'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BsArrowUpRight } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

const LeetCode = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto">
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeIn" } }}
                    className="relative overflow-hidden bg-gradient-to-br from-[#1e1e2a] to-[#2d2d3a] rounded-2xl p-8 shadow-lg"
                >
                    <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl -mr-20 -mt-20 z-0"></div>
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl -ml-20 -mb-20 z-0"></div>
                    
                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                        <div className="w-full lg:w-1/2 relative">
                            <div className="relative h-[400px] rounded-xl overflow-hidden border border-white/10 shadow-lg transform hover:scale-[1.01] transition-all">
                                <Image 
                                    src="/assets/leetcode/leetcode-gaille.png" 
                                    alt="LeetCode Profile" 
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-[42px] font-bold text-white mb-2">Coding Excellence</h2>
                            <div className="h-1 w-24 bg-accent mb-6 rounded-full"></div>
                            <p className="text-white/70 mb-8 text-lg">
                                Continuously honing my algorithmic problem-solving skills through consistent practice on LeetCode. 
                                Regular practice of data structures and algorithms helps me develop efficient solutions for complex 
                                programming challenges in my day-to-day work.
                            </p>
                            
                            <div className="grid grid-cols-3 gap-4 mb-10">
                                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 transform hover:-translate-y-1 transition-all">
                                    <span className="text-3xl font-bold text-accent block text-center">540+</span>
                                    <span className="text-white/70 text-center block text-sm">Problems Solved</span>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 transform hover:-translate-y-1 transition-all">
                                    <span className="text-3xl font-bold text-accent block text-center">Top 10%</span>
                                    <span className="text-white/70 text-center block text-sm">Global Ranking</span>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 transform hover:-translate-y-1 transition-all">
                                    <span className="text-3xl font-bold text-accent block text-center">Daily</span>
                                    <span className="text-white/70 text-center block text-sm">Practice</span>
                                </div>
                            </div>
                            
                            <Link href="https://leetcode.com/gael55x/" target="_blank" rel="noopener noreferrer">
                                <Button className="bg-accent hover:bg-accent/80 text-white rounded-full px-8 py-6 flex items-center gap-2 shadow-lg shadow-accent/20 transform hover:-translate-y-1 transition-all">
                                    <SiLeetcode className="text-xl" /> View Profile <BsArrowUpRight />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LeetCode; 