<template>
  <div class="account">
    <div class="account__content">
      <h1 class="account__title">Sign Up</h1>
      <div class="account__input">
        <span class = "account__input-row">
          <input class="field" type="text" required>
          <span class="placeholder">Username</span>
        </span>
      </div>
      <div class="account__input">
        <span class="account__input-row">
          <input id="password" class="field password" type="password" @blur="hidePassword()" required>
          <span class="placeholder">Password</span>
          <font-awesome-icon :icon="myIcon" class="icon" v-on:click="togglePassword()"/>
        </span>
      </div>
      <span class="primary-button">Sign Up</span>
      <router-link to='/account' class="account__route">Already have an account? Sign in now</router-link>
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