const state = {
    foods: [
        {id: 'f1', name: 'Coca-cola', price:'24000', image:'food1', category: 'Pizza', desc:'minuman'},
        {id: 'f2', name: 'Sprxme\'s Special', price:'12000', image:'food2', category: 'Pizza', desc:'Pizza dengan topping olive oils, daging sapi, mozarella dan home sauce'},
        {id: 'f3', name: 'Hot Ocha', price:'24000', image:'food3', category: 'Pizza', desc:'minuman'},
        {id: 'f4', name: 'Coca-cola', price:'24000', image:'food1', category: 'Pasta', desc:'minuman'},
        {id: 'f5', name: 'Coca-cola', price:'24000', image:'food4', category: 'Pizza', desc:'minuman'},
        {id: 'f6', name: 'Coca-cola', price:'24000', image:'food5', category: 'Pizza', desc:'minuman'},
        {id: 'f7', name: 'Coca-cola', price:'24000', image:'food3', category: 'Pizza', desc:'minuman'},
        {id: 'f8', name: 'Coca-cola', price:'24000', image:'food2', category: 'Pasta', desc:'minuman'},
        {id: 'f9', name: 'Coca-cola', price:'24000', image:'food4', category: 'Pizza', desc:'minuman'},
        {id: 'f10', name: 'Coca-cola', price:'24000', image:'food2', category: 'Pasta', desc:'minuman'},
        {id: 'f11', name: 'Coca-cola', price:'24000', image:'food4', category: 'Steak', desc:'minuman'},
        {id: 'f12', name: 'Coca-cola', price:'24000', image:'food5', category: 'Pasta', desc:'minuman'},
        {id: 'f13', name: 'Coca-cola', price:'24000', image:'food4', category: 'Steak', desc:'minuman'},
        {id: 'f14', name: 'Coca-cola', price:'24000', image:'food6', category: 'Pasta', desc:'minuman'},
        {id: 'f15', name: 'Coca-cola', price:'24000', image:'food5', category: 'Steak', desc:'minuman'},
        {id: 'f16', name: 'Coca-cola', price:'24000', image:'food3', category: 'Pasta', desc:'minuman'},
        {id: 'f17', name: 'Segar Tea', price:'24000', image:'food6', category: 'Pasta', desc:'minuman'},
    ],
    categories: [
        {id: 1, name: 'Pasta'},
        {id: 2, name: 'Pizza'},
        {id: 3, name: 'Steak'}
    ]
}

const getters = {
    allFoods: (state) => state.foods,
    allFoodCategories: (state) => state.categories
}

const actions = {
    removeFoodItem({commit},{id}){
        console.log('remove: '+id)
        commit('removeFood',id)
    }
}

const mutations = {
    //remove food item (front-end only not atcual data) because no database yet :(
    removeFood: (state,id) => {
        console.log('toberemoved: ' + id)
        state.foods.splice(state.foods.findIndex(food => food.id == id ),1);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}