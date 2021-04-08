import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/test1',
    name: 'test1',
    component: () => import('../components/test1.vue')
  },
  {
    path: '/test2',
    name: 'test2',
    component: () => import('../components/test2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
