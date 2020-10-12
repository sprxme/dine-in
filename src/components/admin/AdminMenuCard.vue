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

.menu {
    &__edit {
        margin-bottom: 0;
        padding: .4em 1.2em;
    }

    &__remove {
        margin-top: .7rem;
        padding: .4em 1.2em;
    }
}

@media screen and (max-width: 480px){
    .menu {
        &__edit {
            font-size: 14px;
            padding: .4em 1.2em;
            margin: 1rem .5rem 0;
        }

        &__remove {
            font-size: 14px;
            padding: .4em 1.2em;
            margin: .5rem .5rem .5rem;
        }
    }
}

@media screen and (max-width: 350px){
    .menu {
        &__edit {
            margin-top: .3rem;
        }
    }
}
</style>