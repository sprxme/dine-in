<template>
  <div class="account">
    <div class="account__content">
      <h1 class="account__title">Sign in</h1>
      <div class="custom__input">
        <span class = "custom__input-row">
          <input class="field" type="text" required>
          <span class="placeholder">Username</span>
        </span>
      </div>
      <div class="custom__input">
        <span class="custom__input-row">
          <input id="password" class="field password" type="password" @blur="hidePassword()" required>
          <span class="placeholder">Password</span>
          <font-awesome-icon :icon="myIcon" class="icon" v-on:click="togglePassword()"/>
        </span>
      </div>
      <span class="primary-button">Sign In</span>
      <a class="account__route">Forgot your username or password?</a>
      <router-link to='/account/signup' class="account__route">Don't have an account? Create one now</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: function(){
    return{
      myIcon: 'eye'
    }
  },
  iconEye:{
    icon: ''
  },
  methods:{
      togglePassword: function(){
        var x = document.getElementById("password");
        if(x.type === "password"){
          x.type = "text"
          this.myIcon = 'eye-slash'
        } 
        else{
          x.type = "password"
          this.myIcon = 'eye'
        }  
      },
      hidePassword: function(){
        var x = document.getElementById("password");
        x.type = "password"
        this.myIcon = 'eye'
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../styles/account.scss';
</style>