const state = {
    allOrder: [
        {id: 1, name:'Jason Su', table_number:81, token:'22CSD34A', status:'Done'},
        {id: 2, name:'Jacob', table_number:82, token:'732DSAF9', status:'In Progress'},
        {id: 3, name:'Danny', table_number:91, token:'245GHF38', status:'Done'},
        {id: 4, name:'Harry', table_number:93, token:'88KDY98S', status:'In Progress'},
        {id: 5, name:'Victor', table_number:98, token:'42DHR96A', status:'Done'}
    ]
}

const getters = {
    orderList: (state) => state.allOrder
}

export default{
    state,
    getters
}