import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        mauve:  '#c6a0f6',
        sky:    '#91d7e3',
        teal:   '#8bd5ca',
        green:  '#a6da95',
        pink:   '#f5bde6',
        peach:  '#f5a97f',
        red:    '#ed8796',
        yellow: '#eed49f',
        blue:   '#8aadf4',
      },
      animation: {
        'ring-spin':  'ring-spin 5s linear infinite',
        'pulse-dot':  'pulse-dot 2s ease-in-out infinite',
        'marquee':    'marquee-scroll 30s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
