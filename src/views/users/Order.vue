<template>
    <div class="orderlist">
        <div class="orderlist__customer">
            <div class="orderlist__customer__title">Customer Book</div>
            <div class="orderlist__table">
                <span class="orderlist__table__name">
                    <div class="custom__input">
                        <span class = "custom__input-row">
                            <input class="field" type="text" name="name" autofocus required>
                            <span class="placeholder">Enter Name </span>
                        </span>
                    </div>
                </span>
                <div class="orderlist__table__number">
                    <div class="custom__input">
                        <span class = "custom__input-row">
                            <input class="field" type="text" name="TableNo" autofocus required>
                            <span class="placeholder">Table No </span>
                        </span>
                    </div>
                </div>  
            </div>
        </div>
       
        
        <div class="orderlist__items">
            <div class="orderlist__title-container">
                <div class="orderlist__title">Order item(s) </div>
                <div class="orderlist__additems">Add Items</div>
            </div>
           <OrderCard v-for="index in 5" :key="index"/>
            <span class="orderlist__button primary-button" v-on:click="generateToken()">
                Confirm 
            </span>
        </div>
        
         
    </div>
</template>

<script>
import OrderCard from '@/components/user/OrderCard.vue';
export default {
    components:{
        OrderCard
    },
    methods:{
        generateToken(){
            var token = Math.random().toString(36).slice(-8).toUpperCase()
            this.$router.push('/confirm/'+token)
        }
    }

}

</script>

<style lang="scss" scoped>
.orderlist{
    padding: 5em 15vw ;

    &__customer{
        padding: 1em 0em;
        
        &__title{
            border-bottom: 1px solid $light-grey;
            font-size: 40px;
            font-weight: 400;
            font-family: 'Montserrat', sans-serif;
            margin-bottom: 0.3rem;
        }
        
    }

    &__title-container{ 
        padding: 0.5rem 0em;
        //border-top: 1px solid $light-grey;
        //display: flex;
        //flex-basis: 100%;
        //max-width: 100%;
    }

    &__title{
        font-size: 40px;
        font-weight: 400;
        font-family: 'Montserrat', sans-serif;
        
    }

    &__additems{
        border: 1px solid $light-grey;
        text-align: right;
    }

    &__button{
        padding: .8em 1.2em;
        border-radius: 8px;
    }

    &__table{
        display: flex;
        align-items: center; //bikin tengah atas bwhnya
        
        //justify-content: center;
        
        &__name{
            max-width: 50%;
            flex-basis: 50%;
        }
        
        &__number {
            max-width: 50%;
            flex-basis: 50%;
            border: none;
            outline: none;
            justify-content: center;
            //margin-right: 8rem; //geser ke kanan 
        }

        &__name input ,
        &__number input {
            border: none;
            outline: none;
            border-bottom: 4px solid #ddd;
            max-width: 400px;
        }

        
        // &__date{
        //     padding: 1em;
        // }

        &__no input{
            border: none;
            border-bottom: 1px solid #ddd;
            color: #333;
            font-size: 14px;
            margin-bottom: 15px;
            padding: 0.5em 1em 0.5em 0;
            width: 200px;
        }
        
    }

    &__image{
        height: 50px;
        width: 50px;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0px 2px 8px 4px rgba(0,0,0,0.09);
    }
}

.custom__input-row{
    display:flex; 
}

.custom__input-row input:focus + .placeholder,
.custom__input-row input:valid + .placeholder{
    top: 10px;
    left: 12px;
    font-size: 14px;
    color: $text;

}


.field {
    width: 100%;
    font-size: 18px;
    padding: 1.3em 1.2em 0.5em 0.7em;
    margin: 10px auto;
    display: inline-block;
    background: transparent;
    border: 0px solid rgba(126,126,126,0.1);
    background-clip:padding-box;
    border-radius: 3px;
    box-sizing: border-box;
    transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    color: #525252;
    text-align: center;
    
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
    font-size: 22px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: $secondary-text;

}  

.placeholder__textarea{
    pointer-events: none;
    position: absolute;
    margin-top: -20px;
    padding: 0 .8em 0;
    font-weight: 400;
    font-size: 18px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: $secondary-text;
}  

.custom__textarea{
    width: 100%;
    border:1px solid $light-grey;
    padding: 1.3em .8em 0.5em;
}

.custom__input-row textarea:focus + .placeholder__textarea,
.custom__input-row textarea:valid + .placeholder__textarea{
    top: 22px;
    left: 2px;
    font-size: 14px;
    color: $secondary-text;
}

.custom__input-row textarea:focus,
.custom__input-row textarea:valid{
    border: 1px solid $secondary-text;
}

.input{
    min-width: 0;
    width: 90%;
}
</style>