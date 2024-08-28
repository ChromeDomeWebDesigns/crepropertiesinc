<template>
  <div id="app">
    <top-nav />
    <article>
      <blog-header />
      <blog-grid />
      <work-with-us-block />
    </article>
    <bottom-footer />
  </div>
</template>

<script>
import { headBuilder } from '@/lib/seo'
import TopNav from '@/components/TopNav';
import BlogHeader from '@/components/blog/BlogHeader'
import BlogGrid from '@/components/blog/BlogGrid'
import WorkWithUsBlock from '@/components/core/WorkWithUsBlock'
import BottomFooter from '@/components/BottomFooter'

export default {
  name: 'BlogView',
  components: {
    TopNav,
    BlogHeader,
    BlogGrid,
    WorkWithUsBlock,
    BottomFooter
  },
  head() {
    const title = 'Blog | CRE Properties'
    const site = 'https://crepropertiesinc.com/blog'

    return headBuilder({ title, site })
  },
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';

  article {
    background-color: color('white');
    color: color('primary');
  }
</style>
