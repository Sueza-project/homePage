// tailwind.config.cjs
const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./src/**/*.svelte', './src/**/*.css'],
	darkMode: false,
	theme: {
		extend : {},
	},
	variants: {
		extend: {inset: ['active']},
	},
	plugins: [],
}
