import Vue from 'vue'
import Vuex from 'vuex'
import Foods from './modules/foods.js'
import Drinks from './modules/drinks.js'
import Orders from './modules/orders.js'
import Auth from './modules/auth';

Vue.use(Vuex)

// Create store
const store = new Vuex.Store({
    modules: {
        Auth,
        Foods,
        Drinks,
        Orders
    }
})
export default store