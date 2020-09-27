const state = {
    orders : [
        {id: 1, name:'Aglio e Olio', quantity:'1', price: '79000', image:'food1'},
        {id: 2, name:'Ravioli', quantity:'1', price: '79000',image:'food2'},
        {id: 3, name:'Sparkling Water',  quantity:'1', price: '44000',image:'food3'},
        {id: 4, name:'Mineral Water',  quantity:'1', price: '12000',image:'food3'},
        {id: 5, name:'Aglio e Olio', quantity:'1', price: '79000', image:'food1'},
    ]
}

const getters = {
    allOrders: (state) => state.orders
}

const actions = {}

const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}