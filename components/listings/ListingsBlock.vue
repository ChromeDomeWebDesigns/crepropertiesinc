<template>
<section>
  <div class="page-margin w-100">
    <div class="flex column flex-center content">
      <h2>Listings</h2>
    </div>
    <template v-if="showListings">
      <listings-grid :listings="listings" />
    </template>
    <listings-block-empty-state v-else />
  </div>
</section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ListingsGrid from './ListingsGrid'
  import ListingsBlockEmptyState from './ListingsBlockEmptyState'

  export default {
    name: 'ListingsBlock',
    components: {
      ListingsGrid,
      ListingsBlockEmptyState
    },
    computed: {
      ...mapGetters({ getSubsetOfListings: 'listings/getSubsetOfListings' }),
      listings() {
        return this.getSubsetOfListings(4)
      },
      hasNextPage() {
        return this.blogPosts.length > 4
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
    background-color: color('primary');

    .content {
      font-size: 1em;

      @media (min-width: breaks(phone)) {
        font-size: 1.1em;
      }

      @media (min-width: breaks(phablet)) {
        font-size: 1.3em;
      }

      @media (min-width: breaks(tablet)) {
        font-size: 1.5em;
      }

      @media (min-width: breaks(laptop)) {
        font-size: 1.8em;
      }

      h2 {
        font-weight: 900;
        font-size: 1.3em;
        margin-bottom: 2rem;
        color: color('white');

        @media (min-width: breaks(phone)) {
          font-size: 1.4em;
        }

        @media (min-width: breaks(tablet)) {
          font-size: 1.5em;
        }
      }
    }

    .page-margin {
      padding: 2rem;

      @media (min-width: breaks(phone)) {
        padding: 3rem;
      }
    }
  }
</style>
