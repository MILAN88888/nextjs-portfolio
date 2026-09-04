import type { Config } from 'tailwindcss'

/**
 * Colors map 1:1 onto the CSS custom properties in styles/globals.css.
 * Never hardcode a color in a component — reach for a utility here so
 * both themes stay in sync automatically.
 */
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './constants/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'var(--bg)',
          subtle:  'var(--bg-subtle)',
        },
        surface: {
          DEFAULT: 'var(--surface)',
          hover:   'var(--surface-hover)',
          raised:  'var(--surface-raised)',
        },
        line: {
          DEFAULT: 'var(--border)',
          strong:  'var(--border-strong)',
        },
        ink: {
          DEFAULT: 'var(--text)',
          muted:   'var(--text-muted)',
          faint:   'var(--text-faint)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          fg:      'var(--accent-fg)',
          subtle:  'var(--accent-subtle)',
        },
        ring: 'var(--ring)',
      },
      fontFamily: {
        sans:    ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'ui-sans-serif', 'sans-serif'],
        mono:    ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Fluid display sizes. Body text keeps Tailwind's default scale.
        'display-1': ['var(--step-6)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        'display-2': ['var(--step-5)', { lineHeight: '1.06', letterSpacing: '-0.03em'  }],
        'display-3': ['var(--step-4)', { lineHeight: '1.12', letterSpacing: '-0.025em' }],
        'h2':        ['var(--step-3)', { lineHeight: '1.18', letterSpacing: '-0.02em'  }],
        'h3':        ['var(--step-2)', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
        'h4':        ['var(--step-1)', { lineHeight: '1.35', letterSpacing: '-0.01em'  }],
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm:      'var(--radius-sm)',
        lg:      'var(--radius-lg)',
      },
      boxShadow: {
        sm:      'var(--shadow-sm)',
        DEFAULT: 'var(--shadow)',
        lift:    'var(--shadow-lift)',
      },
      maxWidth: {
        content: '68rem',
      },
      spacing: {
        'header': 'var(--header-h)',
      },
    },
  },
  plugins: [],
}
export default config
