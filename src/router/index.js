import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/newbill',
    component: () => import('../views/bill/NewBill.vue')
  },
  {
    path: '/newrecord',
    component: () => import('../views/record/NewRecord.vue')
  },
  {
    path: '/recordlist',
    component: () => import('../views/record/RecordList.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
