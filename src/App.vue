<template>
  <div class="app">
    <Navbar v-show="$route.path.includes('/account') ? false : true" v-on:tap-cart="disableScroll" v-on:change-route="enableScroll"/>
    <SafetyPrecautions v-show="$route.path.includes('/account') ? false : true" />
    <router-view/>    
    <Footer v-show="$route.path.includes('/account') ? false : true" v-bind:isDarkmode="$route.path === '/'"/>
  </div>
</template>

<script>
import Navbar from './views/Navbar';
import Footer from './views/Footer';
import SafetyPrecautions from './views/SafetyPrecautions'

export default {
  name: 'app',
  data: function(){
    return{
      isCartOpen: false,
      // state: 'auto'
    }
  },
  methods: {
    disableScroll: function() {
      this.isCartOpen = !this.isCartOpen

      if (this.isCartOpen) {
        document.body.className += 'cartpop-open'
      } else {
        document.body.classList.remove('cartpop-open')
      }
      // this.state = this.isCartOpen ? 'hidden' : 'auto'
      // document.body.style.overflow = this.isCartOpen ? 'hidden' : 'auto'
    },
    enableScroll: function () {
      this.isCartOpen = false
      // this.state = 'auto'
      document.body.classList.remove('cartpop-open')
      // document.body.style.overflow = 'auto'
    },
  },
  watch:{
    $route: function(){
      this.isCartOpen = false
      // this.state = 'auto'
      document.body.classList.remove('cartpop-open')
      // document.body.style.overflow = 'auto'
    }
  },
  components: {
    Navbar,
    Footer,
    SafetyPrecautions
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Material+Icons");
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
}

body {
  min-width: $min-width;

}

li:focus{
  outline:none;
}

.app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.img-fluid{
  min-height: 100vh;
  min-width: 75vw;
}

.cartpop-open {
  overflow: hidden;
}
</style>
