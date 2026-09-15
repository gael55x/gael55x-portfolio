import Link from 'next/link';

const links = [
  ['work', 'work'],
  ['open-source', 'open source'],
  ['experience', 'experience'],
  ['writing', 'writing'],
  ['about', 'about'],
  ['contact', 'contact'],
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" href="/#home" aria-label="Gaille Amolong, home">
          <span className="monogram">gael55x</span>
        </Link>
        <nav aria-label="Main navigation">
          {links.map(([id, label], index) => (
            <Link
              key={id}
              href={`/#${id}`}
              className={['work', 'about', 'contact'].includes(id) ? '' : 'nav-secondary'}
            >
              <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
