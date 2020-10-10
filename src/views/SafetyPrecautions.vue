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
    background: #0371e3;
    cursor: pointer;

    &__container {
        text-align: center;
        padding: .25rem 0 .5rem;
    }

    &__title {
        font-size: 13px;
        color: white;
        padding: 0 0.3rem;
        text-align: center;
    }

    &__chevron {
        color: white;
        font-size: 10px;
        font-weight: 200;
        padding-bottom: 1px;
    }

    &:hover {
        background: #1c7fe5;
        text-decoration: underline;
        text-decoration-color: white;
    }
}
</style>