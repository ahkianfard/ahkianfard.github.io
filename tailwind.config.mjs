/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/flowbite/**/*.js"],
	theme: {
		colors: {
			'darkenblue': '#0F172A',
		},
		extend: {
			fontFamily: {
				vazir: ["vazir", "sans-serif"],
				iransans: ["iransans", "sans-serif"],
			},
		},
	},
	plugins: [
		require('flowbite/plugin'),
	]
}
