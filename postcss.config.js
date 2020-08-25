const mode = process.env.NODE_ENV
const dev = mode === 'development'

module.exports = {
	plugins: [
		require('postcss-import')(),
		require('tailwindcss')(),
		require('postcss-preset-env')({
			features: {
				'nesting-rules': true, // delete if you don’t want nesting (optional)
			},
		}),

		// Minify if prod
		!dev &&
			require('cssnano')({
				preset: ['default', { discardComments: { removeAll: true } }],
			}),
	],
}
