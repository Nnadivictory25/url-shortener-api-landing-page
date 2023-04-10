/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				sm: '350px',
				md: '650px',
				lg: '976px',
				xl: '1440px',
			},
			colors: {
				cyan: 'hsl(180, 66%, 49%)',
				darkViolet: 'hsl(257, 27%, 26%)',
				red: 'hsl(0, 87%, 67%)',
				grey: 'hsl(0, 0%, 75%)',
				greyishV: 'hsl(257, 7%, 63%)',
				darkBlue: 'hsl(255, 11%, 22%)',
				VdarkViolet: 'hsl(260, 8%, 14%)',
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
