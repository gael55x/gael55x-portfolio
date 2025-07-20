'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TerminalLoader = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [progress, setProgress] = useState(0);

  const steps = [
    { text: '$ sudo access gaille_portfolio.exe', type: 'command', delay: 200 },
    { text: 'Access granted ✓', type: 'success', delay: 300 },
    { text: 'Loading portfolio systems...', type: 'loading', delay: 200 },
    { text: 'System ready ✓', type: 'success', delay: 200 },
    { text: 'Launching...', type: 'info', delay: 200 }
  ];

  // Cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  // Main sequence
  useEffect(() => {
    if (currentStep >= steps.length) {
      setTimeout(() => {
        onComplete?.();
      }, 300);
      return;
    }

    const step = steps[currentStep];
    
    setTimeout(() => {
      if (step.type === 'loading') {
        setDisplayText(step.text);
        
        // Fast progress animation
        let prog = 0;
        const progressInterval = setInterval(() => {
          prog += Math.random() * 30 + 20;
          if (prog >= 100) {
            prog = 100;
            clearInterval(progressInterval);
            setTimeout(() => {
              setCurrentStep(prev => prev + 1);
            }, 150);
          }
          setProgress(prog);
        }, 50);
      } else {
        // Fast type animation
        typeText(step.text, () => {
          setTimeout(() => {
            setCurrentStep(prev => prev + 1);
          }, 200);
        });
      }
    }, step.delay);
  }, [currentStep, onComplete]);

  const typeText = (text, callback) => {
    setDisplayText('');
    let i = 0;
    
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        callback();
      }
    }, 30); // Much faster typing
  };

  const getTextColor = (type) => {
    switch (type) {
      case 'command': return 'text-cyan-400';
      case 'success': return 'text-green-400';
      case 'loading': return 'text-yellow-400';
      default: return 'text-gray-300';
    }
  };

  const renderProgressBar = () => {
    const width = 20; // Smaller progress bar
    const filled = Math.floor((progress / 100) * width);
    const empty = width - filled;
    return '█'.repeat(filled) + '░'.repeat(empty);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-900/95 border border-green-400/50 rounded-lg w-full max-w-2xl shadow-2xl backdrop-blur-sm"
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 p-3 bg-gray-800/80 rounded-t-lg border-b border-green-400/30">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="text-green-400 text-sm font-mono ml-4">gaille@portfolio</span>
        </div>

        {/* Terminal Body */}
        <div className="p-4 font-mono text-sm min-h-[250px] bg-black/50 rounded-b-lg">
          {/* Show completed and current steps */}
          {steps.map((step, index) => {
            if (index < currentStep) {
              // Completed step
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`mb-1 ${getTextColor(step.type)}`}
                >
                  {step.text}
                  {step.type === 'loading' && (
                    <div className="mt-1 ml-2">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-green-400">
                          {'█'.repeat(20)}
                        </span>
                        <span className="text-green-400">100%</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            } else if (index === currentStep) {
              // Current step
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`mb-1 ${getTextColor(step.type)}`}
                >
                  {displayText}
                  {step.type !== 'loading' && showCursor && (
                    <span className="bg-green-400 w-1 h-4 inline-block ml-1 animate-pulse"></span>
                  )}
                  
                  {step.type === 'loading' && (
                    <div className="mt-1 ml-2">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-green-400">
                          {renderProgressBar()}
                        </span>
                        <span className="text-green-400">
                          {Math.floor(progress)}%
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            }
            return null;
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default TerminalLoader; 