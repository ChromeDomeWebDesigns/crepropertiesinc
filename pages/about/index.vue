<template>
  <article>
    <about-header />
    <about-main-content />
    <meet-the-team-block :link="false" :inverse="true" />
    <work-with-us-block />
  </article>
</template>

<script>
import { headBuilder } from '@/lib/seo'
import AboutHeader from '@/components/about/AboutHeader'
import AboutMainContent from '@/components/about/AboutMainContent'
import MeetTheTeamBlock from '@/components/core/MeetTheTeamBlock'
import WorkWithUsBlock from '@/components/core/WorkWithUsBlock'

export default {
  name: 'AboutView',
  components: {
    AboutHeader,
    AboutMainContent,
    MeetTheTeamBlock,
    WorkWithUsBlock,
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
