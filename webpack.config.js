
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['./src/navscript.js',
		'./src/superheros.js',
		'./src/typewriter.js',
		'./src/svgScroll.js',
		'./styles/styles.css',
		'./styles/svgStyles.css',
		'./styles/superheros.css',
		'./styles/normalize.css',
	],

	optimization: {
		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.css$/,
					chunks: 'all',
					enforce: true,
				},
			},
		},
	},

	plugins: [
		// TODO: Set up svgs and else for html plugin to work...
		// new HtmlWebPackPlugin({ template: './index.html', filename: './index.html' }),
		new MiniCssExtractPlugin({ filename: '[name].css', chunkFilename: 'main.css' }),
	],

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: { loader: 'babel-loader' },
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true },
					},
				],
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						// options: { publicPath: '/', url: false },
					},
					'css-loader',
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				use: [{ loader: 'file-loader' }],
			},
		],
	},
};
