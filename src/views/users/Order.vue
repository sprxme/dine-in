<template>
    <div class="orderlist">
        <OrderCard v-for="index in 5" :key="index"/>
    </div>
</template>

<script>
import OrderCard from '@/components/user/OrderCard.vue';
export default {
    components:{
        OrderCard
    },

}
</script>

<style lang="scss" scoped>
.orderlist{
    padding: 10em 10vw;

}
</style>