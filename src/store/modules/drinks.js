const state = {
    drinks: [
        {id: 'c1', name: 'Liquid Crack', price:'150000', image:'liquidcrack', category: 'COCKTAILS', desc:'Something shimmery, addictive and cheeky. Filled with all things magick to get your MOJO going again.'},
        {id: 'c2', name: 'White Russian', price:'120000', image:'whiterussian', category: 'COCKTAILS', desc:'Vodka, coffee liqueur, fresh milk, heavy cream.'},
        {id: 'c3', name: 'Paloma Milk Punch', price:'140000', image:'palomamilkpunch', category: 'COCKTAILS', desc:'Tequila, liqueur, lime, grapefruit juice, coconut milk, topped with soda.'},
        {id: 'c4', name: 'Ni Hao Shimeji', price:'140000', image:'nihaoshimeji', category: 'COCKTAILS', desc:'Shimeji infused vodka, campari, vermouth, celery bitters, passion fruit syrup, lamb and rosemary gravy.'},
        {id: 'c5', name: 'I Love You Beary Much', price:'135000', image:'iloveyoubearymuch', category: 'COCKTAILS', desc:''},
        {id: 'c6', name: 'Adult Milo Dinosaur', price:'135000', image:'adultmilodinosaur', category: 'COCKTAILS', desc:'Vodka, milo, fresh milk, hershey’s syrup, pure cocoa.'},
        {id: 'c7', name: 'Tequila Sunrise', price:'110000', image:'tequilasunrise', category: 'COCKTAILS', desc:'Tequila, orang juice, grenadine syrup.'},
        {id: 'c8', name: 'Garden Margarita', price:'150000', image:'gardenmargarita', category: 'COCKTAILS', desc:'Butter corn and undoubtly twisted with Tequile, Cointreau, palm sugar and olive bitters and corn!'},
        {id: 'c9', name: 'The Secret Mermaid', price:'150000', image:'thesecretmermaid', category: 'COCKTAILS', desc:'A variation of Daiquiri, Spice & Everything Nice. Unconventionally uses Bon Cabe and creamy coconut, mango.'},
        {id: 'c10', name: 'Coca Me Maybe', price:'140000', image:'colamemaybe', category: 'COCKTAILS', desc:'Lemongrass infused gin, lychee, earl grey tea, homemade lemon ginger honey.'},
        {id: 'c11', name: 'Crazy Rich Sesame', price:'140000', image:'crazyrichsesame', category: 'COCKTAILS', desc:'Gin, whiskey cinnamon liqueur, ginger syrup, lemon, black sesame paste, egg white.'},
        {id: 'c12', name: 'Candy Corn Martini with Pop Rocks Rim', price:'120000', image:'candycornmartini', category: 'COCKTAILS', desc:'Vodka, martini, vermouth, candy, with pop rocks rim.'},
        {id: 'c13', name: 'Ocha Negroni', price:'135000', image:'ochanegroni', category: 'COCKTAILS', desc:'Whiskey infused with strawberry juice and topped with flowers fragrant'},
        {id: 'c14', name: 'XXL Joy Punch!', price:'135000', image:'xxljoypunch', category: 'COCKTAILS', desc:'Rum, apple, strawberry, soursop juice, apple syrup, topped with a bottle of soju.'},

        {id: 'm1', name: 'Sum Ting Wong?', price:'90000', image:'sumtingwong', category: 'MOCKTAILS', desc:'Kyuri, lemon, blueberry syrup, topped with soda.'},
        {id: 'm2', name: 'Crushing Pineapple', price:'90000', image:'crushingpineapple', category: 'MOCKTAILS', desc:''},
        {id: 'm3', name: 'Flower Power', price:'50000', image:'flowerpower', category: 'MOCKTAILS', desc:''},
        {id: 'm4', name: 'Virgin Cucumber Gimlet', price:'60000', image:'virgincucumber', category: 'MOCKTAILS', desc:'Fresh Soda infused with syrup, cucumber, and lime.'},
        {id: 'm5', name: 'Mountain Mojito', price:'70000', image:'mojito', category: 'MOCKTAILS', desc:'Soda water mixed with lime juice, agave, blood orange, and mint leaves.'},
        {id: 'm6', name: 'Fine China', price:'50000', image:'finechina', category: 'MOCKTAILS', desc:'Kiwi, lemon, orang juice, ginger syrup, kiwi syrup.'},
        {id: 'm7', name: 'Lavender Lemonade', price:'65000', image:'lavenderlemon', category: 'MOCKTAILS', desc:'Fresh lemon juice infused with honey and dried lavender.'},
        {id: 'm8', name: 'Blueberry Lavender Mojito', price:'60000', image:'blueberrylavender', category: 'MOCKTAILS', desc:'Soda water infused with blueberry lavender syrup, and lime water.'},
        {id: 'm9', name: 'Wildcat Cooler', price:'65000', image:'wildcatcooler', category: 'MOCKTAILS', desc:'Blueberries, juiced lemon, and sugar mixed with fresh water.'},
        {id: 'm10', name: 'Spicy Watermelon Mint Agua Fresca', price:'90000', image:'watermelonagua', category: 'MOCKTAILS', desc:'Watermelon on top  of water infused with granulated sugar, lime juice, jalapeno, and mint leaves.'},
        {id: 'm11', name: 'Rose Lemon Spritzer', price:'50000', image:'roselemon', category: 'MOCKTAILS', desc:'Rose water, fresh lemon juice, honey, and a few drops of blood orange and pomegranate juice.'},
        
        {id: 't1', name: 'Ice Lemon Tea', price:'35000', image:'lemontea', category: 'TEA', desc:'HK tea leaves infused with fresh lemon juice, served on chilled ice.'},
        {id: 't2', name: 'Ice Tea', price:'15000', image:'esteh', category: 'TEA', desc:'Healthy and natural tea with chill ice.'},
        {id: 't3', name: 'Hot Tea', price:'18000', image:'tehpanas', category: 'TEA', desc:'Hot tea made with natural and handpicked quality tea leaves.'},
        {id: 't4', name: 'Hot Black Tea', price:'24000', image:'blacktea', category: 'TEA', desc:'Quality black tea leaves native to england made hot.'},
        {id: 't5', name: 'Ice Milk Tea With Bubbles', price:'30000', image:'bobatea', category: 'TEA', desc:'Tea and milk combine with bubble topping made cold.'},

        {id: 'sb1', name: 'Elixir of Youth', price:'150000', image:'elixirofyouth', category: 'SPECIALS', desc:'The classic gin and vermouth combination with syrup and granulated sugar. One of the well-known elixirs to date.'},
        {id: 'sb2', name: 'Bella\'s Last Words', price:'150000', image:'lastwords', category: 'SPECIALS', desc:'A variation of Manhattan, infused with  grapefruit juice, maraschino cherry, surely will take your breath away.'},
        {id: 'sb3', name: 'Alice\'s Ecstasy Shot', price:'150000', image:'ecstasyshot', category: 'SPECIALS', desc:'Vodka, grenadine, malibu rum. Filled with all things Alice needs to get her vibes going.'},
        {id: 'sb4', name: 'Special Christmas Cocktail', price:'150000', image:'specialchristmascocktail', category: 'SPECIALS', desc:'Rum, strawberry, infused with in-house lemon ginger syrup. Something even santa would take on a cold winter night.'},
    ],
    categories: [
        {id: 1, index: 1, name: 'COCKTAILS', desc: 'Our cocktail menu is seasonal. It changes periodically, depending on the best seasonal ingredients that are available on the market.'},
        {id: 2, index: 2, name: 'MOCKTAILS', desc: '\'Mocktails\' is an abbreviation for \'mock cocktails\'. Mocktails come in many varieties: frozen, hot, fizzy, non-fizzy and cream-based recipes. It represents cocktails without the contain of alcohol.'},
        {id: 3, index: 3, name: 'TEA', desc: 'The tea-drinking habits of HK residents derive primarily the Cantonese traditions such as yum cha. This tradition is not only in terms of the tea itself, but also in terms of the underlying social and cultural values.'},
        {id: 4, index: 4, name: 'SPECIALS', desc: 'Our special items comes and go with the change of season and special events. They represent the uniqueness that comes within each season and will surely not be listed any other time or be repeated.'}
    ]
}

