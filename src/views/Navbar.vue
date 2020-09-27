<template>
<div>
  <div class="sidebar">
    <font-awesome-icon icon="bars" class="sidebar__icon" v-b-toggle.sidebar-1/>
    <div class="sidebar__end">
      <div class="sidebar__end-shop">
        <font-awesome-icon icon="shopping-bag" class="sidebar__icon icon-primary" v-on:click="show = !show; dim = !dim; $emit('tap-cart')"/>
        <div class="sidebar__orders-badge" v-if="allOrders.length">
          <span class="sidebar__orders-badge-text">{{allOrders.length}}</span>
        </div>
      </div>
    </div>
  </div>
  <Cartpop :show="show" v-on:change-route="enableScrollToParent"/>
  <b-sidebar 
    id="sidebar-1" 
    shadow
    backdrop
    no-header
    v-slot:default="{ hide }"
  >
    <div class="sidebar__routes">
      <div class="sidebar__titlebar">
        <font-awesome-icon icon="bars" class="sidebar__icon icon-primary--dark" @click="hide"/>
        <h2 class="sidebar__title">Supreme</h2>
      </div>
      <router-link class="sidebar__router" to="/" @click.native="show = false; dim = false; $emit('change-route')">
        <font-awesome-icon icon="home" class="sidebar__icon icon-secondary" />
        Home
      </router-link>
      <span class="sidebar__collapse" v-b-toggle.collapse-menu v-on:click="toggleArrow()"> 
        <font-awesome-icon icon="utensils" class="sidebar__collapse__icon icon-secondary" />
        <label class= "sidebar__router menu">Menu</label>
        <font-awesome-icon id="arrow" icon="angle-down" class="sidebar__iconright" />
      </span>
      <b-collapse id="collapse-menu">
        <router-link class="sidebar__router submenu" to="/food" @click.native="show = false; dim = false; $emit('change-route')">Food</router-link>
        <router-link class="sidebar__router submenu" to="/beverage" @click.native="show = false; dim = false; $emit('change-route')">Beverage</router-link>
      </b-collapse>
      <router-link class="sidebar__router" to="/about" @click.native="show = false; dim = false; $emit('change-route')">
        <font-awesome-icon icon="info-circle" class="sidebar__icon icon-secondary" />
        About
      </router-link>
    </div>
  </b-sidebar>
  <transition name="fade">
    <div class="screen--dim" v-if="dim" v-on:click="show =false; dim=false; $emit('tap-cart')"/>
  </transition>
</div>
</template>

<script>
import Cartpop from '@/components/Cartpop';
import { mapGetters } from 'vuex';

export default {
  name: 'navbar',
  data: function(){
    return{
      show: false,
      dim: false
    }
  },
  methods:{
    toggleArrow: function(){
      document.getElementById("arrow").classList.toggle("flip");
    },
    enableScrollToParent: function(){
      this.show = false;
      this.dim = false;
      this.$emit('change-route');
    }
  },
  components:{
    Cartpop
  },
  computed:{
    ...mapGetters(['allOrders'])
  }
}
</script>

<style lang="scss" scoped>
.sidebar{
  display: flex;
  padding: .8em 1em;
  background: $primary-bg;
  color: $primary-color;
  height: 64px;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 98;

  &__routes{
    display: flex;
    flex-direction: column;
  }

  &__icon{
    background: transparent;
    border-style: none;
    font-size: 18px;
    cursor: pointer;
    margin-right: 1.5rem;
  }

  &__iconright{
    justify-content: flex-end;
    margin-left: auto;
  }

  &__collapse__icon{
    margin-left: 2.05rem;
  }

  &__icon:focus,
  &__iconright:focus,
  &__collapse:focus{
    outline:none;
    box-shadow: none;
  }

  &__titlebar{
    display: flex;
    padding: .8rem 2rem;
    height: 64px;

    border-bottom: 1px solid rgba(0,0,0,0.1);
    .sidebar__icon{
      height: auto;
    }
  }

  &__title{
    font-size: 18px;
    padding: 0;
    margin: 0;
    padding-left: 0.295rem;
    margin-block-start: 0.45em;
    margin-block-end: 0.45em;
    color: $sidebar-color-title;
  }

  &__router{
    padding: .8rem 1.9rem;
    font-size: 18px;
    color: $sidebar-color;

  }

  &__router:hover,
  &__collapse:hover{
    text-decoration: none;
    color: $sidebar-color-hover;
    background: $sidebar-bg-hover;
  }

  &__end{
    justify-content: flex-end;
    margin-left: auto;

    .sidebar__icon{
      margin: 0;
    }
  }

  &__end-shop{
    position: relative;
  }

  &__collapse{
    display: flex;
    align-items: center;
    padding-right: 2rem;
  }

  &__orders-badge{
    position: absolute;
    background: $notif;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    font-size: 11px;
    bottom:-4px;
    left: 7px;
    pointer-events: none;
  }

  &__orders-badge-text{
    position: absolute;
    bottom: -0.5px;
    width: 100%;
    text-align: center;
    pointer-events: none;
  }
}

.menu{
  margin: 0;
  padding-left: 0.5rem;
}

.menu:hover{
  background: transparent;
  cursor: pointer;
}

.submenu{
  display:flex;
  padding-left: 4.8rem;
}

.icon-secondary{
  margin-right: 1.4rem;
}

.screen--dim{
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  z-index: 97;
}

.flip{
  transform: scaleY(-1);
}

.fade-enter-active,
.fade-leave-active{
  transition: all 0.2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-enter,
.fade-leave-to{
  opacity: 0;
}

@media screen and (min-width:780px){
  .sidebar{
    padding: .8em 2.5em;
  }
}

</style>