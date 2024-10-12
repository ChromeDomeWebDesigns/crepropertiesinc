<template>
  <div class="listing-card">
    <div class="image-container" :style="photo" />
    <p :class="status.color" class="small mt-50">{{ status.label }}</p>

    <div class="address">
      <p class="bold mb-0">{{ fields.addressLineOne }}</p>
      <p class="smaller">{{ fields.addressLineTwo }}</p>
    </div>

    <div class="details small">
      <p>{{ fields.beds }} bed • {{ fields.baths}} bath • {{ $options.prettyNumber(fields.sqft, 0) }} sqft</p>
      <p>${{ $options.prettyNumber(fields.price, 0) }} / month</p>
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
      fields() {
        return this.listing.fields
      },
      images() {
        return this.fields.images.map(({ fields }) => {
          return fields.file.url
        })
      },
      photo() {
        return `background-image: url("${this.images[0]}")`
      },
      status() {
        return (LISTING_STATUS_TYPE_ARRAY.find(({ value }) => value === this.fields.status)) || {}
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
