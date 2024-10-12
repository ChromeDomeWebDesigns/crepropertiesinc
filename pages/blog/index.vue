<template>
  <article>
    <blog-header />
    <blog-grid />
    <work-with-us-block />
  </article>
</template>

<script>
import { headBuilder } from '@/lib/seo'
import BlogHeader from '@/components/blog/BlogHeader'
import BlogGrid from '@/components/blog/BlogGrid'
import WorkWithUsBlock from '@/components/core/WorkWithUsBlock'

export default {
  name: 'BlogView',
  components: {
    BlogHeader,
    BlogGrid,
    WorkWithUsBlock,
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
