import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        jakarta: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      colors: {
        peach: '#ffbc95',
        'peach-2': '#f99e76',
        cream: '#faf6ef',
        'bg-grey': '#f4f4f4',
        blue: '#2e54fe',
        grey: '#96908c',
        'dark-grey': '#706b67',
        cold: '#e8e9ef',
      },
    },
  },
  plugins: [],
}

export default config
