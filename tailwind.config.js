/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aquila-navy': 'var(--aquila-navy)',
        'aquila-red': 'var(--aquila-red)',
        'aquila-green': 'var(--aquila-green)',
        'wing-green': 'var(--wing-green)',
        'wing-blue': 'var(--wing-blue)',
        'wing-orange': 'var(--wing-orange)',
        'wing-yellow': 'var(--wing-yellow)',
        'wing-purple': 'var(--wing-purple)',
        'wing-red': 'var(--wing-red)',
        'cream': 'var(--cream)',
        'soft-white': 'var(--soft-white)',
        'text-dark': 'var(--text-dark)',
        'text-muted': 'var(--text-muted)',
        'glass-white': 'var(--glass-white)',
        'glass-border': 'var(--glass-border)',
      },
      fontFamily: {
        'display': ['"Outfit"', 'sans-serif'],
        'heading': ['"Outfit"', 'sans-serif'],
        'body': ['"Plus Jakarta Sans"', 'sans-serif'],
        'tagline': ['"Lora"', 'serif'],
      }
    },
  },
  plugins: [],
}
