const state = {
    drinks: [
        {id: 1, name: 'Coca-cola', price:'24000', image:'food1', category: 'Cold', desc:'minuman'},
        {id: 2, name: 'Mineral Water', price:'12000', image:'food2', category: 'Cold', desc:'Pizza dengan topping olive oils, daging sapi, mozarella dan home sauce'},
        {id: 3, name: 'Hot Ocha', price:'24000', image:'food3', category: 'Hot', desc:'minuman'},
        {id: 4, name: 'Coca-cola', price:'24000', image:'food1', category: 'Cold', desc:'minuman'},
        {id: 5, name: 'Coca-cola', price:'24000', image:'food4', category: 'Cold', desc:'minuman'},
        {id: 6, name: 'Coca-cola', price:'24000', image:'food5', category: 'Cold', desc:'minuman'},
        {id: 7, name: 'Coca-cola', price:'24000', image:'food3', category: 'Cold', desc:'minuman'},
        {id: 8, name: 'Coca-cola', price:'24000', image:'food2', category: 'Hot', desc:'minuman'},
        {id: 9, name: 'Coca-cola', price:'24000', image:'food4', category: 'Hot', desc:'minuman'},
        {id: 10, name: 'Coca-cola', price:'24000', image:'food1', category: 'Hot', desc:'minuman'},
        {id: 11, name: 'Coca-cola', price:'24000', image:'food1', category: 'Hot', desc:'minuman'},
        {id: 12, name: 'Coca-cola', price:'24000', image:'food1', category: 'Hot', desc:'minuman'},
        {id: 13, name: 'Coca-cola', price:'24000', image:'food1', category: 'Hot', desc:'minuman'},
        {id: 14, name: 'Coca-cola', price:'24000', image:'food1', category: 'Hot', desc:'minuman'},
        {id: 15, name: 'Coca-cola', price:'24000', image:'food1', category: 'Hot', desc:'minuman'},
        {id: 16, name: 'Coca-cola', price:'24000', image:'food1', category: 'Hot', desc:'minuman'},
        {id: 17, name: 'Segar Tea', price:'24000', image:'food1', category: 'Cold', desc:'minuman'},

    ],
    categories: [
        {id: 1, name: 'Cold'},
        {id: 2, name: 'Hot'}
    ]
}

const getters = {
    allDrinks: (state) => state.drinks,
    allDrinkCategories: (state) => state.categories
}

const actions = {
    removeBeverageItem({commit},{id}){
        console.log('remove: '+id)
        commit('removeBeverage',id)
    }
}

const mutations = {
    //remove drink beverage (front-end only not atcual data) because no database yet :(
    removeBeverage: (state,id) => {
        console.log('toberemoved: ' + id)
        state.drinks.splice(state.drinks.findIndex(drink => drink.id == id ),1);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}