<template>
    <div class="orderlist">
        <div class="orderlist__title">Orders</div>
        <div class="orderlist__table">
            <div class="orderlist__table__name">
                <div class="tabele__name_box">Name</div>
                <input type="text" id="name">
            </div>
            <div class="orderlist__table__number">
                <div class="orderlist__table__no">Table No.</div>
                <input type="text" id="number">
            </div>
        </div>
        <OrderCard v-for="index in 5" :key="index"/>
        <span class="orderlist__button primary-button" v-on:click="generateToken()">
            Confirm 
        </span>
    </div>
</template>

<script>
import OrderCard from '@/components/user/OrderCard.vue';
export default {
    components:{
        OrderCard
    },
    methods:{
        generateToken(){
            var token = Math.random().toString(36).slice(-8).toUpperCase()
            this.$router.push('/confirm/'+token)
        }
    }

}
</script>

<style lang="scss" scoped>
.orderlist{
    padding: 5em 10vw ;

    &__title{
        font-size: 36px;
        font-weight: 600;
    }
    &__button{
        padding: .8em 1.2em;
        border-radius: 8px;
    }

    &__table{
        display: flex;
        margin: 0 auto;
        border-top: 1px solid $light-grey;

        &__name{
            padding: 1em 1em 1em 1em;
        }
        &__number{
            padding: 1em 1em 1em 1em;
        }
    }

    &__image{
        height: 50px;
        width: 50px;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0px 2px 8px 4px rgba(0,0,0,0.09);
    }
}
</style>