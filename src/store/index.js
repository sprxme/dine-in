import Vue from 'vue'
import Vuex from 'vuex'
import Foods from './modules/foods.js'
import Drinks from './modules/drinks.js'
import Orders from './modules/orders.js'
import Auth from './modules/auth';
import Navbar from './modules/navbar';

Vue.use(Vuex)

// Create store
const store = new Vuex.Store({
    modules: {
        Auth,
        Navbar,
        Foods,
        Drinks,
        Orders,
    }
})
export default store