module.exports = {
	config: {
		tailwindjs: "./tailwind.config.js",
		port: 9010
	},
	paths: {
		// root: "./",
		src: {
			base: "./src",
			css: "./src/assets/css",
			js: "./src/assets/js",
			img: "./src/assets/img",
			fonts: "./src/assets/fonts"
		},
		tmp: {
			base: "./.tmp",
			css: "./.tmp/assets/css",
			js: "./.tmp/assets/js",
			img: "./.tmp/assets/img",
			fonts: "./.tmp/assets/fonts"
		},
		dist: {
			base: "./dist",
			css: "./dist/assets/css",
			js: "./dist/assets/js",
			img: "./dist/assets/img",
			fonts: "./dist/assets/fonts"
		}
	}
}