import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      letterSpacing: {
        wide: '.03em',
      },
      colors: {
        'primary-text': 'var(--text-primary)',
        'secondary-text': 'var(--text-secondary)',
        'tertiary-text': 'var(--text-tertiary)',
        primary: 'var(--cta-primary)',
      },
      backgroundColor: {
        'main-background': 'var(--background)',
        'section-background': 'var(--section-background)',
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(129.59deg, #969696 0%, #343434 98.18%)',
      },
      borderColor: {
        'primary-border': 'var(--border-primary)',
      },
      outlineColor: {
        primary: 'var(--cta-primary)',
      },
      fontSize: {
        '2xl': ['1.75rem', { lineHeight: '2.125rem' }],
      },
    },
  },
  plugins: [],
};
export default config;
