<template>
  <section class="page-margin">
    <div class="two-block one">
      <div class="flex column flex-center">
        <h3>Our Legacy, Your Future</h3>
        <p>
          At CRE Properties, we are more than just a real estate company.
          We are a family-driven business that believes in the power of relationships and the importance of investing in what truly matters.
          Our mission is to build secure, lasting connections that foster growth and success for everyone we work with.
        </p>

        <h3>Our Philosophy: Family First</h3>
        <p>
          We understand that real estate is not just about transactions, it's about people, dreams, and the future.
          That's why we bring a family-first mindset into every deal we make.
          Whether you're buying your first home, expanding your investment portfolio, or looking for the perfect property for your business, we are committed to supporting you every step of the way.
          We take pride in making sure that you feel valued, understood, and confident in every decision.
        </p>
      </div>
      <div class="image-container polaroid-1">
        <img src="/images/Polaroid.jpg">
      </div>
    </div>

    <div class="two-block two">
      <div class="image-container polaroid-2">
        <img src="/images/Polaroid_2.jpg">
      </div>

      <div class="flex column flex-center">
        <h3 class="right">Why Choose Us?</h3>
        <p>
          In a crowded market, we stand apart by focusing on what matters most: you.
          Our approach is personal, and our dedication is unwavering.
          We don't just want to close deals, we want to build relationships that last.
          Our clients trust us not only because of our expertise but because of the care and attention we put into every interaction.
          With CRE Properties, you're not just a client, you're part of our family.
        </p>

        <h3 class="right">Join Us in Building a Secure Future</h3>
        <p>
          We invite you to learn more about how CRE Properties can help you achieve your real estate goals.
          Together, we can build a secure, prosperous future that reflects your values and aspirations.
          Let's invest in what truly matters.
        </p>
      </div>
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

  .two-block {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    font-size: 1em;
    margin-left: 2rem;
    margin-right: 2rem;

    &.one {
      padding: 2rem 0 1rem 0;
    }

    &.two {
      padding: 1rem 0 2rem 0;
    }

    @media (min-width: breaks(phone)) {
      font-size: 1.1em;
    }

    @media (min-width: breaks(phablet)) {
      font-size: 1.3em;
    }

    @media (min-width: breaks(tablet)) {
      grid-gap: 2rem;
      grid-template-columns: 1fr 1fr;
      font-size: 1.5em;

      &.one,
      &.two {
        padding: 2rem 0;
      }
    }

    @media (min-width: breaks(laptop)) {
      font-size: 1.8em;

      &.one,
      &.two {
        padding: 2rem 1rem;
      }
    }

    @media (min-width: breaks(desktop)) {
      grid-gap: 3rem;
      font-size: 2em;

      &.one,
      &.two {
        padding: 3rem;
      }
    }

    .image-container {
      display: flex;
      justify-content: center;
      width: 100%;
      margin: auto;

      img {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        margin: auto;
        max-width: 200px;
        height: auto;
        width: 100%;

        @media (min-width: breaks(phablet)) {
          max-width: 250px;
        }

        @media (min-width: breaks(tablet)) {
          max-width: 300px;
        }

        @media (min-width: breaks(desktop)) {
          max-width: breaks(legacy-phone);
        }
      }

      &.polaroid-1 {
        order: -1;

        @media (min-width: breaks(tablet)) {
          order: initial;
        }

        img {
          transform: rotate(5deg);
        }
      }

      &.polaroid-2 img {
        transform: rotate(-5deg);
      }
    }

    h3 {
      font-size: 0.7em;
      font-weight: 600;
      color: color('primary');
      margin-bottom: 0.5rem;
      align-self: flex-start;

      &.right  {
        align-self: flex-end;
      }

      @media (min-width: breaks(phone)) {
        font-size: 0.8em;
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
