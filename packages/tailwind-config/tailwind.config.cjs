/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */

module.exports = {
	// relative path to the root of the project that references the current profile
	content: [
		// for vite
		'./index.html',
		// app content
		`./src/**/*.{js,ts,jsx,tsx}`,
		// include packages when using in apps, but ignore this if ui package will be bundled
		'../../packages/ui/**/*.{js,ts,jsx,tsx}',
	],
	plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		styled: true,
		themes: ['dark', 'light'],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: 'huo',
		darkTheme: 'dark',
	},
};
