import Link from 'next/link';
import { sections } from '@/data/sections';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" href="/#home" aria-label="Gaille Amolong, home">
          <svg className="wordmark-orbit" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <circle cx="20" cy="20" r="7" stroke="currentColor" />
            <ellipse
              cx="20"
              cy="20"
              rx="18"
              ry="8"
              transform="rotate(-40 20 20)"
              stroke="currentColor"
            />
            <circle cx="32" cy="9" r="2.5" fill="currentColor" />
          </svg>
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
