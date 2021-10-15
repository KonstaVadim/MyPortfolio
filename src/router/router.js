import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'main',
    component: () => import('../components/content/main/Main.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../components/content/portfolio/Portfolio.vue')
  },
  {
    path: '/about-me',
    name: 'aboutMe',
    component: () => import('../components/content/about-me/About-me.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../components/content/contacts/Contacts.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
