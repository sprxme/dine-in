<template>
    <div class="details">
        <div class="details__card">
            <div class="details__card__header">
                <font-awesome-icon class="details__icon" icon="arrow-left" v-on:click="back()"/>
                <label class="details__title">Order Details</label>
            </div>
            <div class="details__content">
                <div class="details__token">#{{orderDetail.token}}</div>
                <div class="details__detail">
                    <span class="details__subtitle">Name: </span>
                    <span class="details__detail__content">{{orderDetail.customerName}}</span>
                </div>
                <div class="details__detail">
                    <span class="details__subtitle">Table number: </span>
                    <span class="details__detail__content">{{orderDetail.tableNumber}}</span>
                </div>
                <div class="details__order"> 
                    <label class="details__subtitle">Order Menu:</label>
                    <ul class="details__menu">
                        <li class="details__item" v-for="order in orderDetail.orders" :key="order.item._id">
                            <span class="details__item__name">{{ order.quantity }} {{ order.item.name }}</span>
                            <b-form-radio-group
                                v-model="order.status"
                                :options="status"
                                class="details__item__radio"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios';

export default {
    data: function(){
        return{
            item: '',
            status:[
                {text: 'Received', value: 0},
                {text: 'Cooking', value: 1},
                {text: 'Cooked', value: 2},
                {text: 'Served', value: 3}
            ],
            orderDetail: {}
        }
    },
    async mounted() {
        await axios
            .get('https://sprxme-fullmoon.herokuapp.com/api/orders')
            .then(res => {
                const data = res.data.filter(data => {
                    if (data.token != this.$route.params.token) { return false }

                    // switch (data.status) {
                    //     case 0:
                    //         data.status = 'Preparing'
                    //         break
                    //     case 1:
                    //         data.status = 'Cooking'
                    //         break
                    //     case 2:
                    //         data.status = 'Cooked'
                    //         break
                    //     case 3:
                    //         data.status = 'Served'
                    //         break
                    // } 
                    return data
                })
                this.orderDetail = data[0]
                console.log(this.orderDetail)
            })
    },
    computed: {
        ...mapGetters(['orderList'])
    },
    created(){
        this.item = this.$store.state.AllOrders.allOrder.filter(item => {
            return item.token == this.$route.params.token
        })
    },
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
.details{
    display: flex;
    justify-content: center;
    padding: 8rem 0 6rem 0;

    &__token{
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    &__card{
        margin: 2em 0;
        padding: 2em 2.7em;
        box-shadow: $box-card-shadow;
        width: 75vw;

        &__header{
            display: flex;
            flex-direction: column;
        }
    }

    &__title{
        margin: 0;
        font-size: 28px;
        font-weight: 600;
    }
    
    &__icon{
        cursor: pointer;
        margin-bottom: 20px;
        color: $route-color;
    }

    &__menu{
        list-style-type: none;
    }

    &__item{
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }

    &__subtitle{
        font-weight: 500;
        margin-bottom: 10px;
    }

    &__detail{
        margin-bottom: 10px;
    }
}
</style>