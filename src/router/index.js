import Vue from 'vue'
import VueRouter from 'vue-router'
/* import Home from '../views/Home.vue' */
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Num from '../components/desafios_nivel_1/Num.vue'
import Ncinco from '../components/Ncinco.vue'
import Ndois from '../components/desafios_nivel_1/Ndois.vue'
import Ntres from '../components/Ntres.vue'
import Nquatro from '../components/Nquatro.vue'
import Ranking from '../components/Ranking.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
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
    path: '/num',
    name: 'Num',
    component: Num
  },
  {
    path: '/ndois',
    name: 'Ndois',
    component: Ndois
  },
  {
    path: '/ntres',
    name: 'Ntres',
    component: Ntres
  },
  {
    path: '/nquatro',
    name: 'Nquatro',
    component: Nquatro
  },
  {
    path: '/ncinco',
    name: 'Ncinco',
    component: Ncinco
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
