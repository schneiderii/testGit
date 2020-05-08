<!-- 应用程序结构组件 -->
<template>
	<div id="appInfo">
		<!-- 加载各个组件 -->
		<!-- 注意：传递属性时，固定属性值直接写，动态属性值使用v-bind或简写冒号: -->
		<login message="你好" :test="obj"></login>
		<hr />
		<comment></comment>
		<hr />
		<file-upload></file-upload>
	</div>
</template>

<script>
	//导入各个组件
	import login from "./login.vue";
	import comment from "./comment.vue";
	import fileUpload from "./fileUpload.vue";

	import Vue from "vue";
	//导入路由vue-router
	import VueRouter from "vue-router";
	//vue和vuerouter关联，注意：这一步千万不能少
	Vue.use(VueRouter);

	//导入自定义路由模块
	// 注意：导入的不是默认暴露的对象，要用大括号{}引用
	import {
		myRouter
	} from "./myRouter.js";


	//使用export default关键字向外暴露成员，但是只能使用一次
	export default {
		data: function() {
			return {
				obj: {
					id: 1001,
					name: "张三"
				}
			}
		},
		methods: {

		},
		//加载自定义组件
		components: {
			login: login,
			comment: comment,
			fileUpload: fileUpload
		},
		//关联路由对象
		router: myRouter
	}

	//调用login.vue中暴露的成员
	// console.log(login.data().msg);
	// login.methods.show();

	//导入login.vue中暴露的成员，也可以使用as+别名的方式
	// import {
	// 	title as t,
	// 	content as c
	// } from "./login.vue";

	// console.log(t);
	// console.log(c);
</script>

<style>

</style>
