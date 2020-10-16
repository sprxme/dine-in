<template>
    <div class="order">
        <div class="order__image"><!--  Gambar-->
            <img src="@/assets/food/shumai.jpg" class="order__image" />
        </div>
        <div class="order__block">
            <div class="order__details">
                <div class="order__details__name">Harga Diri Jacob Andrean</div>
                <div class="order__details__price">Rp 1.000.000</div>
            </div>
            <div class="order__note">
                <input type="text">
            </div>
            <div class="order__iconbar">
                <div class="order__quantity">
                    <font-awesome-icon icon="minus" class="order__quantitiy__icon minus" v-on:click="quantity=quantity-1"/>
                    <label class="order__quantity__number">{{quantity}}</label>
                    <font-awesome-icon icon="plus" class="order__quantitiy__icon plus" v-on:click="quantity=quantity+1"/>
                </div>
            </div>
        </div>
            
        

    </div>
</template>

<script>
export default {
    data: function(){
        return{
            quantity: 0,
        }
    }
}
</script>

<style lang="scss" scoped>
.order{
    display: flex;
    flex: warp;
    margin-bottom: 30px;
    padding-top: 20px;
    border-top: 1px solid $light-grey;

    &__block{
        flex-basis: 100%;
    }

    &__image{
        max-width: 100%;
        max-height: 100%;
        height: 150px;
        width: 150px;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0px 2px 8px 4px rgba(0,0,0,0.09);
    }

    &__details{
        display: flex;
        flex-basis: 100%;
        max-width: 100%;
        &__name{
            padding: 0em 0em 0em 1em;
            font-size: 24px;
            font-weight: 600;
        }
        &__price{
            font-size: 24px;
            font-weight: 600;
            display: flex;
            float: right;
            margin-left: auto;
            text-align: right;
        }
    }
    
    &__note{
        padding: 1em;
        align-items: center;
    }

    &__iconbar{
        color: $btn-primary;
        float: right;
    }

    &__quantity{
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid $light-grey;
        padding: .3em 1em;
        border-radius: 10px;
        width: 200px;

        &__number{
            margin: 0;
            padding: 0;
            font-size: 18px;
        }
    }
} 

.minus{
    float: left;
    margin-right: auto;
    cursor: pointer;
}

.plus{
    float: right;
    margin-left: auto;
    cursor: pointer;
}
</style>