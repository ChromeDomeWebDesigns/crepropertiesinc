<template>
  <v-dropdown @auto-hide="update">
    <button class="toggle" :class="{ 'active': status }">Status</button>

    <template #popper>
      <div class="popper">
        <label class="bold">Status</label>
        <button class="option" :class="{ 'active': !status }" @click="setStatus(null)">All</button>
        <button v-for="listingStatus in $options.LISTING_STATUS_TYPE_ARRAY" :key="listingStatus.value" class="option" :class="{ 'active': status === listingStatus.value }" @click="setStatus(listingStatus.value)">{{ listingStatus.label }}</button>
        <button class="save" @click="update">Save and close</button>
      </div>
    </template>
  </v-dropdown>
</template>

<script>
  import { hideAllPoppers } from 'floating-vue'
  import { LISTING_STATUS_TYPE_ARRAY } from '@/lib/listings'

  export default {
    name: 'StatusFilter',
    props: {
      filter: {
        type: String,
        required: false,
        default: null
      }
    },
    data() {
      return {
        status: this.filter,
      }
    },
    methods: {
      setStatus(status) {
        this.status = status
      },
      update() {
        this.$emit('update', this.status)
        hideAllPoppers()
      }
    },
    LISTING_STATUS_TYPE_ARRAY
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

    button {
      margin-left: 0.25rem;
      width: 100%;
      margin-top: 0.5rem;

    }

    .option {
      background-color: color('transparent');
      color: color('primary');
      border-color: color('primary');

      &:hover,
      &:active,
      &:focus,
      &.active {
        outline: none;
        background-color: color('primary');
        color: color('white');
      }
    }

    .save {
      margin-top: 1rem;
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
  }
</style>
