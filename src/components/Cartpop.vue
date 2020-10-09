<template>
    <div class="cartpop" v-if="show" @blur="show=false">
        <div class="cartpop__content">
        <ul class="cartpop__orders" v-if="allOrders.length">
            <div class="cartpop__menu-list">
            <li v-for="order in allOrders" :key="order.id" class="cartpop__order-menu">
                <div class="cartpop__image-container">
                  <img :src="require('../assets/food/'+order.image+'.jpg')" class="cartpop__image"/>
                </div>
                <div class="cartpop__order-details">
                  <span class="cartpop__menu-name">{{order.name}}</span>
                  <div class="menu__quantity" v-show="order.quantity>0">
                      <font-awesome-icon icon="minus" class="menu__quantity__icon left" v-on:click="updateQuantity(-1, order)"/>
                      <label class="menu__quantity__number">{{ order.quantity }}</label>
                      <font-awesome-icon icon="plus" class="menu__quantity__icon right" v-on:click="updateQuantity(1, order)"/>
                  </div>
                  <!-- <span class="cartpop__menu-quantity">x{{order.quantity}}</span> -->
                </div>
                <div class="cartpop__menu-price" v-bind:class="{ 'cartpop__menu-price-scroll': allOrders.length > 4 }">
                    {{ order.price * order.quantity / 1000 }}k
                </div>
            </li>
            </div>
            <div class="cartpop__price-container">
              <span class="cartpop__price-title">Total</span> 
              <span class="cartpop__price-total">Rp {{ totalPrice(allOrders) / 1000 }}k</span>
            </div>
            <router-link class="cartpop__placeorder primary-button" to ="/order" @click.native="show = false; dim = false; $emit('change-route')">
              Place order
            </router-link>
        </ul>
        <div class="cartpop__empty" v-else>
            <p class="cartpop__empty__title">Looking for your order?</p> 
            <p class="cartpop__empty__subtitle">Food and beverages you select from the menu will appear here.</p> 
        </div>
        <router-link v-if="!checkAuth" class="cartpop__menu route-menu" to="/track" @click.native="dim = false; $emit('change-route')">
            <font-awesome-icon icon="tasks" class="cartpop__icon" />
            <span>Track</span>
        </router-link>
        <router-link v-if="!checkAuth" class="cartpop__menu route-menu" to="/account" @click.native="dim = false; $emit('change-route')">
            <font-awesome-icon icon="user-circle" class="cartpop__icon" />
            <span>Sign in</span>
        </router-link>
        <router-link v-if="checkAuth" class="cartpop__menu route-menu" to="/profile" @click.native="dim = false; $emit('change-route')">
            <font-awesome-icon icon="user-circle" class="cartpop__icon" />
            <span>Profile</span>
        </router-link>
        <span v-if="checkAuth" class="cartpop__menu route-menu" v-b-modal.modal-sign-out @click.native="dim = false; $emit('change-route')">
            <font-awesome-icon icon="sign-out-alt" class="cartpop__icon" />
            <span>Sign out</span>
        </span>
        </div>
        <b-modal id="modal-sign-out" title="Sign out of your account?" hide-footer class="cartpop__modal">
          <label class="cartpop__modal__label">Signing out will not delete any data. You can still sign in with this account.</label>
          <div class="cartpop__modal__buttons">
            <span class="cartpop__modal__button cancel"  @click="$bvModal.hide('modal-sign-out')">Cancel</span>
            <span class="cartpop__modal__button destructive-button" v-on:click="signOut()">Sign out</span>
          </div>
        </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data: function(){
        return{
            dim: false,
        }
    },
    props:{
        show: Boolean
    },
    methods: {
      ...mapActions(['updateCart']),
      signOut() {
        this.$store.commit("setAuth", false);
        this.$router.replace('/');
        this.$router.go();
      },
      updateQuantity(value, order) {
        let food = { ...order }
        food.quantity = undefined

        let qty = order.quantity
        qty += value
        this.updateCart({ food: food, quantity: qty })
      },
      totalPrice(orders) {
        const total = orders.reduce((total, order) => {
          return total + (order.price * order.quantity)
        }, 0)
        return total
      }
    },
    computed: {
      ...mapGetters(['allOrders', 'checkAuth'])
    }
}
</script>

