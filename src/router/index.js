import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import BeersShow from '../views/BeersShow.vue'
import BeersIndex from '../views/BeersIndex.vue'
import BreweriesIndex from '../views/BreweriesIndex.vue'
import BreweriesShow from '../views/BreweriesShow.vue'
import CartedBeers from '../views/CartedBeers.vue'
import Orders from '../views/Orders.vue'
import OrderConfirmation from '../views/OrderConfirmation.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/beers/:id',
    name: 'beers-show',
    component: BeersShow
  },
  {
    path: '/',
    name: 'beers-index',
    component: BeersIndex
  },
  {
    path: '/breweries',
    name: 'breweries-index',
    component: BreweriesIndex
  },
  {
    path: '/breweries/:id',
    name: 'breweries-show',
    component: BreweriesShow
  },
  {
    path: '/carted_beers',
    name: 'carted-beers',
    component: CartedBeers
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders
  },
  {
    path: '/order-confirmation',
    name: 'order-confirmation',
    component: OrderConfirmation
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
