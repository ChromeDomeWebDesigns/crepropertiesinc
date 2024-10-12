<template>
  <div class="listings-grid">
    <nuxt-link v-for="listing in listings" :key="listing.sys.id" :to="`/listings/${listing.sys.id}`">
      <listing-card :listing="listing" />
    </nuxt-link>
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
  @import './assets/styles/breaks';

  .listings-grid {
    display: grid;
    grid-auto-columns: 1fr;
    margin: 2rem 0;
    gap: 1rem;

    @media (min-width: breaks(phablet)) {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
</style>
