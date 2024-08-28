<template>
  <div class="text-center">
    <i class="fas fa-home" />
    <h4>No current listings</h4>
    <p class="italic">Be sure to check back later!</p>
  </div>
</template>

<script>
  export default {
    name: 'ListingsBlockEmptyState'
  }
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  div {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: color('white');
    padding: 5rem;
    color: color('primary');

    i {
      font-size: 1.8em;
    }

    h4 {
      font-size: 0.9em;
    }

    p {
      font-size: 0.7em;
    }
  }
</style>
