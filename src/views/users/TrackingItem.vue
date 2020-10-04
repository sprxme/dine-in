<template>
<div class="tracking">
    <label class="tracking__label">Order ID: {{$route.params.id}}</label>
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
    computed: {...mapGetters(['allOrders', 'allFoods'])}
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



<!--
<template>
<div class="tracking">
    <label class="tracking__label">tracking id: {{$route.params.id}}</label>
    <div class="tracking__status">
        <div class="tracking__status__icon">
            <div class="tracking__status__icon__detail">
                <img class="tracking__status-icon" src="@/assets/about/logo2rev.png" />
                <font-awesome-icon icon="user-circle" class="tracking__status__icon__detail__checkpoint" />
            </div>
            <div class="tracking__status__icon__detail">
                <img class="tracking__status-icon" src="@/assets/about/logo2rev.png" />
                <font-awesome-icon icon="user-circle" class="tracking__status__icon__detail__checkpoint" />
            </div>
            <div class="tracking__status__icon__detail">
                <img class="tracking__status-icon" src="@/assets/about/logo2rev.png" />
                <font-awesome-icon icon="user-circle" class="tracking__status__icon__detail__checkpoint" />
            </div>
            <div class="tracking__status__icon__detail">
                <img class="tracking__status-icon" src="@/assets/about/logo2rev.png" />
                <font-awesome-icon icon="user-circle" class="tracking__status__icon__detail__checkpoint" />
            </div>
            <div class="tracking__status__icon__detail">
                <img class="tracking__status-icon" src="@/assets/about/logo2rev.png" />
                <font-awesome-icon icon="user-circle" class="tracking__status__icon__detail__checkpoint" />
            </div>
        </div>
        <div class="tracking__status__progress"></div>
        <div class="tracking__status__title">
            <span>Order not confirmed</span>
            <span>Order confirmed</span>
            <span>Preparing</span>
            <span>Ready to serve</span>
            <span>Served</span>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.tracking{
    padding: 10rem;

    &__label {
        font-size: 48px;
        color: black;
    }

    &__status {
        padding-top: 5em;
        display: flex;
        flex-direction: column;

        &__icon {
            display: grid;
            grid-template-columns: repeat(5,1fr);
            justify-items: center;
            &__detail {
                display: flex;
                flex-direction: column;
                align-items: center;
                &__checkpoint {
                    
                }
            }
        }

        &__progress {
            background: #333;
            //border-radius: 13px;
            height: 5px;
            width: 100%;
            &::after {
                content: '';
                display: block;
                background:lightgreen;
                width: 50%;
                height: 100%;
            }
        }

        &__title {
            display: grid;
            grid-template-columns: repeat(5,1fr);
            justify-items: center;
        }
    }

}
</style>

-->