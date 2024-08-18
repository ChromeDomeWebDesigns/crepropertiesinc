<template>
  <section class="page-margin">
    <div class="contact">
      <div>
        <h5 class="uppercase">Get In Touch</h5>
        <p>Shoot us a call or drop an email!  Our hours and contact information can all be found below.</p>
      </div>
      <div>
        <h5 class="uppercase">Info</h5>
        <div>
          <p>Available 7 days a week</p>
          <p>From: 8:00am - 7:00pm</p>
          <p>Call us: (314) 238-8408</p>
          <p>E-mail: info@crepropertiesinc.com</p>
        </div>
      </div>
    </div>
    <div class="form">
      <div>
        <h5 class="uppercase">How Can We Help?</h5>
        <p>Interested in working with us? Have a question or need more information? Fill out this form, and we'll get back to you as soon as possible!</p>
      </div>
      <contact-form />
    </div>
  </section>
</template>

<script>
  import ContactForm from './ContactForm'

  export default {
    name: 'ContactContent',
    components: {
      ContactForm
    }
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

    h5 {
      font-size: 1em;
      font-weight: 600;
      color: color('primary');
      margin-bottom: 0.5rem;

      @media (min-width: breaks(phone)) {
        font-size: 1.1em;
      }

      @media (min-width: breaks(tablet)) {
        margin-bottom: 1rem;
      }
    }

    p {
      font-size: 0.7em;

      @media (min-width: breaks(laptop)) {
        font-size: 0.6em
      }
    }

    .contact,
    .form {
      > div:first-child {
        margin-bottom: 1rem;

        @media (min-width: breaks(tablet)) {
          margin-bottom: 2rem;
        }
      }
    }
  }
</style>
