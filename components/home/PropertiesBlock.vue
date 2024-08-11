<template>
<main>
  <div class="page-margin w-100">
    <div class="flex column flex-center content">
      <h2>Properties</h2>
    </div>
  </div>
</main>
</template>

<script>
  export default {
    name: 'PropertiesBlock'
  }
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  main {
    background-color: color('primary');

    .content {
      font-size: 1em;

      @media (min-width: breaks(phone)) {
        font-size: 1.1em;
      }

      @media (min-width: breaks(phablet)) {
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

      h2 {
        font-weight: 900;
        font-size: 1.3em;
        margin-bottom: 2rem;
        color: color('blackLight');

        @media (min-width: breaks(phone)) {
          font-size: 1.4em;
        }

        @media (min-width: breaks(tablet)) {
          font-size: 1.5em;
        }
      }
    }

    .page-margin {
      padding: 2rem;

      @media (min-width: breaks(phone)) {
        padding: 3rem;
      }
    }
  }
</style>
