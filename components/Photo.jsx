'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-44 h-44 sm:w-56 sm:h-56 xl:w-96 xl:h-96 rounded-full overflow-hidden border-2 border-white/10 relative"
    >
      <Image
        src="/assets/Gaille.png"
        priority
        quality={85}
        fill
        alt="Gaille Amolong"
        className="object-contain rounded-full"
        sizes="(max-width: 640px) 176px, (max-width: 1200px) 224px, 380px"
      />
    </motion.div>
  );
};

export default Photo;
