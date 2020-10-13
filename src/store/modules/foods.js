const state = {
    foods: [
        {id: 's1', name: 'Molten Salted Egg Bao', price:'45000', image:'moltensaltedeggbao', category: 'STEAMED DIM SUM', desc:'Home-made bao with runny salted yolk center, infused with custard powder.'},
        {id: 's2', name: 'Xiao Long Bao', price:'42000', image:'xiaolongbao', category: 'STEAMED DIM SUM', desc:'Delicate and delicous steamed dumplings filled with pork and savory soup.'},
        {id: 's3', name: 'Three Colored Chicken Wonton', price:'37000', image:'threecoloredchickenwonton', category: 'STEAMED DIM SUM', desc:'Steamed wonton stuffed with 3 colored chicken with unique and flavorful taste.'},
        {id: 's4', name: 'Pork Shumai', price:'39000', image:'shumai', category: 'STEAMED DIM SUM', desc:'Ground pork and shrimp, wrapped as open-faced dumplings and steamed to perfection.'},
        {id: 's5', name: 'Har Gow', price:'49000', image:'shrimpdumpling', category: 'STEAMED DIM SUM', desc:'Translucent skin shrimp dumplings, with plump and juicy shrimp wrapped inside.'},
        {id: 's6', name: 'Glutinous Rice in Lotus Leaf', price:'30000', image:'glutinousriceinlotusleaf', category: 'STEAMED DIM SUM', desc:'The classic steamed lotus leaves stuffed with sticky rice and all sort of delicious goodies.'},
        {id: 's7', name: 'Steamed BBQ Pork Buns', price:'42000', image:'porkbuns', category: 'STEAMED DIM SUM', desc:'Juicy and sweet Chinese bbq pork wrapped in soft and pillowy steamed buns.'},
        {id: 's8', name: 'Edamame Truffle Dumpling', price:'85000', image:'edamametruffle', category: 'STEAMED DIM SUM', desc:'Steamed dumplings filled with rich flavor of edamame and truffle mushroom.'},
        {id: 's9', name: 'Lobster Dumpling', price:'90000', image:'lobsterdumpling', category: 'STEAMED DIM SUM', desc:'Richness and luxury of lobster flavor fused with soft dumpling skins.'},
        {id: 's10', name: 'Bean Curd Spring Roll with Chicken', price:'45000', image:'beancurdspringrollwithchicken', category: 'STEAMED DIM SUM', desc:'Steamed double wrapped chicken with spring rolls and bean curd. '},
        {id: 's11', name: 'Steamed Mantou', price:'30000', image:'steammantou', category: 'STEAMED DIM SUM', desc:'Steamed buns made of dough and chocolate.'},
        {id: 's12', name: 'Shui Jiao', price:'45000', image:'shuijiao', category: 'STEAMED DIM SUM', desc:'Pork and chives steamed and wrapped with soft dough.'},

        {id: 'f1', name: 'Deep Fried Spiced Chicken Roll', price:'37000', image:'deepfriedspicedchickenroll', category: 'FRIED DIM SUM', desc:'Crunchy and cripsy chicken roll fried to perfection and filled in-house special with spices.'},
        {id: 'f2', name: 'Butter Cajun Guo Tie', price:'42000', image:'buttercajunguotie', category: 'FRIED DIM SUM', desc:'Chicken dumpling served with Butter Cajun and Spicy Sot Sauce.'},
        {id: 'f3', name: 'Pan Fried Pork Buns', price:'42000', image:'friedbuns', category: 'FRIED DIM SUM', desc:'Moist pork wrapped with half-soft, half-crispy dough fried with pan.'},
        {id: 'f4', name: 'Spring Rolls', price:'34000', image:'springrolls', category: 'FRIED DIM SUM', desc:'Deep fried thin rolled flour dough filled with vegetables.'},
        {id: 'f5', name: 'Lo Bak Go', price:'36000', image:'lobakgo', category: 'FRIED DIM SUM', desc:'Pan Fried grated turnips combined with dried shrimp, mushrooms and chinese sausage.'},
        {id: 'f6', name: 'Fried Chicken Wonton', price:'38000', image:'friedwonton', category: 'FRIED DIM SUM', desc:'Tender wrappers stuffed with ground pork, mushrooms and seasonings, then deep fried to crispy golden brown perfection.'},
        {id: 'f7', name: 'Chicken Ekkado', price:'35000', image:'chickenekkado', category: 'FRIED DIM SUM', desc:'Tender chicken meat and shrimp, wrapped with tofu skins and deep fried until golden brown.'},
        {id: 'f8', name: 'Chicken Dumpling', price:'39000', image:'chickendumpling', category: 'FRIED DIM SUM', desc:'Boneless chicken meat wrapped and fried.'},
        {id: 'f9', name: 'Prawn Wrapped in Bean Curd Skin', price:'35000', image:'prawnwrappedinbeancurdskin', category: 'FRIED DIM SUM', desc:'Prawn wrapped with bean curd and fried with special sauce'},
        {id: 'f10', name: 'Friend Mantou', price:'35000', image:'friendmantou', category: 'FRIED DIM SUM', desc:'Fried buns made of dough and milky flavor.'},
        {id: 'f11', name: 'Fried Crab Balls', price:'55000', image:'crabballs', category: 'FRIED DIM SUM', desc:'Fried meaty crab leg combined with chicken meat, and chive.'},
        {id: 'f12', name: 'Fried Mashed Potato Cake', price:'35000', image:'perkedel', category: 'FRIED DIM SUM', desc:'Mashed potato mixed with beef meat and fried until golden brown.'},

        {id: 'n1', name: 'Beef Noodle Soup', price:'65000', image:'beefnoodle', category: 'NOODLES', desc:'Red braised beef, beef broth, vegetables and Chinese noodles cooked to perfection'},
        {id: 'n2', name: 'Sichuan Dan Dan Mian', price:'65000', image:'sichuan', category: 'NOODLES', desc:'Freshly boiled thin noodles are served in a savory, spicy sichuan sauce topped with crispy pork and peanut flakes.'},
        {id: 'n3', name: 'Zhang Jiang Mian', price:'60000', image:'zhangjiang', category: 'NOODLES', desc:'Noodle with minced pork, extra firm tofu, chili bean sauce, and sweet bean sauce.'},
        {id: 'n4', name: 'La Mian', price:'70000', image:'lamian', category: 'NOODLES', desc:'Hand pulled noodles combined with braised beef and flavorful chicken broth.'},
        {id: 'n5', name: 'Beef Lo Mein', price:'70000', image:'lomein', category: 'NOODLES', desc:'Stir fried noodle with soft braised beef meat and special sauce.'},
        {id: 'n6', name: 'Chicken Chow Mein', price:'55000', image:'chowmein', category: 'NOODLES', desc:'Noodles paired with chicken and a colorful assortment of vegetables.'},
        {id: 'n7', name: 'Classic Noodle Salad', price:'50000', image:'noodlesalad', category: 'NOODLES', desc:'Cold noodle salad with a delicious sauce and refreshing ingredients.'},
        {id: 'n8', name: 'Dao Xiao Mian', price:'75000', image:'daoxiao', category: 'NOODLES', desc:'Knife cut noodles stir fried with braised meat and chicken stocks.'},
        {id: 'n9', name: 'Misua Patola', price:'65000', image:'misua', category: 'NOODLES', desc:'Salted wheat noodles cooked with patola and ground chicken.'},

        {id: 'd1', name: 'Fried Sesame Balls', price:'32000', image:'sesameballs', category: 'DESSERT', desc:'Fried sesame balls with glutinous rice flour and red bean paste.'},
        {id: 'd2', name: 'HK Soursop', price:'35000', image:'hksoursop', category: 'DESSERT', desc:'The bowl, the color, the taste. Introducing HK Soursop to replace your midnight chicken soup craving.'},
        {id: 'd3', name: 'Mango Pudding with Popping Boba', price:'40000', image:'mangopuddingwithpoppingboba', category: 'DESSERT', desc:'Fruity, soft, luscious mango pudding, topped with fresh cream and popping boba on top.'},
        {id: 'd4', name: 'Eight Treasures Rice Pudding', price:'45000', image:'ricepudding', category: 'DESSERT', desc:'Sweet sticky rice with a red bean paste filling, decorated with eight different candied fruits.'},
        {id: 'd5', name: 'Fortune Cookies', price:'30000', image:'fortunecookies', category: 'DESSERT', desc:'Chocolate filled crunchy cookies that tells fortune.'},
        {id: 'd6', name: 'Mango Ice Cream', price:'39000', image:'mangoicecream', category: 'DESSERT', desc:'Soft and cold ice cream filled with mango sweetness flavor.'}
    ],
    categories: [
        {id: 1, index: 1, name: 'STEAMED DIM SUM', desc: 'Dim sum (literally meaning: touch the heart) was originally not a main meal rather a snack. It is now a staple of Cantonese dining culture, especially in Hong Kong.'},
        {id: 2, index: 2, name: 'FRIED DIM SUM', desc: 'Dim sum isn\'t perfect without it\'s fried counter-part. Enjoy the joy of the perfect Yum Cha experience with many variety to choose from!'},
        {id: 3, index: 3, name: 'NOODLES', desc: 'Soft and high quality dough cooked and made by professionals noodle chef.'},
        {id: 4, index: 4, name: 'DESSERT', desc: 'A sweet course eaten at the end of a meal or known as the fourth meal of the day following breakfast, lunch and dinner.'},
        {id: 5, index: 5, name: 'SPECIALS', desc: 'Our special items comes and go with the change of season and special events. They represent the uniqueness that comes within each season and will surely not be listed any other time or be repeated.'}
    ]
}

