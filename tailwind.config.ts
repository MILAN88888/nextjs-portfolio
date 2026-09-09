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
        // Fluid display sizes, plus the three body sizes. Nothing on the page
        // should reach for Tailwind's default text-sm/text-xs for prose — those
        // are 14px and 12px flat, which is what made the old page a squint.
        'display-1': ['var(--step-6)', { lineHeight: '1.05', letterSpacing: '-0.03em'  }],
        'display-2': ['var(--step-5)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-3': ['var(--step-4)', { lineHeight: '1.14', letterSpacing: '-0.02em'  }],
        'h2':        ['var(--step-3)', { lineHeight: '1.20', letterSpacing: '-0.02em'  }],
        'h3':        ['var(--step-2)', { lineHeight: '1.28', letterSpacing: '-0.015em' }],
        'h4':        ['var(--step-1)', { lineHeight: '1.38', letterSpacing: '-0.01em'  }],

        // Body scale. `lead` is the one step up from body, for a hero or
        // section opening paragraph; `body` is the default; `small` is the
        // floor for prose; `label` is for mono kickers and metadata only.
        'lead':  ['var(--step-1)',  { lineHeight: '1.55' }],
        'body':  ['var(--step-0)',  { lineHeight: '1.70' }],
        'small': ['var(--step--1)', { lineHeight: '1.65' }],
        'label': ['var(--step--2)', { lineHeight: '1.55' }],
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
        content: '70rem',
        prose:   '46rem',
      },
      spacing: {
        'header': 'var(--header-h)',
      },
    },
  },
  plugins: [],
}
export default config
