<template>
  <div>
    {{ listing }}
  </div>
</template>

<script>
  export default {
    name: 'ListingCard',
    props: {
      listing: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
