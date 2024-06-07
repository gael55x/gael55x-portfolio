'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            {/* circle */}
            <motion.svg
                className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] absolute z-0"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle cx="203" cy="253" r="250" stroke="#00ff99" strokeWidth="5" strokeLinecap="round" initial={{strokeDasharray: "24 10 0 0"}} 
                animate={{strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], rotate: [120, 360]}} 
                transition={{
                    duration: 20, 
                    repeat: Infinity, 
                    repeatType: "reverse"
                }}/>
            </motion.svg>
            {/* image */}
            <motion.div initial={{opacity: 0}} animate={{
                opacity: 1, 
                transition: {
                    delay: 2, 
                    duration: 0.4, 
                    ease: 'easeIn'
                }
            }}
            >
                <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full overflow-hidden mix-blend-lighten relative z-10">
                    <Image src="/assets/Gaille.png" priority quality={100} fill alt="Gaille" className="object-contain rounded-full" />
                </div>
            </motion.div>
        </div>
    );
};

export default Photo;
