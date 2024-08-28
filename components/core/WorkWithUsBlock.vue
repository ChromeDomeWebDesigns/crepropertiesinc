<template>
  <section>
    <div class="flex column content">
      <h2>Build your <span class="highlight">Family's Future</span> with Us!</h2>
      <p>Reach out today to learn how you can get involved or how we can help you grow.</p>
      <div class="flex button-container">
        <nuxt-link to="/about" class="flex align-center btn-link">Contact us</nuxt-link>
      </div>
    </div>
    <div class="image-container" />
  </section>
</template>

<script>
  export default {
    name: 'WorkWithUsBlock',
  }
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  section {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-gap: 0;
    background-color: color('white');
    color: color('blackLight');

    @media (min-width: breaks(tablet)) {
      grid-gap: 2rem;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
    }

    @media (min-width: breaks(desktop)) {
      grid-gap: 3rem;
    }

    .image-container {
      height: 100%;
      background-color: color('primary');
      background-image: url('/images/Get_Started.jpg');
      background-size: cover;
      background-position: center;
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
      padding: 2rem;

      @media (min-width: breaks(phone)) {
        font-size: 1.1em;
        padding: 3rem;
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
        padding: 2rem;
      }

      @media (min-width: breaks(laptop)) {
        font-size: 1.6em;
        padding: 3rem;
      }

      @media (min-width: breaks(desktop)) {
        font-size: 1.8em;
      }
    }

    h2 {
      font-weight: 900;
      font-size: 1.3em;

      @media (min-width: breaks(phone)) {
        font-size: 1.4em;
      }

      @media (min-width: breaks(tablet)) {
        font-size: 1.5em;
      }


      .highlight {
        color: color('primary');
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
