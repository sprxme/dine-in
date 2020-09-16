<template>
<div class="menu">
        <div class="menu__category" v-for="category in categories" :key="category.id">
            <div class="menu__title-container">
                <span class="menu__title">{{category.name}}</span>
            </div>
            <div class="menu__cards">
                <div class="menu__card" v-for="drink in sortCategory(category.name)" :key="drink.id">
                    <div class="menu__image-container">
                        <img :src="require('../assets/food/'+drink.image+'.jpg')" class="menu__image"> 
                    </div>
                    <div class="menu__details">
                        <span class="menu__name">{{drink.name}}</span>
                        <span class="menu__desc">{{drink.desc}}</span>
                        <span class="menu__price">{{drink.price}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            drinks: [
                {id: 1, name: 'Coca-cola', price:'24k', image:'food1', category: 'Cold', desc:'minuman'},
                {id: 2, name: 'Mineral Water', price:'12k', image:'food2', category: 'Cold', desc:'minuman'},
                {id: 3, name: 'Hot Ocha', price:'24k', image:'food3', category: 'Hot', desc:'minuman'},
                {id: 4, name: 'Coca-cola', price:'24k', image:'food1', category: 'Cold', desc:'minuman'},
                {id: 5, name: 'Coca-cola', price:'24k', image:'food4', category: 'Cold', desc:'minuman'},
                {id: 6, name: 'Coca-cola', price:'24k', image:'food5', category: 'Cold', desc:'minuman'},
                {id: 7, name: 'Coca-cola', price:'24k', image:'food3', category: 'Cold', desc:'minuman'},
                {id: 8, name: 'Coca-cola', price:'24k', image:'food2', category: 'Hot', desc:'minuman'},
                {id: 9, name: 'Coca-cola', price:'24k', image:'food4', category: 'Hot', desc:'minuman'},
                {id: 10, name: 'Coca-cola', price:'24k', image:'food1', category: 'Hot', desc:'minuman'},
                {id: 11, name: 'Coca-cola', price:'24k', image:'food1', category: 'Hot', desc:'minuman'},
                {id: 12, name: 'Coca-cola', price:'24k', image:'food1', category: 'Hot', desc:'minuman'},
                {id: 13, name: 'Coca-cola', price:'24k', image:'food1', category: 'Hot', desc:'minuman'},
                {id: 14, name: 'Coca-cola', price:'24k', image:'food1', category: 'Hot', desc:'minuman'},
                {id: 15, name: 'Coca-cola', price:'24k', image:'food1', category: 'Hot', desc:'minuman'},
                {id: 16, name: 'Coca-cola', price:'24k', image:'food1', category: 'Hot', desc:'minuman'},
                {id: 17, name: 'Segar Tea', price:'24k', image:'food1', category: 'Cold', desc:'minuman'},

            ],
            categories: [
                {id: 1, name: 'Cold'},
                {id: 2, name: 'Hot'}
            ]
        }
    },
    methods:{
        sortCategory: function(category){
            return this.drinks.filter(function(drink){
                return drink.category === category;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/menu.scss";
</style>