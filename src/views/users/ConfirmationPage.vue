<template>
    <div class="confirm">
        Your tracking id: {{token}}
    </div>
</template>

<script>
export default {
   props: {
       token: String
   }
}
</script>

<style lang="scss" scoped>
.confirm{
    padding-top: 5em;
}
</style>