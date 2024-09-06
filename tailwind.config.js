/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
    './page/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

