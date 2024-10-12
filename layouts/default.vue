<template>
  <div id="app">
    <top-nav />
    <nuxt />
    <bottom-footer />
  </div>
</template>

<script>
import TopNav from '@/components/TopNav'
  import BottomFooter from '@/components/BottomFooter'

  export default {
    name: 'DefaultLayout',
    components: {
      TopNav,
      BottomFooter
    },
  }
</script>

