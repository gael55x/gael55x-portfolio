'use client';

import Link from 'next/link';
import { FiDownload, FiMail } from 'react-icons/fi';

const RESUME = '/assets/resume/Amolong_Gaille_Resume.pdf';
const EMAIL = 'mailto:gaille.amolong1@gmail.com?subject=Interview%20request%20%E2%80%94%20Gaille%20Amolong';

export default function MobileHireBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-white/10 bg-surface-deep/95 backdrop-blur-md px-3 pt-3 pb-safe">
      <div className="flex gap-2 max-w-lg mx-auto">
        <Link
          href={RESUME}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-accent text-primary font-semibold text-sm py-3 font-sans"
        >
          <FiDownload className="text-lg" />
          Resume
        </Link>
        <Link
          href={EMAIL}
          className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-accent/50 text-accent text-sm py-3 font-semibold font-sans"
        >
          <FiMail className="text-lg" />
          Email
        </Link>
      </div>
    </div>
  );
}
