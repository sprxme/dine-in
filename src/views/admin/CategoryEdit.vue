<template>
    <div class="menu">
        <div class="menu__category-content">
            <span class="menu__category-controls">
                <span class="menu__category-title">FOOD</span>
                <span class="menu__category-add primary-button" v-b-modal.modal-add v-on:click="changeType('food')">
                    <label class="menu__add__label">ADD</label>  
                    <font-awesome-icon icon="plus" class="menu__category-icon"/> 
                </span>
            </span>
            <div class="menu__unavailable" v-if="!checkAvailability(allFoodCategories)">
                <span class="menu__unavailable__title">No categories found.</span>
                <span class="menu__unavailable__subtitle">Menu categories you added from the 'Add' button will appear here.</span>
            </div>
            <ul class="menu__cards">
                <CategoryCard v-for="category in allFoodCategories" :key="category.id" :category="category" :type="'food'"/>
            </ul>
        </div>
         <div class="menu__category-content">
             <span class="menu__category-controls">
                <span class="menu__category-title">BEVERAGE</span>
                <span class="menu__category-add primary-button" v-b-modal.modal-add v-on:click="changeType('beverage')">
                    <label class="menu__add__label">ADD</label>  
                    <font-awesome-icon icon="plus" class="menu__category-icon"/> 
                </span>
             </span>
             <div class="menu__unavailable" v-if="!checkAvailability(allDrinkCategories)">
                <span class="menu__unavailable__title">No categories found.</span>
                <span class="menu__unavailable__subtitle">Menu categories you added from the 'Add' button will appear here.</span>
            </div>
            <ul class="menu__cards">
                <CategoryCard v-for="category in allDrinkCategories" :key="category.id" :category="category" :type="'drink'"/>
            </ul>
        </div>
         <b-modal id="modal-add" centered hide-footer :title="this.type == 'food' ? 'Add Food Category' : 'Add Beverage Category'">
            <div class="menu__modal">
                <div class="custom__input">
                    <span class = "custom__input-row">
                        <input class="field menu__modal__input" type="text" required v-model="name">
                        <span class="placeholder menu__modal__placeholder">Name</span>
                    </span>
                </div>
                <span class="menu__desc-title">Description</span>
                <div class="custom__input input__textarea">
                    <span class = "custom__input-row">
                        <textarea class="menu__modal__input custom__textarea menu__category-textarea" type="text" required v-model="desc"/>
                    </span>
                </div>
            </div>
            <div class="menu__modal__buttongroup">
                <span class="menu__modal__buttongroup__button destructive-secondary" @click="$bvModal.hide('modal-add')">Cancel</span>
                <span class="menu__modal__buttongroup__button primary-button">Save</span>
            </div>
        </b-modal> 
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CategoryCard from '@/components/admin/CategoryCard'
export default {
    title: 'Admin - Category Edit',
    data: function(){
        return{
            name: null,
            desc: null,
            type: null,
        }
    },
    methods:{
        showModal(id){
            this.populateData()
            this.$bvModal.show('modal-edit-' + id)
        },
        changeType(type){
            this.type = type
        },
        checkAvailability(categories) {
            return categories.length
        },
    },
    components:{
        CategoryCard
    },
    computed:{
        ...mapGetters(['allFoodCategories','allDrinkCategories'])
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/menu.scss";
</style>