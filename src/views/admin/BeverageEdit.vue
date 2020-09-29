<template>
    <div class="menu">
        <label class="menu__title">Beverage</label>
        <div class="menu__category" v-for="category in allDrinkCategories" :key="category.id">
            <div class="menu__title-container">
                <span class="menu__title">{{category.name}}</span>
                <span class="menu__add primary-button">
                    <label class="menu__add__label">Add</label>  
                    <font-awesome-icon icon="plus" class="menu__tocart__icon"/> 
                </span>
            </div>
            <div class="menu__cards">
                <MenuCardEdit v-for="drink in sortCategory(category.name)" :key="drink.id" :menu="drink"/>
            </div>
        </div>
    </div>
</template>

<script>
import MenuCardEdit from '@/components/admin/AdminMenuCard';
import { mapGetters } from 'vuex';

export default {
    methods:{
        sortCategory: function(category){
            return this.allDrinks.filter(function(drink){
                return drink.category == category;
            })
        }
    },
    components:{
        MenuCardEdit
    },
    computed: mapGetters(['allDrinks', 'allDrinkCategories'])
}
</script>

<style lang="scss" scoped>
@import "@/styles/menu.scss";
</style>