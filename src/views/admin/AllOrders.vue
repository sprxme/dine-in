<template>
    <div class="allorders">
        <div class="allorders__title">
            Order List
        </div>
        <b-table hover striped class="allorders__table" :items="orderList">  
            <template v-slot:cell(actions)>
                
            </template>
        </b-table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['orderList'])
    }
}
</script>

<style lang="scss" scoped>
.allorders{
    padding-top: 10vw;

    &__router{
        display:flex;
        position: absolute;
    }
}
</style>