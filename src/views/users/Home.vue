<template>
  <div class="home">
    <img class="logo" alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/user/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.home{
  padding-top: 4em;
}
.logo{
  display: block;
  margin: 0 auto;
}
</style>
