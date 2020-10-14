<template>
    <div class="menu__card">
        <div class="menu__details">
            <div class="menu__category-header">
                <span class="menu__category-name">{{category.name}}</span>
                <span class="menu__category-id">#{{category.index}}</span>
            </div>
            <div class="menu__category-desc">{{category.desc}}</div>
        </div>
        <div class="menu__button_cart">
            <label class="menu__edit primary-button" v-on:click="showModal(category.id,type)">Edit</label>
            <label class="menu__remove" v-on:click="removeCategory(category.id,type)">Remove</label>
        </div>
        <b-modal :id="'modal-edit-' + type + category.id" centered hide-footer :title="this.type == 'food' ? 'Edit Category Food' : 'Edit Category Beverage'">
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
                <span class="menu__modal__buttongroup__button destructive-secondary" @click="$bvModal.hide('modal-edit-'+type+category.id)">Cancel</span>
                <span class="menu__modal__buttongroup__button primary-button">Save</span>
            </div>
        </b-modal> 
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data: function(){
        return{
            name: null,
            desc: null,
        }
    },
    methods:{
        ...mapActions(['removeFoodCategory']),
        showModal(id,type){
            this.initData()
            this.$bvModal.show('modal-edit-' + type + id)
        },
        removeCategory(id,type){
            type=="food" ? this.removeFoodCategory({id: id}) : this.removeBeverageItem({id:id})
        },
        initData(){
            this.name = this.$props.category.name
            this.desc = this.$props.category.desc
        },
    },
    props:{
        category: Object,
        type: String,
    },
    computed:{
        ...mapGetters(['allFoodCategories','allDrinkCategories']),
    },
    created(){ 
        this.initData()
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/menu.scss";
</style>