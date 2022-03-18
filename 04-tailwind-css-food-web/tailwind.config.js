module.exports = {
	content: ['./public**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				light_bg: '#f2f2f2',
				primary: '#ff6361',
				secondary: {
					100: '#e2e2d5',
					200: '#888883',
				},
			},
			fontSize: {
				mammoth: '8rem',
			},
			fontFamily: {
				poppins: ['Poppins'],
			},
		},
	},
	plugins: [],
};
