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
      <ul class="sidebar__route-container">
        <li v-for="nav in sortNav" :key="nav.name" class="sidebar__router">
          <router-link class="sidebar__route-link" v-if="nav.child == null" :to="nav.routeLink" @click.native="show = false; dim = false; $emit('change-route')">
            <font-awesome-icon :icon="nav.icon" class="sidebar__icon icon-secondary" />
            <label class="sidebar__router__label">{{nav.name}}</label>
          </router-link>
          <span v-else>
            <span class="sidebar__collapse" v-b-toggle.collapse-menu v-on:click="toggleArrow()"> 
              <font-awesome-icon icon="utensils" class="sidebar__collapse__icon icon-secondary" />
              <label class= "menu">{{nav.name}}</label>
              <font-awesome-icon id="arrow" icon="angle-down" class="sidebar__iconright" />
            </span>
            <b-collapse id="collapse-menu">
              <li v-for="subNav of nav.child" :key="subNav.name">
                <router-link class="sidebar__router submenu" :to="subNav.routeLink" @click.native="show = false; dim = false; $emit('change-route')">{{subNav.name}}</router-link>
              </li>
            </b-collapse> 
          </span>
        </li>
      </ul>
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
    ...mapGetters(['allOrders','allNav','checkAuth']),
    sortNav: function(){
      if(this.checkAuth){
        return this.allNav.filter(function(nav){
          return nav.permission.includes('admin') ?  nav : null 
        })
      } else {
        return this.allNav.filter(function(nav){
          return nav.permission.includes('user') ?  nav : null
        })
      }
    }
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
  min-width: $min-width;

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
  
  &__route-link{
    color: $text;

    &:hover{
      text-decoration: none;
    }
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
    list-style: none; 

    &__label{
      margin: 0;
    }

    &:hover{
      text-decoration: none;
      color: $sidebar-color-hover;
      background: $sidebar-bg-hover;
    }

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
    padding-right: 1rem;
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
  padding-left: 0.2rem;
}

.menu:hover{
  background: transparent;
  cursor: pointer;
}

.submenu{
  display:flex;
  padding-left: 4.5rem;
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