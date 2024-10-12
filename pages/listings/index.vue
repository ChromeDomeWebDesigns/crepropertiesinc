<template>
  <article>
    <listings-header />
    <listings-search-form />
  </article>
</template>

<script>
import { headBuilder } from '@/lib/seo'
import ListingsHeader from '@/components/listings/ListingsHeader'
import ListingsSearchForm from '@/components/listings/ListingsSearchForm'

export default {
  name: 'ListingsView',
  components: {
    ListingsHeader,
    ListingsSearchForm,
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
