<template>
    <div class="orderlist">
        <div class="orderlist__title">Orders</div>
        <div class="orderlist__table">
            <div class="orderlist__table__name">
                <div class="table__name_box">Name :</div>
                <input type="text" id="name" placeholder="your name">
            </div>
            <div class="orderlist__table__number">
                <div class="orderlist__table__no">Table No :</div>
                <input type="text" id="number" placeholder="your table number">
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
    padding: 5em 15vw ;

    &__title{
        font-size: 48px;
        font-weight: 600;
    }
    &__button{
        padding: .8em 1.2em;
        border-radius: 8px;
    }

    &__table{
        display: flex;
        align-items: center; //bikin tengah atas bwhnya
        border-top: 1px solid $light-grey;

        &__name ,
        &__number {
            //border: none;
            //outline: none;
            margin-right: 8rem;
        }
        
        // &__date{
        //     padding: 1em;
        // }

        &__no input{
            border: none;
            border-bottom: 1px solid #ddd;
            color: #333;
            font-size: 14px;
            margin-bottom: 15px;
            padding: 0.5em 1em 0.5em 0;
            width: 200px;
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
input{
    min-width: 0;
    width: 90%;
}
</style>