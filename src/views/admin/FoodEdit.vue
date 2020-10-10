<template>
    <div class="menu">
        <label class="menu__title">Food</label>
        <div class="menu__category" v-for="category in allFoodCategories" :key="category.id">
            <div class="menu__title-container">
                <span class="menu__title">{{category.name}}</span>
                <span class="menu__add primary-button" v-b-modal.modal-add-food>
                    <label class="menu__add__label">Add</label>  
                    <font-awesome-icon icon="plus" class="menu__tocart__icon"/> 
                </span>
            </div>
            <div class="menu__unavailable" v-if="!checkAvailability(category.name)">
                <span class="menu__unavailable__title">No items found.</span>
                <span class="menu__unavailable__subtitle">Menu items you added from the 'Add' button will appear here.</span>
            </div>
            <div class="menu__cards">
                <MenuCardEdit v-for="food in sortCategory(category.name)" :key="food.id" :menu="food" :type="'food'"/>
            </div>
        </div>
        <b-modal id="modal-add-food" centered hide-footer title="Add Food">
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
                <span class="menu__modal__buttongroup__button destructive-secondary">Cancel</span>
                <span class="menu__modal__buttongroup__button primary-button">Save</span>
            </div>
        </b-modal>
    </div>
</template>

<script>
import MenuCardEdit from '@/components/admin/AdminMenuCard';
import { mapGetters } from 'vuex';

export default {
    data: function(){
        return{
            selected: null,
        }
    },
    methods:{
        sortCategory: function(category){
            return this.allFoods.filter(function(food){
                return food.category == category;
            })
        },
        checkAvailability(categoryName) {
            return this.allFoods.some(drink => {
                return drink.category === categoryName
            })
        }
    },
    components:{
        MenuCardEdit
    },
    computed: mapGetters(['allFoods', 'allFoodCategories']),
}
</script>

<style lang="scss" scoped>
@import "@/styles/menu.scss";
</style>