//项目入口js

import "../css/myStyle.css";

//导入vue，一定要导入vue包中的完整vue.js文件
// import Vue from "../../node_modules/vue/dist/vue.js";

//导入vue，使用vue模板文件
//注意：webpack默认不能解析vue文件，需要安装第三方组件：npm i vue-loader vue-template-compiler -D
//vue-loader在15.*之后的版本都是需要添加VueLoaderPlugin的，具体配置在webpack.config.js中
import Vue from "vue";

// 导入app应用程序组件
import app from "./app.vue";

//创建vue对象
var vue = new Vue({
	el: "#app",
	data: {
		message: "使用webpack构建vue"
	},
	//使用render创建组件
	render: function(createCom) {
		return createCom(app);

		//创建多个组件
		// return createCom("div", [
		// 	createCom(login), createCom(comment)
		// ]);
	}
})
console.log(vue.$data.message);