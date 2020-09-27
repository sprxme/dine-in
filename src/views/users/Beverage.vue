<template>
<div class="menu">
        <div class="menu__category" v-for="category in allDrinkCategories" :key="category.id">
            <div class="menu__title-container">
                <span class="menu__title">{{category.name}}</span>
            </div>
            <div class="menu__cards">
               <MenuCard v-for="drink in sortCategory(category.name)" :key="drink.id" :food="drink"/>
            </div>
        </div>
    </div>
</template>

<script>
import MenuCard from '@/components/MenuCard.vue';
import { mapGetters } from 'vuex';

export default {
    methods:{
        sortCategory: function(category){
            return this.allDrinks.filter(function(drink){
                return drink.category === category;
            })
        }
    },
    components:{
        MenuCard
    },
    computed: mapGetters(['allDrinks', 'allDrinkCategories'])
}
</script>

<style lang="scss" scoped>
@import "@/styles/menu.scss";
</style>