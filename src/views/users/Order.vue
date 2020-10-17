<template>
    <div class="orderlist">
        <div class="orderlist__customer">
            <div class="orderlist__customer__title">Customer Book</div>
            <div class="orderlist__table">
                <span class="orderlist__table__name">
                    <div class="custom__input">
                        <span class = "custom__input-row">
                            <input v-model="name" class="field" type="text" name="name" autofocus required>
                            <span class="placeholder">Customer Name </span>
                        </span>
                    </div>
                </span>
                <b-form-select class="orderlist__table__number" v-model="selected" :options="tableNumber">
                    <!-- This slot appears above the options from 'options' prop -->
                    <template v-slot:first>
                        <b-form-select-option :value="null" disabled>-- Table No. --</b-form-select-option>
                    </template>
                </b-form-select>
            </div>
        </div>
        <div class="orderlist__items">
            <div class="orderlist__title-container">
                <div class="orderlist__title">Order item(s) </div>
                <div class="orderlist__additems" v-on:click="addMore()">Add more</div>
            </div>
            <div class="orderlist__unavailable" v-if="allOrders.length <= 0">
                <span class="orderlist__unavailable__title">Looking for your order?</span>
                <span class="orderlist__unavailable__subtitle">Food and beverages you select from the menu will appear here.</span>
            </div>
           <OrderCard v-for="trackItem in allOrders" :key="trackItem.id" :food="trackItem"/>
        </div>
        <div class="orderlist__summary-container" v-if="allOrders.length > 0">
            <div class="orderlist__row-container">
                <div class="orderlist__price-title">Customer Name </div>
                <span class="orderlist__name">{{ customerName }}</span>
            </div>
            <div class="orderlist__row-container table-number">
                <div class="orderlist__price-title">Table Number </div>
                <div class="orderlist__name">{{ selectedTable }}</div>
            </div>
            <div class="orderlist__row-container price">
                <div class="orderlist__price-title">Total </div>
                <div class="orderlist__total">Rp {{ totalPrice(allOrders) / 1000 }}k</div>
            </div>

            <div class="orderlist__warning" v-if="alert">{{ generateWarningMessage() }}</div>
            <div class="orderlist__button-container">
                <span class="orderlist__button primary-button unselectable" v-on:click="generateToken()">
                    Place Order 
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import OrderCard from '@/components/user/OrderCard.vue';
import { mapGetters } from 'vuex';

export default {
    data: function() {
        return {
            name: '',
            selected: null,
            alert: false,
            tableNumber: [
                {
                    value: 1,
                    text: 'Table 1'
                },
                {
                    value: 2,
                    text: 'Table 2'
                },
                {
                    value: 3,
                    text: 'Table 3'
                },
                {
                    value: 4,
                    text: 'Table 4'
                }
            ]
        }
    },
    components:{
        OrderCard
    },
    methods:{
        generateToken(){            
            if (this.trimmedName === '' || this.trimmedName === undefined || this.trimmedName === null) {
                this.alert = true
                return
            }
            this.alert = false

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
        },
        generateWarningMessage() {
            let message = ''
            if (this.trimmedName === '' || this.trimmedName === undefined || this.trimmedName === null) {
                message += 'Please enter your name '

                if (this.selected === null || this.selected === undefined) {
                    message += 'and table number '
                }
            } else {
                if (this.selected === null || this.selected === undefined) {
                    message = 'Please enter your table number '
                } else {
                    this.alert = false
                }
            }
            message += 'in the form above'
            return message
        }
    },
    computed: {
        ...mapGetters(['allOrders', 'allFoods']),
        trimmedName: function() {
            return this.name.trim()
        },
        customerName: function() {
            if (this.trimmedName === '' || this.trimmedName === undefined || this.trimmedName === null) {
                return '-'
            } else {
                return this.trimmedName
            }
        },
        selectedTable: function() {
            if (this.selected === null || this.selected === undefined) {
                return '-'
            } else {
                return 'Table ' + this.selected
            }
        }
    }
}

</script>

