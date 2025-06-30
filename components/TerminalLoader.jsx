'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const terminalLines = [
  { text: "$ sudo access gaille_portfolio.exe", delay: 0.3, type: "command", typing: true },
  { text: "Password: ••••••••••••", delay: 0.8, type: "text", typing: true },
  { text: "Access granted. Welcome, visitor.", delay: 1.2, type: "success", typing: true },
  { text: "Initializing portfolio systems...", delay: 1.8, type: "text", typing: true },
  { text: "Loading AI modules", delay: 2.3, type: "loading", progress: "ai" },
  { text: "Loading projects", delay: 3.2, type: "loading", progress: "projects" },
  { text: "Loading skills database", delay: 4.0, type: "loading", progress: "skills" },
  { text: "System ready. Launching interface...", delay: 4.8, type: "success", typing: true },
  { text: "$ ./launch_portfolio.sh", delay: 5.2, type: "command", typing: true }
];

const TerminalLoader = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [aiProgress, setAiProgress] = useState(0);
  const [projectsProgress, setProjectsProgress] = useState(0);
  const [skillsProgress, setSkillsProgress] = useState(0);
  const [typedText, setTypedText] = useState({});
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  // Start initial typing animation
  useEffect(() => {
    if (currentLine === 0) {
      setTimeout(() => {
        startTypingAnimation(0);
      }, 500); // Small delay before starting
    }
  }, []);

  const startTypingAnimation = (lineIndex) => {
    const line = terminalLines[lineIndex];
    if (!line || !line.typing) return;

    setIsTyping(true);
    const text = line.text;
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setTypedText(prev => ({
          ...prev,
          [lineIndex]: text.substring(0, index + 1)
        }));
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        // Move to next line after a brief pause
        setTimeout(() => {
          moveToNextLine();
        }, 400);
      }
    }, 50 + Math.random() * 40);

    return () => clearInterval(typeInterval);
  };

  const moveToNextLine = () => {
    if (currentLine < terminalLines.length - 1) {
      setCurrentLine(prev => prev + 1);
      
      // If next line is a typing line, start typing
      const nextLine = terminalLines[currentLine + 1];
      if (nextLine?.typing) {
        setTimeout(() => {
          startTypingAnimation(currentLine + 1);
        }, 200);
      }
    } else {
      // All lines complete, exit
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => onComplete && onComplete(), 800);
      }, 1000);
    }
  };

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  // Handle progress bar animations for loading lines
  useEffect(() => {
    const currentTerminalLine = terminalLines[currentLine];
    if (currentTerminalLine?.type === 'loading') {
      const progressTimer = setInterval(() => {
        if (currentTerminalLine.progress === 'ai') {
          setAiProgress(prev => {
            if (prev >= 100) {
              clearInterval(progressTimer);
              setTimeout(() => moveToNextLine(), 500);
              return 100;
            }
            return Math.min(prev + Math.random() * 8 + 4, 100);
          });
        } else if (currentTerminalLine.progress === 'projects') {
          setProjectsProgress(prev => {
            if (prev >= 100) {
              clearInterval(progressTimer);
              setTimeout(() => moveToNextLine(), 500);
              return 100;
            }
            return Math.min(prev + Math.random() * 12 + 6, 100);
          });
        } else if (currentTerminalLine.progress === 'skills') {
          setSkillsProgress(prev => {
            if (prev >= 100) {
              clearInterval(progressTimer);
              setTimeout(() => moveToNextLine(), 500);
              return 100;
            }
            return Math.min(prev + Math.random() * 15 + 8, 100);
          });
        }
      }, 80);

      return () => clearInterval(progressTimer);
    }
  }, [currentLine]);

  const renderProgressBar = (progress) => {
    const filledBars = Math.floor((progress / 100) * 25);
    const emptyBars = 25 - filledBars;
    return '█'.repeat(filledBars) + '░'.repeat(emptyBars);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 0.95,
        filter: "blur(4px)"
      }}
      transition={{ 
        duration: 0.8,
        ease: "easeInOut"
      }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.6,
          ease: "easeOut",
          delay: 0.2
        }}
        className="bg-gray-900 border border-green-500 rounded-lg p-6 sm:p-8 w-[90%] max-w-3xl shadow-2xl shadow-green-500/30"
      >
        <motion.div 
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-2 mb-6 border-b border-green-500 pb-4"
        >
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-green-400 text-sm ml-4 font-mono">Terminal - gaille@portfolio</span>
        </motion.div>
        
        <div className="font-mono text-green-400 space-y-3 min-h-[400px]">
          <AnimatePresence>
            {terminalLines.slice(0, currentLine + 1).map((line, index) => {
              const getTextColor = (type) => {
                switch (type) {
                  case 'command': return 'text-cyan-400';
                  case 'success': return 'text-green-400';
                  case 'loading': return 'text-yellow-400';
                  default: return 'text-green-400';
                }
              };

              const renderLineContent = (line, index) => {
                if (line.type === 'loading') {
                  let progress = 0;
                  if (line.progress === 'ai') progress = aiProgress;
                  else if (line.progress === 'projects') progress = projectsProgress;
                  else if (line.progress === 'skills') progress = skillsProgress;

                  return (
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <span className={getTextColor(line.type)}>{line.text}</span>
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-800 rounded-lg px-4 py-2 min-w-[320px] border border-green-500/30"
                      >
                        <div className="flex items-center gap-3">
                          <motion.span 
                            className="text-green-400 font-mono text-sm tracking-wider"
                            style={{
                              filter: progress > 0 ? 'brightness(1.2)' : 'brightness(0.8)'
                            }}
                          >
                            {renderProgressBar(progress)}
                          </motion.span>
                          <motion.span 
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className="text-green-400 text-sm min-w-[50px] font-bold"
                          >
                            {Math.floor(progress)}%
                          </motion.span>
                        </div>
                        {progress === 100 && (
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-green-400 text-xs mt-1"
                          >
                            ✓ Complete
                          </motion.div>
                        )}
                      </motion.div>
                    </div>
                  );
                }

                // Handle typing effect
                if (line.typing) {
                  const displayText = typedText[index] || '';
                  return (
                    <span className={getTextColor(line.type)}>
                      {displayText}
                      {index === currentLine && isTyping && showCursor && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="ml-1 w-2 h-5 bg-green-400 inline-block"
                        />
                      )}
                    </span>
                  );
                }

                return <span className={getTextColor(line.type)}>{line.text}</span>;
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.05
                  }}
                  className="flex items-start"
                >
                  <div className="flex-1">
                    {renderLineContent(line, index)}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TerminalLoader; 