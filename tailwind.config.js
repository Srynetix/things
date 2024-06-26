import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['selector', '[data-theme="dark"]'],
	theme: {
		extend: {
			textShadow: {
				DEFAULT: '0 0 3px var(--tw-shadow-color)'
			}
		},
		fontFamily: {
			sans: ['Fredoka', 'sans-serif'],
			monospace: ['IBM Plex Mono', 'monospace']
		}
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value
					})
				},
				{
					values: theme('textShadow')
				}
			);
		})
	]
};
