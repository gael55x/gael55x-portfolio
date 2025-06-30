'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TerminalLoader = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const steps = [
    { text: '$ sudo access gaille_portfolio.exe', type: 'command', delay: 1000 },
    { text: 'Password: ••••••••••••', type: 'input', delay: 1500 },
    { text: 'Access granted ✓', type: 'success', delay: 2000 },
    { text: 'Loading portfolio systems...', type: 'info', delay: 2500 },
    { text: 'Initializing components', type: 'loading', delay: 3000 },
    { text: 'System ready ✓', type: 'success', delay: 5500 },
    { text: '$ ./launch_portfolio.sh', type: 'command', delay: 6000 },
    { text: 'Launching...', type: 'info', delay: 6500 }
  ];

  // Cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Main sequence
  useEffect(() => {
    if (currentStep >= steps.length) {
      setTimeout(() => {
        onComplete?.();
      }, 1000);
      return;
    }

    const step = steps[currentStep];
    
    setTimeout(() => {
      if (step.type === 'loading') {
        setIsLoading(true);
        setDisplayText(step.text);
        
        // Animate progress
        let prog = 0;
        const progressInterval = setInterval(() => {
          prog += Math.random() * 20 + 5;
          if (prog >= 100) {
            prog = 100;
            clearInterval(progressInterval);
            setIsLoading(false);
            setTimeout(() => {
              setCurrentStep(prev => prev + 1);
            }, 500);
          }
          setProgress(prog);
        }, 150);
      } else {
        // Type out text
        typeText(step.text, () => {
          setTimeout(() => {
            setCurrentStep(prev => prev + 1);
          }, 800);
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
    }, 80);
  };

  const getTextColor = (type) => {
    switch (type) {
      case 'command': return 'text-cyan-400';
      case 'input': return 'text-purple-400';
      case 'success': return 'text-green-400';
      case 'loading': return 'text-yellow-400';
      default: return 'text-gray-300';
    }
  };

  const renderProgressBar = () => {
    const width = 25;
    const filled = Math.floor((progress / 100) * width);
    const empty = width - filled;
    return '█'.repeat(filled) + '░'.repeat(empty);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gray-900 border border-green-400 rounded-lg w-full max-w-3xl shadow-2xl"
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 p-4 bg-gray-800 rounded-t-lg border-b border-green-400">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-green-400 text-sm font-mono ml-4">terminal</span>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm min-h-[400px] bg-black rounded-b-lg">
          {/* Show completed steps */}
          {steps.slice(0, currentStep).map((step, index) => (
            <div key={index} className={`mb-2 ${getTextColor(step.type)}`}>
              {step.text}
              {step.type === 'loading' && (
                <div className="mt-1 ml-4">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-xs">
                      {'█'.repeat(25)}
                    </span>
                    <span className="text-green-400 text-xs">100%</span>
                  </div>
                  <div className="text-green-400 text-xs mt-1">✓ Complete</div>
                </div>
              )}
            </div>
          ))}

          {/* Current step */}
          {currentStep < steps.length && (
            <div className={`mb-2 ${getTextColor(steps[currentStep]?.type)}`}>
              {displayText}
              {!isLoading && showCursor && (
                <span className="bg-green-400 w-2 h-4 inline-block ml-1"></span>
              )}
              
              {isLoading && (
                <div className="mt-1 ml-4">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-xs">
                      {renderProgressBar()}
                    </span>
                    <span className="text-green-400 text-xs">
                      {Math.floor(progress)}%
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default TerminalLoader; 