'use client';

const links = [
  { name: 'home', path: '#home' },
  { name: 'work', path: '#work' },
  { name: 'projects', path: '#projects' },
  { name: 'about', path: '#about' },
  { name: 'contact', path: '#contact' },
];

const Nav = () => {
  const handleClick = (e, path) => {
    e.preventDefault();
    const targetElement = document.querySelector(path);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="hidden lg:flex gap-x-6">
      {links.map((link, index) => (
        <a
          href={link.path}
          key={index}
          onClick={(e) => handleClick(e, link.path)}
          className="capitalize font-medium hover:text-accent transition-colors duration-200 text-sm tracking-wide cursor-pointer opacity-90 hover:opacity-100 font-sans"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
