<template>
    <div class="menu">
        <label class="menu__title">Beverage</label>
        <div class="menu__category" v-for="category in allDrinkCategories" :key="category.id">
            <div class="menu__title-container">
                <span class="menu__title">{{category.name}}</span>
                <span class="menu__add primary-button" v-b-modal.modal-beverage>
                    <label class="menu__add__label">Add</label>  
                    <font-awesome-icon icon="plus" class="menu__tocart__icon"/> 
                </span>
            </div>
            <div class="menu__unavailable" v-if="!checkAvailability(category.name)">
                <span class="menu__unavailable__title">No items found.</span>
                <span class="menu__unavailable__subtitle">Menu items you added from the 'Add' button will appear here.</span>
            </div>
            <div class="menu__cards">
                <MenuCardEdit v-for="drink in sortCategory(category.name)" :key="drink.id" :menu="drink" :type="'beverage'"/>
            </div>
        </div>
        <b-modal id="modal-beverage" centered hide-footer title="Add Beverage">
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
                        <b-form-select-option v-for="option in allDrinkCategories" :key="option.id" :value="option.name">
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
         <span class="menu__add__float primary-button" v-b-modal.modal-beverage> 
            <font-awesome-icon icon="plus" class="menu__tocart__icon__float" style="margin-right:0px"/> 
        </span>
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
            return this.allDrinks.filter(function(drink){
                return drink.category == category;
            })
        },
        checkAvailability(categoryName) {
            return this.allDrinks.some(drink => {
                return drink.category === categoryName
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