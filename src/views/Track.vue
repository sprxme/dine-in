<template>
    <div class="track">
        <div class="track__title-container">
            <label class="track__title">Track your order.</label> 
        </div>

        <div class="track__sub-container">
            
            <div class="track__left">
                <label class="track__subtitle">Track with your order token.</label>
                <label class="track__label">Find an individual order.</label>
                <div class="track__input">
                    <span class = "track__input-row">
                        <input class="field" type="text" required>
                        <span class="placeholder">Token</span>
                    </span>
                </div>
            </div>

            <div class="track__right">
                <label class="track__subtitle">Track with your account.</label>
                <div class="track__input-container">
                    <div class="track__input">
                        <span class = "track__input-row">
                            <input class="field" type="text" required>
                            <span class="placeholder">Email</span>
                        </span>
                    </div>
                    <div class="track__input">
                        <span class = "track__input-row">
                            <input class="field" type="password" id="password" required>
                            <span class="placeholder">Password</span>
                            <font-awesome-icon :icon="myIcon" class="icon" v-on:click="togglePassword()"/>
                        </span>
                    </div>
                </div>
                <span class="track__btn primary-button">Continue</span>          
            </div>

        </div>

    </div>

</template>

<script>
export default {
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
    }
}
</script>

<style lang="scss" scoped>
.track{
    padding: 5em 2rem;

    &__title{
        font-size: 50px;
        font-weight: 550;
        margin: 25px 0px 50px 0;
    }

    &__label{
        text-align: center;
        color: $subtitle-text;
    }

    &__sub-container{
        display: grid;
        grid-template-columns: 1.85fr 1fr;
        padding: 0 15 0 0;
        margin-top: 50px;
    }

    &__subtitle{
        font-size: 24px;
        display: inline;
        text-align: center;
        font-weight: 550;
    }

    &__left, 
    &__right{
        display: flex;
        flex-direction: column;
    }

    &__left{
        padding: 0 7rem 0 7rem;
    }

    &__right{
        border-left: 1px solid $light-grey;
        padding-left: 50px;
        padding-right: 50px;
    }

    &__input{
        position: relative;
        width: 100%;
    }

    &__input-row{
        display:flex; 
    }

    &__input-row input:focus + span,
    &__input-row input:valid + span{
        top: 12px;
        left: 12px;
        font-size: 14px;
    }
    
    &__input-row input:focus +.placeholder + .icon,
    &__input-row input:valid +.placeholder + .icon{
        visibility: visible;
    }

    &__btn{
        text-align: center;
        padding: .8em 1.2em;
        border-radius: 10px;
    }
}

.field {
    width: 100%;
    font-size: 18px;
    padding: 1.3em 1.2em 0.5em 0.7em;
    margin: 10px auto;
    display: inline-block;
    background: rgba(126,126,126,0.1);
    border: 0px solid rgba(126,126,126,0.1);
    background-clip:padding-box;
    border-radius: 3px;
    box-sizing: border-box;
    transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    color: #525252;

    &:hover{
        background: #e7e7e7;
      }
      
    &:focus{
        background: transparent;
    }
}

.placeholder{
    pointer-events: none;
    position: absolute;
    top: 30%;
    left: 8%;
    font-weight: 400;
    font-size: 20px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}  

.password{
    padding-right: 42px;
}

.icon{
    top: 28px;
    right: 10px;
    position: absolute;
    font-size: 24px;
    cursor: pointer;
    visibility: hidden;
}

@media screen and (max-width: 780px){
    
}
</style>