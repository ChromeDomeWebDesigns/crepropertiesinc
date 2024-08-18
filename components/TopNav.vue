<template>
  <section>
    <div class="flex align-center page-margin">
      <button class="mobile-nav-collapse ml-a" @click="showNav = !showNav">
        <i class="fas fa-bars" />
      </button>
      <nuxt-link to="/">
        <img src="/images/Logo - Full Color.png" class="my-1">
      </nuxt-link>
      <div class="collapse w-100" :class="{ 'show': showNav }">
        <nav class="links w-100">
          <nuxt-link to="/home">Home</nuxt-link>
          <nuxt-link to="/about">About</nuxt-link>
          <nuxt-link to="/listings">Listings</nuxt-link>
          <nuxt-link to="/blog">Blog</nuxt-link>
          <nuxt-link class="right" to="/contact">Contact Us</nuxt-link>
          <a href="https://app.thereanalyzer.com/login" class="btn-link">Tenant Portal</a>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'TopNav',
    data () {
    return {
        showNav: false
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  section {
    background-color: color('white');
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;

    .page-margin {
      flex-direction: row-reverse;

      @media (min-width: breaks(tablet)) {
        flex-direction: row;
      }
    }

    .mobile-nav-collapse {
      display: none;
    }

    img {
      min-height: 30px;
      max-height: 50px;
      height: calc(100vw / 33);
      padding-left: 1rem;

      @media (min-width: breaks(desktop)) {
        padding-left: 0;
      }
    }

    .links {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 1rem;
      font-size: 1em;
      transition: all 400ms;

      @media (min-width: breaks(laptop)) {
        font-size: 1.1em;
      }

      > a {
        color: color('primary');
        margin-left: 1rem;
        margin-right: 1rem;
        font-weight: 600;
        transition: all 250ms;

        &:hover,
        &.is-active {
          cursor: pointer;
          color: lighten(color('primary'), 10%);
        }

        &.right {
          margin-left: auto;
        }
      }

      .btn-link {
        background-color: color('primary');
        color: color('white');
        border-color: color('primary');

        padding: 0.5rem 1rem;
        font-weight: 600;
        margin-left: 1rem;
        margin-right: 0;
        font-size: 0.7em;

        @media (min-width: breaks(tablet)) {
          padding: 0.75rem 1.5rem;
        }

        @media (min-width: breaks(laptop)) {
          font-size: 0.8em;
        }

        @media (min-width: breaks(desktop)) {
          font-size: 0.9em;
        }

        &:hover {
          color: color('white');
          background-color: lighten(color('primary'), 10%);
          border-color: lighten(color('primary'), 10%);
        }
      }
    }

    @media (max-width: breaks(tablet)) {
      flex-direction: column;

      .mobile-nav-collapse {
        display: block;
        z-index: 1001;
        background-color: transparent;
        color: color('primary');
        border: 0;
        font-size: 1.8em;
        padding: 1.5rem;
      }

      .collapse {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        margin-top: 4rem;
        padding-bottom: 1rem;
        visibility: hidden;
        width: 100%;
        background-color: color('white');
        border-bottom: 2px solid color('primary');
        transition: all 400ms;
        transform-origin: left top;
        transform: scaleY(0);

        .links {
          opacity: 0;
          flex-direction: column;

          > a {
            margin: 0;

            &:not(.btn-link) {
              padding: 1rem;
            }

            &.btn-link {
              margin-top: 1rem;
            }
          }
        }

        &.show {
          opacity: 1;
          visibility: visible;
          transform: scaleY(100%);

          .links {
            opacity: 1;
          }
        }
      }
    }
  }
</style>
