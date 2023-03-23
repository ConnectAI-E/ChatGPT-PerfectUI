/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'error': 'var(--color-error)',
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      gradientColorStops: {
        primary: 'var(--gradient-primary)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        default: 'var(--text-default)',
        secondary: 'var(--text-secondary)',
        disabled: 'var(--text-disabled)',
        error: 'var(--text-error)',
      },
      animation: {
        blink: 'blink 1.2s infinite steps(1, start)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { 'background-color': 'currentColor' },
          '50%': { 'background-color': 'transparent' },
        },
      },
    },
  },
  plugins: [],
}
