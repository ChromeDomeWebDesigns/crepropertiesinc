<template>
  <main class="flex column flex-center">
    <div class="page-margin w-100">
      <div class="landing-square">
        <section class="flex column content">
          <h1>Family First Real Estate Investing</h1>
          <p>Located in St. Louis, MO we are dedicated to treating our clients and tenants as one of our own.</p>
        </section>
        <div class="flex align-center mt-2">
          <nuxt-link to="/properties" class="flex align-center btn-link mr-1 alt">View properties</nuxt-link>
          <nuxt-link to="/contact" class="flex align-center btn-link">Contact us</nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'LandingBlock'
  }
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  main {
    margin-top: 5rem;
    height: 90vh;
    background-color: color('primary');
    background-image: url('/images/Landing.jpg');
    background-size: cover;
    background-position: center;

    .landing-square {
      margin-top: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: rgba(color('primary'), 90%);
      width: 40vw;
      padding: 3rem 1rem;

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

        h1 {
          font-weight: 900;
          font-size: 1.3em;
          color: color('blackLight');

          @media (min-width: breaks(phone)) {
            font-size: 1.4em;
          }

          @media (min-width: breaks(tablet)) {
            font-size: 1.5em;
          }
        }

        p {
          color: color('white');
          margin-top: 1rem;
          font-size: 0.7em;
        }
      }

      .btn-link {
        background-color: transparent;
        color: color('white');
        border-color: color('white');
        padding: 0.75rem 1.5rem;
        font-weight: 600;
        font-size: 0.9em;

        &.alt {
          color: color('primary');
          background-color: color('white');
          border-color: color('white');
        }

        &:hover {
          background-color: lighten(color('primary'), 10%);
          border-color: lighten(color('primary'), 10%);

          &.alt {
            color: color('white');
          }
        }
      }
    }

    .page-margin {
      display: flex;
      justify-content: flex-end;
      padding: 1rem;

      @media (min-width: breaks(phone)) {
        padding: 3rem;
      }
    }
  }
</style>
