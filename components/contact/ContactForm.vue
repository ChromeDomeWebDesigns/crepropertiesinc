<template>
  <form
    id="contact-form"
    name="contact-form"
    method="POST"
    action="/contact"
    class="flex column"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="trySubmit"
  >
    <div class="mb-1">
      <input id="name" v-model="formData.name" name="name" :class="{ 'error': errors.name }" type="text" placeholder="Name" />
      <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
    </div>
    <div class="mb-1">
      <input id="email" v-model="formData.email" name="email" :class="{ 'error': errors.email }" type="text" placeholder="Email" />
      <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
    </div>
    <div class="mb-1">
      <textarea id="message" v-model="formData.message" name="message" :class="{ 'error': errors.message }" type="text" placeholder="Message" />
      <p v-if="errors.message" class="error-message">{{ errors.message }}</p>
    </div>

    <input type="hidden" name="form-name" value="contact-form" />
    <p hidden><label>Do not fill this out: <input name="bot-field" /></label></p>

    <button class="mt-25" type="submit">Submit</button>
    <transition name="response-message">
      <p v-if="response.message" class="response-message" :class="response.type">{{ response.message }}</p>
    </transition>
  </form>
</template>

<script>

  const DEFAULT_ERRORS = {
    name: '',
    email: '',
    message: '',
  }

  const DEFAULT_FORM = {
    name: '',
    email: '',
    message: '',
  }

  const DEFAULT_RESPONSE = {
    type: null,
    message: ''
  }

  const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  export default {
    name: 'ContactForm',
    data() {
      return {
        formData: { ...DEFAULT_FORM},
        response: { ...DEFAULT_RESPONSE },
        errors: { ...DEFAULT_ERRORS },
      }
    },
    methods: {
      validateForm() {
        this.errors = { ...DEFAULT_ERRORS }
        this.response = { ...DEFAULT_RESPONSE }

        if (!this.formData.name) {
          this.errors.name = 'Name is required'
        }

        if (!this.formData.email) {
          this.errors.email = 'Email is required'
        } else if (!(EMAIL_REGEX.test(this.formData.email))) {
          this.errors.email = 'Email must be a valid email'
        }

        if (!this.formData.message) {
          this.errors.message = 'Message is required'
        }

        return !Object.values(this.errors).some(err => err)
      },
      async trySubmit(event) {
        if (!this.validateForm()) {
          this.response = {
            type: 'error',
            message: `* Form has errors`
          }
          return
        }

        try {
          const form = event.target
          const body = new URLSearchParams(new FormData(form))

          const res = await fetch(form.action, { method: 'POST', body })

          if (res.ok) {
            this.response = {
              type: 'success',
              message: `Thank you! We will get back to you shortly!`
            }

            this.formData = DEFAULT_FORM
          } else {
            throw res
          }
        } catch {
          this.response = {
            type: 'error',
            message: `There seems to be a problem. Try again later!`
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  form {
    width: 100%;
    margin: auto;

    button {
      background-color: color('primary');
      color: color('white');
      border-color: color('primary');
      padding: 0.5rem 1rem;
      font-weight: 600;
      font-size: 0.5em;
      margin-left: auto;

      @media (min-width: breaks(tablet)) {
        padding: 0.75rem 1.5rem;
      }

      &:hover,
      &:focus,
      &:active {
        background-color: lighten(color('primary'), 10%);
        border-color: lighten(color('primary'), 10%);
      }
    }

    input.error,
    textarea.error {
      border-color: color('red');
    }

    .error-message {
      font-size: 0.5em;
      color: color('red');
    }

    .response-message {
      text-align: center;
      margin-top: 1rem;
      padding: 0.5rem;
      font-size: 0.6em;

      &.success {
        color: color('primary');
      }

      &.error {
        color: color('red');
      }
    }

    input,
    textarea {
      font-size: 0.7em;
    }
  }

  .response-message-enter-active,
  .response-message-leave-active {
    transition: opacity 400ms;
  }

  .response-message-enter,
  .response-message-leave-to {
    opacity: 0;
  }
</style>
