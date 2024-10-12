<template>
  <article>
    <landing-block />
    <about-us-block />
    <listings-block />
    <meet-the-team-block />
    <blog-block />
    <work-with-us-block />
  </article>
</template>

<script>
import LandingBlock from '@/components/home/LandingBlock'
import AboutUsBlock from '@/components/home/AboutUsBlock'
import ListingsBlock from '@/components/listings/ListingsBlock'
import MeetTheTeamBlock from '@/components/core/MeetTheTeamBlock'
import BlogBlock from '@/components/blog/BlogBlock'
import WorkWithUsBlock from '@/components/core/WorkWithUsBlock'

export default {
  name: 'HomeView',
  components: {
    LandingBlock,
    AboutUsBlock,
    ListingsBlock,
    MeetTheTeamBlock,
    BlogBlock,
    WorkWithUsBlock,
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
