import Vue from 'vue'
import VueRouter from 'vue-router'
/* import Home from '../views/Home.vue' */
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import atv1 from '../components/desafios_nivel_1/Atv-1.vue'
import atv2 from '../components/desafios_nivel_1/Atv-2.vue'
import Ranking from '../components/Ranking.vue'
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
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/atv1',
    name: 'atv1',
    component: atv1
  },
  {
    path: '/atv2',
    name: 'atv2',
    component: atv2
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: Ranking
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
