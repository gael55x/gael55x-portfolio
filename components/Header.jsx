import Link from 'next/link';
import { sections } from '@/data/sections';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" href="/#home" aria-label="Gaille Amolong, home">
          <span className="monogram">gael55x</span>
        </Link>
        <nav aria-label="Main navigation">
          {sections.map(({ id, navLabel }, index) => (
            <Link
              key={id}
              href={`/#${id}`}
              className={['work', 'about', 'contact'].includes(id) ? '' : 'nav-secondary'}
            >
              <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              {navLabel}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
