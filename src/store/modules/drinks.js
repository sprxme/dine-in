const state = {
    drinks: [
        {id: 'c1', name: 'Liquid Crack', price:'150000', image:'liquidcrack', category: 'Cocktails', desc:'Something shimmery, addictive and cheeky. Filled with all things magick to get your MOJO going again.'},
        {id: 'c2', name: 'White Russian', price:'120000', image:'whiterussian', category: 'Cocktails', desc:'Vodka, coffee liqueur, fresh milk, heavy cream.'},
        {id: 'c3', name: 'Paloma Milk Punch', price:'140000', image:'palomamilkpunch', category: 'Cocktails', desc:'Tequila, liqueur, lime, grapefruit juice, coconut milk, topped with soda.'},
        {id: 'c4', name: 'Ni Hao Shimeji', price:'140000', image:'nihaoshimeji', category: 'Cocktails', desc:'Shimeji infused vodka, campari, vermouth, celery bitters, passion fruit syrup, lamb and rosemary gravy.'},
        {id: 'c5', name: 'Special Christmas Cocktail', price:'150000', image:'specialchristmascocktail', category: 'Cocktails', desc:''},
        {id: 'c6', name: 'XXL Joy Punch!', price:'135000', image:'xxljoypunch', category: 'Cocktails', desc:'Rum, apple, strawberry, soursop juice, apple syrup, topped with a bottle of soju.'},
        {id: 'c7', name: 'Adult Milo Dinosaur', price:'135000', image:'adultmilodinosaur', category: 'Cocktails', desc:'Vodka, milo, fresh milk, hershey’s syrup, pure cocoa.'},
        {id: 'c8', name: 'Tequila Sunrise', price:'110000', image:'tequilasunrise', category: 'Cocktails', desc:'Tequila, orang juice, grenadine syrup.'},
        {id: 'c9', name: 'Garden Margarita', price:'150000', image:'gardenmargarita', category: 'Cocktails', desc:'Butter corn and undoubtly twisted with Tequile, Cointreau, palm sugar and olive bitters and corn!'},
        {id: 'c10', name: 'The Secret Mermaid', price:'150000', image:'thesecretmermaid', category: 'Cocktails', desc:'A variation of Daiquiri, Spice & Everything Nice. Unconventionally uses Bon Cabe and creamy coconut, mango.'},
        {id: 'c11', name: 'Coca Me Maybe', price:'140000', image:'colamemaybe', category: 'Cocktails', desc:'Lemongrass infused gin, lychee, earl grey tea, homemade lemon ginger honey.'},
        {id: 'c12', name: 'Crazy Rich Sesame', price:'140000', image:'crazyrichsesame', category: 'Cocktails', desc:'Gin, whiskey cinnamon liqueur, ginger syrup, lemon, black sesame paste, egg white.'},
        {id: 'c13', name: 'Candy Corn Martini with Pop Rocks Rim', price:'120000', image:'candycornmartini', category: 'Cocktails', desc:'Vodka, martini, vermouth, candy, with pop rocks rim.'},

        {id: 'm1', name: 'Sum Ting Wong?', price:'90000', image:'sumtingwong', category: 'Mocktails', desc:'Kyuri, lemon, blueberry syrup, topped with soda.'},
        {id: 'm2', name: 'Virgin Cucumber Gimlet', price:'60000', image:'virgincucumber', category: 'Mocktails', desc:'Fresh Soda infused with syrup, cucumber, and lime.'},
        {id: 'm3', name: 'Mountain Mojito', price:'70000', image:'mojito', category: 'Mocktails', desc:'Soda water mixed with lime juice, agave, blood orange, and mint leaves.'},
        {id: 'm4', name: 'Lavender Lemonade', price:'65000', image:'lavenderlemon', category: 'Mocktails', desc:'Fresh lemon juice infused with honey and dried lavender.'},
        {id: 'm5', name: 'Blueberry Lavender Mojito', price:'60000', image:'blueberrylavender', category: 'Mocktails', desc:'Soda water infused with blueberry lavender syrup, and lime water.'},
        {id: 'm6', name: 'Wildcat Cooler', price:'65000', image:'wildcatcooler', category: 'Mocktails', desc:'Blueberries, juiced lemon, and sugar mixed with fresh water.'},
        {id: 'm7', name: 'Spicy Watermelon Mint Agua Fresca', price:'90000', image:'watermelonagua', category: 'Mocktails', desc:'Watermelon on top  of water infused with granulated sugar, lime juice, jalapeno, and mint leaves.'},
        {id: 'm8', name: 'Fine China', price:'50000', image:'finechina', category: 'Mocktails', desc:'Kiwi, lemon, orang juice, ginger syrup, kiwi syrup.'},

        {id: 't1', name: 'Ice Lemon Tea', price:'35000', image:'lemontea', category: 'Tea', desc:'HK tea leaves infused with fresh lemon juice, served on chilled ice.'},
        {id: 't2', name: 'Ice Tea', price:'15000', image:'esteh', category: 'Tea', desc:'Healthy and natural tea with chill ice.'},
        {id: 't3', name: 'Hot Tea', price:'18000', image:'tehpanas', category: 'Tea', desc:'Hot tea made with natural and handpicked quality tea leaves.'},
        {id: 't4', name: 'Hot Black Tea', price:'24000', image:'blacktea', category: 'Tea', desc:'Quality black tea leaves native to england made hot.'},
        {id: 't5', name: 'Ice Milk Tea With Bubbles', price:'30000', image:'bobatea', category: 'Tea', desc:'Tea and milk combine with bubble topping made cold.'},
    ],
    categories: [
        {id: 1, index: 0, name: 'Cocktails', desc: 'Our cocktail menu is seasonal. It changes periodically, depending on the best seasonal ingredients that are available on the market.'},
        {id: 2, index: 1, name: 'Mocktails', desc: '\'Mocktails\' is an abbreviation for \'mock cocktails\'. Mocktails come in many varieties: frozen, hot, fizzy, non-fizzy and cream-based recipes. It represents cocktails without the contain of alcohol.'},
        {id: 3, index: 2, name: 'Tea', desc: 'The tea-drinking habits of HK residents derive primarily the Cantonese traditions such as yum cha. This tradition is not only in terms of the tea itself, but also in terms of the underlying social and cultural values.'},
        {id: 4, index: 3, name: 'Specials', desc: ''}
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