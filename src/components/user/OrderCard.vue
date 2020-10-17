<template>
    <div class="order">
        <div class="order__image-container"><!--  Gambar-->
            <img :src="require('@/assets/food/'+food.image+'.jpg')" class="order__image">
        </div>
        <div class="order__block">
            <div class="order__details">
                <div class="order__details__name">{{food.name}}</div>
                <div class="order__details__price">{{food.price * food.quantity / 1000}}k</div>
            </div>
            <div class="order__note">
                <div class="custom__input input__textarea">
                    <span class = "custom__input-row">
                        <textarea class="menu__modal__input custom__textarea" type="text" required v-model="note" placeholder="Notes"/>
                    </span>
                </div>
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
           interval: false,
        }
    },
    methods: {
        ...mapActions(['updateCart', 'updateNote']),
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
        stop() {
            clearInterval(this.interval)
            this.interval = false
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
        ...mapGetters(['allOrders','allFoods']),
        note: {
            get() {
                return this.food.note
            },
            set(value) {
                this.updateNote({ food: this.food, note: value })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.order{
    display: flex;
    margin-top: 30px;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid $light-grey;

    &__block{
        flex-basis: 100%;
        margin-left: 1.5em;
        
    }

    &__image{
        max-width: 165px;
        max-height: 165px;
        height: 165px;
        width: 165px;
        object-fit: cover;
        border-radius: 10px;
        // box-shadow: 1px 1px 10px 2px rgba(0,0,0,0.09);
    }

    &__details{
        display: flex;
        flex-basis: 100%;
        max-width: 100%;
        margin-bottom: 0.5rem;
        &__name{
            //padding: 0em 0em 0em 1em;
            font-size: 22px;
            font-weight: 600;
        }
        &__price{
            font-size: 22px;
            font-weight: 400;
            display: flex;
            float: right;
            margin-left: auto;
            text-align: right;
            padding-left: 1rem;
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
        border: 1px solid $btn-primary;
        padding: .35em 1.2em;
        border-radius: 5px;
        width: 150px;

        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        &__number{
            margin: 0;
            padding: 0;
            font-size: 16px;
        }
    }
} 

.minus{
    float: left;
    margin-right: auto;
    cursor: pointer;
    font-size: 14px;
}

.plus{
    float: right;
    margin-left: auto;
    cursor: pointer;
    font-size: 14px;
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


@media screen and (max-width:600px){
    .order{
        &__image{
            width: 140px;
            height: 140px;
        }

        &__details{
            &__name{
                //padding: 0em 0em 0em 1em;
                font-size: 20px;
            }
            &__price{
                font-size: 20px;
            }
        }
    }
}

@media screen and (max-width:400px){
    .order{
        &__block{
            margin-left: .6em;
            
        }

        &__image{
            width: 100px;
            height: 100px;
        }

        &__details{
            &__name{
                //padding: 0em 0em 0em 1em;
                font-size: 18px;
            }
            &__price{
                font-size: 18px;
            }
        }

        &__quantity{
            &__number{
                margin: 0;
                padding: 0;
                font-size: 13px;
            }
        }

        .plus,
        .minus {
            font-size: 12px;
        }
    }

    textarea {
        font-size: 14px;
    }
}

@media screen and (max-width:350px){
    .order{
 
        &__details{
            &__name{
                //padding: 0em 0em 0em 1em;
                font-size: 15px;
            }
            &__price{
                font-size: 15px;
            }
        }
    }
}
</style>