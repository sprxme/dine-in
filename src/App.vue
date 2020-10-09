<template>
  <div class="app">
    <Navbar v-show="$route.path.includes('/account') ? false : true" v-on:tap-cart="disableScroll" v-on:change-route="enableScroll"/>
    <SafetyPrecautions />
    <router-view/>    
    <Footer v-show="$route.path.includes('/account') ? false : true"/>
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
      isCartOpen: false
    }
  },
  methods: {
    disableScroll: function() {
      this.isCartOpen = !this.isCartOpen
      document.documentElement.style.overflow = this.isCartOpen ? 'hidden' : 'auto'
    },
    enableScroll: function () {
      this.isCartOpen = false
      document.documentElement.style.overflow = 'auto'
    }
  },
  watch:{
    $route: function(){
      this.isCartOpen = false
      document.documentElement.style.overflow = 'auto'
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
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
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

</style>
