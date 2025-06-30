'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const GlitchText = ({ children, className = "", trigger = false }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (trigger) {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 1000);
    }
  }, [trigger]);

  const glitchVariants = {
    normal: {
      x: 0,
      y: 0,
      textShadow: 'none',
    },
    glitch: {
      x: [-2, 2, -1, 1, 0],
      y: [-1, 1, -2, 2, 0],
      textShadow: [
        '2px 0 #ff0000, -2px 0 #00ffff',
        '-2px 0 #ff0000, 2px 0 #00ffff',
        '1px 0 #ff0000, -1px 0 #00ffff',
        '-1px 0 #ff0000, 1px 0 #00ffff',
        'none'
      ],
      transition: {
        duration: 0.1,
        repeat: 5,
        repeatType: 'mirror'
      }
    }
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={glitchVariants}
      animate={isGlitching ? 'glitch' : 'normal'}
      onHoverStart={() => setIsGlitching(true)}
      onHoverEnd={() => setTimeout(() => setIsGlitching(false), 500)}
    >
      {children}
    </motion.span>
  );
};

export default GlitchText; 