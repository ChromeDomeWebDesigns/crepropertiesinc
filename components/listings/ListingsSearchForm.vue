<template>
  <section>
    <listings-search-bar :filters="filters" @update="updateFilters" />
    <template v-if="showListings">
      <listings-grid :listings="listings" />
    </template>
    <listings-search-empty-state v-else :has-filters="hasFilters" />
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ListingsSearchBar from './ListingsSearchBar'
  import ListingsGrid from './ListingsGrid'
  import ListingsSearchEmptyState from './ListingsSearchEmptyState'

  const DEFAULT_FILTERS = {
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
    status: null,
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
        filters: DEFAULT_FILTERS
      }
    },
    computed: {
      ...mapGetters({ getListingsFromFilter: 'listings/getListingsFromFilter' }),
      listings() {
        return this.getListingsFromFilter(this.filters)
      },
      showListings() {
        return this.listings.length > 0
      },
      hasFilters() {
        return ['price', 'beds', 'baths'].some(key =>
          this.filters[key].min !== null ||
          this.filters[key].max !== null) ||
          this.filters.status !== null ||
          this.filters.search !== null;
      }
    },
    methods: {
      updateFilters(filters) {
        this.filters = {
          ...this.filters,
          ...filters
        }
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
