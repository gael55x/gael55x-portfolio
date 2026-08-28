const socials = [
  { name: 'GitHub', path: 'https://github.com/gael55x' },
  { name: 'LinkedIn', path: 'https://www.linkedin.com/in/gaille-amolong-687746312/' },
];

const Socials = ({ containerStyles = '', linkStyles = '' }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item) => (
        <a
          key={item.name}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={
            linkStyles ||
            'font-mono text-xs text-ink-soft underline decoration-ink/25 underline-offset-4 hover:text-clay hover:decoration-clay transition-colors'
          }
        >
          {item.name} <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
};

export default Socials;
