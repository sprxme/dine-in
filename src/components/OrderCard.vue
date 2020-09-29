<template>
    <div class="order">
        <div class="order__image"><!--  Gambar-->
            Gambar Jacob
        </div>
        <div>
            <div class="order__details">
                <p>Harga Diri Jacob Andrean</p>
                <p>ZWE 1.000.000</p>
            </div>
            <div class="order__iconbar">
                <div class="order__note">
                    <font-awesome-icon icon="edit" class="order__note__icon" />
                </div>
                <div class="order__quantity">
                    <font-awesome-icon icon="minus" class="order__quantitiy__icon minus" v-on:click="quantity=quantity-1"/>
                    <label class="menu__quantitiy__number">{{quantity}}</label>
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

    &__details{
        font-size: 18px;
        font-weight: 500;
    }

    &__iconbar{
        display: flex;
    }
} 
</style>