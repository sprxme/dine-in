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
         <label class="menu__edit primary-button">Edit</label>
        <label class="menu__remove" v-on:click="removeFood(menu.id,type)">Remove</label>
    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props:{
        menu: Object,
        type: String,
    },
    methods:{
        ...mapActions(['removeFoodItem','removeBeverageItem']),
        removeFood(id,type){
            type=="food" ? this.removeFoodItem({id: id}) : this.removeBeverageItem({id:id})
        }

    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/menu.scss';
</style>