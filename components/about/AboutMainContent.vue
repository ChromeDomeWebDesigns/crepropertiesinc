<template>
  <section class="page-margin">
    <div class="flex column flex-center">
      <h5>Our Legacy, Your Future</h5>
      <p>
        At CRE Properties, we are more than just a real estate company.
        We are a family-driven business that believes in the power of relationships and the importance of investing in what truly matters.
        Our mission is to build secure, lasting connections that foster growth and success for everyone we work with.
      </p>

      <h5>Our Philosophy: Family First</h5>
      <p>
        We understand that real estate is not just about transactions, it's about people, dreams, and the future.
        That's why we bring a family-first mindset into every deal we make.
        Whether you're buying your first home, expanding your investment portfolio, or looking for the perfect property for your business, we are committed to supporting you every step of the way.
        We take pride in making sure that you feel valued, understood, and confident in every decision.
      </p>
    </div>
    <div class="image-container">
      <img src="/images/heros/About_Us.jpg">
    </div>

    <div class="image-container">
      <img src="/images/heros/About_Us.jpg">
    </div>

    <div class="flex column flex-center">
      <h5 class="right">Why Choose Us?</h5>
      <p>
        In a crowded market, we stand apart by focusing on what matters most: you.
        Our approach is personal, and our dedication is unwavering.
        We don't just want to close deals; we want to build relationships that last.
        Our clients trust us not only because of our expertise but because of the care and attention we put into every interaction.
        With CRE Properties, you're not just a client; you're part of our family.
      </p>

      <h5 class="right">Join Us in Building a Secure Future</h5>
      <p>
        We invite you to learn more about how CRE Properties can help you achieve your real estate goals.
        Together, we can build a secure, prosperous future that reflects your values and aspirations.
        Let's invest in what truly matters.
      </p>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'AboutMainContent'
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
    padding: 2rem 0;
    font-size: 1em;
    margin-left: 2rem;
    margin-right: 2rem;

    @media (min-width: breaks(phone)) {
      font-size: 1.1em;
    }

    @media (min-width: breaks(phablet)) {
      font-size: 1.3em;
    }

    @media (min-width: breaks(tablet)) {
      padding: 3rem 0;
      grid-gap: 2rem;
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 1fr;
      font-size: 1.5em;
    }

    @media (min-width: breaks(laptop)) {
      padding: 3rem 1rem;
      grid-template-columns: 1fr 1fr;
      font-size: 1.8em;
    }

    @media (min-width: breaks(desktop)) {
      padding: 3rem;
      grid-gap: 3rem;
      font-size: 2em;
    }

    .image-container {
      width: 100%;
      margin: auto;

      img {
        margin: auto;
        max-width: breaks(phone);
        height: auto;
        width: 100%;

        @media (min-width: breaks(tablet)) {
          margin: 0;
          min-width: breaks(phone);
          max-width: initial;
        }
      }
    }

    h5 {
      font-size: 0.8em;
      font-weight: 600;
      color: color('primary');
      margin-bottom: 0.5rem;
      align-self: flex-start;

      &.right  {
        align-self: flex-end;
      }

      @media (min-width: breaks(phone)) {
        font-size: 0.9em;
      }
    }

    p {
      color: color('blackLight');
      font-size: 0.7em;

      &:first-of-type {
        margin-bottom: 1rem;

        @media (min-width: breaks(tablet)) {
          margin-bottom: 2rem;
        }
      }

      @media (min-width: breaks(laptop)) {
        font-size: 0.6em
      }
    }
  }
</style>
