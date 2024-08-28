<template>
  <div id="app">
    <top-nav />
    <article>
      <contact-header />
      <contact-content />
    </article>
    <bottom-footer />
  </div>
</template>

<script>
import { headBuilder } from '@/lib/seo'
import TopNav from '@/components/TopNav';
import ContactHeader from '@/components/contact/ContactHeader'
import ContactContent from '@/components/contact/ContactContent'
import BottomFooter from '@/components/BottomFooter'

export default {
  name: 'ContactView',
  components: {
    TopNav,
    ContactHeader,
    ContactContent,
    BottomFooter
  },
  head() {
    const title = 'Contact Us | CRE Properties'
    const site = 'https://crepropertiesinc.com/contact'

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
