<template>
	<div>
		<input type="file" multiple="multiple" @change="myUpload" />
	</div>
</template>

<script>
	//导入vue，axios对象
	import Vue from "vue";
	import axios from 'axios';
	import VueAxios from 'vue-axios';
	
	//vue关联axios，这一行千万不能少
	Vue.use(VueAxios, axios);
	
	export default {
		data: function() {
			return {

			}
		},
		methods: {
			myUpload(event) {
				let formData = new FormData();
				let data = JSON.stringify({
					user: "username",
					env: "dev"
				})
				formData.append('file', event.target.files[0]);
				formData.append('data', data); // 上传文件的同时， 也可以上传其他数据
				console.log(event.target);

				let url = this.$route.path + "upload_file";
				let config = {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				};
				this.axios.post(url, formData, config).then(function(response) {
					console.log(response.data)
				})
			}
		}
	}
</script>

<style>
</style>
