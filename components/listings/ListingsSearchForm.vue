<template>
  <section>
    <listings-search-bar />
    <listings-grid v-if="showListings" :listings="listings" />
    <listings-search-empty-state v-else />
  </section>
</template>

<script>
  import ListingsSearchBar from './ListingsSearchBar'
  import ListingsGrid from './ListingsGrid'
  import ListingsSearchEmptyState from './ListingsSearchEmptyState'
  import { MOCK_LISTINGS } from '@/lib/listings'

  export default {
    name: 'ListingsSearchForm',
    components: {
      ListingsSearchBar,
      ListingsGrid,
      ListingsSearchEmptyState
    },
    computed: {
      listings() {
        return MOCK_LISTINGS
      },
      showListings() {
        return this.listings.length > 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  section {
    min-height: 100vh;
    max-width: breaks(desktop);
    margin: 0 auto;
    padding: 3rem 1rem;
    background-color: color('greyVLight');

    @media (min-width: breaks(phablet)) {
      padding: 5rem 3rem;
    }
  }
</style>
