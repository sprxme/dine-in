const state = {
    isAuth: false
}

const mutations = {
    setAuth(state, status){
        state.isAuth = status;
    }
}

const getters = {
    checkAuth: (state) => state.isAuth
}

export default {
    state,
    getters,
    mutations
}