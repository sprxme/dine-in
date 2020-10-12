<template>
<div class="menu__card">
    <div class="menu__image-container">
        <img :src="require('@/assets/food/'+food.image+'.jpg')" class="menu__image"> 
    </div>
    <div class="menu__details">
        <span class="menu__name">{{food.name}}</span>
        <span class="menu__desc">{{food.desc}}</span>
        <span class="menu__price">{{food.price/1000}}k</span>
    </div>
    <div class="menu__button_cart">
        <div class="menu__tocart primary-button" v-on:click="toggleQuantity=true; updateQuantity(1, food)" v-show="quantity<1">
            <label class="menu__quantity__number">ADD</label>
            <font-awesome-icon icon="plus" class="menu__tocart__icon"/>
        </div>
        <div class="menu__quantity" v-show="quantity>0">
            <font-awesome-icon icon="minus" class="menu__quantity__icon left" v-on:click="updateQuantity(-1, food)" @mousedown="startRemove(food)" @mouseleave="stop" @mouseup="stop" @touchstart="startRemove(food)" @touchend="stop" @touchcancel="stop"/>
            <label class="menu__quantity__number">{{ quantity }}</label>
            <font-awesome-icon icon="plus" class="menu__quantity__icon right" v-on:click="updateQuantity(1, food)" @mousedown="startAdd(food)" @mouseleave="stop" @mouseup="stop" @touchstart="startAdd(food)" @touchend="stop" @touchcancel="stop"/>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    props:{
        food: Object,
    },
    data: function() {
        return {
            interval: false
        }
    },
    methods: {
        ...mapActions(['updateCart']),
        updateQuantity(value, food) {
            let qty = this.quantity
            qty += value
            if (qty < 0) { return this.stop() }
            this.updateCart({ food: food, quantity: qty })
        },
        startAdd(food) {
            if (!this.interval) {
                this.interval = setInterval(() => this.updateQuantity(1, food), 200)	
            }
        },
        startRemove(food) {
            if (!this.interval) {
                this.interval = setInterval(() => this.updateQuantity(-1, food), 200)	
            }
        },
        stop() {
            clearInterval(this.interval)
            this.interval = false
        }
    },
    computed: {
        ...mapGetters(['allOrders']),
        quantity() {
            let qty = 0
            this.allOrders.forEach(order => {
                if (order.id == this.food.id) {
                    qty = order.quantity
                }
            })
            return qty
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/menu.scss';
</style>