<style lang="scss" scoped>
.orderlist{
    padding: 3em 25vw 7em;
    overflow-x: hidden;

    &__unavailable {
        display: flex;
        flex-direction: column;
        text-align: center;
        font-weight: 600;
        font-size: 16px;
        margin-bottom: 4rem;
        margin-top: 3rem;
        
        &__title {
            display: inline;
            margin-left: .3rem;
        }

        &__subtitle {
            margin-top: .1rem;
            font-size: 14px;
            font-weight: normal;
            color: $secondary-text;
        }
    }

    &__customer{
        margin-bottom: 3em;
        
        &__title{
            border-bottom: 1px solid $light-grey;
            font-size: 40px;
            font-weight: 400;
            font-family: 'Montserrat', sans-serif;
            margin-bottom: 1rem;
            padding-bottom: .5rem;
        }
        
    }

    &__title-container{ 
        padding: 0.5rem 0em;
        display: flex;
        // align-items: center;
        align-items: flex-end;
        border-bottom: 1px solid $light-grey;
        //border-top: 1px solid $light-grey;
        //flex-basis: 100%;
        //max-width: 100%;
    }

    &__title{
        font-size: 40px;
        font-weight: 400;
        font-family: 'Montserrat', sans-serif;
        padding-right: 2rem;
        
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
        margin-bottom: .3rem;

        &:hover {
            cursor: pointer;
        }
    }

    &__button{
        padding: .6em 2em;
        border-radius: 8px;
        margin-top: 1rem;
    }

    &__table{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        //align-items: center; //bikin tengah atas bwhnya
        //justify-content: center;
        
        &__name{
            flex-grow: 1;
            margin-right: 4rem;
        }
        
        &__number {
            max-width: 152px;
            margin-bottom: .5rem;
            height: 40px;
            font-weight: 500;
            font-size: 16px;
            font-family: 'Montserrat', sans-serif;
            //border: none;
            //outline: none;
            //justify-content: center;
            //margin-right: 8rem; //geser ke kanan 
        }

        &__name input ,
        &__number input {
            border: none;
            outline: none;
            border-bottom: 2px solid #ddd;
            border-radius: 0;
            padding-left: 2px;
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

    &__summary-container {
        padding-top: .8rem;
    }

    &__row-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: .4rem;
    }

    &__price-title {
        font-size: 16px;
    }

    &__total {
        font-weight: 600;
        font-size: 23px;
    }

    &__button-container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    &__warning{
        // color: $btn-destructive;
        min-width: 240px;
        margin-top: 1rem;
        margin-bottom: .3rem;
        // margin: auto;
        padding: 12px 1rem;
        border: 1px solid $input-error;
        background: $secondary-input-error;
        border-radius: 8px;
        // display: block;
    }
}

.table-number {
    border-bottom: 1px solid $light-grey;
    padding-bottom: .8rem;
}

.price {
    margin-top: 1rem;
}

.custom__input-row{
    display:flex; 
}

.custom__input-row input:focus + .placeholder,
.custom__input-row input:valid + .placeholder{
    top: 6px;
    left: 2px;
    font-size: 14px;
    color: $text;

}


.field {
    width: 100%;
    font-size: 18px;
    padding: 1.3em 1.2em 0.4em 0.7em;
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
        background: none;
      }
      
    &:focus{
        background: transparent;
    }
}

.placeholder{
    pointer-events: none;
    position: absolute;
    top: 32%;
    left: 2px;
    font-weight: 400;
    font-size: 22px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: $secondary-text;
}  

.input{
    min-width: 0;
    width: 90%;
}


@media screen and (max-width:1200px){
    .orderlist{
        padding: 3em 20vw 7em;
    }

}

@media screen and (max-width:800px){
    .orderlist{
        padding: 3em 10vw 7em;
    }
}

@media screen and (max-width:500px){
    .orderlist{
        padding: 3em 10vw 7em;

        &__customer{
            margin-bottom: 2em;
            
            &__title{
                text-align: center;
                font-size: 30px;
            }
            
        }

        &__title {
            font-size: 30px;
        }

        &__table{
            flex-direction: column;

            &__name{
                margin-right: 0rem;
                width: 100%;
                margin-bottom: 1.3rem;
            }
            
            &__number {
                max-width: none;
                margin-bottom: .5rem;
                height: 40px;
                font-weight: 500;
                font-size: 16px;
                font-family: 'Montserrat', sans-serif;
                //border: none;
                //outline: none;
                //justify-content: center;
                //margin-right: 8rem; //geser ke kanan 
            }
        }

        &__price-title {
            font-size: 14px;
        }

        &__total {
            font-size: 20px;
        }

        &__name {
            padding-left: 1rem;
            font-size: 14px;
            white-space: pre-wrap;
        }
    }

    .placeholder{
        top: 40%;
        font-size: 18px;
    }  
}



@media screen and (max-width:400px){
    .orderlist{
        padding: 3em 1rem 7em;

        &__warning {
            font-size: 14px;
        }
    }
}
</style>