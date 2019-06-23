/* eslint-disable max-len */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
	entry: ['./styles/styles.css',
		'./styles/svgStyles.css',
		'./styles/superheros.css',
		'./styles/normalize.css',
		'./src/navscript.js',
		'./src/superheros.js',
		'./src/typewriter.js',
		'./src/svgScroll.js',
	],

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},

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
		new MiniCssExtractPlugin({ filename: '[name].css', chunkFilename: 'main.css' }),
	],

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: { loader: 'babel-loader',
					options: { presets: ['@babel/preset-env'] } },
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
					},
					'css-loader',
				],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [{ loader: 'file-loader' }],
			},
		],
	},
};
