<template>
    <div class="order">
        <div class="menu__category">
            <div class="menu__title-container">
               <span class="menu__title">Jacob</span>
            </div>
        </div>
        <div class="order">
            <OrderCard/>
        </div>
    </div>
</template>

<script>
import OrderCard from '@/components/OrderCard.vue';
export default {
    components:{
        OrderCard
    },

}
</script>

<style lang="scss" scoped>
@import "@/styles/menu.scss";

.order{
    padding: 5em 10vw;

}
</style>