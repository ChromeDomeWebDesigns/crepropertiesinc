<template>
  <div class="listing-card">
    <div class="image-container" :style="photo" />
    <p :class="status.color" class="small mt-50">{{ status.label }}</p>

    <div class="address">
      <p class="bold mb-0">{{ listing.address.lineOne }}</p>
      <p class="smaller">{{ listing.address.lineTwo }}</p>
    </div>

    <div class="details small">
      <p>{{ listing.beds }} bed • {{ listing.baths}} bath • {{ $options.prettyNumber(listing.sqft, 0) }} sqft</p>
      <p>${{ $options.prettyNumber(listing.price, 0) }} / month</p>
    </div>
  </div>
</template>

<script>
  import { LISTING_STATUS_TYPE_ARRAY } from '@/lib/listings'
  import { prettyNumber } from '@/lib/utils'

  export default {
    name: 'ListingCard',
    props: {
      listing: {
        type: Object,
        required: true
      }
    },
    computed: {
      photo() {
        return `background-image: url("${this.listing.images[0]}")`
      },
      status() {
        return (LISTING_STATUS_TYPE_ARRAY.find(({ value }) => value === this.listing.status)) || {}
      }
    },
    prettyNumber
  }
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';

  .listing-card {
    display: grid;
    grid-template-rows: 20vh max-content auto;
    padding: 1rem;
    border-radius: 8px;
    background-color: color('white');
    color: color('black');
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.3s;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 30px;
    }

    .image-container {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .address {
      padding-bottom: 0.5rem;
      border-bottom: 1px solid color('grey');
    }

    .details {
      padding-top: 0.5rem;
    }
  }
</style>
