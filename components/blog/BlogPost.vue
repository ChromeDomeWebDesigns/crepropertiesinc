<!-- eslint-disable vue/no-v-html -->
<template>
  <section class="page-margin blog-post">
    <nuxt-link to="/blog" class="back"><i class="fas fa-chevron-left" /></nuxt-link>
    <div class="copyright">
      <p><span class="nowrap">Published by <i class="fas fa-user" /> {{ fields.author }}</span> <span class="nowrap">on <i class="far fa-clock" /> {{ publishDate }}</span></p>
    </div>
    <div class="image-container" :style="heroImage" />
    <div class="content" v-html="$md.render(fields.body)" />
 </section>
</template>

<script>
  export default {
    name: 'BlogPost',
    props: {
      post: {
        type: Object,
        required: false,
        default: () => {}
      }
    },
    computed: {
      fields() {
        return this.post.fields || {}
      },
      heroImage() {
        const image = this.fields.heroImage?.fields?.file?.url

        return `background-image: url('${image}')`
      },
      publishDate() {
        return new Date(this.fields.publishDate).toLocaleDateString('en-us', { year:'numeric', month:'long', day:'numeric' })
      }
    }
  }
</script>

<style lang="scss">
  @import './assets/styles/breaks';
  @import './assets/styles/colors';

  .blog-post {
    max-width: breaks(desktop) !important;
    font-size: 1em;
    padding: 2rem;
    color: color('blackLight');

    @media (min-width: breaks(phone)) {
      font-size: 1.1em;
      padding: 3rem;
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

    .back {
      color: color('primary');

      &:hover {
        color: lighten(color('primary'), 10%);
      }

      .fa-chevron-left {
        font-size: 1em;
        margin-top: 0.5rem;
      }
    }

    .copyright {
      font-size: 0.7em;
      margin-top: 1rem;
      margin-bottom: 1rem;
      color: color('blackLight');

      @media (min-width: breaks(tablet)) {
        margin-top: 2rem;
        margin-bottom: 2rem;
      }

      @media (min-width: breaks(laptop)) {
        font-size: 0.6em
      }
    }

    .content {
      margin: auto;
      padding-top: 1rem;

      @media (min-width: breaks(tablet)) {
        padding-top: 2rem;
      }

      img {
        max-width: 100%;
        max-height: 40vh;
        margin: auto;
        width: auto;

        @media (min-width: breaks(phablet)) {
          max-height: breaks(phone);
        }
      }

      h1,h2,h3,h4,h5,h6 {
        color: color('primary');
        margin-bottom: 1rem;
      }

      h2 {
        font-size: 1.3em;
      }

      h3 {
        font-size: 1.1em;
      }

      h4 {
        font-size: 0.9em;
      }

      h5 {
        font-size: 0.7em;
      }

      h6 {
        font-size: 0.6em;
      }

      p,
      li {
        font-size: 0.6em;
        margin-bottom: 1rem;
      }
    }

    .image-container {
      height: 40vh;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      margin: auto;

      @media (min-width: breaks(tablet)) {
        width: 100%;
        height: 60vh;
      }
    }
  }

</style>
