<template>
  <section>
    <listings-search-bar />
  </section>
</template>

<script>
  import ListingsSearchBar from './ListingsSearchBar'

  export default {
    name: 'ListingsSearchForm',
    components: {
      ListingsSearchBar
    }
  }
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  section {
    margin-top: 5rem;
    max-width: breaks(laptop);
    margin: 5rem auto 0 auto;
    padding: 5rem 3rem;
    background-color: color('greyVLight');
  }
</style>
