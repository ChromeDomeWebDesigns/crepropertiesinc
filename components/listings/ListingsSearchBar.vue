<template>
  <div class="flex align-center">
    <price-filter />
    <bed-filter />
    <bath-filter />
    <type-filter />
    <input placeholder="Search by name, address, city, state, or zip code" class="search" />
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

  .search {
    border-width: 2px;
    border-color: transparent;
    padding: 0.65rem 1rem;
    margin: 0 0.5rem;

    &:hover,
    &:focus,
    &:active {
      outline: none;
      border-color: color('primary');
    }
  }
</style>
