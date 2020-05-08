<!-- 要生成的页面部分 -->
<template>
	<div id="loginCom">
		<h1>登录组件</h1>

		<router-link to="/account1">account1</router-link>
		<router-link to="/account2">account2</router-link>

		<router-view></router-view>
	</div>
</template>

<!-- js处理业务逻辑部分 -->
<script>
	//使用export default关键字向外暴露成员，但是只能使用一次
	export default {
		props: ["message", "test"],	//接收父组件传递的属性名
		info: "初始信息",
		data: function() {
			return {
				msg: "这是vue组件的data变量"
			}
		},
		methods: {
			show() {
				console.log("这是vue组件的显示方法");
			}
		},
		created() {
			//使用$options可以引用data之外定义的变量
			console.log(this.$options.info);
			//this.$data.msg等价于this.msg
			console.log(this.$data.msg);
			// 获取父组件传递过来的属性值
			console.log(this.$props.message);
			console.log(this.$props.test);
		}
	}

	//使用export关键字也可以向外暴露成员，而且可以使用多次
	//外部使用{}来接收
	export var title = "向外暴露的标题信息";
	export var content = "向外暴露的内容信息";
</script>

<!-- css样式部分 -->
<style>
	#loginCom h1 {
		color: red;
		text-decoration: underline;
		text-align: center;
	}
</style>
