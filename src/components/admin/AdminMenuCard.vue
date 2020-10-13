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
            <label class="menu__edit primary-button">Edit</label>
            <label class="menu__remove" v-on:click="removeFood(menu.id,type)">Remove</label>
        </div>
    </div>
    <b-modal id="modal-edit" centered hide-footer title="Edit Food">
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
</transition>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props:{
        menu: Object,
        type: String,
    },
    methods:{
        ...mapActions(['removeFoodItem','removeBeverageItem']),
        removeFood(id,type){
            type=="food" ? this.removeFoodItem({id: id}) : this.removeBeverageItem({id:id})
        }
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