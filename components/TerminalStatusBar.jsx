'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TerminalStatusBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemLoad, setSystemLoad] = useState(Math.floor(Math.random() * 30) + 10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setSystemLoad(prev => {
        const change = (Math.random() - 0.5) * 10;
        return Math.max(5, Math.min(95, prev + change));
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-t border-green-500/30 px-4 py-2"
    >
      <div className="container mx-auto flex justify-between items-center text-green-400 font-mono text-sm">
        <div className="flex items-center gap-6">
          <span>gaille@portfolio:~$</span>
          <span className="text-white/60">
            Load: <span className="text-green-400">{systemLoad.toFixed(1)}%</span>
          </span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-green-400">ONLINE</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <span className="text-white/60">
            Time: <span className="text-green-400">{formatTime(currentTime)}</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalStatusBar; 