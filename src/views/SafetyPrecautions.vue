<template>
  <div class="safety">
      <div class="safety__container">
        <span class="safety__title">COVID-19 Safety Precautions</span>
        <font-awesome-icon class="safety__chevron" icon="chevron-right" />
      </div>
  </div>
</template>

<script>
export default {
    name: 'safety-precautions'
}
</script>

<style lang="scss" scoped>
.safety {
    margin-top: 55px;
    background: $banner;
    transition: .1s;

    &__container {
        text-align: center;
        padding: .25rem 0 .5rem;
    }

    &__title {
        font-size: 13px;
        color: white;
        padding: 0 0.3rem;
        text-align: center;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
            text-decoration-color: white;
        }
    }

    &__chevron {
        color: white;
        font-size: 10px;
        font-weight: 200;
        padding-bottom: 1px;
    }

    
}
</style>