<template>
  <v-dropdown @auto-hide="update">
    <button class="toggle" :class="{ 'active': type !== 'all' }">Type</button>

    <template #popper>
      <div class="popper">
        <label class="bold">Type</label>
        <button class="option" :class="{ 'active': type === 'all' }" @click="setType('all')">All</button>
        <button class="option" :class="{ 'active': type === 'lease' }" @click="setType('lease')">For Lease</button>
        <button class="option" :class="{ 'active': type === 'sale' }"  @click="setType('sale')">For Sale</button>

        <button class="save" @click="update">Save and close</button>
      </div>
    </template>
  </v-dropdown>
</template>

<script>
  import { hideAllPoppers } from 'floating-vue'

  export default {
    name: 'TypeFilter',
    data() {
      return {
        type: 'all',
      }
    },
    methods: {
      setType(type) {
        this.type = type
      },
      update() {
        this.$emit('update', { type: this.type })
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
    margin: 0 0.5rem;

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
