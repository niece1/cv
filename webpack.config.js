let webpack = require('webpack')
let path = require('path')
let glob = require('glob')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let PurgeCSSPlugin = require('purgecss-webpack-plugin')
let ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
let PATHS = {
	src: path.join(__dirname, 'views')
}
let {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
	context: path.resolve(__dirname, 'resources'),
	mode: 'development',
	entry: { 
		app: 
		[
		'./js/app.js'
		]},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, './public/dist'),
			publicPath: '/',
		},
		module: {
			rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.s[ac]ss$/,
				use: [
				{ 
					loader: MiniCssExtractPlugin.loader,
				}, 
				{
					loader: 'css-loader',
					options: { 
						url: false
					}
				},
				{
					loader: 'postcss-loader',
					options: {
						postcssOptions: {
							plugins: [
							[
							'autoprefixer',
							{
                      // Options
                  },
                  ],
                  ],
              },
          },
      }, 'sass-loader'
      ]
  },
  {
  	test: /\.(ttf|eot|woff|woff2)$/,
  	use: ['file-loader']
  },
  {
  	test: /\.(png|jpe?g|svg)$/i,
  	loader: 'file-loader',
  	options: {
  		name: 'images/[name].[ext]'
  	}
  }
  ]
},
plugins: [
new MiniCssExtractPlugin({
	filename: 'css/[name].css'
}),
new PurgeCSSPlugin({
	paths: () => glob.sync(`${PATHS.src}/**/*.blade.php`,  { nodir: true }),
}),
new ImageMinimizerPlugin({
	minimizerOptions: {
		plugins: [
		['mozjpeg', { quality: 80 }],
		['optipng', { optimizationLevel: 5 }],
		[
		'svgo',
		{
			plugins: [
			{
				removeViewBox: false,
			},
			],
		},
		],
		],
	},
}),
new webpack.ProvidePlugin({
	$: "jquery",
	jQuery: "jquery"
}),
new CleanWebpackPlugin()
],
};
