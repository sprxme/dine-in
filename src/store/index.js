import Vuex from 'vuex'
import Vue from 'vue'
import Foods from './modules/foods.js'
import Drinks from './modules/drinks.js'
import Orders from './modules/orders.js'

// Load vuex
Vue.use(Vuex)

// Create store
export default new Vuex.Store({
    modules: {
        Foods,
        Drinks,
        Orders
    }
})