const state = {
    allOrder: [
        {
            id: 1, 
            name:'Jason Su', 
            table_number:81, 
            token:'22CSD34A', 
            status:'Done', 
            menu:[
                {
                    name:'Rice',
                    status:'served'
                },
                {
                    name:'Mineral Water',
                    status:'served'
                }
            ]
        },
        {
            id: 2, 
            name:'Jacob', 
            table_number:82, 
            token:'732DSAF9', 
            status:'In Progress',
            menu:[
                {
                    name:'Pizza',
                    status:'cooked'
                },
                {
                    name:'Pasta',
                    status:'cooking'
                },
                {
                    name:'Coca-cola',
                    status:'served'
                }
            ]
        },
        {
            id: 3, 
            name:'Danny', 
            table_number:91, 
            token:'245GHF38', 
            status:'Done',
            menu:[
                {
                    name:'Sushi',
                    status:'served'
                },
                {
                    name:'Ramen',
                    status:'served'
                },
                {
                    name:'Hot Ocha',
                    status:'served'
                }
            ]
        },
        {
            id: 4, 
            name:'Harry', 
            table_number:93, 
            token:'88KDY98S', 
            status:'In Progress',
            menu:[
                {
                    name:'Sushi',
                    status:'served'
                },
                {
                    name:'Pasta',
                    status:'cooking'
                },
                {
                    name:'Sparkling Water',
                    status:'served'
                }
            ]
        },
        {
            id: 5, 
            name:'Victor', 
            table_number:98, 
            token:'42DHR96A', 
            status:'Done',
            menu:[
                {
                    name:'Chicken Gepuk',
                    status:'served'
                },
                {
                    name:'Rice',
                    status:'served'
                },
                {
                    name:'Thai Tea',
                    status:'served'
                }
            ]
        }
    ],
    fields:[
        {
            key: 'tableNumber'
        },
        {
            key:'customerName'
        },
        {
            key:'token'
        },
        {
            key:'status',
            sortable: true
        },
        {
            key:'actions'
        }
    ]
}

const getters = {
    orderList: (state) => state.allOrder,
    fields: (state) => state.fields,
}

const actions = {

}

const mutations = {

}
 
export default{
    state,
    getters,
    actions,
    mutations
}