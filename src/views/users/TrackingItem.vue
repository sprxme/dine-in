<template>
<div class="tracking">
    <label class="tracking__label">Order ID: {{token.toUpperCase()}}</label>
    <div class="tracking__table">
        <div class="tracking__container" v-for="trackItem in allFoods" :key="trackItem.id">
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
                </div>
                <span class="tracking__container__status__text">{{trackItem.name}}</span>
                <span class="tracking__container__status__text">Preparing</span>
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

$default-size: 1em;
$custom-size: $default-size / 4;
$custom-size-redo: $default-size * 4;

@mixin size($width, $height) {
    height: $height;
    width: $width;
}

@mixin draw-progress($progress, $color) {
    .circle {
        .half-circle {
            border-color: $color;
        }
        .left-side {
            transform: rotate($progress * 3.6deg);
        }
        @if $progress <= 50 {
            .right-side {
                display: none;
            }
        } @else {
            clip: rect(auto, auto, auto, auto);
            .right-side {
                transform: rotate(180deg);
            }
        }
    }
}

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
        border: ($default-size / 10) solid #3498db;
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
        bottom: $custom-size-redo / 10;
        //color: #ecf0f1;
        cursor: default;
        display: block;
        font-size: $custom-size;
        left: $custom-size-redo / 10;
        //line-height: $custom-size-redo * .70;
        position: absolute;
        right: $custom-size-redo / 10;
        //text-align: center;
        top: $custom-size-redo / 10;
    }

    &.progress-number {
        @include draw-progress(20, #55db34);
    }
}

.tracking{
    padding-top: 6em;
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
            font-weight: 300;
            color: red;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
}
</style>

<!--

<template>
<div class="tracking">
    <label class="tracking__label">Order ID: {{token.toUpperCase()}}</label>
    <div class="tracking__table">
        <div class="tracking__container" v-for="trackItem in allFoods" :key="trackItem.id">
            <div class="tracking__container__status">
                <div class="tracking__container__status__image-cropper">
                    <img class ="tracking__container__status__image-cropper__image" src="@/assets/about/aboutimage.jpg"/>
                </div>
                <span class="tracking__container__status__text">{{trackItem.name}}</span>
                <span class="tracking__container__status__text">Preparing</span>
            </div>
        </div>
    </div>
</div>
</template>
<div class="tracking__container__progress-bar"></div>
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
.tracking{
    padding-top: 6em;
    &__label {
        font-size: 40px;
        font-weight: 550;
        text-align: center;
        width: 100%;
        // &::after {
        //     content: '';
        //     display: flex;
        //     margin: auto;
        //     background: $light-grey;
        //     width: 70%;
        //     height: 2px;
        // }
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
            font-weight: 300;
            color: red;
            display: flex;
            flex-direction: column;
            align-items: center;

            &__image-cropper {
                display: inline;
                height: 100%;
                width: auto;

                &__image {
                    width: 100px;
                    height: 100px;
                    position: relative;
                    overflow: hidden;
                    background: black;
                    border-radius: 50%;
                }
            }

        }

        &__progress-bar {
            background: #333;
            border-radius: 12px;
            overflow: hidden;
            height: 5px;
            width: 100%;
            &::after {
                content: 'ss';
                display: block;
                background:lightgreen;
                width: 36%;
                height: 100%;
                &::after {
                    content: '';
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

}
</style>

<template>
<div class="tracking">
    <label class="tracking__label">Order ID: {{token.toUpperCase()}}</label>
    <div class="tracking__table">
        <div class="tracking__container" v-for="trackItem in allFoods" :key="trackItem.id">
            <div class="tracking__container__menu-status">
                <span>{{trackItem.name}}</span>
                <span class="tracking__container__menu-status__status">Preparing</span>
            </div>
            <div class="tracking__container__progress-bar"></div>
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
.tracking{
    padding-top: 6em;
    &__label {
        font-size: 40px;
        font-weight: 550;
        text-align: center;
        width: 100%;
        // &::after {
        //     content: '';
        //     display: flex;
        //     margin: auto;
        //     background: $light-grey;
        //     width: 70%;
        //     height: 2px;
        // }
    }

    &__table {
        margin: 1em 2em 5em 2em;
    }

    &__container {     
        padding-top: 2em;
        display: flex;
        flex-direction: column;
    
        &__menu-status {
            display: flex;

            &__status {
                float: right;
                margin-left: auto;
                font-weight: 300;
                color: red;
            }
        }

        &__progress-bar {
            background: #333;
            border-radius: 12px;
            overflow: hidden;
            height: 5px;
            width: 100%;
            &::after {
                content: 'ss';
                display: block;
                background:lightgreen;
                width: 36%;
                height: 100%;
                &::after {
                    content: '';
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

}
</style>
-->