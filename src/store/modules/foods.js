const state = {
    foods: [
        {id: 'f1', name: 'Molten Salted Egg Bao', price:'30000', image:'moltensaltedeggbao', category: 'Steamed Dim Sum', desc:'Home-made bao with runny salted yolk center, infused with custard powder.'},
        {id: 'f2', name: 'Xiao Long Bao', price:'32000', image:'xiaolongbao', category: 'Steamed Dim Sum', desc:'Delicate and delicous steamed dumplings filled with pork and savory soup.'},
        {id: 'f3', name: 'Three Colored Chicken Wonton', price:'27000', image:'threecoloredchickenwonton', category: 'Steamed Dim Sum', desc:'Steamed wonton stuffed with 3 colored chicken with unique and flavorful taste.'},
        {id: 'f4', name: 'Glutinous Rice in Lotus Leaf', price:'18000', image:'glutinousriceinlotusleaf', category: 'Steamed Dim Sum', desc:'The classic steamed lotus leaves stuffed with sticky rice and all sort of delicious goodies.'},
        {id: 'f5', name: 'Har Gow', price:'40000', image:'shrimpdumpling', category: 'Steamed Dim Sum', desc:'Translucent skin shrimp dumplings, with plump and juicy shrimp wrapped inside.'},
        {id: 'f6', name: 'Pork Shumai', price:'25000', image:'shumai', category: 'Steamed Dim Sum', desc:'Ground pork and shrimp, wrapped as open-faced dumplings and steamed to perfection.'},
        {id: 'f7', name: 'Steamed BBQ Pork Buns', price:'32000', image:'porkbuns', category: 'Steamed Dim Sum', desc:'Juicy and sweet Chinese bbq pork wrapped in soft and pillowy steamed buns.'},
        {id: 'f8', name: 'Edamame Truffle Dumpling', price:'65000', image:'edamametruffle', category: 'Steamed Dim Sum', desc:'Steamed dumplings filled with rich flavor of edamame and truffle mushroom.'},
        {id: 'f9', name: 'Lobster Dumpling', price:'75000', image:'lobsterdumpling', category: 'Steamed Dim Sum', desc:'Richness and luxury of lobster flavor fused with soft dumpling skins.'},

        {id: 'f10', name: 'Deep Fried Spiced Chicken Roll', price:'27000', image:'deepfriedspicedchickenroll', category: 'Fried Dim Sum', desc:'Crunchy and cripsy chicken roll fried to perfection and filled in-house special with spices.'},
        {id: 'f11', name: 'Butter Cajun Guo Tie', price:'32000', image:'buttercajunguotie', category: 'Fried Dim Sum', desc:'Chicken dumpling served with Butter Cajun and Spicy Sot Sauce.'},
        {id: 'f12', name: 'Pan Fried Pork Buns', price:'32000', image:'friedbuns', category: 'Fried Dim Sum', desc:'Moist pork wrapped with half-soft, half-crispy dough fried with pan.'},
        {id: 'f13', name: 'Spring Rolls', price:'24000', image:'springrolls', category: 'Fried Dim Sum', desc:'Deep fried thin rolled flour dough filled with vegetables.'},
        {id: 'f14', name: 'Lo Bak Go', price:'26000', image:'lobakgo', category: 'Fried Dim Sum', desc:'Pan Fried grated turnips combined with dried shrimp, mushrooms and chinese sausage.'},
        {id: 'f15', name: 'Fried Chicken Wonton', price:'26000', image:'friedwonton', category: 'Fried Dim Sum', desc:'Tender wrappers stuffed with ground pork, mushrooms and seasonings, then deep fried to crispy golden brown perfection.'},

        {id: 'f16', name: 'Fried Sesame Balls', price:'20000', image:'sesameballs', category: 'Dessert', desc:'Fried sesame balls with glutinous rice flour and red bean paste.'},
        {id: 'f17', name: 'HK Soursop', price:'24000', image:'hksoursop', category: 'Dessert', desc:'The bowl, the color, the taste. Introducing HK Soursop to replace your midnight chicken soup craving.'},
        {id: 'f18', name: 'Mango Pudding with Popping Boba', price:'24000', image:'mangopuddingwithpoppingboba', category: 'Dessert', desc:'Fruity, soft, luscious mango pudding, topped with fresh cream and popping boba on top.'},
        {id: 'f19', name: 'Eight Treasures Rice Pudding', price:'35000', image:'ricepudding', category: 'Dessert', desc:'Sweet sticky rice with a red bean paste filling, decorated with eight different candied fruits.'},
        {id: 'f20', name: 'Fortune Cookies', price:'17000', image:'fortunecookies', category: 'Dessert', desc:'Chocolate filled crunchy cookies that tells fortune.'},
        {id: 'f21', name: 'Mango Ice Cream', price:'20000', image:'mangoicecream', category: 'Dessert', desc:'Soft and cold ice cream filled with mango sweetness flavor.'}
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