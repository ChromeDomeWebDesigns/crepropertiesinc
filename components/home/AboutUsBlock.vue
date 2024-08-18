<template>
  <section>
    <div class="flex column content">
      <h4>Legacy</h4>
      <h3>Investing in what matters</h3>
      <p>
        At CRE Properties, we believe that real estate is more than just transactions.
        It's about building secure, lasting relationships that empower growth for everyone we work with.
        By bringing our family-first mindset into every deal, we not only stand apart from the competition, but also ensure that our customers feel supported, valued, and confident in every decision they make with us.
      </p>
      <div class="flex button-container">
        <nuxt-link to="/about" class="flex align-center btn-link">Learn more</nuxt-link>
      </div>
    </div>
    <div class="image-container">
      <img src="/images/Polaroid.jpg">
    </div>
  </section>
</template>

<script>
  export default {
    name: 'AboutUsBlock',
  }
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  section {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-gap: 1rem;
    padding: 3rem 2rem;
    background-color: color('white');
    color: color('blackLight');

    @media (min-width: breaks(phone)) {
      padding: 4rem 3rem;
    }

    @media (min-width: breaks(tablet)) {
      grid-gap: 2rem;
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 1fr;
      padding: 3rem 2rem;
    }

    @media (min-width: breaks(laptop)) {
      grid-template-columns: 1fr 1fr;
      padding: 5rem;
    }

    @media (min-width: breaks(desktop)) {
      grid-gap: 3rem;
    }

    .image-container {
      width: 100%;
      margin: auto;
      order: -1;

      img {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        transform: rotate(-5deg);
        margin: auto;
        max-width: breaks(phone);
        height: auto;
        width: 100%;

        @media (min-width: breaks(tablet)) {
          margin: 0;
        }
      }
    }

    .content {
      width: 100%;
      max-width: breaks(tablet);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 1em;
      margin: auto;

      @media (min-width: breaks(phone)) {
        font-size: 1.1em;
      }

      @media (min-width: breaks(phablet)) {
        font-size: 1.3em;
      }

      @media (min-width: breaks(tablet)) {
        font-size: 1.5em;
        width: 50vw;
        justify-content: initial;
        align-items: initial;
        text-align: initial;
      }

      @media (min-width: breaks(laptop)) {
        font-size: 1.6em;
      }

      @media (min-width: breaks(desktop)) {
        font-size: 1.8em;
      }

      @media (min-width: breaks(desktop-wide)) {
        font-size: 2em;
      }
    }

    h3 {
      font-weight: 900;
      font-size: 1.1em;

      @media (min-width: breaks(phone)) {
        font-size: 1.3em;
      }

      @media (min-width: breaks(laptop)) {
        font-size: 1.5em;
      }
    }

    h4 {
      font-weight: 900;
      font-size: 0.5em;

      @media (min-width: breaks(phone)) {
        font-size: 0.6em;
      }

      @media (min-width: breaks(laptop)) {
        font-size: 0.7em;
      }
    }

    p {
      margin-top: 0.5rem;
      width: 100%;
      font-size: 0.7em;

      @media (min-width: breaks(tablet)) {
        width: 80%;
      }

      @media (min-width: breaks(laptop)) {
        margin-top: 1rem;
      }
    }

    .button-container {
      margin-top: 1rem;

      @media (min-width: breaks(laptop)) {
        margin-top: 2rem;
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
