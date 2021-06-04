import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
// 路由
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
// 路由出口
export default router
