<template>
    <div class="details">
        <div class="details__card">
            <div class="details__card__header">
                <font-awesome-icon class="details__icon" icon="arrow-left" v-on:click="back()"/>
                <label class="details__title">Order Details</label>
            </div>
            <div class="details__content">
                <div class="details__token">#{{item[0].token}}</div>
                <div class="details__detail">
                    <span class="details__subtitle">Name: </span>
                    <span class="details__detail__content">{{item[0].name}}</span>
                </div>
                <div class="details__detail">
                    <span class="details__subtitle">Table number: </span>
                    <span class="details__detail__content">{{item[0].table_number}}</span>
                </div>
                <div class="details__order"> 
                    <label class="details__subtitle">Order Menu:</label>
                    <ul class="details__menu">
                        <li class="details__item" v-for="order in item[0].menu" :key="order.name">
                            <span class="details__item__name">{{order.name}}</span>
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
export default {
    data: function(){
        return{
            item: '',
            status:[
                {text: 'Received', value: 'received'},
                {text: 'Cooking', value: 'cooking'},
                {text: 'Cooked', value: 'cooked'},
                {text: 'Served', value: 'served'}
            ]
        }
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