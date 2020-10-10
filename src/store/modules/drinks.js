const state = {
    drinks: [
        {id: 1, name: 'Liquid Crack', price:'150000', image:'liquidcrack', category: 'Cocktails', desc:'Something shimmery, addictive and cheeky. Filled with all things magick to get your MOJO going again.'},
        {id: 2, name: 'Garden Margarita', price:'150000', image:'gardenmargarita', category: 'Cocktails', desc:'Butter corn and undoubtly twisted with Tequile, Cointreau, palm sugar and olive bitters and corn!'},
        {id: 3, name: 'The Secret Mermaid', price:'150000', image:'thesecretmermaid', category: 'Cocktails', desc:'A variation of Daiquiri, Spice & Everything Nice. Unconventionally uses Bon Cabe and creamy coconut, mango.'},
        {id: 4, name: 'Coca Me Maybe', price:'140000', image:'colamemaybe', category: 'Cocktails', desc:'Lemongrass infused gin, lychee, earl grey tea, homemade lemon ginger honey.'},
        {id: 5, name: 'Crazy Rich Sesame', price:'140000', image:'crazyrichsesame', category: 'Cocktails', desc:'Gin, whiskey cinnamon liqueur, ginger syrup, lemon, black sesame paste, egg white.'},
        {id: 6, name: 'Special Christmas Cocktail', price:'150000', image:'specialchristmascocktail', category: 'Cocktails', desc:''},
        {id: 7, name: 'Ni Hao Shimeji', price:'140000', image:'nihaoshimeji', category: 'Cocktails', desc:'Shimeji infused vodka, campari, vermouth, celery bitters, passion fruit syrup, lamb and rosemary gravy.'},
        {id: 8, name: 'XXL Joy Punch!', price:'135000', image:'xxljoypunch', category: 'Cocktails', desc:'Rum, apple, strawberry, soursop juice, apple syrup, topped with a bottle of soju.'},
        {id: 9, name: 'Adult Milo Dinosaur', price:'135000', image:'adultmilodinosaur', category: 'Cocktails', desc:'Vodka, milo, fresh milk, hershey’s syrup, pure cocoa.'},

        {id: 10, name: 'Virgin Cucumber Gimlet', price:'60000', image:'virgincucumber', category: 'Mocktails', desc:'Fresh Soda infused with syrup, cucumber, and lime.'},
        {id: 11, name: 'Mountain Mojito', price:'70000', image:'mojito', category: 'Mocktails', desc:'Soda water mixed with lime juice, agave, blood orange, and mint leaves.'},
        {id: 12, name: 'Lavender Lemonade', price:'65000', image:'lavenderlemon', category: 'Mocktails', desc:'Fresh lemon juice infused with honey and dried lavender.'},
        {id: 13, name: 'Blueberry Lavender Mojito', price:'60000', image:'blueberrylavender', category: 'Mocktails', desc:'Soda water infused with blueberry lavender syrup, and lime water.'},
        {id: 14, name: 'Wildcat Cooler', price:'65000', image:'wildcatcooler', category: 'Mocktails', desc:'Blueberries, juiced lemon, and sugar mixed with fresh water.'},
        {id: 15, name: 'Spicy Watermelon Mint Agua Fresca', price:'90000', image:'watermelonagua', category: 'Mocktails', desc:'Watermelon on top  of water infused with granulated sugar, lime juice, jalapeno, and mint leaves.'},
    ],
    categories: [
        {id: 1, name: 'Cocktails', desc: 'Our cocktail menu is seasonal. It changes periodically, depending on the best seasonal ingredients that are available on the market.'},
        {id: 2, name: 'Mocktails', desc: '\'Mocktails\' is an abbreviation for \'mock cocktails\'. Mocktails come in many varieties: frozen, hot, fizzy, non-fizzy and cream-based recipes. It represents cocktails without the contain of alcohol.'}
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