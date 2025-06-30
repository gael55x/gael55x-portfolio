'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text, delay = 0, speed = 50, className = "", onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay + (currentIndex * speed));

      return () => clearTimeout(timeout);
    } else {
      onComplete && onComplete();
      // Hide cursor after completion
      setTimeout(() => setShowCursor(false), 1000);
    }
  }, [currentIndex, text, delay, speed, onComplete]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: showCursor ? [1, 0] : 0 }}
        transition={{ duration: 0.8, repeat: showCursor ? Infinity : 0, repeatType: "reverse" }}
        className="inline-block w-0.5 h-[1.2em] bg-accent ml-1"
      />
    </span>
  );
};

export default TypewriterText; 