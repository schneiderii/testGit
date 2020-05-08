//项目发布时使用的配置文件

const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin")
// 要解析vue模板文件，必须先添加VueLoaderPlugin
const VueLoaderPlugin = require('vue-loader/lib/plugin');
//每次打包发布时先删除dist目录，再重新生成
// 注意：插件的最新版本变量名要加大括号{}，首字母要大写
const {
	CleanWebpackPlugin
} = require("clean-webpack-plugin");

//使用webpack对象的参数优化打包配置
const webpack = require("webpack");

// 导入打包发布时抽取css文件的插件
// 注意：webpack4.0版本必须也要使用插件的4.0版本，版本号在package.json文件中
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	//配置webpack的js源文件路径
	entry: path.join(__dirname, "./src/js/main.js"),
	//配置js目标文件输出路径和文件名
	output: {
		path: path.join(__dirname, "./dist"),
		filename: "js/bundle.js"
	},
	plugins: [
		//生成html首页插件
		new htmlWebpackPlugin({
			template: path.join(__dirname, "./src/index.html"),
			filename: "index.html"
		}),
		//new一个VueLoaderPlugin实例
		new VueLoaderPlugin(),
		//每次打包发布时先删除dist目录
		new CleanWebpackPlugin(),
		// 抽取css文件
		new ExtractTextPlugin("css/styles.css")
	],
	//配置第三方组件
	module: {
		//配置组件使用规则
		rules: [
			//处理css文件，处理的顺序是从后往前，后面的加载器优先处理
			{
				test: /\.css$/,
				// 使用抽取css文件的第三方插件
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader",
					// css中有url路径时，加上../前缀（可以自定义），例如背景图片的路径
					publicPath: "../"
				})
			},
			//处理url地址，加载css中的图片文件
			{
				test: /\.(jpg|jpeg|gif|png|bmp)$/,
				//默认加载的图片文件名会以base64转码，可以设置一个limit参数，单位字节，超过此大小，文件名不会转码
				//name参数显示文件名全称，但是可能会重名，因此文件名前面添加了8位哈希值确保不重名
				use: "url-loader?limit=1000&name=image/[hash:8]-[name].[ext]"
			},
			//处理ES6中面向对象的高级语法，处理所有js文件
			{
				test: /\.js$/,
				use: "babel-loader",
				// 处理js文件要把项目中node_modules目录中js文件排除，只处理自己项目中的js文件
				exclude: /node_modules/
			},
			//处理vue文件
			{
				test: /\.vue$/,
				use: "vue-loader"
			}
		]
	}
}
