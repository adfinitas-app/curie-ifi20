/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	mode: 'jit',
	theme: {
		screens: {
			'nano:': '360px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		extend: {
			fontFamily: {
				Raleway: '"Raleway", sans-serif',
				Lato: '"Lato", sans-serif',
			}
		}
	},

	plugins: []
};

module.exports = config;
