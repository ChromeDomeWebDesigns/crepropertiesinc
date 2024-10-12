<template>
  <div>
    <template v-if="singlePhoto">
      <div class="single-image-container" :style="`background-image: url('${mainPhoto}')`" />
    </template>
    <template v-else>
      <div class="multi-image-grid">
        <div v-for="(image, index) in headerImages" :key="index" class="multi-image-container" :class="index === 0 ? 'grid-main' : `grid-${index}`">
          <img :src="image || $options.PLACEHOLDER_IMAGE" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'ListingDetailsPhotos',
    props: {
      images: {
        type: Array,
        required: false,
        default: () => []
      }
    },
    computed: {
      mainPhoto() {
        return this.images[0] || this.$options.PLACEHOLDER_IMAGE
      },
      singlePhoto() {
        return this.images.length < 2
      },
      headerImages() {
        return this.images.slice(0, 5);
      }
    },
    PLACEHOLDER_IMAGE: '/images/Placeholder.jpg'
  }
</script>

<style lang="scss" scoped>
  @import './assets/styles/breaks';

  .single-image-container {
    height: 60vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .multi-image-grid {
    min-height: 40vh;
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "Main Main"
      "Main Main";

    @media (min-width: breaks(phablet)) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        "Main Main One"
        "Main Main Two";
    }

    @media (min-width: breaks(tablet)) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        "Main Main One Three"
        "Main Main Two Four";
    }

    .grid-main { grid-area: Main; }

    .grid-1 {
      grid-area: One;
      display: none;

      @media (min-width: breaks(phablet)) {
        display: block;
      }
    }

    .grid-2 {
      grid-area: Two;
      display: none;

      @media (min-width: breaks(phablet)) {
        display: block;
      }
    }

    .grid-3 {
      grid-area: Three;
      display: none;

      @media (min-width: breaks(tablet)) {
        display: block;
      }
    }

    .grid-4 {
      grid-area: Four;
      display: none;

      @media (min-width: breaks(tablet)) {
        display: block;
      }
    }

    .multi-image-container {
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        aspect-ratio: 1 / 1;
      }
    }
  }
</style>
