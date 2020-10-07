<template>
    <div class="details">
        <div class="details__card">
            <div class="details__card__header">
                <font-awesome-icon class="details__icon" icon="arrow-left" v-on:click="back()"/>
                <label class="details__title">Order Details</label>
            </div>
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
    },
    methods:{
        back(){
            this.$router.go(-1);
        }
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
        padding: 2em 2.7em;
        box-shadow: $box-card-shadow;
        width: 75vw;

        &__header{
            display: flex;
            flex-direction: column;
        }
    }

    &__title{
        margin: 0;
        font-size: 28px;
        font-weight: 600;
    }
    
    &__icon{
        cursor: pointer;
    }
}
</style>