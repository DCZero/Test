const merge = require('webpack-merge');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;
const path = require('path');
const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
};

const common = {
	// entry accepts a path or an object of etnries. We'll be using
	// the latter form given it's convenient with more complex
	// configurations
	eslint: {
		configFile: path.join(__dirname, '.eslintrc'),
	},
	entry: 	{
		app: PATHS.app
	},
	output: {
		path: PATHS.build,
		filename: 'bundle.js' 
	},
	module: {
        preLoaders: [
            { 
            	test: /\.jsx?$/, 
            	loader: 'eslint', 
            	include: PATHS.app
            }
        ],
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css'],
				include: PATHS.app 
			}
			]
	}+
};

// Default
if(TARGET === 'start' || !TARGET) {
	module.exports = merge(common, {
		devServer: {
			contentBase: PATHS.build,
			// Enable history API fallback so HTML5 History API based
			// routing works. This is a good default that will come
			// in handy in more complicated setups.
			historyApiFallback: true,
			hot: true,
			inline: true,
			progress: true,
			devtool: 'eval-source-map',
			stats: 'errors-only',
			host: process.env.HOST,
			port: process.env.PORT
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new NpmInstallPlugin({
				save: true // --save
			})
		]
	});
}
if(TARGET === 'build') {
	module.exports = merge(common, {});
}