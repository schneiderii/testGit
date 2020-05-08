//导入路由vue-router
import VueRouter from "vue-router";

//导入自定义组件
import account1 from "./account1.vue";
import account2 from "./account2.vue";
import account1_login from "./account1-login.vue";
import account1_register from "./account1-register.vue";

//创建路由对象，并暴露对象给外部
export var myRouter = new VueRouter({
	routes: [{
			path: "/account1",
			component: account1,
			//路由子组件
			children: [{
					path: "/account1/login",
					component: account1_login
				},
				{
					path: "/account1/register",
					component: account1_register
				}
			]
		},
		{
			path: "/account2",
			component: account2
		}
	]
})

//也可以使用默认暴露路由对象给外部
// export default myRouter;
