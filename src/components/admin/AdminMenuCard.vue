<template>
   <div class="menu__card">
    <div class="menu__image-container">
        <img :src="require('@/assets/food/'+menu.image+'.jpg')" class="menu__image"> 
    </div>
    <div class="menu__details">
        <span class="menu__name">{{menu.name}}</span>
        <span class="menu__desc">{{menu.desc}}</span>
        <span class="menu__price">{{menu.price/1000}}k</span>
    </div>
     <div class="menu__button_cart">
        <label class="menu__remove destructive-button">Remove</label>
    </div>
</div>
</template>

<script>
export default {
    props:{
        menu: Object
    },
}
</script>

<style lang="scss" scoped>
@import '@/styles/menu.scss';
</style>