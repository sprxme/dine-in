<template>
    <div class="allorders">
        <div class="allorders__title">
            Order List
        </div>
        <b-table hover striped class="allorders__table" :items="orderList" :fields="fields">  
            <template v-slot:cell(actions)="row">
                <router-link :to="'/all-orders/'+row.item.token">
                    <font-awesome-icon icon="eye"/>
                </router-link>
            </template>
        </b-table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    methods:{
        getItems: function(item){
            console.log(item)
        }
    },
    computed: {
        ...mapGetters(['orderList','fields'])
    }
}
</script>

<style lang="scss" scoped>
.allorders{
    padding: 10vw;

    &__router{
        display:flex;
        position: absolute;
    }
}
</style>