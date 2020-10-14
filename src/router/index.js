import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/users/Home.vue'
import Account from '@/views/users/Login'
import SignUp from '@/components/SignUp'
import Login from '@/components/Login'
import Food from '@/views/users/Food'
import Beverage from '@/views/users/Beverage'
import Order from '@/views/users/Order'
import Track from '@/views/users/Track'
import TrackingItem from '@/views/users/TrackingItem'
import AllOrders from '@/views/admin/AllOrders'
import PageNotFound from '@/views/PageNotFound';
import store from '@/store/index';
import BeverageEdit from '@/views/admin/BeverageEdit';
import FoodEdit from '@/views/admin/FoodEdit';
import OrderDetail from '@/views/admin/OrderDetail';
import ConfirmPage from '@/views/users/ConfirmationPage';

//const { isNavigationFailure, NavigationFailureType} = VueRouter;

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/account',
    component: Account,
    children: [
      {
        path: '',
        name: 'login',
        component: Login
      },
      {
        path: 'signup',
        name: 'Signup',
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
    path: '/track/:token',
    name: 'TrackingItem',
    component: TrackingItem,
    props: true
  },
  {
    path: '/confirm/:token',
    name: 'ConfirmItem',
    component: ConfirmPage,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/users/About.vue')
  },
  {
    path:'/all-orders',
    name: 'AllOrders',
    component: AllOrders,
    meta: { requiresAuth: true } //requires admin auth
  },
  {
    path:'/all-orders/:token',
    name: 'OrderDetail',
    component: OrderDetail,
    props: true,
    meta: { requiresAuth: true } //requires admin auth
  },
  {
    path:'/beverage-edit',
    name: 'BeverageEdit',
    component: BeverageEdit,
    meta: { requiresAuth: true } //requires admin auth
  },
  {
    path:'/food-edit',
    name: 'FoodEdit',
    component: FoodEdit,
    meta: { requiresAuth: true } //requires admin auth
  },

  //always put after all the other routes
  {
    path: '*',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to,from,next) =>{
  
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(store.state.Auth.isAuth){
      next();
    }
    else{
      next('/account');
      // next()
    }
  }
  else {
    next();
  }
});

export default router
