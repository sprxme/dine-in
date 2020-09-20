<template>
  <div class="app">
    <Navbar v-show="$route.path.includes('/account') ? false : true" v-on:tap-cart="disableScroll" v-on:change-route="enableScroll"/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './views/Navbar';

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
      console.log(this.isCartOpen)
      document.documentElement.style.overflow = this.isCartOpen ? 'hidden' : 'auto'
    },
    enableScroll: function () {
      this.isCartOpen = false
      document.documentElement.style.overflow = 'auto'
    }
  },
  watch:{
    $route: function(){
      console.log('Routing...')
      this.isCartOpen = false
      document.documentElement.style.overflow = 'auto'
    }
  },
  components: {
    Navbar
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
