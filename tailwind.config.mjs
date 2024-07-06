/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				body: ['Overpass', 'system-ui', 'sans-serif'],
				heading: ['Staatliches', 'system-ui', 'sans-serif'],
				special: ['Bangers', 'system-ui', 'sans-serif'],
			},
			colors: {
				primary: {
					DEFAULT: '#FD0054',
					darker: '#C80036'
				},
			},
		},
	},
	plugins: [],
};
