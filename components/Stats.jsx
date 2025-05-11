'use client';

import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const stats = [
    {
        num: 4, 
        text: "+ Years of Experience"
    }, 
    {
        num: "1", 
        text: "% Developer from CodersRank"
    }, 
    {
        num: 64, 
        text: "Projects Completed"
    }, 
    {
        num: 13, 
        text: "Technologies Mastered"
    }, 
    {
        num: 200, 
        text: "Code commits (2025)"
    }, 
]

const Stats = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="flex flex-col items-center mb-8">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-white mb-3"
                    >
                        Performance & Achievement
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: 120 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="h-1 bg-accent rounded-full"
                    />
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto'>
                    {stats.map((item, index) => {
                        return (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative bg-gradient-to-br from-[#1e1e2a] to-[#2d2d3a] rounded-xl p-6 shadow-lg overflow-hidden group" 
                                key={index}
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full filter blur-xl -mr-12 -mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="relative z-10 flex flex-col items-center justify-center gap-2">
                                    <CountUp 
                                        end={item.num} 
                                        duration={3.5} 
                                        delay={2} 
                                        className="text-4xl xl:text-5xl font-extrabold text-white group-hover:text-accent transition-colors duration-300" 
                                    />
                                    <p className="text-center text-white/70 text-sm md:text-base">{item.text}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;