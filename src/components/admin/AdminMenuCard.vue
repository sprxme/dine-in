<template>
<transition name="card-fade" tag="div">
    <div class="menu__card">
        <div class="menu__image-container">
            <img :src="require('@/assets/food/'+menu.image+'.jpg')" class="menu__image"> 
        </div>
        <div class="menu__details">
            <span class="menu__name">{{menu.name}}</span>
            <span class="menu__desc">{{menu.desc}}</span>
            <span class="menu__price">{{menu.price/1000}}k</span>
        </div>
        <div class="menu__button_cart">
            <label class="menu__edit primary-button" v-on:click="showModal(menu.id)">Edit</label>
            <label class="menu__remove" v-on:click="removeFood(menu.id,type)">Remove</label>
            <b-modal :id="'modal-edit-' + menu.id" centered hide-footer :title="this.type == 'food' ? 'Edit Food' : 'Edit Beverage' " @show="resetData" @hide="resetData">
                <label for="file-upload" class="menu__fileupload border">
                    <div v-show="!image" class="menu__fileupload__container">
                        <span for="file-upload" class="menu__fileupload__content">
                            <font-awesome-icon icon="image"  class="menu__fileupload__icon"/>
                            <span class="menu__fileupload__text">Edit image</span>
                        </span>
                        <input type="file" id="file-upload" accept="image/x-png,image/gif,image/jpeg" @change="onFileChange"/>
                    </div>
                    <img v-show="!imageURL" :src="require('@/assets/food/'+image+'.jpg')" class="menu__fileupload__image"/>
                    <img v-show="imageURL" :src="imageURL" class="menu__fileupload__image"/>
                </label>
                <div class="menu__modal">
                    <div class="custom__input">
                        <span class = "custom__input-row">
                            <input class="field menu__modal__input" type="text" required :value="menu.name">
                            <span class="placeholder menu__modal__placeholder">Name</span>
                        </span>
                    </div>
                    <div class="custom__input">
                        <span class = "custom__input-row">
                            <input class="field menu__modal__input" type="text" required :value="menu.price">
                            <span class="placeholder menu__modal__placeholder">Price</span>
                        </span>
                    </div>
                </div>
                <div class="menu__catselect">
                    <b-form-select v-model="selected" class="menu__catselect__select">
                        <b-form-select-option :value="null" disabled class="menu__catselect__select__title">Category</b-form-select-option>
                        <b-form-select-option v-for="option in categoryOption" :key="option.id" :value="option.name">
                            {{option.name}}
                        </b-form-select-option>
                    </b-form-select>
                </div>
                <div class="custom__input input__textarea">
                    <span class = "custom__input-row">
                        <textarea class="menu__modal__input custom__textarea" type="text" required :value="menu.desc"/>
                        <span class="placeholder__textarea menu__modal__placeholder">Description</span>
                    </span>
                </div>
                <div class="menu__modal__buttongroup">
                    <span class="menu__modal__buttongroup__button destructive-secondary" @click="$bvModal.hide('modal-edit-'+menu.id)">Cancel</span>
                    <span class="menu__modal__buttongroup__button primary-button" @click="$bvModal.hide('modal-edit-'+menu.id)">Save</span>
                </div>
            </b-modal>
        </div>
    </div>
</transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data: function(){
        return{
            selected: null,
            image: null,
            imageURL: null,
            categoryOption: null,
        }
    },
    props:{
        menu: Object,
        type: String,
    },
    methods:{
        ...mapActions(['removeFoodItem','removeBeverageItem']),
        removeFood(id,type){
            type=="food" ? this.removeFoodItem({id: id}) : this.removeBeverageItem({id:id})
        },
        onFileChange(e){
            const file = e.target.files[0];
            this.imageURL = URL.createObjectURL(file);
        },
        showModal(id){
            this.$bvModal.show('modal-edit-' + id)
        },
        resetData(){
            this.imageURL = null
        },
    },
    created(){
        this.selected = this.$props.menu.category;
        this.image = this.$props.menu.image;
    },
    mounted(){
        this.categoryOption = this.$props.type == 'food' ? this.allFoodCategories : this.allDrinkCategories
    },
    computed:{
        ...mapGetters(['allFoodCategories', 'allDrinkCategories'])
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/menu.scss';

.menu {
    &__edit {
        margin-bottom: 0;
        padding: .4em 1.2em;
    }

    &__remove {
        margin-top: .7rem;
        padding: .4em 1.2em;
    }
}

@media screen and (max-width: 480px){
    .menu {
        &__edit {
            font-size: 14px;
            padding: .4em 1.2em;
            margin: 1rem .5rem 0;
        }

        &__remove {
            font-size: 14px;
            padding: .4em 1.2em;
            margin: .5rem .5rem .5rem;
        }
    }
}

@media screen and (max-width: 350px){
    .menu {
        &__edit {
            margin-top: .3rem;
        }
    }
}
</style>