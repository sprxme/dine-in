const state = {
    foods: [
        {id: 's1', name: 'Molten Salted Egg Bao', price:'30000', image:'moltensaltedeggbao', category: 'STEAMED DIM SUM', desc:'Home-made bao with runny salted yolk center, infused with custard powder.'},
        {id: 's2', name: 'Xiao Long Bao', price:'32000', image:'xiaolongbao', category: 'STEAMED DIM SUM', desc:'Delicate and delicous steamed dumplings filled with pork and savory soup.'},
        {id: 's3', name: 'Three Colored Chicken Wonton', price:'27000', image:'threecoloredchickenwonton', category: 'STEAMED DIM SUM', desc:'Steamed wonton stuffed with 3 colored chicken with unique and flavorful taste.'},
        {id: 's4', name: 'Pork Shumai', price:'25000', image:'shumai', category: 'STEAMED DIM SUM', desc:'Ground pork and shrimp, wrapped as open-faced dumplings and steamed to perfection.'},
        {id: 's5', name: 'Har Gow', price:'40000', image:'shrimpdumpling', category: 'STEAMED DIM SUM', desc:'Translucent skin shrimp dumplings, with plump and juicy shrimp wrapped inside.'},
        {id: 's6', name: 'Glutinous Rice in Lotus Leaf', price:'18000', image:'glutinousriceinlotusleaf', category: 'STEAMED DIM SUM', desc:'The classic steamed lotus leaves stuffed with sticky rice and all sort of delicious goodies.'},
        {id: 's7', name: 'Steamed BBQ Pork Buns', price:'32000', image:'porkbuns', category: 'STEAMED DIM SUM', desc:'Juicy and sweet Chinese bbq pork wrapped in soft and pillowy steamed buns.'},
        {id: 's8', name: 'Edamame Truffle Dumpling', price:'65000', image:'edamametruffle', category: 'STEAMED DIM SUM', desc:'Steamed dumplings filled with rich flavor of edamame and truffle mushroom.'},
        {id: 's9', name: 'Lobster Dumpling', price:'75000', image:'lobsterdumpling', category: 'STEAMED DIM SUM', desc:'Richness and luxury of lobster flavor fused with soft dumpling skins.'},
        {id: 's10', name: 'Bean Curd Spring Roll with Chicken', price:'35000', image:'beancurdspringrollwithchicken', category: 'STEAMED DIM SUM', desc:''},

        {id: 'f1', name: 'Deep Fried Spiced Chicken Roll', price:'27000', image:'deepfriedspicedchickenroll', category: 'FRIED DIM SUM', desc:'Crunchy and cripsy chicken roll fried to perfection and filled in-house special with spices.'},
        {id: 'f2', name: 'Butter Cajun Guo Tie', price:'32000', image:'buttercajunguotie', category: 'FRIED DIM SUM', desc:'Chicken dumpling served with Butter Cajun and Spicy Sot Sauce.'},
        {id: 'f3', name: 'Pan Fried Pork Buns', price:'32000', image:'friedbuns', category: 'FRIED DIM SUM', desc:'Moist pork wrapped with half-soft, half-crispy dough fried with pan.'},
        {id: 'f4', name: 'Spring Rolls', price:'24000', image:'springrolls', category: 'FRIED DIM SUM', desc:'Deep fried thin rolled flour dough filled with vegetables.'},
        {id: 'f5', name: 'Lo Bak Go', price:'26000', image:'lobakgo', category: 'FRIED DIM SUM', desc:'Pan Fried grated turnips combined with dried shrimp, mushrooms and chinese sausage.'},
        {id: 'f6', name: 'Fried Chicken Wonton', price:'26000', image:'friedwonton', category: 'FRIED DIM SUM', desc:'Tender wrappers stuffed with ground pork, mushrooms and seasonings, then deep fried to crispy golden brown perfection.'},
        {id: 'f7', name: 'Chicken Ekkado', price:'35000', image:'chickenekkado', category: 'FRIED DIM SUM', desc:''},
        {id: 'f8', name: 'Chicken Dumpling', price:'35000', image:'chickendumpling', category: 'FRIED DIM SUM', desc:''},
        {id: 'f9', name: 'Prawn Wrapped in Bean Curd Skin', price:'35000', image:'prawnwrappedinbeancurdskin', category: 'FRIED DIM SUM', desc:''},

        {id: 'd1', name: 'Fried Sesame Balls', price:'20000', image:'sesameballs', category: 'DESSERT', desc:'Fried sesame balls with glutinous rice flour and red bean paste.'},
        {id: 'd2', name: 'HK Soursop', price:'24000', image:'hksoursop', category: 'DESSERT', desc:'The bowl, the color, the taste. Introducing HK Soursop to replace your midnight chicken soup craving.'},
        {id: 'd3', name: 'Mango Pudding with Popping Boba', price:'24000', image:'mangopuddingwithpoppingboba', category: 'DESSERT', desc:'Fruity, soft, luscious mango pudding, topped with fresh cream and popping boba on top.'},
        {id: 'd4', name: 'Eight Treasures Rice Pudding', price:'35000', image:'ricepudding', category: 'DESSERT', desc:'Sweet sticky rice with a red bean paste filling, decorated with eight different candied fruits.'},
        {id: 'd5', name: 'Fortune Cookies', price:'17000', image:'fortunecookies', category: 'DESSERT', desc:'Chocolate filled crunchy cookies that tells fortune.'},
        {id: 'd6', name: 'Mango Ice Cream', price:'20000', image:'mangoicecream', category: 'DESSERT', desc:'Soft and cold ice cream filled with mango sweetness flavor.'}
    ],
    categories: [
        {id: 1, index: 1, name: 'STEAMED DIM SUM', desc: 'Dim sum (literally meaning: touch the heart) was originally not a main meal rather a snack. It is now a staple of Cantonese dining culture, especially in Hong Kong.'},
        {id: 2, index: 2, name: 'FRIED DIM SUM', desc: 'Dim sum isn\'t perfect without it\'s fried counter-part. Enjoy the joy of the perfect Yum Cha experience with many variety to choose from!'},
        {id: 3, index: 3, name: 'DESSERT', desc: 'A sweet course eaten at the end of a meal or known as the fourth meal of the day following breakfast, lunch and dinner.'},
        {id: 4, index: 4, name: 'SPECIALS', desc: 'Our special items comes and go with the change of season and special events. They represent the uniqueness that comes within each season and will surely not be listed any other time or be repeated.'}
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