import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Account from '../views/Login'
import SignUp from '../components/SignUp'
import Login from '../components/Login'
import Food from '../views/Food'
import Beverage from '../views/Beverage'
import Order from '../views/Order'
import Track from '../views/Track'
import TrackingItem from '../views/TrackingItem'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    children: [
      {
        path: '',
        component: Login
      },
      {
        path: 'signup',
        component: SignUp
      }
    ]
  },
  {
    path: '/food',
    name: 'Food',
    component: Food
  },
  {
    path: '/beverage',
    name: 'Beverage',
    component: Beverage
  },
  {
    path: '/order',
    name: 'Order',
    props: true,
    component: Order
  },
  {
    path: '/track',
    name: 'Track',
    component: Track,
  },
  {
    path: '/track/:id',
    name: 'TrackingItem',
    component: TrackingItem,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior: function(to) {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return {x: 0, y: 0}
    }
  },
});

export default router
