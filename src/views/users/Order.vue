<template>
    <div class="orderlist">
        <div class="orderlist__title">Orders</div>
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
}
</style>