<template>
<div class="menu">
        <div class="menu__category" v-for="category in allDrinkCategories" :key="category.id">
            <div class="menu__title-container">
                <span class="menu__title">{{category.name}}</span>
                <span class="menu__subtitle">{{ category.desc }}</span>
            </div>
            <div class="menu__cards">
               <MenuCard v-for="drink in sortCategory(category.name)" :key="drink.id" :food="drink"/>
            </div>
            <div class="menu__unavailable" v-if="!checkAvailability(category.name)">
                <span class="menu__unavailable__title">Curently unavailable.</span>
                <span class="menu__unavailable__subtitle">We're sorry for the inconvenience, you can check out our other items.</span>
            </div>
        </div>
    </div>
</template>

<script>
import MenuCard from '@/components/user/MenuCard.vue';
import { mapGetters } from 'vuex';

export default {
    methods:{
        sortCategory: function(category){
            return this.allDrinks.filter(function(drink){
                return drink.category === category;
            })
        },
        checkAvailability(categoryName) {
            return this.allDrinks.some(drink => {
                return drink.category === categoryName
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