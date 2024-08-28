<template>
  <div class="flex column flex-center">
    <h1>About Us</h1>
    <p class="px-1 text-center">Who are we and what do we do?</p>
  </div>
</template>

<script>
  export default {
    name: 'AboutHeader'
  }
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  div {
    margin-top: 3rem;
    height: 30vh;
    background-color: color('primary');
    color: color('white');
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

    h1 {
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
