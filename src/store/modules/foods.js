const state = {
    foods: [
        {id: 'f1', name: 'Molten Salted Egg Bao', price:'34000', image:'moltensaltedeggbao', category: 'Steamed Dim Sum', desc:'Home-made bao with runny salted yolk center, infused with custard powder.'},
        {id: 'f2', name: 'Xiao Long Bao', price:'32000', image:'xiaolongbao', category: 'Steamed Dim Sum', desc:'Delicate and delicous steamed dumplings filled with pork and savory soup.'},
        {id: 'f3', name: 'Three Colored Chicken Wonton', price:'32000', image:'threecoloredchickenwonton', category: 'Steamed Dim Sum', desc:'Steamed wonton stuffed with 3 colored chicken with unique and flavorful taste.'},
        {id: 'f4', name: 'Glutinous Rice in Lotus Leaf', price:'32000', image:'glutinousriceinlotusleaf', category: 'Steamed Dim Sum', desc:'The classic steamed lotus leaves stuffed with sticky rice and all sort of delicious goodies.'},

        {id: 'f5', name: 'Deep Fried Spiced Chicken Roll', price:'32000', image:'deepfriedspicedchickenroll', category: 'Fried Dim Sum', desc:'Crunchy and cripsy chicken roll fried to perfection and filled in-house special with spices.'},
        {id: 'f6', name: 'Butter Cajun Guo Tie', price:'35000', image:'buttercajunguotie', category: 'Fried Dim Sum', desc:'Chicken dumpling served with Butter Cajun and Spicy Sot Sauce.'},

        {id: 'f7', name: 'HK Soursop', price:'24000', image:'hksoursop', category: 'Dessert', desc:'The bowl, the color, the taste. Introducing HK Soursop to replace your midnight chicken soup craving.'},
        {id: 'f8', name: 'Mango Pudding with Popping Boba', price:'24000', image:'mangopuddingwithpoppingboba', category: 'Dessert', desc:'Fruity, soft, luscious mango pudding, topped with fresh cream and popping boba on top.'},
    ],
    categories: [
        {id: 1, name: 'Steamed Dim Sum', desc: 'Dim sum (literally meaning: touch the heart) was originally not a main meal rather a snack. It is now a staple of Cantonese dining culture, especially in Hong Kong.'},
        {id: 2, name: 'Fried Dim Sum', desc: 'Dim sum isn\'t perfect without it\'s fried counter-part. Enjoy the joy of the perfect Yum Cha experience with many variety to choose from!'},
        {id: 3, name: 'Dessert', desc: 'A sweet course eaten at the end of a meal or known as the fourth meal of the day following breakfast, lunch and dinner.'},
        {id: 4, name: 'Specials'}
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