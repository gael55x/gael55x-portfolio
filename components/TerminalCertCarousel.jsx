'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { BsArrowLeft, BsArrowRight, BsArrowUpRight } from 'react-icons/bs';
import { MdVerified } from 'react-icons/md';

const TerminalCertCarousel = ({ certifications }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [terminalLines, setTerminalLines] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const currentCert = certifications[currentIndex];

  const addTerminalLine = (text, type = 'command') => {
    setTerminalLines(prev => [...prev, { text, type, timestamp: Date.now() }]);
  };

  const nextCert = () => {
    setIsLoading(true);
    addTerminalLine('$ cert --next', 'command');
    setTimeout(() => {
      addTerminalLine(`Loading certificate ${currentIndex + 2}/${certifications.length}...`, 'info');
      setCurrentIndex((prev) => (prev + 1) % certifications.length);
      setIsLoading(false);
      setTimeout(() => {
        addTerminalLine('[SUCCESS] Certificate loaded successfully', 'success');
      }, 300);
    }, 500);
  };

  const prevCert = () => {
    setIsLoading(true);
    addTerminalLine('$ cert --prev', 'command');
    setTimeout(() => {
      addTerminalLine(`Loading certificate ${currentIndex === 0 ? certifications.length : currentIndex}/${certifications.length}...`, 'info');
      setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
      setIsLoading(false);
      setTimeout(() => {
        addTerminalLine('[SUCCESS] Certificate loaded successfully', 'success');
      }, 300);
    }, 500);
  };

  const jumpToCert = (index) => {
    if (index !== currentIndex) {
      setIsLoading(true);
      addTerminalLine(`$ cert --goto ${index + 1}`, 'command');
      setTimeout(() => {
        addTerminalLine(`Jumping to certificate ${index + 1}/${certifications.length}...`, 'info');
        setCurrentIndex(index);
        setIsLoading(false);
        setTimeout(() => {
          addTerminalLine('[SUCCESS] Certificate loaded successfully', 'success');
        }, 300);
      }, 500);
    }
  };

  useEffect(() => {
    addTerminalLine('$ cert --init', 'command');
    addTerminalLine('Certificate viewer initialized successfully', 'success');
    addTerminalLine(`Found ${certifications.length} certificates in database`, 'info');
    addTerminalLine('Use --next, --prev, or --goto <index> to navigate', 'help');
  }, [certifications.length]);

  const getTextColor = (type) => {
    switch (type) {
      case 'command': return 'text-cyan-400';
      case 'success': return 'text-green-400';
      case 'info': return 'text-yellow-400';
      case 'help': return 'text-blue-400';
      default: return 'text-white/80';
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Terminal Window */}
      <div className="bg-gray-900 border border-green-500 rounded-lg shadow-2xl shadow-green-500/20 overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 bg-gray-800 px-3 sm:px-4 py-2 sm:py-3 border-b border-green-500">
          <div className="flex gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-green-400 text-xs sm:text-sm ml-2 sm:ml-4 font-mono truncate">
            gaille@portfolio:~/certificates
          </span>
          <div className="flex-1"></div>
          <span className="text-green-400 text-xs font-mono">
            [{currentIndex + 1}/{certifications.length}]
          </span>
        </div>

        {/* Terminal Body */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Panel - Terminal Output */}
          <div className="w-full lg:w-1/3 bg-black p-3 sm:p-4 h-[300px] sm:h-[400px] lg:h-[700px] overflow-y-auto order-2 lg:order-1">
            <div className="font-mono text-xs sm:text-sm space-y-1">
              {terminalLines.slice(-12).map((line, index) => (
                <motion.div
                  key={line.timestamp}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`${getTextColor(line.type)} leading-tight break-words`}
                >
                  {line.type === 'command' && (
                    <span className="text-green-400 hidden sm:inline">
                      gaille@portfolio:~/certificates$ 
                    </span>
                  )}
                  {line.type === 'command' && (
                    <span className="text-green-400 sm:hidden">$ </span>
                  )}
                  <span className="break-all">{line.text}</span>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-yellow-400 font-mono text-xs sm:text-sm"
                >
                  Processing...
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Panel - Certificate Display */}
          <div className="flex-1 p-3 sm:p-4 lg:p-6 bg-gray-900 order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-green-500/30 overflow-hidden h-full"
              >
                {/* Certificate Image */}
                <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] overflow-hidden bg-white rounded-t-lg">
                  <Image 
                    src={currentCert.imageUrl} 
                    alt={currentCert.title}
                    fill
                    className="object-contain p-1 sm:p-2" 
                  />
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-green-400/90 text-black p-1.5 sm:p-2 rounded-full">
                    <MdVerified className="text-base sm:text-xl" />
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-3 sm:p-4 lg:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-400 font-mono text-xs sm:text-sm">///</span>
                    <span className="text-cyan-400 text-xs font-mono uppercase tracking-wider">
                      {currentCert.category}
                    </span>
                  </div>
                  
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-3 font-mono">
                    {currentCert.title}
                  </h4>
                  
                  <p className="text-white/70 text-xs sm:text-sm mb-4 font-mono leading-relaxed">
                    <span className="text-green-400 mr-2">{'>'}</span>
                    {currentCert.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                    <span className="text-green-400 font-mono text-xs sm:text-sm">
                      @{currentCert.issuer}
                    </span>
                    <span className="text-white/60 text-xs sm:text-sm font-mono bg-green-400/10 px-2 py-1 rounded border border-green-400/30 w-fit">
                      {currentCert.date}
                    </span>
                  </div>
                  
                  <Link href={currentCert.href} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-green-400/10 hover:bg-green-400 text-green-400 hover:text-black border border-green-400 font-mono text-xs sm:text-sm">
                      $ view_certificate <BsArrowUpRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Terminal Controls */}
        <div className="bg-gray-800 border-t border-green-500 p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Navigation Commands */}
            <div className="flex gap-2 sm:gap-4 w-full sm:w-auto">
              <button 
                onClick={prevCert}
                disabled={isLoading}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-green-400/10 hover:bg-green-400/20 text-green-400 px-3 sm:px-4 py-2 rounded border border-green-400/30 font-mono text-xs sm:text-sm transition-colors disabled:opacity-50"
              >
                <BsArrowLeft />
                <span className="hidden sm:inline">prev</span>
              </button>
              
              <button 
                onClick={nextCert}
                disabled={isLoading}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-green-400/10 hover:bg-green-400/20 text-green-400 px-3 sm:px-4 py-2 rounded border border-green-400/30 font-mono text-xs sm:text-sm transition-colors disabled:opacity-50"
              >
                <span className="hidden sm:inline">next</span>
                <BsArrowRight />
              </button>
            </div>

            {/* Certificate Index Buttons */}
            <div className="flex gap-1 sm:gap-2 flex-wrap justify-center max-w-full overflow-hidden">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => jumpToCert(index)}
                  disabled={isLoading}
                  className={`w-6 h-6 sm:w-8 sm:h-8 rounded font-mono text-xs transition-colors border flex-shrink-0 ${
                    index === currentIndex 
                      ? 'bg-green-400 text-black border-green-400' 
                      : 'bg-green-400/10 text-green-400 border-green-400/30 hover:bg-green-400/20'
                  } disabled:opacity-50`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalCertCarousel; 