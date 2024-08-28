<template>
  <div class="blog-grid-item flex-1 text-center" tabindex="0">
    <nuxt-link class="image-container" :to="url" :style="heroImage" />
    <div class="text flex column flex-center mt-1">
      <nuxt-link :to="url" class="blog-link">{{ fields.title }}</nuxt-link>
      <span class="color-grey my-50">{{ publishDate }}</span>
      <p class="color-blackLight">{{ fields.description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BlogPostPreview',
    props: {
      post: {
        type: Object,
        required: true
      }
    },
    computed: {
      fields() {
        return this.post.fields || {}
      },
      url() {
        return `/blog/${this.fields.slug}`
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
