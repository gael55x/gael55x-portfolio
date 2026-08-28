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
            'link-draw font-mono text-xs text-bone-dim hover:text-clay'
          }
        >
          {item.name} <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
};

export default Socials;
