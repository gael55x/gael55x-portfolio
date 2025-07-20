"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// components
import Stairs from "./Stairs";

export default function StairTransition() {
    const pathname = usePathname();
    return (
        <>
            <AnimatePresence mode="wait">
                <div key={pathname}>
                    <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
                        <Stairs/>
                    </div>

                    <motion.div 
                        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none" 
                        initial={{opacity: 1}}
                        animate={{
                            opacity: 0, 
                            transition: {
                                delay: 0.3, // Reduced from 1 second
                                duration: 0.3, // Reduced from 0.4
                                ease: "easeInOut"
                            }, 
                        }} 
                    />
                </div>
            </AnimatePresence>        
        </>
    );
}