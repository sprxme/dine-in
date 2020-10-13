<template>
    <div class="orderlist">
        <div class="orderlist__title">Orders</div>
        <div class="orderlist__table">
            <span class="orderlist__table__name">
                <div class="custom__input">
                    <span class = "custom__input-row">
                        <input class="field" type="text" name="name" autofocus required>
                        <span class="placeholder">Enter Name </span>
                    </span>
                </div>
                <!-- <div class="table__name_box">Name :</div>
                <input type="field" id="name" placeholder="your name"> -->
            </span>
            <div class="orderlist__table__number">
                <div class="custom__input">
                    <span class = "custom__input-row">
                        <input class="field" type="text" name="TableNo" autofocus required>
                        <span class="placeholder">Table No </span>
                    </span>
                </div>
                <!-- <div class="orderlist__table__no">Table No :</div>
                <input type="text" id="number" placeholder="your table number"> -->
            </div>
            
        </div>
        <OrderCard v-for="index in 5" :key="index"/>
        <span class="orderlist__button primary-button" v-on:click="generateToken()">
            Confirm 
        </span>
         
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

    &__title{
        font-size: 48px;
        font-weight: 600;
    }
    &__button{
        padding: .8em 1.2em;
        border-radius: 8px;
    }

    &__table{
        display: flex;
        align-items: center; //bikin tengah atas bwhnya
        border-top: 1px solid $light-grey;
        padding: 1em 0em;
        
        &__name ,
        &__number {
            border: none;
            outline: none;
            margin-right: 8rem;
        }

        &__name input ,
        &__number input {
            border: none;
            outline: none;
            border-bottom: 5px solid #ddd;
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

    &:hover{
        background: transparent;
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
    font-weight: 600;
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