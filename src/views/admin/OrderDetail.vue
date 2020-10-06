<template>
    <div class="details">
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data: function(){
        return{
            item: [],
        }
    },
    computed: {
        ...mapGetters(['orderList'])
    },
    created(){
        this.item = this.$store.state.AllOrders.allOrder.filter(item => {
            return item.token == this.$route.params.token
        })
    }
}
</script>

<style lang="scss" scoped>
.details{
    padding-top: 5em;
}
</style>