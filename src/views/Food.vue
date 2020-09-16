<template>
    <div class="menu">
        <div class="menu__category" v-for="category in categories" :key="category.id">
            <div class="menu__title-container">
                <span class="menu__title">{{category.name}}</span>
            </div>
            <div class="menu__cards">
                <div class="menu__card" v-for="food in sortCategory(category.name)" :key="food.id">
                    <div class="menu__image-container">
                        <img :src="require('../assets/food/'+food.image+'.jpg')" class="menu__image"> 
                    </div>
                    <div class="menu__details">
                        <span class="menu__name">{{food.name}}</span>
                        <span class="menu__desc">{{food.desc}}</span>
                        <span class="menu__price">{{food.price}}</span>
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
            foods: [
                {id: 1, name: 'Coca-cola', price:'24k', image:'food1', category: 'Pizza', desc:'minuman'},
                {id: 2, name: 'Sprxme\'s Special', price:'12k', image:'food2', category: 'Pizza', desc:'Pizza dengan topping olive oils, daging sapi, mozarella dan home sauce'},
                {id: 3, name: 'Hot Ocha', price:'24k', image:'food3', category: 'Pizza', desc:'minuman'},
                {id: 4, name: 'Coca-cola', price:'24k', image:'food1', category: 'Pasta', desc:'minuman'},
                {id: 5, name: 'Coca-cola', price:'24k', image:'food4', category: 'Pizza', desc:'minuman'},
                {id: 6, name: 'Coca-cola', price:'24k', image:'food5', category: 'Pizza', desc:'minuman'},
                {id: 7, name: 'Coca-cola', price:'24k', image:'food3', category: 'Pizza', desc:'minuman'},
                {id: 8, name: 'Coca-cola', price:'24k', image:'food2', category: 'Pasta', desc:'minuman'},
                {id: 9, name: 'Coca-cola', price:'24k', image:'food4', category: 'Pizza', desc:'minuman'},
                {id: 10, name: 'Coca-cola', price:'24k', image:'food2', category: 'Pasta', desc:'minuman'},
                {id: 11, name: 'Coca-cola', price:'24k', image:'food4', category: 'Steak', desc:'minuman'},
                {id: 12, name: 'Coca-cola', price:'24k', image:'food5', category: 'Pasta', desc:'minuman'},
                {id: 13, name: 'Coca-cola', price:'24k', image:'food4', category: 'Steak', desc:'minuman'},
                {id: 14, name: 'Coca-cola', price:'24k', image:'food6', category: 'Pasta', desc:'minuman'},
                {id: 15, name: 'Coca-cola', price:'24k', image:'food5', category: 'Steak', desc:'minuman'},
                {id: 16, name: 'Coca-cola', price:'24k', image:'food3', category: 'Pasta', desc:'minuman'},
                {id: 17, name: 'Segar Tea', price:'24k', image:'food6', category: 'Pasta', desc:'minuman'},
            ],
            categories: [
                {id: 1, name: 'Pasta'},
                {id: 2, name: 'Pizza'},
                {id: 3, name: 'Steak'}
            ]
        }
    },
    methods:{
        sortCategory: function(category){
            return this.foods.filter(function(food){
                return food.category == category;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/menu.scss";
</style>