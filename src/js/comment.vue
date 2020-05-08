<template id="pinglunCom">
	<div id="comment">
		<h1>评论组件</h1>

		评论人：<input type="text" v-model="user" />
		内容：<textarea v-model="content"></textarea>
		<input type="button" value="发表" @click="pub()" />

		<ul>
			<li v-for="(item,index) in list" :key="index">
				{{item.content}}
				{{item.user}}
			</li>
		</ul>
	</div>
</template>

<script>
	//导入vue，axios对象
	import Vue from 'vue';
	import axios from 'axios';
	import VueAxios from 'vue-axios';

	//vue关联axios，这一行千万不能少
	Vue.use(VueAxios, axios);

	// 创建评论组件，并向外暴露
	export default {
		template: "#pinglunCom",
		data: function() {
			return {
				user: "",
				content: "",
				list: []
			}
		},
		//组件创建后立即调用获取所有评论的方法
		created() {
			this.getAllComment();
		},
		methods: {
			//获取所有评论
			getAllComment() {
				// 由于vue和axios是两个对象，因此在下面的axios.get方法里面this指的是axios，而不是vue
				// 因此要获取vue中的list属性，先把vue对象赋给一个临时变量_this进行保存，后面在axios.get方法里面就可以获取vue对象的list属性了
				var _this = this;

				//使用axios异步获取json数据
				axios.get('http://rap2.taobao.org:38080/app/mock/245745/getAllComment')
					.then(function(response) {
						// handle success
						_this.list = response.data.commentList;
						// console.log(_this.list);
					})
					.catch(function(error) {
						// handle error
						console.log(error);
					})
					.then(function() {
						// always executed
					});
			},
			//添加评论
			pub() {
				var newComment = {
					id: Date.now(),
					user: this.user,
					content: this.content
				};
				this.list.unshift(newComment);

				this.user = this.content = "";
			}
		}
	}
</script>

<style>
	#comment h1 {
		color: green;
		text-decoration: underline;
		text-align: center;
	}
</style>
