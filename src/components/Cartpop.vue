<template>
    <div class="cartpop" v-if="show" @blur="show=false">
        <div class="cartpop__content">
        <ul class="cartpop__orders" v-if="orders.length">
            <div class="cartpop__menu-list">
            <li v-for="order in orders" :key="order.id" class="cartpop__order-menu">
                <div class="cartpop__image-container">
                <img :src="require('../assets/food/'+order.image+'.jpg')" class="cartpop__image"/>
                </div>
                <div class="cartpop__order-details">
                <span class="cartpop__menu-name">{{order.name}}</span>
                <span class="cartpop__menu-quantity">x{{order.quantity}}</span>
                </div>
            </li>
            </div>
            <router-link class="cartpop__placeorder primary-button" to ="/order" @click.native="show = false; dim = false">
            Place order
            </router-link>
        </ul>
        <div class="cartpop__empty" v-else>
            Your order is empty
        </div>
        <router-link class="cartpop__menu route-menu" to="/track" @click.native="show = false; dim = false; $emit('change-route')">
            <font-awesome-icon icon="tasks" class="cartpop__icon" />
            <span>Track</span>
        </router-link>
        <router-link class="cartpop__menu route-menu" to="/account" @click.native="show = false; dim = false; $emit('change-route')">
            <font-awesome-icon icon="user-circle" class="cartpop__icon" />
            <span>Sign in</span>
        </router-link>
        </div>
  </div>
</template>

<script>
export default {
    data: function(){
        return{
            dim: false,
            orders: [
                {id: 1, name:'Aglio e Olio', quantity:'1', price: '79000', image:'food1'},
                {id: 2, name:'Ravioli', quantity:'1', price: '79000',image:'food2'},
                {id: 3, name:'Sparkling Water',  quantity:'1', price: '44000',image:'food3'},
                {id: 4, name:'Mineral Water',  quantity:'1', price: '12000',image:'food3'},
                {id: 5, name:'Aglio e Olio', quantity:'1', price: '79000', image:'food1'},
                {id: 6, name:'Ravioli', quantity:'1', price: '79000',image:'food2'},
                {id: 7, name:'Sparkling Water',  quantity:'1', price: '44000',image:'food3'},
                {id: 8, name:'Mineral Water',  quantity:'1', price: '12000',image:'food3'},
                {id: 9, name:'Aglio e Olio', quantity:'1', price: '79000', image:'food1'},
                {id: 10, name:'Ravioli', quantity:'1', price: '79000',image:'food2'},
                {id: 11, name:'Sparkling Water',  quantity:'1', price: '44000',image:'food3'},
                {id: 12, name:'Mineral Water',  quantity:'1', price: '12000',image:'food3'}
            ],
        }
    },
    props:{
        show: Boolean
    }
}
</script>

<style lang="scss" scoped>
.cartpop{
  display: block;
  position: fixed;
  top: 4.0rem;
  flex-direction: column;
  background: #fff;
  width: 100vw;
  z-index: 98;
  padding: 0em 1em 0.6em 1em;

  &::before{
    content: '';
    display: block;
    position: absolute;
    right: .85rem;
    top: 0;
    width: 0; 
    height: 0; 
    margin-top: -10px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
  }

  &__content{
    display: flex;
    flex-direction: column;
  }
  
  &__icon{
    margin-right: 1rem;
  }

  &__menu{
    padding: .8em 0.1em;
  }

  &__menu-list {
    overflow-y: scroll;
    max-height: 50vh;

    &::-webkit-scrollbar {
      width: 7px; 
      height: 0px;
    }

    &::-webkit-scrollbar-track {
      margin: 0;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(0,0,0,0.0);
      border-radius: 10px;
      box-shadow: rgba(255,255,255,0.3) 0 0 0 1px;
    }
    &:hover::-webkit-scrollbar-thumb {
      background: rgba(0,0,0,0.45)
    }
    &::-webkit-scrollbar-thumb:hover {
      background: rgba(0,0,0,0.55)
    }
  }

  &__orders{
    display: flex;
    flex-direction: column;
    padding: .8em 0;
    margin: 0;
  }

  &__order-menu{
    display: flex;
    align-items: center;
    list-style-type: none;
    margin-bottom: .8em;
  }

  &__order-details{
    display:flex;
    flex-direction: column;
    margin-left: 1.2em;
  }

  &__empty{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3.5rem 0;
    border-bottom: 1px solid rgba(0,0,0,0.3);
  }

  &__image{
    display:block;
    min-width: 80px;
    max-width: 80px;
    max-height: 80px;
    min-height: 80px;
  }

  &__image-container{
    width:80px;
    height: 80px;
  }

  &__menu-name{
    font-size: 18px;
    font-weight: 600;
    color: $text;
  }

  &__menu-quantity{
    font-size: 14px;
    color: $secondary-text;
  }

  &__menu-more{
    display: flex;
    justify-content: center;
    position: relative;
  }

  &__menu-more-label{
    position: relative;
    background: #fff;
    z-index: 10;
    padding: 0 .8em;
  }

  &__menu-more::before{
    content:'';
    display: block;
    border-top: 1px solid rgba(0,0,0,0.3);
    width: 100%;
    position: absolute;
    height: 1px;
    top: 50%;
    z-index: 3;
  }

  &__placeorder{
    display:flex;
    justify-content: center;
    padding: .5em 1.2em;
    margin-top: 1.2em;
    border-radius: 5px;
  }

  &__placeorder:hover{
    text-decoration: none;
    background: $btn-primary-hover;
  }
}

@media screen and (min-width:780px){
  .cartpop{
    display: flex;
    position: fixed;
    right: 0;
    width: 380px;
    box-shadow: $box-card-shadow;
    border-radius: 8px;
    margin-top: 5px;
    margin-right: 5px;

    &::before{
      right: 2.05em;
    }
  }
}
</style>