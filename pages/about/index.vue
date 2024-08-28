<template>
  <div id="app">
    <top-nav />
    <article>
      <about-header />
      <about-main-content />
      <meet-the-team-block :link="false" :inverse="true" />
      <work-with-us-block />
    </article>
    <bottom-footer />
  </div>
</template>

<script>
import { headBuilder } from '@/lib/seo'
import TopNav from '@/components/TopNav';
import AboutHeader from '@/components/about/AboutHeader'
import AboutMainContent from '@/components/about/AboutMainContent'
import MeetTheTeamBlock from '@/components/core/MeetTheTeamBlock'
import WorkWithUsBlock from '@/components/core/WorkWithUsBlock'
import BottomFooter from '@/components/BottomFooter'

export default {
  name: 'AboutView',
  components: {
    TopNav,
    AboutHeader,
    AboutMainContent,
    MeetTheTeamBlock,
    WorkWithUsBlock,
    BottomFooter
  },
  head() {
    const title = 'About | CRE Properties'
    const site = 'https://crepropertiesinc.com/about'

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
