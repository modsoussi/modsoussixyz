var path = require('path');

module.exports = {
	entry: [
		'./assets/jsx/modsoussi.jsx'
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: 'http://modsoussi.xyz:8080/public/',
		
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
