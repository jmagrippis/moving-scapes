const colors = require('tailwindcss/colors')
const withAlphaValue = (varName) => `hsl(var(--${varName}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		colors: {
			primary: colors.cyan,
			secondary: colors.lime,
			copy: {
				base: withAlphaValue('copy-base-color'),
				muted: withAlphaValue('copy-muted-color'),
			},
			surface: {
				1: withAlphaValue('surface-1-color'),
				2: withAlphaValue('surface-2-color'),
			},
			gray: colors.stone,
			white: colors.white,
			transparent: 'transparent',
			current: 'currentColor',
		},
		boxShadow: {
			low: 'var(--shadow-elevation-low)',
			mid: 'var(--shadow-elevation-medium)',
			high: 'var(--shadow-elevation-high)',
		},
		container: {
			center: true,
		},
		extend: {},
	},
	plugins: [],
}
