<template>
  <section class="flex column align-center">
    <img src="/images/Logo - Full Color.png" />
    <div class="flex align-center mt-1">
      <a href="https://www.tiktok.com/@crepropertiesinc" rel="noreferrer" target="_blank" aria-label="TikTok" class="icon"><i class="fab fa-tiktok" aria-hidden="true" /></a>
      <a href="https://www.instagram.com/crepropertiesinc/" rel="noreferrer" target="_blank" aria-label="Instagram" class="icon"><i class="fab fa-instagram" aria-hidden="true" /></a>
      <a href="https://www.youtube.com/channel/UCjC8hNuH9BtoR7AIPvdmmSA" rel="noreferrer" target="_blank" aria-label="YouTube" class="icon"><i class="fab fa-youtube" aria-hidden="true" /></a>
      <a href="https://www.facebook.com/people/CRE-Properties/100090341043783/" rel="noreferrer" target="_blank" aria-label="Facebook" class="icon"><i class="fab fa-facebook-f" aria-hidden="true" /></a>
      <a href="mailto:info@crepropertiesinc.com" rel="noreferrer" aria-label="Email" class="icon"><i class="fas fa-envelope" aria-hidden="true" /></a>
      <a href="tel:+13142388408" rel="noreferrer" aria-label="Phone" class="icon"><i class="fas fa-phone" aria-hidden="true" /></a>
    </div>
    <h3>Follow us!</h3>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  section {
    height: 100vh;
    margin: 20vh auto auto auto;
    font-size: 2em;

    img {
      height: 20vh;
      margin: 1rem auto;
    }
  }

  a {
    font-size: 1.2em;
    margin: 0.5rem;
    color: color('primary');
    transition: color 250ms;

    @media (min-width: breaks(phone)) {
      margin: 1rem;
    }

    &:hover {
      color: color('fontLight');
    }
  }

  h3 {
    font-size: 0.8em;
    font-style: italic;
    color: color('fontLight');
  }
</style>
