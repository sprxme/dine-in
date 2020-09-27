<template>
    <div class="tracking">
        <label class="tracking__label">tracking id: {{$route.params.id}}</label>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.tracking{
    padding: 10rem;

    &__label{
        font-size: 48px;
        color: black;
    }
}
</style>