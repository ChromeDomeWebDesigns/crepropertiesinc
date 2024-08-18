<template>
<section class="blog-list">
  <div class="page-margin w-100">
    <div class="blog-grid">
      <blog-post-preview v-for="post in blogPosts" :key="post.title" :post="post" />
    </div>
    <div v-if="hasNextPage" class="flex column align-center content">
      <button class="flex align-center">View More</button>
    </div>
  </div>
</section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import BlogPostPreview from './BlogPostPreview'

  export default {
    name: 'BlogGrid',
    components: {
      BlogPostPreview
    },
    computed: {
      ...mapGetters({ getSubsetOfBlogPosts: 'blog/getSubsetOfBlogPosts' }),
      blogPosts() {
        return this.getSubsetOfBlogPosts(6)
      },
      hasNextPage() {
        return this.blogPosts.length > 6
      }
    }
  }
</script>

<style lang="scss">
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  .blog-list {
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
            color: lighten(color('primary'), 10%);
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

    button {
      background-color: color('secondary');
      color: color('black');
      border-color: color('secondary');

      padding: 0.75rem 1.5rem;
      font-weight: 600;
      font-size: 0.5em;

      &:hover {
        background-color: lighten(color('secondary'), 10%);
        border-color: lighten(color('secondary'), 10%);
      }
    }
  }
</style>
