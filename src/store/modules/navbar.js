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
                    routeLink: '/foods'
                },
                {
                    name: 'Beverages',
                    routeLink: '/beverages'
                }
            ],
            permission: ['user']
        },
        {
            name: 'All Orders',
            icon: 'list-ul',
            routeLink: '/all-orders',
            child: null,
            permission: ['admin']
        },
        {
            name: 'Menu Edit',
            icon: 'utensils',
            routeLink: null,
            child: [
                {
                    name:'Food',
                    routeLink: '/food-edit'
                },
                {
                    name:'Beverage',
                    routeLink: '/beverage-edit'
                },
                {
                    name:'Category',
                    routeLink: '/category-edit'
                }
            ],
            permission: ['admin']
        },
        {
            name: 'About',
            icon: 'info-circle',
            routeLink: '/about',
            child: null,
            permission: ['user','admin']
        }
    ]
}

const getters = {
    allNav: (state) => state.navLink
}

export default{
    state,
    getters
}