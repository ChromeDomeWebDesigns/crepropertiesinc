<template>
  <div class="flex align-center search-bar-container">
    <div class="flex align-center filter-container">
      <price-filter class="filter" />
      <bed-filter class="filter" />
      <bath-filter class="filter" />
      <type-filter class="filter" />
    </div>
    <input placeholder="Search by address, city, state, or zip code" class="search" />
  </div>
</template>

<script>
  import PriceFilter from './filters/PriceFilter'
  import BedFilter from './filters/BedFilter'
  import BathFilter from './filters/BathFilter'
  import TypeFilter from './filters/TypeFilter'

  export default {
    name: 'ListingsSearchBar',
    components: {
      PriceFilter,
      BedFilter,
      BathFilter,
      TypeFilter
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
