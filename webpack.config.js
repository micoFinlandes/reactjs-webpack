const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: '/src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{ 
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
			},
			{
			test: /\.scss$/,
			use: [
			  "style-loader",
                          "css-loader",
			  "sass-loader"
			    ]
			},
			{
			  test: /\.(png|jpg|gif)$/,
			  use: [
			    { loader: 'url-loader' }
			  ]
			}
		]
    	},
	plugins: [new HtmlWebpackPlugin({
		title: 'Babel + Webpack, Loaders, Plugins + EsLint',
		template: 'index.html'
	})]
};
