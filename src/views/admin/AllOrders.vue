<template>
    <div class="allorders">
        <div class="allorders__card">
            <div class="allorders__title">
                Order List
            </div>
            <div class="allorders__search">
                <div class="custom__input">
                    <span class = "custom__input-row">
                        <input v-model="search" class="field" type="text" required>
                        <span class="placeholder">Search</span>
                        <font-awesome-icon icon="search" class="icon visible" />
                    </span>
                </div>
            </div>
            <b-table sort-by="status" :sort-desc=true no-sort-reset fixed stacked="md" responsive show-empty :filter="search" hover class="allorders__table" :items="orderList" :fields="fields">  
                <template v-slot:cell(actions)="row">
                    <router-link :to="'/all-orders/'+row.item.token">
                        <font-awesome-icon icon="eye"/>
                    </router-link>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data: function(){
        return{
            search: null
        }
    },
    methods:{
        getItems: function(){
            console.log(this.orderList.status)
        }
    },
    computed: {
        ...mapGetters(['orderList','fields'])
    }
}
</script>

<style lang="scss" scoped>
.allorders{
    padding: 5rem 15vw 6rem;
    display: flex;
    justify-content: center;

    &__title{
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 25px;
    }

    &__card{
        padding: 2em 2.7em;
        width: 100%;
        box-shadow: $box-card-shadow;
    }

    &__search{
        margin-bottom: 20px;
    }
    
}

.icon,
.placeholder,
.field{
    font-size: 16px;
}

.field{
    padding-right: 2em;
    // height: 50px;
}

.placeholder{
    top: 1.3em;
    left: 2em;
}

.icon{
    top: 26px;
    right: 1em;
}

@media screen and (max-width:1000px){
    .allorders{
        padding: 4rem 10vw 6rem;
    }
}

@media screen and (max-width:500px){
    .allorders{
        padding: 3rem 5vw 6rem;
    }
}

@media screen and (max-width:400px){
    .allorders{
        padding: 3rem 1rem 4rem;

        &__title{
            font-size: 32px;
            font-weight: 600;
            margin-bottom: .5rem;
        }

        &__card {
            box-shadow: none;
            padding: 0;
        }
    }
}

</style>