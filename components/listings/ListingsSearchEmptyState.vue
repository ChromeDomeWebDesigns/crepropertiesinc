<template>
  <div class="text-center">
    <i class="fas fa-home" />
    <h4>{{ title }}</h4>
    <p class="italic">{{ subTitle }}</p>
  </div>
</template>

<script>
  export default {
    name: 'ListingsBlockEmptyState',
    props: {
      hasFilters: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    computed: {
      title() {
        return this.hasFilters ? 'No search results' : 'No current listings'
      },
      subTitle() {
        return this.hasFilters ? 'Try changing the filters' : 'Be sure to check back later!'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  div {
    font-size: 2em;
    margin: 3rem auto 0 auto;
    max-width: breaks(tablet);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: color('white');
    padding: 10rem 2rem;
    color: color('primary');

    @media (min-width: breaks(phablet)) {
      padding: 10rem 5rem;
    }

    i {
      font-size: 1.8em;
    }

    h4 {
      font-size: 0.9em;
    }

    p {
      font-size: 0.7em;
    }
  }
</style>
