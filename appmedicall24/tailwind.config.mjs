/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js',
	],
	theme: {
		extend: {
			screens: { 'sm': { 'max': '768px' }, 'md': { 'max': '1024px' }},
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
