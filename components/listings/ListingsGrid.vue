<template>
  <div>
    <listing-card v-for="listing in listings" :key="listing.id" :listing="listing" />
  </div>
</template>

<script>
  import ListingCard from './ListingCard'

  export default {
    name: 'ListingsGrid',
    components: {
      ListingCard
    },
    props: {
      listings: {
        type: Array,
        required: false,
        default: () => []
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
