<template>
  <article>
    <blog-post-header :title="title" />
    <blog-post :post="post" />
    <blog-block />
    <work-with-us-block />
  </article>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { headBuilder } from '@/lib/seo'
  import BlogPost from '@/components/blog/BlogPost'
  import BlogPostHeader from '@/components/blog/BlogPostHeader'
  import BlogBlock from '@/components/blog/BlogBlock'
  import WorkWithUsBlock from '@/components/core/WorkWithUsBlock'

  export default {
    name: 'BlogPostView',
    components: {
      BlogPost,
      BlogPostHeader,
      BlogBlock,
      WorkWithUsBlock
    },
    data() {
      return {
        slug: this.$route.params.slug
      };
    },
    head() {
      const fields = this.post?.fields

      if (!fields) {
        return
      }

      const title =  `${fields.title} | CRE Properties`
      const description = fields.description
      const image = fields.heroImage?.fields?.file?.url
      const site = `https://crepropertiesinc.com.com/blog/${fields.slug}`

      return headBuilder({ title, description, image, site })
    },
    computed: {
      ...mapGetters({ getBlogPostBySlug: 'blog/getBlogPostBySlug' }),
      post() {
        return this.getBlogPostBySlug(this.slug)
      },
      title() {
        return this.post?.fields?.title || '404'
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';

  article {
    background-color: color('white');
    color: color('primary');
  }
</style>
