/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      mono: ['var(--font-jetbrainsMono)', 'ui-monospace', 'monospace'],
    },
    extend: {
      aspectRatio: {
        portrait: '3 / 4',
      },
      fontSize: {
        /* Fine print for mono labels and captions. */
        '2xs': ['0.6875rem', { lineHeight: '1.45' }],
      },
      gridTemplateColumns: {
        /* Structural left rail with sticky chapter numerals. */
        rail: '4.5rem minmax(0, 1fr)',
      },
      colors: {
        /* Night register of the palette sampled from the hero photograph.
           The raw sampled values survive in the -deep/raw entries and chips. */
        night: '#161922',
        panel: '#1d212b',
        bone: {
          DEFAULT: '#e8e1d2',
          dim: '#a8a193',
          faint: '#7a7468',
        },
        clay: {
          DEFAULT: '#c9704f',
          deep: '#8f4938',
        },
        dusk: {
          DEFAULT: '#58a6dd',
          deep: '#3f8fca',
          pale: '#a9d5ee',
        },
        sand: '#d8d0bc',
        ink: '#242936',
        paper: '#f4f0e6',
      },
    },
  },
};