const getters = {
    allFoods: (state) => state.foods,
    allFoodCategories: (state) => state.categories
}

const actions = {
    removeFoodItem({commit},{id}){
        console.log('Removing id: ' + id)
        commit('removeFood',id)
    },
    updateFoodCategories({ commit }, data) {
        console.log('Updating for id: ' +  data.id + ' with new index: ' + data.index);
        commit('updateFoodCategories', data)
    }
}

const mutations = {
    //remove food item (front-end only not atcual data) because no database yet :(
    removeFood: (state,id) => {
        state.foods.splice(state.foods.findIndex(food => food.id == id ),1);
    },
    updateFoodCategories: (state, data) => {
        const modifiedIndex = state.categories.map(category => category.index)
        const allIndex = []

        for (let i = 1; i <= state.categories.length; i++) {
            allIndex.push(i)
        }

        let originalIndex = allIndex.filter(index => modifiedIndex.indexOf(index) === -1)[0]

        const swapCategory = state.categories.find(category => {
            if (category.id == data.id) { 
                return false
            }
            return category.index == data.index
        })

        if (swapCategory === undefined || swapCategory === null) { return }

        const updated = state.categories.map(category => {
            if (category.id == swapCategory.id) {
                category.index = originalIndex
            }
            return category
        })

        state.categories = updated
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}