'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TerminalLoader = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const terminalLines = [
    { text: "$ sudo access gaille_portfolio.exe", delay: 0.5 },
    { text: "Password: ••••••••••••", delay: 1.2 },
    { text: "Access granted. Welcome, visitor.", delay: 1.8 },
    { text: "Initializing portfolio systems...", delay: 2.4 },
    { text: "Loading AI modules ████████████ 100%", delay: 3.0 },
    { text: "Loading projects ████████████ 100%", delay: 3.4 },
    { text: "Loading skills database ████████████ 100%", delay: 3.8 },
    { text: "System ready. Launching interface...", delay: 4.2 },
    { text: "$ ./launch_portfolio.sh", delay: 4.8 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentLine < terminalLines.length - 1) {
        setCurrentLine(currentLine + 1);
      } else {
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => onComplete && onComplete(), 500);
        }, 1000);
      }
    }, terminalLines[currentLine]?.delay * 1000 || 500);

    return () => clearTimeout(timer);
  }, [currentLine, terminalLines, onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <div className="bg-gray-900 border border-green-500 rounded-lg p-8 w-[90%] max-w-2xl shadow-2xl shadow-green-500/20">
        <div className="flex items-center gap-2 mb-4 border-b border-green-500 pb-3">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-green-400 text-sm ml-4 font-mono">Terminal - gaille@portfolio</span>
        </div>
        
        <div className="font-mono text-green-400 space-y-2">
          <AnimatePresence>
            {terminalLines.slice(0, currentLine + 1).map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center"
              >
                <span className="text-green-400">{line.text}</span>
                {index === currentLine && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                    className="ml-2 w-2 h-5 bg-green-400 inline-block"
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalLoader; 