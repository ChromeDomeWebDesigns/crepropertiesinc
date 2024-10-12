<template>
  <v-dropdown @auto-hide="update">
    <button class="toggle" :class="{ 'active': active }">Beds</button>

    <template #popper>
      <div class="popper">
        <label class="bold">Beds</label>
        <div class="flex align-center">
          <input v-model="formData.min" placeholder="Min" type="number" pattern="\d*" :class="{ 'error': errors.min }" />
          <input v-model="formData.max" placeholder="Max" type="number" pattern="\d*" :class="{ 'error': errors.max }" />
        </div>

        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

        <button @click="update">Save and close</button>
      </div>
    </template>
  </v-dropdown>
</template>

<script>
  import { hideAllPoppers } from 'floating-vue'

  const DEFAULT_ERRORS = {
    min: '',
    max: ''
  }

  export default {
    name: 'BedFilter',
    props: {
      filter: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        formData: { ...this.filter },
        errors: { ...DEFAULT_ERRORS },
        active: false
      }
    },
    computed: {
      errorMessage() {
        const errors = Object.values(this.errors)

        return errors ? errors[0] : ''
      }
    },
    methods: {
      validateForm() {
        this.errors = { ...DEFAULT_ERRORS }

        const min = parseInt(this.formData.min)
        const max = parseInt(this.formData.max)

        if (min && (isNaN(min) || min < 0)) {
          this.errors.min = 'Min must be > 0'
        }

        if (max && (isNaN(max) || max < 0)) {
          this.errors.max = 'Max must be > 0'
        }

        if (min > max) {
          this.errors.min = 'Max must be > Min'
          this.errors.max = 'Max must be > Min'
        }

        return !Object.values(this.errors).some(err => err)
      },
      update() {
        if (!this.validateForm()) {
          return
        }

        const min = parseInt(this.formData.min)
        const max = parseInt(this.formData.max)

        this.$emit('update', { min, max })
        this.active = Object.values(this.formData).some(val => val)
        hideAllPoppers()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';

  .toggle {
    background-color: transparent;
    color: color('primary');
    border-color: color('primary');
    font-weight: 600;
    font-size: 0.8em;
    padding: 0.75rem 1.5rem;

    &:hover,
    &:active,
    &:focus,
    &.active {
      outline: none;
      background-color: color('primary');
      color: color('white');
    }
  }

  .popper {
    padding: 1rem;
    max-width: 300px;

    label {
      margin-left: 0.25rem;
      color: color('primary');
    }

    input {
      padding: 0.65rem 1rem;
      margin: 0.25rem;
      border-width: 2px;
      border-color: transparent;

      &:hover,
      &:focus,
      &:active {
        outline: none;
        border-color: color('primary');
      }

      &.error {
        border-color: color('red');
      }
    }

    button {
      width: 100%;
      margin-top: 0.5rem;
      margin-left: 0.25rem;
      background-color: color('primary');
      color: color('white');
      border-color: color('primary');

      &:hover,
      &:active,
      &:focus {
        outline: none;
        background-color: lighten(color('primary'), 10%);
        border-color: lighten(color('primary'), 10%);
      }
    }

    .error-message {
      text-align: center;
      color: color('red');
    }
  }
</style>
