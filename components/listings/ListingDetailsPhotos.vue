<template>
  <div>
    <template v-if="singlePhoto">
      <div class="single-image-container" :style="`background-image: url('${mainPhoto}')`" @click="showLightbox(0)" />
    </template>
    <template v-else>
      <div class="multi-image-grid">
        <div v-for="(image, index) in headerImages" :key="index" class="multi-image-container" :class="index === 0 ? 'grid-main' : `grid-${index}`">
          <img :src="image" @click="showLightbox(index)" />

          <button v-if="index === 0" class="see-all-button show-main" @click="showLightbox(0)"><i class="fas fa-th-large" /> <span class="ml-25">See all {{ images.length }} photos</span></button>
          <button v-if="index === 2" class="see-all-button show-3" @click="showLightbox(0)"><i class="fas fa-th-large" /> <span class="ml-25">See all {{ images.length }} photos</span></button>
          <button v-if="index === 4" class="see-all-button show-5" @click="showLightbox(0)"><i class="fas fa-th-large" /> <span class="ml-25">See all {{ images.length }} photos</span></button>
        </div>
      </div>
    </template>
    <client-only>
      <vue-easy-lightbox
        :imgs="images"
        :visible="lightboxVisible"
        :index="lightboxIndex"
        @hide="lightboxVisible = false"
      />
    </client-only>
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
    data() {
      return {
        lightboxIndex: 0,
        lightboxVisible: false
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
      },
    },
    methods: {
      showLightbox(index) {
        this.lightboxIndex = index
        this.lightboxVisible = true
      }
    },
    PLACEHOLDER_IMAGE: '/images/Placeholder.jpg'
  }
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  .single-image-container,
  .multi-image-container {
    cursor: pointer;
  }

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

      .see-all-button {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        background-color: color('white');
        border-color: color('white');

        &:hover {
          background-color: darken(color('white'), 10%);
          border-color: darken(color('white'), 10%);
        }

        &.show-main {
          display: block;

          @media (min-width: breaks(phablet)) {
            display: none;
          }
        }

        &.show-3 {
          display: none;

          @media (min-width: breaks(phablet)) {
            display: block;
          }

           @media (min-width: breaks(tablet)) {
            display: none;
           }
        }

        &.show-5 {
          display: none;

           @media (min-width: breaks(tablet)) {
            display: block;
           }
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        aspect-ratio: 1 / 1;
      }
    }
  }
</style>
