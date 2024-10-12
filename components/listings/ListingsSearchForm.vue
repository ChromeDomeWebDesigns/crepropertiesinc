<template>
  <section>
    <listings-search-bar />
    <template v-if="showListings">
      <listings-grid :listings="listings" />
    </template>
    <listings-search-empty-state v-else />
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ListingsSearchBar from './ListingsSearchBar'
  import ListingsGrid from './ListingsGrid'
  import ListingsSearchEmptyState from './ListingsSearchEmptyState'

  const DEFAULT_FILTER = {
    price: {
      min: null,
      max: null
    },
    beds: {
      min: null,
      max: null
    },
    baths: {
      min: null,
      max: null
    },
    type: null,
    search: null
  }

  export default {
    name: 'ListingsSearchForm',
    components: {
      ListingsSearchBar,
      ListingsGrid,
      ListingsSearchEmptyState
    },
    data() {
      return {
        filter: DEFAULT_FILTER
      }
    },
    computed: {
      ...mapGetters({ getListingsFromFilter: 'listings/getListingsFromFilter' }),
      listings() {
        return this.getListingsFromFilter(this.filter)
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
