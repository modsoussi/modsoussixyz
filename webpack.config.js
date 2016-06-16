module.exports = {
	entry: './assets/jsx/modsoussi.jsx',
	output: {
		filename: 'bundle.js',
		publicPath: 'http://localhost:8090/public'
	},
	module: {
		loaders: [ /** It's very important that the loaders field is an array */
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['es2015','react'] // react preset is needed in this case to avoid
												// unexpected token '<' error.
				}
			}
		]
	},
	externals: {
		'react':'React'
	},
	resolve: {
		extensions: ['','.js','.jsx']
	}
}