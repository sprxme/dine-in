<template>
    <div class="menu">
        <!-- <label class="menu__title">Food</label> -->
        <div class="menu__category" v-for="category in sortedCategories()" :key="category.id">
            <div class="menu__title-container">
                <span class="menu__title">{{category.name}}</span>
                <span class="menu__add primary-button" v-b-modal.modal-add-food>
                    <label class="menu__add__label">ADD</label>  
                    <font-awesome-icon icon="plus" class="menu__tocart__icon"/> 
                </span>
                <b-form-select class="menu__sort-select" v-if="category != undefined" @input="updateCategories({id: category.id, index: category.index})" v-model="category.index" :options="getCategoriesIndex()"></b-form-select>
            </div>
            <div class="menu__unavailable" v-if="!checkAvailability(category.name)">
                <span class="menu__unavailable__title">No items found.</span>
                <span class="menu__unavailable__subtitle">Menu items you added from the 'Add' button will appear here.</span>
            </div>
            <div class="menu__cards">
                <MenuCardEdit v-for="food in sortCategory(category.name)" :key="food.id" :menu="food" :type="'food'"/>
            </div>
        </div>
        <b-modal id="modal-add-food" centered hide-footer title="Add Food" @show="resetData" @hide="resetData">
            <label for="file-upload" class="menu__fileupload" :class="{border: !image}">
                <div v-show="!image" class="menu__fileupload__container">
                    <span for="file-upload" class="menu__fileupload__content">
                        <font-awesome-icon icon="image"  class="menu__fileupload__icon"/>
                        <span class="menu__fileupload__text">Add image</span>
                    </span>
                    <input type="file" id="file-upload" accept="image/x-png,image/gif,image/jpeg" @change="onFileChange"/>
                </div>
                <img v-show="image" :src="image" class="menu__fileupload__image"/>
            </label>
            <div class="menu__modal">
                <div class="custom__input">
                    <span class = "custom__input-row">
                        <input class="field menu__modal__input" type="text" required>
                        <span class="placeholder menu__modal__placeholder">Name</span>
                    </span>
                </div>
                <div class="custom__input">
                    <span class = "custom__input-row">
                        <input class="field menu__modal__input" type="text" required>
                        <span class="placeholder menu__modal__placeholder">Price</span>
                    </span>
                </div>
            </div>
            <div class="menu__catselect">
                <b-form-select v-model="selected" class="menu__catselect__select">
                    <b-form-select-option :value="null" disabled class="menu__catselect__select__title">Category</b-form-select-option>
                    <b-form-select-option v-for="option in allFoodCategories" :key="option.id" :value="option.name">
                        {{option.name}}
                    </b-form-select-option>
                </b-form-select>
            </div>
            <div class="custom__input input__textarea">
                <span class = "custom__input-row">
                    <textarea class="menu__modal__input custom__textarea" type="text" required />
                    <span class="placeholder__textarea menu__modal__placeholder">Description</span>
                </span>
            </div>
            <div class="menu__modal__buttongroup">
                <span class="menu__modal__buttongroup__button destructive-secondary" @click="$bvModal.hide('modal-add-food')">Cancel</span>
                <span class="menu__modal__buttongroup__button primary-button" @click="$bvModal.hide('modal-add-food')">Save</span>
            </div>
        </b-modal>
    </div>
</template>

<script>
import MenuCardEdit from '@/components/admin/AdminMenuCard';
import { mapGetters, mapActions } from 'vuex';

export default {
    data: function(){
        return{
            image: null,
            selected: null,
        }
    },
    methods:{
        ...mapActions(['updateCategories']),
        sortCategory: function(category){
            return this.allFoods.filter(function(food){
                return food.category == category;
            })
        },
        checkAvailability(categoryName) {
            return this.allFoods.some(drink => {
                return drink.category === categoryName
            })
        },
        onFileChange(e){
            const file = e.target.files[0];
            this.image = URL.createObjectURL(file);
        },
        resetData(){
            this.selected = null
            this.image = null
        },
        getCategoriesIndex() {
            const len = this.allFoodCategories.length

            let categoryIndexes = []
            for (let i = 1; i <= len; i++) {
                categoryIndexes.push({
                    value: i, 
                    text: 'Sort order: ' + i 
                })
            }

            return categoryIndexes
        },
        sortedCategories() {
            return [...this.allFoodCategories].sort((a, b) => {
                return a.index - b.index
            })
        }
    },
    components:{
        MenuCardEdit
    },
    computed: {
        ...mapGetters(['allFoods', 'allFoodCategories'])
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/menu.scss";

@media screen and (max-width:1000px){
    .menu {    
        &__title-container {
            position: relative;
            padding-bottom: .5rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
        }

        &__add {
            position: static;
            margin-bottom: .5rem;
            margin-left: 1rem;
        }
    }
}

</style>