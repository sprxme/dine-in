<template>
    <div class="menu">
        <div class="menu__category" v-for="category in allFoodCategories" :key="category.id">
            <div class="menu__title-container">
                <span class="menu__title">{{category.name}}</span>
            </div>
            <div class="menu__cards">
                <MenuCard v-for="food in sortCategory(category.name)" :key="food.id" :food="food"/>
            </div>
        </div>
    </div>
</template>

<script>
import MenuCard from '@/components/MenuCard.vue';
import { mapGetters } from 'vuex'

export default {
    methods:{
        sortCategory: function(category){
            return this.allFoods.filter(function(food){
                return food.category == category;
            })
        }
    },
    components:{
        MenuCard
    },
    computed: mapGetters(['allFoods', 'allFoodCategories'])
}
</script>

<style lang="scss" scoped>
@import "@/styles/menu.scss";
</style>