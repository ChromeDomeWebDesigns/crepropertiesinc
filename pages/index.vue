<template>
  <div id="app">
    <top-nav />
    <article>
      <landing-block />
      <about-us-block />
      <properties-block />
      <meet-the-team-block />
      <blog-block />
      <work-with-us-block />
    </article>
    <bottom-footer />
  </div>
</template>

<script>
import TopNav from '@/components/TopNav'
import LandingBlock from '@/components/home/LandingBlock'
import AboutUsBlock from '@/components/home/AboutUsBlock'
import PropertiesBlock from '@/components/home/PropertiesBlock'
import MeetTheTeamBlock from '@/components/core/MeetTheTeamBlock'
import BlogBlock from '@/components/blog/BlogBlock'
import WorkWithUsBlock from '@/components/core/WorkWithUsBlock'
import BottomFooter from '@/components/BottomFooter'

export default {
  name: 'HomeView',
  components: {
    TopNav,
    LandingBlock,
    AboutUsBlock,
    PropertiesBlock,
    MeetTheTeamBlock,
    BlogBlock,
    WorkWithUsBlock,
    BottomFooter
  }
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';

  article {
    background-color: color('primary');
    color: color('white');
  }
</style>
