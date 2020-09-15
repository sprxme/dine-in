<template>
<div>
    <div id="option" class="menu__option" :class="{ 'scrolled': !view.atTopOfPage }">
        <router-link class="menu__option-list" :to="{path:'#hot'}">
            <font-awesome-icon icon="mug-hot" class="menu__option-icon"/>
            <label>Hot</label>
        </router-link>
        <router-link class="menu__option-list" :to="{path:'#cold'}">
            <font-awesome-icon icon="glass-martini-alt" class="menu__option-icon"/>
            <label>Cold</label>
        </router-link>
    </div>
    <div class="menu">
        <div id="cold" class="menu__container">
            <label class="menu__title">Cold menu</label>
            <ul class="menu__menu-list">
                <li v-for="drink in sortDrinks('cold')" :key="drink.id" class="menu__menu-item">
                    <div class="menu__image-container">
                        <img :src="require('../assets/food/'+drink.image+'.jpg')" class="menu__image"/>
                    </div>
                    <div class="menu__details">
                        <div class="menu__details-title">
                            <label class="menu__menu-name">{{drink.name}}</label>
                            <label class="menu__menu-price">{{drink.price}}</label>
                        </div>
                        <label class="menu__menu-desc">{{drink.desc}}</label>
                    </div>
                </li>
            </ul>
        </div>
        <div id="hot" class="menu__container">
            <label class="menu__title">Hot menu</label>
            <ul class="menu__menu-list">
                <li v-for="drink in sortDrinks('hot')" :key="drink.id" class="menu__menu-item">
                    <div class="menu__image-container">
                        <img :src="require('../assets/food/'+drink.image+'.jpg')" class="menu__image"/>
                    </div>
                    <div class="menu__details">
                        <div class="menu__details-title">
                            <span class="menu__menu-name">{{drink.name}}</span>
                            <span class="menu__menu-price">{{drink.price}}</span>
                        </div>
                        <span class="menu__menu-desc">{{drink.desc}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: function(){
        return{
            drinks: [
                {id: 1, name: 'Coca-cola', price:'24k', image:'food1', type: 'cold', desc:'minuman'},
                {id: 2, name: 'Mineral Water', price:'12k', image:'food2', type: 'cold', desc:'minuman'},
                {id: 3, name: 'Hot Ocha', price:'24k', image:'food3', type: 'hot', desc:'minuman'},
                {id: 4, name: 'Coca-cola', price:'24k', image:'food1', type: 'cold', desc:'minuman'},
                {id: 5, name: 'Coca-cola', price:'24k', image:'food4', type: 'cold', desc:'minuman'},
                {id: 6, name: 'Coca-cola', price:'24k', image:'food5', type: 'cold', desc:'minuman'},
                {id: 7, name: 'Coca-cola', price:'24k', image:'food3', type: 'cold', desc:'minuman'},
                {id: 8, name: 'Coca-cola', price:'24k', image:'food2', type: 'hot', desc:'minuman'},
                {id: 9, name: 'Coca-cola', price:'24k', image:'food4', type: 'hot', desc:'minuman'},
                {id: 10, name: 'Coca-cola', price:'24k', image:'food1', type: 'hot', desc:'minuman'},
                {id: 11, name: 'Coca-cola', price:'24k', image:'food1', type: 'hot', desc:'minuman'},
                {id: 12, name: 'Coca-cola', price:'24k', image:'food1', type: 'hot', desc:'minuman'},
                {id: 13, name: 'Coca-cola', price:'24k', image:'food1', type: 'hot', desc:'minuman'},
                {id: 14, name: 'Coca-cola', price:'24k', image:'food1', type: 'hot', desc:'minuman'},
                {id: 15, name: 'Coca-cola', price:'24k', image:'food1', type: 'hot', desc:'minuman'},
                {id: 16, name: 'Coca-cola', price:'24k', image:'food1', type: 'hot', desc:'minuman'},
                
                {id: 17, name: 'Segar Tea', price:'24k', image:'food1', type: 'cold', desc:'minuman'},

            ],
             view: {
                atTopOfPage: true
            }
        }
    },
    beforeMount(){
        window.addEventListener('scroll', this.handleScroll);
    },
    methods:{
        sortDrinks: function(type){
            return this.drinks.filter(function(drink){
                return drink.type === type;
            })
        },
        handleScroll(){
            var sticky = document.getElementById("option").offsetTop;
            //console.log(window.pageYOffset + " " + sticky)
            if(window.pageYOffset>sticky && window.pageYOffset > 65){
                if(this.view.atTopOfPage) {
                    this.view.atTopOfPage = false;
                }
            }else{
                if(!this.view.atTopOfPage) {
                    this.view.atTopOfPage = true;
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/menu.scss";
</style>