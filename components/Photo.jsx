'use client';

import { motion } from "framer-motion";
import Image from "next/image";


const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div initial={{opacity: 0}} animate={{
                opacity: 1, 
                transition: {
                    delay: 2, 
                    duration: 0.4, 
                    ease: 'easeIn'
                }
            }}
            className="w-[198px] h-[198px] xl:w-[498px] xl:h-[498px] rounded-full overflow-hidden mix-blend-lighten"
            >
                <Image src="/assets/Gaille.png" priority quality={100} fill alt="Gaille" className="object-contain rounded-full" />
            </motion.div>
        </div>
    );
};

export default Photo;