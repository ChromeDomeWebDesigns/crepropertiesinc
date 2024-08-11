<template>
  <div class="flex column flex-center">
    <h1 class="px-1 text-center">{{ title }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'BlogPostHeader',
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  div {
    margin-top: 5rem;
    padding: 5rem 2rem 0 2rem;
    height: 10vh;
    font-size: 1em;

    @media (min-width: breaks(phone)) {
      font-size: 1.1em;
    }

    @media (min-width: breaks(phablet)) {
      height: 15vh;
      font-size: 1.3em;
    }

    @media (min-width: breaks(tablet)) {
      font-size: 1.5em;
    }

    @media (min-width: breaks(laptop)) {
      font-size: 1.8em;
    }

    @media (min-width: breaks(desktop)) {
      font-size: 2em;
    }

    h1 {
      max-width: breaks(desktop);
      font-weight: 900;
      font-size: 1.4em;

      @media (min-width: breaks(phone)) {
        font-size: 1.5em;
      }
    }

    p {
      width: 100%;
      font-size: 0.7em;

      @media (min-width: breaks(tablet)) {
        width: 80%;
      }
    }
  }
</style>
