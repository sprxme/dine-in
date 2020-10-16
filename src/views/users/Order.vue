<template>
    <div class="orderlist">
        <div class="orderlist__customer">
            <div class="orderlist__customer__title">Customer Book</div>
            <div class="orderlist__table">
                <span class="orderlist__table__name">
                    <div class="custom__input">
                        <span class = "custom__input-row">
                            <input class="field" type="text" name="name" autofocus required>
                            <span class="placeholder">Enter Name </span>
                        </span>
                    </div>
                </span>
                <div class="orderlist__table__number">
                    <div class="custom__input">
                        <span class = "custom__input-row">
                            <input class="field" type="text" name="TableNo" autofocus required>
                            <span class="placeholder">Table No </span>
                        </span>
                    </div>
                </div>  
            </div>
        </div>
        <div class="orderlist__items">
            <div class="orderlist__title-container">
                <div class="orderlist__title">Order item(s) </div>
                <div class="orderlist__additems" v-on:click="addMore()">Add more</div>
            </div>
           <OrderCard v-for="trackItem in allOrders" :key="trackItem.id" :food="trackItem"/>
        </div>
        <div class="orderlist__summary-container">
            <div class="orderlist__summary">Total </div>
            <div class="orderlist__total">Rp {{ totalPrice(allOrders) / 1000 }}k</div>
        </div>
        <span class="orderlist__button primary-button" v-on:click="generateToken()">
            Confirm 
        </span>
    </div>
</template>

<script>
import OrderCard from '@/components/user/OrderCard.vue';
import { mapGetters } from 'vuex';

export default {
    components:{
        OrderCard
    },
    methods:{
        generateToken(){
            var token = Math.random().toString(36).slice(-8).toUpperCase()
            this.$router.push('/confirm/'+token)
        },
        addMore() {
            this.$router.push('/food')
        },
        totalPrice(orders) {
        const total = orders.reduce((total, order) => {
          return total + (order.price * order.quantity)
        }, 0)
        return total
        }
    },
    computed: {
        ...mapGetters(['allOrders', 'allFoods'])
    }
}

</script>

<style lang="scss" scoped>
.orderlist{
    padding: 3em 25vw ;

    &__customer{
        margin-bottom: 2em;
        
        &__title{
            border-bottom: 1px solid $light-grey;
            font-size: 40px;
            font-weight: 400;
            font-family: 'Montserrat', sans-serif;
            margin-bottom: 0.5rem;
        }
        
    }

    &__title-container{ 
        padding: 0.5rem 0em;
        display: flex;
        align-items: center;
        //border-top: 1px solid $light-grey;
        //flex-basis: 100%;
        //max-width: 100%;
    }

    &__title{
        font-size: 40px;
        font-weight: 400;
        font-family: 'Montserrat', sans-serif;
        
    }

    &__additems{
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #007bff;
        margin-left: auto;
        text-align: center;
        height: 40px;
        border-radius: 0.5em;
        color: #007bff;
        width: 150px;
    }

    &__button{
        padding: .8em 1.2em;
        border-radius: 8px;
    }

    &__table{
        display: flex;
        //align-items: center; //bikin tengah atas bwhnya
        //justify-content: center;
        
        &__name{
            max-width: 50%;
            flex-basis: 50%;
        }
        
        &__number {
            max-width: 50%;
            flex-basis: 50%;
            //border: none;
            //outline: none;
            //justify-content: center;
            //margin-right: 8rem; //geser ke kanan 
        }

        &__name input ,
        &__number input {
            border: none;
            outline: none;
            border-bottom: 4px solid #ddd;
            max-width: 400px;
        }

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

    &__summary-container{
        padding-bottom: 20px;
    }
}

.custom__input-row{
    display:flex; 
}

.custom__input-row input:focus + .placeholder,
.custom__input-row input:valid + .placeholder{
    top: 10px;
    left: 12px;
    font-size: 14px;
    color: $text;

}


.field {
    width: 100%;
    font-size: 18px;
    padding: 1.3em 1.2em 0.5em 0.7em;
    margin: 10px auto;
    display: inline-block;
    background: transparent;
    border: 0px solid rgba(126,126,126,0.1);
    background-clip:padding-box;
    border-radius: 3px;
    box-sizing: border-box;
    transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    color: #525252;
    
    
    &:hover{
        background: #e7e7e7;
      }
      
    &:focus{
        background: transparent;
    }
}

.placeholder{
    pointer-events: none;
    position: absolute;
    top: 30%;
    left: 8%;
    font-weight: 400;
    font-size: 22px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: $secondary-text;

}  

.input{
    min-width: 0;
    width: 90%;
}
</style>