const getters = {
    allDrinks: (state) => state.drinks,
    allDrinkCategories: (state) => state.categories
}

const actions = {
    removeBeverageItem({commit},{id}){
        console.log('Removing id: ' + id)
        commit('removeBeverage',id)
    },
    removeBeverageCategory({commit},{id}){
        console.log('Removing id: ' + id)
        commit('removeCategoryBeverage',id)
    },
    updateDrinkCategories({ commit }, data) {
        console.log('Updating for id: ' +  data.id + ' with new index: ' + data.index)
        commit('updateDrinkCategories', data)
    },
    editDrink({ commit }, data) {
        console.log('Edited for id: ' + data.menu.id)
        console.log('Edited fields: ' + data.editedMenu.name + ' price: ' + data.editedMenu.price + ' category: ' + data.editedMenu.category + ' desc: ' + data.editedMenu.desc);
        commit('editDrink', data.editedMenu)
    }
}

const mutations = {
    //remove drink beverage (front-end only not atcual data) because no database yet :(
    removeBeverage: (state,id) => {
        state.drinks.splice(state.drinks.findIndex(drink => drink.id == id ),1)
    },
    removeCategoryBeverage: (state,id) => {
        state.categories.splice(state.categories.findIndex(category => category.id == id ),1)
    },
    updateDrinkCategories: (state, data) => {
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
    },
    editDrink: (state, data) => {
        state.drinks = state.drinks.map(drink => {
            if (drink.id == data.id) {
                return data
            } else {
                return drink
            }
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}