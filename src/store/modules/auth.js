const state = {
    isAuth: false
}

const mutations = {
    setAuth(state, status){
        state.isAuth = status;
    }
}

export default {
    state,
    mutations
}