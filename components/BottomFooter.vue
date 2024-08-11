<template>
  <footer class="flex column flex-center" :class="{ 'inverse': inverse }">
    <nuxt-link to="/" class="logo">
      <img :src="inverse ? '/images/Logo - Icon Color.png' : '/images/Logo - Icon White.png' " class="my-1">
    </nuxt-link>
    <div>
      <nuxt-link to="/about" class="link">About</nuxt-link>
      <nuxt-link to="/properties" class="link">Properties</nuxt-link>
      <nuxt-link to="/blog" class="link">Blog</nuxt-link>
      <nuxt-link to="/contact" class="link">Contact</nuxt-link>
      <a href="https://app.thereanalyzer.com/login" class="link">Tenant Portal</a>
    </div>
    <div class="flex align-center mt-1">
      <a href="https://www.tiktok.com/@crepropertiesinc" rel="noreferrer" target="_blank" aria-label="TikTok" class="icon"><i class="fab fa-tiktok" aria-hidden="true" /></a>
      <a href="https://www.instagram.com/crepropertiesinc/" rel="noreferrer" target="_blank" aria-label="Instagram" class="icon"><i class="fab fa-instagram" aria-hidden="true" /></a>
      <a href="https://www.youtube.com/channel/UCjC8hNuH9BtoR7AIPvdmmSA" rel="noreferrer" target="_blank" aria-label="YouTube" class="icon"><i class="fab fa-youtube" aria-hidden="true" /></a>
      <a href="https://www.facebook.com/people/CRE-Properties/100090341043783/" rel="noreferrer" target="_blank" aria-label="Facebook" class="icon"><i class="fab fa-facebook-f" aria-hidden="true" /></a>
      <a href="mailto:support@thereanalyzer.com" rel="noreferrer" aria-label="Email" class="icon"><i class="fas fa-envelope" aria-hidden="true" /></a>
      <a href="tel:+13142388408" rel="noreferrer" aria-label="Phone" class="icon"><i class="fas fa-phone" aria-hidden="true" /></a>
    </div>
    <p class="pt-50 smaller">
      Copyright © {{ year }} CRE Properties, LLC
    </p>
  </footer>
</template>

<script>
export default {
  name: 'BottomFooter',
  props: {
    inverse: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  footer {
    background-color: color('primary');
    color: color('white');

    &.inverse {
      background-color: color('white');
      color: color('primary');

      p,
      a {
        color: color('primary');
      }

      a:hover {
        color: lighten(color('primary'), 10%);
      }
    }

    img {
      min-height: 30px;
      max-height: 50px;
      height: calc(100vw / 33);
    }

    p {
      color: color('white');
    }

    a {
      font-size: 1.2em;
      margin: 0.5rem;
      color: color('white');
      transition: color 250ms;

      @media (min-width: breaks(phone)) {
        margin: 1rem;
      }

      &.link {
        font-size: 1em;

        @media (min-width: breaks(phablet)) {
          padding: 1.2em;
        }
      }

      &:hover {
        color: lighten(color('primary'), 30%);

        &.link {
          text-decoration: underline;
        }
      }
    }
  }
</style>
