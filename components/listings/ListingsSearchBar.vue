<template>
  <div class="flex align-center search-bar-container">
    <div class="flex align-center filter-container">
      <price-filter :filter="filters.price" class="filter" @update="$emit('update', { price: arguments[0] })" />
      <bed-filter :filter="filters.beds" class="filter" @update="$emit('update', { beds: arguments[0] })" />
      <bath-filter :filter="filters.baths" class="filter" @update="$emit('update', { baths: arguments[0] })"  />
      <status-filter :filter="filters.status" class="filter" @update="$emit('update', { status: arguments[0] })" />
    </div>
    <input v-model="search" placeholder="Search by address, city, state, or zip code" class="search" />
  </div>
</template>

<script>
  import PriceFilter from './filters/PriceFilter'
  import BedFilter from './filters/BedFilter'
  import BathFilter from './filters/BathFilter'
  import StatusFilter from './filters/StatusFilter'

  export default {
    name: 'ListingsSearchBar',
    components: {
      PriceFilter,
      BedFilter,
      BathFilter,
      StatusFilter
    },
    props: {
      filters: {
        type: Object,
        required: true
      }
    },
    computed: {
      search: {
        get() {
          return this.filters.search
        },
        set(val) {
          this.$emit('update', { search: val })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  .search-bar-container {
    margin: auto;
    flex-wrap: wrap;
    max-width: breaks(phone);

    @media (min-width: breaks(large-tablet)) {
      flex-wrap: nowrap;
      max-width: inherit;
      margin: 0 0.5rem;
    }

    .filter-container {
      justify-content: space-between;
      width: 100%;

      @media (min-width: breaks(large-tablet)) {
        width: inherit;
      }

      .filter {
        margin-right: 0;

        @media (min-width: breaks(large-tablet)) {
          margin-right: 0.5rem;
        }
      }
    }

    .search {
      border-width: 2px;
      border-color: transparent;
      padding: 0.65rem 1rem;
      margin: 0.5rem 0;

      @media (min-width: breaks(large-tablet)) {
        margin: 0;
      }

      &:hover,
      &:focus,
      &:active {
        outline: none;
        border-color: color('primary');
      }
    }
  }
</style>
