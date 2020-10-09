<template>
    <div class="confirm">
        <h1 class="confirm__title">Thank you for your order!</h1>

        <h1 class="confirm__title2">Here is your token.</h1>
        <h1 class="confirm__gentoken">{{token}}</h1>
        <router-link class = "confirm__link" :to="'/track/' +token">
            <span class="confirm__btn">Track Order</span>
            <font-awesome-icon icon="chevron-right" class="confirm__icon" />  
        </router-link>
    </div>


</template>

<script>
export default {
   props: {
       token: String
   }
}
</script>

<style lang="scss" scoped>
.confirm{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 7em 10vw 10em;
    
    &__title{
        text-align: center;
        width: 502px;
        font-size: 50px;
        margin-bottom: 70px;
        margin-top:40px;
    }

    &__title2{
        text-align: center;
        font-size: 20px;
        width: 300px;
        margin-bottom: 10px;
    }

    &__gentoken{
        text-align: center;
        font-size: 20px;
        width: 220px;
        margin-bottom: 60px;
        color: $light-grey;
    }

    &__label{
        margin: 0;
        padding: 0 5px 0 0;
        font-weight: 600;
        font-size: 18px;
        cursor: pointer;
    }

    &__link{
        color: $route-color;
        display: flex;
        align-items: center;

        &:hover{
            color: $route-color-hover;
        }
    }

    &__icon{
        margin-top: 4px;
    }

    &__btn {
        text-align: center;
        padding: 0em 0.5em;
        //font-weight: 500;
        font-size:20px;
        }

    &__icon{
        margin-top: 4px;
    }    
}
</style>


