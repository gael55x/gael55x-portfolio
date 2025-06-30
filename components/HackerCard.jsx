'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const HackerCard = ({ children, className = "", delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)',
        borderColor: 'rgba(34, 197, 94, 0.8)'
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative bg-gradient-to-br from-gray-900/90 to-black/90 border border-green-500/30 rounded-lg p-6 backdrop-blur-sm overflow-hidden ${className}`}
    >
      {/* Scan line effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent"
        animate={isHovered ? {
          y: [-100, 300],
          opacity: [0, 0.8, 0]
        } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      
      {/* Corner brackets */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-green-400"></div>
      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-green-400"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-green-400"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-green-400"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Glitch overlay */}
      <motion.div
        className="absolute inset-0 bg-green-500/5"
        animate={isHovered ? {
          opacity: [0, 0.1, 0.05, 0.15, 0]
        } : {}}
        transition={{ duration: 0.2, repeat: isHovered ? 3 : 0 }}
      />
    </motion.div>
  );
};

export default HackerCard; 