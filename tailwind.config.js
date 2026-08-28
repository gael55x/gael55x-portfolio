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
      serif: ['var(--font-newsreader)', 'Georgia', 'serif'],
      mono: ['var(--font-jetbrainsMono)', 'ui-monospace', 'monospace'],
    },
    extend: {
      aspectRatio: {
        portrait: '3 / 4',
      },
      fontSize: {
        /* Fine print for mono labels and captions. */
        '2xs': ['0.6875rem', { lineHeight: '1.45' }],
        /* Display sizes for serif headlines. */
        display: ['3.6rem', { lineHeight: '1.08' }],
        'display-sm': ['2.75rem', { lineHeight: '1.15' }],
        'display-lg': ['4.75rem', { lineHeight: '1.02' }],
      },
      gridTemplateColumns: {
        /* Structural left rail with sticky chapter numerals. */
        rail: '4.5rem minmax(0, 1fr)',
      },
      colors: {
        /* Palette sampled from the hero photograph: plaster, dusk sky,
           terracotta knit, ink-blue hair. */
        paper: '#f4f0e6',
        'paper-deep': '#ece7d9',
        sand: '#d8d0bc',
        ink: {
          DEFAULT: '#242936',
          soft: '#494f5e',
          faint: '#676d7c',
        },
        clay: {
          DEFAULT: '#8f4938',
          deep: '#6f3527',
        },
        dusk: {
          DEFAULT: '#3f8fca',
          deep: '#2e6d9e',
          pale: '#a9d5ee',
        },
      },
    },
  },
  plugins: [],
};
