<template>
    <div class="order">
        <div class="order__image-container"><!--  Gambar-->
            <img :src="require('@/assets/food/'+food.image+'.jpg')" class="order__image">
        </div>
        <div class="order__block">
            <div class="order__details">
                <div class="order__details__name">{{food.name}}</div>
                <div class="order__details__price">{{food.price/1000}}k</div>
            </div>
            <div class="order__note">
                <textarea name="input" placeholder=" Add some notes for your order"></textarea>
            </div>
            <div class="order__iconbar">
                <div class="order__quantity" v-show="food.quantity>0">
                    <font-awesome-icon icon="minus" class="order__quantitiy__icon minus" v-on:click="updateQuantity(-1, food)" @mousedown="startRemove(food)" @mouseleave="stop" @mouseup="stop" @touchstart="startRemove(food)" @touchend="stop" @touchcancel="stop"/>
                    <label class="order__quantity__number" >{{food.quantity}}</label>
                    <font-awesome-icon icon="plus" class="order__quantitiy__icon plus" v-on:click="updateQuantity(1, food)" @mousedown="startAdd(food)" @mouseleave="stop" @mouseup="stop" @touchstart="startAdd(food)" @touchend="stop" @touchcancel="stop"/>
                </div>
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
    data: function(){
        return{
           // quantity: 0,
           interval: false
        }
    },
    methods: {
        ...mapActions(['updateCart']),
        updateQuantity(value, order) {
        let food = { ...order }
        food.quantity = undefined

        let qty = this.quantity(food.id)
        qty += value
        if (qty < 0) { return this.stop() }
        this.updateCart({ food: food, quantity: qty })
      },
       startRemove(order) {
        if (!this.interval) {
          this.interval = setInterval(() => this.updateQuantity(-1, order), 200)	
        }
      },
      startAdd(order) {
        if (!this.interval) {
            this.interval = setInterval(() => this.updateQuantity(1, order), 200)	
        }
      },
        quantity(foodId) {
        let qty = 0
        this.allOrders.forEach(order => {
          if (order.id == foodId) {
            qty = order.quantity
          }
        })
        return qty
      }
    },

    computed: {
        ...mapGetters(['allOrders','allFoods'])
    }
}
</script>

<style lang="scss" scoped>
.order{
    display: flex;
    flex: warp;
    margin-bottom: 30px;
    padding-top: 30px;
    border-top: 1px solid $light-grey;

    &__block{
        flex-basis: 100%;
        margin-left: 2em;
        
    }

    &__image{
        max-width: 165px;
        max-height: 165px;
        height: 165px;
        width: 165px;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0px 2px 8px 4px rgba(0,0,0,0.09);
    }

    &__details{
        display: flex;
        flex-basis: 100%;
        max-width: 100%;
        margin-bottom: 0.5rem;
        &__name{
            //padding: 0em 0em 0em 1em;
            font-size: 24px;
            font-weight: 600;
        }
        &__price{
            font-size: 24px;
            font-weight: 600;
            display: flex;
            float: right;
            margin-left: auto;
            text-align: right;
        }
    }
    
    &__note{
        //padding: 1em;
        align-items: center;
        padding: 0.5rem 0;
    }

    &__iconbar{
        color: $btn-primary;
        float: right;
        padding: 0.5rem 0;
    }

    &__quantity{
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid $light-grey;
        padding: .3em 1em;
        border-radius: 10px;
        width: 150px;

        &__number{
            margin: 0;
            padding: 0;
            font-size: 18px;
        }
    }
} 

.minus{
    float: left;
    margin-right: auto;
    cursor: pointer;
}

.plus{
    float: right;
    margin-left: auto;
    cursor: pointer;
}

textarea{
    height: 100%;
    width: 100%;
    resize: none;
    // -webkit-box-sizing: border-box;
    // -moz-box-sizing: border-box;
    // box-sizing: border-box;
    // resize: none;
    // position: relative;
    // margin: 20px 0 0 20px;
    // z-index: 1;
}
</style>