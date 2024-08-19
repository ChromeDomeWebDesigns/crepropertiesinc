<template>
  <section>
    <listings-search-bar />
    <listings-search-empty-state />
  </section>
</template>

<script>
  import ListingsSearchBar from './ListingsSearchBar'
  import ListingsSearchEmptyState from './ListingsSearchEmptyState'

  export default {
    name: 'ListingsSearchForm',
    components: {
      ListingsSearchBar,
      ListingsSearchEmptyState
    }
  }
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  section {
    min-height: 100vh;
    max-width: breaks(laptop);
    margin: 5rem auto 0 auto;
    padding: 3rem 1rem;
    background-color: color('greyVLight');

    @media (min-width: breaks(phablet)) {
      padding: 5rem 3rem;
    }
  }
</style>
