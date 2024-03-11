import Vue from 'vue'
import App from './App.vue'

//导入所有的vant组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//统一设置axios的主机地址
import axios from 'axios'
axios.defaults.baseURL = 'http://106.52.170.128:8888'
Vue.prototype.$axios = axios

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './Pages/Home/Index.vue'
import Comments from './Pages/Comments/Index.vue'
import News from './Pages/News/Index.vue'
import Goods from './Pages/Goods/Index.vue'
import Image from './Pages/Images/Index.vue'
import ImageInfo from './Pages/Images/info.vue'
import ShopCar from './Pages/ShopCar/Index.vue'
import SearchNews from './Pages/SearchNews/Index.vue'
import Contact from './Pages/Contact/Index.vue'
const routes = [
  { path: '/', redirect: '/Home' },
  { path: '/Home', component: Home },
  { path: '/Comments', component: Comments },
  { path: '/News', component: News },
  { path: '/Goods', component: Goods },
  { path: '/Images', component: Image },
  { path: '/ImageInfo/:imgid', component: ImageInfo },
  { path: '/ShopCar', component: ShopCar },
  { path: '/SearchNews', component: SearchNews },
  { path: '/Contact', component: Contact },
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

//定义一个全局过滤器
Vue.filter('dataFormat', function (value) {
  let date = new Date(value);
  // const year = date.getFullYear()
  // const month = date.getMonth() + 1
  // const day = date.getDay()
  // const hour = date.getHours()
  // const minute = date.getMinutes()
  // const second = date.getSeconds()
  // return `${year} - ${month} - ${day} ${hour}:${minute}:${second}`
  return date.toISOString().slice(0, 19).replace('T', ' ')
})

//全局注册
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
