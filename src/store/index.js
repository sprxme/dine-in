import Vuex from 'vuex'
import Vue from 'vue'
import foods from './modules/foods.js'
import drinks from './modules/drinks.js'

// Load vuex
Vue.use(Vuex)

// Create store
export default new Vuex.Store({
    modules: {
        foods,
        drinks
    }
})