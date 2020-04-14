var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

const htmlPlugin = new HtmlWebpackPlugin({
	template: 'public/index.html',
	filename: "index.html",
});

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';


module.exports = {	
	module: {
		rules: [
			{
				test: /\.svelte$/,
				exclude: /node_modules/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
						hotReload: true
					}
				}
			},
			
			{
				test: /\.css$/,
				use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					prod ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name(file) {
								if (process.env.NODE_ENV === 'development') {
									return '[path][name].[ext]';
								}

								return './static/[hash].[ext]';
							},
						},
					},
				],
			}
		]
	},
	entry: {
		bundle: ['./src/main.js']
	},
	resolve: {
		extensions: ['.mjs', '.js', '.svelte']
	},
	plugins: [htmlPlugin],
	output: {
		path: path.join(__dirname, "build"),
		filename: "bundle.js",
		chunkFilename: "[name].[hash].js"
	},
	devServer: {
		contentBase: './public'
	  }
	// mode,
	// plugins: [
	// 	new MiniCssExtractPlugin({
	// 		filename: '[name].css'
	// 	})
	// ],
	// devtool: prod ? false : 'source-map'
};
