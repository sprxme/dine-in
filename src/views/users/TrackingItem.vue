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


<!--
<template>
<div class="tracking">
    <label class="tracking__label">tracking id: {{$route.params.id}}</label>
    <div class="tracking__status-container">
        <div class="tracking__status-name">
            <div class="tracking__status">
                <img class="tracking__status-icon" src="@/assets/about/logo2rev.png" />
                <font-awesome-icon icon="user-circle" class="cartpop__icon" />
                <span>Order not confirmed</span>
            </div>
            <div class="tracking__status">
                <img class="tracking__status-icon" src="@/assets/about/logo2rev.png" />
                <font-awesome-icon icon="user-circle" class="cartpop__icon" />
                <span>Order confirmed</span>
            </div>
            <div class="tracking__status">
                <img class="tracking__status-icon" src="@/assets/about/logo2rev.png" />
                <font-awesome-icon icon="user-circle" class="cartpop__icon" />
                <span>Preparing</span>
            </div>
            <div class="tracking__status">
                <img class="tracking__status-icon" src="@/assets/about/logo2rev.png" />
                <font-awesome-icon icon="user-circle" class="cartpop__icon" />
                <span>Ready to serve</span>
            </div>
            <div class="tracking__status">
                <img class="tracking__status-icon" src="@/assets/about/logo2rev.png" />
                <font-awesome-icon icon="user-circle" class="cartpop__icon" />
                <span>Served</span>
            </div>
        </div>
        <div class="tracking__status-progress"></div>
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

    &__status-name {
        display: grid;
        grid-template-columns: repeat(5,1fr);
    }

    &__status-container {
        padding-top: 1em;
        display: flex;
        flex-direction: column;
    }

    &__status {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__status-icon {
        width: 50 px;
        height: auto;
    }

    &__status-progress {
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

}
</style>
-->