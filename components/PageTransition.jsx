'use client';

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({children}) => {
    const pathname = usePathname();

    return <AnimatePresence mode="wait">
        <div key={pathname}>
            <motion.div 
                initial={{opacity: 1}} 
                animate={{
                    opacity: 0, 
                    transition: {
                    delay: 0.3, // Reduced from 1 second
                    duration: 0.3, // Reduced from 0.4
                    ease: "easeInOut" }}
                }
                className="h-screen w-screen fixed bg-primary top-0 pointer-events-none" 
            />
            {children}
        </div>
    </AnimatePresence>;
};

export default PageTransition;