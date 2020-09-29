const state = {
    navLink: [
        {
            name: 'Home', 
            icon: 'home',
            routeLink:'/',
            child: null,
            permission: ['user','admin'],
        },
        {
            name: 'Menu',
            icon: 'utensils',
            routeLink: null,
            child: [
                {
                    name: 'Food',
                    routeLink: '/food'
                },
                {
                    name: 'Beverages',
                    routeLink: '/beverage'
                }
            ],
            permission: ['user']
        },
        {
            name: 'All Orders',
            icon: 'info-circle',
            routeLink: '/allorders',
            child: null,
            permission: ['admin']
        },
        {
            name: 'About',
            icon: 'info-circle',
            routeLink: '/about',
            child: null,
            permission: ['user','admin']
        },
    ]
}

const getters = {
    allNav: (state) => state.navLink
}

export default{
    state,
    getters
}