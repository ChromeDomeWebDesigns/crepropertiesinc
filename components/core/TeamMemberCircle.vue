<template>
  <div class="flex column align-center member-container">
    <div class="image-container mb-1" :style="memberImage"></div>
    <div class="text-center bio">
      <p class="bold name">{{ member.name }}</p>
      <p>{{ member.title }}</p>
      <p>{{ member.description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TeamMemberCircle',
    props: {
      member: {
        type: Object,
        required: true
      }
    },
    computed: {
      memberImage() {
        return `background-image: url('/images/${this.member.image}');`
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  .member-container {
    margin: 0 1rem;

    @media (min-width: breaks(phone)) {
      margin: 0 2rem;
    }

    @media (min-width: breaks(large-tablet)) {
      margin: 0 4rem;
    }
  }


  .image-container {
    background-color: color('white');
    border-radius: 50%;
    border: 3px solid color('blackLight');
    height: 8rem;
    width: 8rem;
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;

    @media (min-width: breaks(phone)) {
      border: 5px solid color('blackLight');
      height: 10rem;
      width: 10rem;
    }

    @media (min-width: breaks(phablet)) {
      height: 13rem;
      width: 13rem;
    }
  }

  .bio {
    max-width: 20rem;

    p {
      font-size: 0.8em;

      @media (min-width: breaks(phone)) {
        font-size: 0.9em;
      }

      @media (min-width: breaks(phablet)) {
        font-size: 1em;
      }
    }

    .name {
      font-size: 1.1em;
      color: color('blackLight');

      @media (min-width: breaks(phone)) {
        font-size: 1.2em;
      }

      @media (min-width: breaks(phablet)) {
        font-size: 1.4em;
      }
    }
  }
</style>
