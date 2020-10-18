<template>
  <div class="account">
    <div class="account__content">
      <h1 class="account__title">SIGN IN</h1>
      <form @submit.prevent ref="frm">
        <div class="custom__input">
          <span class = "custom__input-row">
            <input class="field" type="text" v-model="input.username" name="username" autofocus required>
            <span class="placeholder">Username</span>
          </span>
        </div>
        <div class="custom__input">
          <span class="custom__input-row">
            <input id="password" class="field password" type="password"  v-model ="input.password" @blur="hidePassword()" required>
            <span class="placeholder">Password</span>
            <font-awesome-icon :icon="myIcon" class="icon" v-on:click="togglePassword()"/>
          </span>
        </div>
        <input id="submit-btn" type="submit" class="primary-button" value="Sign In" v-on:click="signin($event)"/>
      </form>
      <a class="account__route">Forgot your username or password?</a>
      <router-link :to="{path: 'signup'}" append class="account__route">Don't have an account? Create one now</router-link>
    </div>
  </div>
</template>

<script>
export default {
  title: 'Full Moon 🌕 - Sign In',
  name: 'login',
  data: function(){
    return{
      myIcon: 'eye',
      input: {
        username: "",
        password: "",
      }
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
      },
      //temporary login method for admin (testing)
      signin(e){
        if(this.input.username == "admin" && this.input.password == "jasublog"){
          e.preventDefault()
          this.$store.commit("setAuth",true);
          this.$router.replace('/');
        } else {
          // HANDLE INVALID AUTHENTICATION
          // this.input.username = "";
          // this.input.password = "";
        }
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

.field {
  &:hover{
    background: rgba(126,126,126,0.1);
;
  }
}

</style>