<style lang="scss" scoped>
.menu {
  &__quantity{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-weight: 700;
    cursor: default;
    padding: .4em .9em;
    margin: 0;
    width: 80%;
    max-width: 150px;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.09);

    &__number{
        margin: 0;
        font-size: 13px;
    }

    &__icon{
        font-size: 11px;
        color: $btn-primary;
        cursor: pointer;
    }
  }
}

.left{
  float: left;
  margin-right: auto;
}

.right{
  float: right;
  margin-left: auto;
}

.cartpop{
  display: block;
  position: fixed;
  top: 4.0rem;
  flex-direction: column;
  background: #fff;
  width: 100vw;
  z-index: 98;
  padding: 0em 1em 0.6em 1em;
  min-width: $min-width;

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

  &__modal{

    &__label{
      font-size: .95rem;
      color: $subtitle-text;
      margin-bottom: 1.5rem;
    }

    &__buttons{
      display: flex;
      justify-content: flex-end;

      .cancel{
        color: $text;
        font-weight: 500;

        &:hover{
          cursor: pointer;
        }
      }
    }

    &__button{
      padding: .3em 1.5em;
      border-radius: 3px;
      &:not(:first-child){
        margin-left: 10px;
      }
    }
  }
  
  &__content{
    display: flex;
    flex-direction: column;
  }
  
  &__icon{
    margin-right: 1rem;
  }

  &__menu{
    padding: .6em 0.1em;

    &:hover{
      text-decoration: underline;
    }

    &:focus{
      outline: none;
    }
  }

  &__menu-list {
    overflow-y: scroll;
    max-height: 40vh;

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

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  &__order-details{
    display:flex;
    align-self: stretch;
    width: 50%;
    flex-direction: column;
    margin-left: 1.2em;
    margin-bottom: .5em;
    margin-top: .1em;
  }

  &__empty{
    // // display: flex;
    // justify-content: center;
    // align-items: center;
    text-align: center;
    padding: 4rem 1rem 2.4rem;
    border-bottom: 1px solid rgba(0,0,0,0.3);
    margin-bottom: .2rem;

    &__title {
      color: $text;
      font-weight: 700;
      margin-bottom: 0;
    }

    &__subtitle {
      color: $secondary-text;
      font-size: .9em;
    }

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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
    flex-grow: 1;
    font-size: 18px;
    font-weight: 600;
    color: $text;
  }

  &__menu-price {
    margin-top: auto;
    margin-left: auto;
    // margin-right: .6em;
    margin-bottom: .8em;
    font-size: 16px;
    color: $text;
  }

  &__menu-price-scroll {
    margin-right: .6em;
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
    margin-top: 1em;
    border-radius: 5px;
  }

  &__placeorder:hover{
    text-decoration: none;
    background: $btn-primary-hover;
  }

  &__price-container {
    border-top: 1px solid rgba(0,0,0,0.3);
    margin-top: .5rem;
    padding-top: .7rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__price-total {
    font-size: 18px;
    font-weight: 600;
    padding-right: .1rem;
  }
}

@media screen and (min-width:780px){
  .cartpop{
    // display: flex;
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

@media screen and (max-width:400px) {
  .cartpop {
    &__menu-name{
      // flex-grow: 1;
      font-size: 16px;
      // font-weight: 600;
      // color: $text;
    }
  }

  .menu {
    &__quantity{

      padding: .4em 1em;
      width: 70%;
      
      &__number{
          margin: 0;
          font-size: 13px;
      }

      &__icon{
          font-size: 11px;
      }
    }
  }
}
</style>