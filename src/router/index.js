import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'main',
    component: () => import('../components/content/Main.vue')
  },
  {
    path: '/about-me',
    name: 'aboutMe',
    component: () => import('../components/content/AboutMe.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../components/content/Portfolio.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../components/content/Services.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../components/content/Contacts.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
