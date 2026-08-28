const RESUME = '/assets/resume/Amolong_Gaille_Resume.pdf';
const EMAIL = 'mailto:gaille.amolong1@gmail.com?subject=Interview%20request';

export default function MobileHireBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-ink/15 bg-paper/95 backdrop-blur-sm px-3 pt-3 pb-safe">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={RESUME}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-clay py-3 text-center font-mono text-xs tracking-wide text-paper hover:bg-clay-deep transition-colors"
        >
          resume
        </a>
        <a
          href={EMAIL}
          className="flex-1 border border-ink/30 py-3 text-center font-mono text-xs tracking-wide text-ink hover:border-clay hover:text-clay transition-colors"
        >
          email
        </a>
      </div>
    </div>
  );
}
