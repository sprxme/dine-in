<template>
<div class="menu__card">
    <div class="menu__image-container">
        <img :src="require('../assets/food/'+food.image+'.jpg')" class="menu__image"> 
    </div>
    <div class="menu__details">
        <span class="menu__name">{{food.name}}</span>
        <span class="menu__desc">{{food.desc}}</span>
        <span class="menu__price">{{food.price/1000}}k</span>
    </div>
    <div class="menu__tocart primary-button" v-on:click="toggleQuantity=true; quantity=quantity+1" v-show="quantity<1">
        <label class="menu__quantity__number">Add</label>
        <font-awesome-icon icon="plus" class="menu__tocart__icon"/>
    </div>
    <div class="menu__quantity" v-show="quantity>0">
        <font-awesome-icon icon="minus" class="menu__quantity__icon left" v-on:click="quantity=quantity-1"/>
        <label class="menu__quantity__number">{{quantity}}</label>
        <font-awesome-icon icon="plus" class="menu__quantity__icon right" v-on:click="quantity=quantity+1"/>
    </div>
</div>
</template>

<script>
export default {
    data: function(){
        return{
            quantity: 0,
        }
    },
    props:{
        food: Object
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/menu.scss';
</style>