<template>
    <div class="details">
        <div class="details__card">
            <label class="details__title">Order Details</label>
            <div class="details__content">
                <span class="detail__token">{{item[0].token}}</span>
                <label>Order Menu:</label>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data: function(){
        return{
            item: '',
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
    display: flex;
    justify-content: center;
    padding-top: 5em;

    &__card{
        margin: 2rem 15vw;
        box-shadow: $box-card-shadow;
        width: 75vw;
        padding: .8em 1.2em;
    }

    &__title{
        margin: 0;
        font-size: 28px;
        font-weight: 600;
    }
    
}
</style>