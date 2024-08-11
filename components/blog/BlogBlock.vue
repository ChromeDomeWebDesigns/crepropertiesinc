<template>
<section class="blog-block">
  <div class="page-margin w-100">
    <div class="flex column align-center content">
      <h2>Latest Posts</h2>
    </div>
    <div class="blog-grid">
      <blog-post-preview v-for="post in blogPosts" :key="post.fields.title" :post="post" />
    </div>
    <div class="flex column align-center content">
      <nuxt-link to="/blog" class="flex align-center btn-link">View All</nuxt-link>
    </div>
  </div>
</section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import BlogPostPreview from './BlogPostPreview'

  export default {
    name: 'BlogBlock',
    components: {
      BlogPostPreview
    },
    computed: {
      ...mapGetters({ getSubsetOfBlogPosts: 'blog/getSubsetOfBlogPosts' }),
      blogPosts() {
        return this.getSubsetOfBlogPosts(3)
      }
    }
  }
</script>

<style lang="scss">
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  .blog-block {
    background-color: color('greyLight');

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
        color: color('primary');

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

    .blog-grid {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      @media (min-width: breaks(tablet)) {
        flex-direction: row;
        flex-wrap: wrap;
      }

      .blog-grid-item {
        display: grid;
        padding: 0 0 1rem 0;
        margin: auto;

        @media (min-width: breaks(tablet)) {
          padding: 0 1rem 1rem 1rem;
          margin: 0;
        }

        .blog-link {
          font-weight: bold;
          color: color('primary');
          font-size: 1.5em;

          @media (min-width: breaks(tablet)) {
            font-size: 1.2em;
          }

          @media (min-width: breaks(laptop)) {
            font-size: 1.3em;
          }

          @media (min-width: breaks(desktop)) {
            font-size: 1.4em;
          }

          @media (min-width: breaks(desktop-wide)) {
            font-size: 1.5em;
          }

          &:hover {
            color: darken(color('primary'), 5%);
            text-decoration: underline;
          }
        }

        .image-container {
          width: 40vw;
          height: 40vw;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          margin: auto;

          @media (min-width: breaks(tablet)) {
            width: 20vw;
            height: 20vw;
          }
        }

        .text {
          justify-content: space-evenly;
          font-size: 0.7em;

          @media (min-width: breaks(phone)) {
            font-size: 0.8em;
          }

          @media (min-width: breaks(tablet)) {
            font-size: 1em;
          }
        }
      }
    }

    .btn-link {
      background-color: color('primary');
      color: color('white');
      border-color: color('primary');
      border-radius: 25px;
      padding: 0.5rem 1rem;
      font-weight: 600;
      font-size: 0.5em;

      @media (min-width: breaks(tablet)) {
        padding: 0.75rem 1.5rem;
      }

      &:hover {
        background-color: lighten(color('primary'), 10%);
        border-color: lighten(color('primary'), 10%);
      }
    }
  }
</style>
