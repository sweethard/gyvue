/**
 * Created by 邹玉玲 on 2017/8/22.
 */
//先引入Vue
import Vue from 'vue';
//组件
import App from './APP.vue';
//结束
//引入组件
import Home from './components/home/Home.vue'
//maint-ui开始
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUi);
//mint-ui结束
//vuerouter开始
import VueRouter from 'vue-router';
Vue.use(VueRouter);
 let router=new VueRouter({
   routes:[
     {name:'home',path:'/home',component:Home}
   ]
 });
//结束vuerouter
//mui开始

import './static/libs/mui-master/dist/css/mui.css'
//mui结束


//数据交互axios
 import Axios from 'axios';
//在原型上挂载一个
 Vue.prototype.$ajax=Axios;
 Axios.defaults.baseURL='http://182.254.146.100:8899/api/';
 Vue.use(Axios);
new Vue ({
  el:'#app',
  router,
  render:c=>c(App)
});