module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		container: {
			center: true,
		},
		screens: {
			"3xl": { min: "1920px" },
			"2xl": { min: "1440px" },
			"1xl": { max: "1366px" },
			xl: { max: "1280px" },
			lg: { max: "1024px" },
			md: { max: "960px" },
			sm: { max: "576px" },
			xs: { max: "480px" },
		},
		extend: {
			boxShadow: {
				centerlg: "0px 5px 15px -1px rgba(0, 0, 0, 0.25)",
			},
			fontFamily: {
				jakarta: ["Plus Jakarta Sans", "sans-serif"],
			},
			colors: {
				primarydefault: "var(--primary-default)",
				primarydefaultdark: "var(--primary-dark)",
				graydark: "var(--dark)",
				silver: "#C4C4C4",
			},
		},
	},
	plugins: [],
};
