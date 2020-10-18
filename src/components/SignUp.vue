<template>
  <div class="account">
    <div class="account__content">
      <h1 class="account__title">SIGN UP</h1>
      <form>
        <div class="custom__input">
          <span class = "custom__input-row">
            <input class="field" type="text" autofocus required>
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
        <input id="submit-btn" type="submit" class="primary-button" value="Sign Up"/>
      </form>
      <router-link to='/account' class="account__route">Already have an account? Sign in now</router-link>
    </div>
  </div>
</template>

<script>
export default {
  title: 'Full Moon 🌕 - Sign Up',
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
#submit-btn {
   width: 100%;
  outline: inherit;
  border: none;
}
@import '../styles/account.scss';
</style>