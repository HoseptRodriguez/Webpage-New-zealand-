/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#111114',
        parchment: '#F7F4EE',
        clay: '#B3472B',
        moss: '#3C5245',
        indigo: '#1C2A39',
        sand: '#E7DFCE',
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
