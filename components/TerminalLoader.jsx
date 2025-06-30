'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const terminalLines = [
  { text: "$ sudo access gaille_portfolio.exe", delay: 0.5, type: "command" },
  { text: "Password: ••••••••••••", delay: 1.2, type: "text" },
  { text: "Access granted. Welcome, visitor.", delay: 1.8, type: "success" },
  { text: "Initializing portfolio systems...", delay: 2.4, type: "text" },
  { text: "Loading AI modules", delay: 3.0, type: "loading", progress: "ai" },
  { text: "Loading projects", delay: 4.0, type: "loading", progress: "projects" },
  { text: "Loading skills database", delay: 5.0, type: "loading", progress: "skills" },
  { text: "System ready. Launching interface...", delay: 6.2, type: "success" },
  { text: "$ ./launch_portfolio.sh", delay: 6.8, type: "command" }
];

const TerminalLoader = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [aiProgress, setAiProgress] = useState(0);
  const [projectsProgress, setProjectsProgress] = useState(0);
  const [skillsProgress, setSkillsProgress] = useState(0);

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

  // Progress animations
  useEffect(() => {
    const currentTerminalLine = terminalLines[currentLine];
    if (currentTerminalLine?.type === 'loading') {
      const progressTimer = setInterval(() => {
        if (currentTerminalLine.progress === 'ai') {
          setAiProgress(prev => {
            if (prev >= 100) {
              clearInterval(progressTimer);
              return 100;
            }
            return Math.min(prev + Math.random() * 15 + 5, 100);
          });
        } else if (currentTerminalLine.progress === 'projects') {
          setProjectsProgress(prev => {
            if (prev >= 100) {
              clearInterval(progressTimer);
              return 100;
            }
            return Math.min(prev + Math.random() * 20 + 10, 100);
          });
        } else if (currentTerminalLine.progress === 'skills') {
          setSkillsProgress(prev => {
            if (prev >= 100) {
              clearInterval(progressTimer);
              return 100;
            }
            return Math.min(prev + Math.random() * 25 + 15, 100);
          });
        }
      }, 50);

      return () => clearInterval(progressTimer);
    }
  }, [currentLine, terminalLines]);

  const renderProgressBar = (progress) => {
    const filledBars = Math.floor((progress / 100) * 20);
    const emptyBars = 20 - filledBars;
    return '█'.repeat(filledBars) + '░'.repeat(emptyBars);
  };

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
                    <div className="flex items-center gap-2">
                      <span className={getTextColor(line.type)}>{line.text}</span>
                      <div className="bg-gray-800 rounded px-2 py-1 min-w-[300px]">
                        <div className="flex items-center gap-2">
                          <span className="text-green-400 font-mono text-sm">
                            {renderProgressBar(progress)}
                          </span>
                          <span className="text-green-400 text-sm min-w-[40px]">
                            {Math.floor(progress)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }
                return <span className={getTextColor(line.type)}>{line.text}</span>;
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center"
                >
                  {renderLineContent(line, index)}
                  {index === currentLine && line.type !== 'loading' && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                      className="ml-2 w-2 h-5 bg-green-400 inline-block"
                    />
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalLoader; 