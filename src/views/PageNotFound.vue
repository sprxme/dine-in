<template>
    <div class="PNF">
        <h1 class="PNF__title">The page you're looking for can't be found.</h1>
        <router-link class = "PNF__link" to="/">
            <label class="PNF__label">Go to home</label>
            <font-awesome-icon icon="chevron-right" class="PNF__icon" />
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.PNF{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 13.5em 10vw 10em;
    
    &__title{
        text-align: center;
        width: 502px;
        margin-bottom: 40px;
    }

    &__label{
        margin: 0;
        padding: 0 5px 0 0;
        font-weight: 600;
        font-size: 18px;
        cursor: pointer;
    }

    &__link{
        color: $route-color;
        display: flex;
        align-items: center;

        &:hover{
            color: $route-color-hover;
        }
    }

    &__icon{
        margin-top: 4px;
    }
}
</style>