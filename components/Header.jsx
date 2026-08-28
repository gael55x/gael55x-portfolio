import Link from 'next/link';
import { navLinks } from '@/data/navLinks';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur-sm border-b border-ink/15">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="font-serif italic text-xl text-ink hover:text-clay transition-colors">
            Gaille Amolong
          </Link>
          <nav aria-label="Sections" className="hidden lg:flex items-baseline gap-7">
            {navLinks.map((link, index) => (
              <a
                key={link.path}
                href={link.path}
                className="group font-mono text-xs lowercase tracking-wide text-ink-soft hover:text-clay transition-colors"
              >
                <span className="text-ink-faint/70 group-hover:text-clay/70 mr-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {link.name}
              </a>
            ))}
            <a
              href="mailto:gaille.amolong1@gmail.com"
              className="font-mono text-xs lowercase tracking-wide text-clay hover:text-clay-deep transition-colors"
            >
              email
            </a>
          </nav>
        </div>
        <nav
          aria-label="Sections"
          className="lg:hidden -mx-5 sm:-mx-8 px-5 sm:px-8 flex gap-5 overflow-x-auto pb-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {navLinks.map((link, index) => (
            <a
              key={link.path}
              href={link.path}
              className="shrink-0 font-mono text-2xs lowercase tracking-wide text-ink-soft"
            >
              <span className="text-ink-faint/70 mr-1">{String(index + 1).padStart(2, '0')}</span>
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
