var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './resources/js/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist'),
	}
}
