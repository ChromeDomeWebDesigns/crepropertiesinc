<template>
  <div id="app">
    <top-nav />
    <article>
      <listings-header />
      <listings-search-form />
    </article>
    <bottom-footer />
  </div>
</template>

<script>
import { headBuilder } from '@/lib/seo'
import TopNav from '@/components/TopNav';
import ListingsHeader from '@/components/listings/ListingsHeader'
import ListingsSearchForm from '@/components/listings/ListingsSearchForm'
import BottomFooter from '@/components/BottomFooter'

export default {
  name: 'ListingsView',
  components: {
    TopNav,
    ListingsHeader,
    ListingsSearchForm,
    BottomFooter
  },
  head() {
    const title = 'Listings | CRE Properties'
    const site = 'https://crepropertiesinc.com/listings'

    return headBuilder({ title, site })
  },
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';

  article {
    background-color: color('white');
    color: color('black');
  }
</style>
