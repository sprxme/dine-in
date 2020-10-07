<template>
    <div class="orderlist">
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
            this.$router.push('/track/'+token)
        }
    }

}
</script>

<style lang="scss" scoped>
.orderlist{
    padding: 10em 10vw;

    &__button{
        padding: .8em 1.2em;
        border-radius: 8px;
    }
}
</style>