'use client';

import { motion } from 'framer-motion';

const HackerCard = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay }}
      className={`relative rounded-xl border border-white/10 bg-surface/90 hover:border-accent/30 transition-colors ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default HackerCard;
