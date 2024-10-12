<template>
  <article>
    <contact-header />
    <contact-content />
  </article>
</template>

<script>
import { headBuilder } from '@/lib/seo'
import ContactHeader from '@/components/contact/ContactHeader'
import ContactContent from '@/components/contact/ContactContent'

export default {
  name: 'ContactView',
  components: {
    ContactHeader,
    ContactContent,
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
