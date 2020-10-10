<template>
<div class="tracking">
    <label class="tracking__label">Order ID: {{token.toUpperCase()}}</label>
    <div class="tracking__table">
        <div class="tracking__container" v-for="trackItem in allOrders" :key="trackItem.id">
            <div class="tracking__container__status">
                <div class="set-size">
                    <div class="circle-wrapper progress-number">
                        <div class="image-cropper">
                            <img class="menu-image" src="@/assets/about/aboutimage.jpg"/>
                        </div>
                        <div class="circle">
                            <div class="left-side half-circle"></div>
                            <div class="right-side half-circle"></div>
                        </div>
                    </div>
                    <div class="circle-wrapper empty-progress-number">
                        <div class="circle">
                            <div class="left-side empty-half-circle"></div>
                            <div class="right-side empty-half-circle"></div>
                        </div>
                    </div>
                </div>
                <span class="tracking__menu-name">{{trackItem.name}}</span>
                <span class="tracking__progress-name">Preparing</span> <!-- order status-->
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    props: {
        token: String
    },
    computed: {
        ...mapGetters(['allOrders', 'allFoods'])
    }
}

</script>

<style lang="scss" scoped>

$size-divider: 20;
$progress-circle: #72DA41;
$empty-progress-circle: #D3D3D3;

.set-size {
    font-size: 10em;
}

.circle-wrapper {
    @include size($default-size, $default-size);
    float: left;
    margin: 15px;
    position: relative;

    .circle {
        @include size(100%, 100%);
        clip: rect(0, $default-size, $default-size, $default-size / 2);
        left: 0;
        position: absolute;
        top: 0;

        .half-circle {
            @include size(100%, 100%);
            border: ($default-size / $size-divider) solid $progress-circle;
            border-radius: 50%;
            clip: rect(0, $default-size / 2, $default-size, 0);
            left: 0;
            position: absolute;
            top: 0;
        }

        .empty-half-circle {
            @include size(100%, 100%);
            border: ($default-size / $size-divider) solid $empty-progress-circle;
            border-radius: 50%;
            clip: rect(0, $default-size / 2, $default-size, 0);
            left: 0;
            position: absolute;
            top: 0;
        }
    }

    .menu-image {
        height: 100%;
    }

    .image-cropper {
        overflow: hidden;
        border-radius: 50%;
        bottom: $custom-size-redo / $size-divider;
        left: $custom-size-redo / $size-divider;
        right: $custom-size-redo / $size-divider;
        top: $custom-size-redo / $size-divider;
        cursor: default;
        display: block;
        font-size: $custom-size;
        position: absolute;
    }

    &.progress-number {
        @include draw-progress(72, $progress-circle);
        z-index: 5;
    }
    &.empty-progress-number {
        @include draw-progress(100, $empty-progress-circle);
        position: absolute;
        z-index: 1;
    }
}

.tracking{
    padding-top: 3em;
    &__label {
        font-size: 40px;
        font-weight: 550;
        text-align: center;
        width: 100%;
    }

    &__table {
        margin: 1em 2em 5em 2em;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    &__container {     
        padding-top: 2em;
        margin: auto;
    
        &__status {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    &__menu-name {
        color: black;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    &__progress-name {
        color: gray;
        font-weight: 300;
        display: flex;
        flex-direction: column;
        text-align: center;
    }
}

@media screen and (min-width: 1000px){
    .tracking{
        &__table {
            margin: 1em 10em 5em 10em;
            grid-template-columns: repeat(3, 1fr);
        }
    }
}

@media screen and (min-width: 1500px){
    .tracking{
        &__table {
            margin: 1em 20em 5em 20em;
        }
    }
}

@media screen and (min-width: 2000px){
    .tracking{
        &__table {
            margin: 1em 30em 5em 30em;
        }
    }
}

@media screen and (min-width: 2500px){
    .tracking{
        &__table {
            margin: 1em 40em 5em 40em;
        }
    }
}

@media screen and (min-width: 3000px){
    .tracking{
        &__table {
            margin: 1em 50em 5em 50em;
        }
    }
}
</style>