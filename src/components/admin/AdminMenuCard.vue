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
                            <input class="field menu__modal__input" type="text" required v-model="name">
                            <span class="placeholder menu__modal__placeholder">Name</span>
                        </span>
                    </div>
                    <div class="custom__input">
                        <span class = "custom__input-row">
                            <input class="field menu__modal__input" type="text" required v-model="price">
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
                <span class="menu__desc-title">Description</span>
                <div class="custom__input input__textarea">
                    <span class = "custom__input-row">
                        <textarea class="menu__modal__input custom__textarea" type="text" required v-model="desc"/>
                        <!-- <span class="placeholder__textarea menu__modal__placeholder">Description</span> -->
                    </span>
                </div>
                <div class="menu__modal__buttongroup">
                    <span class="menu__modal__buttongroup__button destructive-secondary" @click="$bvModal.hide('modal-edit-'+menu.id)">Cancel</span>
                    <span class="menu__modal__buttongroup__button primary-button" @click="save">Save</span>
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
            name: null,
            price: null,
            desc: null,
            categoryOption: null,
        }
    },
    props:{
        menu: Object,
        type: String,
    },
    methods:{
        ...mapActions(['removeFoodItem','removeBeverageItem', 'editFood', 'editDrink']),
        removeFood(id,type){
            type=="food" ? this.removeFoodItem({id: id}) : this.removeBeverageItem({id:id})
        },
        onFileChange(e){
            const file = e.target.files[0];
            this.imageURL = URL.createObjectURL(file);
        },
        showModal(id){
            this.populateData()
            this.$bvModal.show('modal-edit-' + id)
        },
        populateData() {
            this.selected = this.$props.menu.category
            this.image = this.$props.menu.image
            this.name = this.$props.menu.name
            this.price = this.$props.menu.price
            this.desc = this.$props.menu.desc
        },
        resetData(){
            this.imageURL = null
        },
        save() {
            this.$bvModal.hide('modal-edit-' + this.menu.id)

            const editedMenu = { ...this.menu }
            editedMenu.name = this.name
            editedMenu.price = this.price
            editedMenu.category = this.selected
            editedMenu.desc = this.desc

            // if there is no edits, do exits this function and do nothing
            if (JSON.stringify(editedMenu) === JSON.stringify(this.menu)) { return }

            if (this.$props.type == 'food') {
                this.editFood({ menu: this.menu, editedMenu: editedMenu })
            } else {
                this.editDrink({ menu: this.menu, editedMenu: editedMenu })
            }
        }
    },
    created(){
        this.populateData()
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

.custom__input-row input:focus + .placeholder,
.custom__input-row input:valid + .placeholder{
    top: 7px;
    left: 2px;
    font-size: 14px;
    color: $text;
}
</style>