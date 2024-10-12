<template>
  <div class="listing-details">
    <listing-details-photos :images="listing.images" />

    <div class="header flex">
      <div>
        <h1 class="bold mb-0">{{ listing.address.lineOne }}</h1>
        <p>{{ listing.address.lineTwo }}</p>

        <p :class="status.color">{{ status.label }}</p>
      </div>

      <div class="flex align-center button-container">
        <nuxt-link to="/contact" class="btn-link mr-50 text-center flex-1">Request Information</nuxt-link>
        <a :to="listing.applicationLink" class="btn-link alt text-center flex-1">Apply Online</a>
      </div>
    </div>

    <div class="core-details details-row">
      <div>
        <label>Bedrooms</label>
        <p>{{ listing.beds }} bd.</p>
      </div>

      <div>
        <label>Bathrooms</label>
        <p>{{ listing.baths }} ba.</p>
      </div>

      <div>
        <label>Square feet</label>
        <p>{{ $options.prettyNumber(listing.sqft, 0) }} sqft.</p>
      </div>

      <div>
        <label>Monthly Rent</label>
        <p class="color-primary">${{ $options.prettyNumber(listing.price, 0) }}</p>
      </div>
    </div>

    <div class="property-details">
      <h5>Property Details</h5>

      <div class="details-grid">
        <div class="badge">
          <i :class="type.icon" />

          <div>
            <label>Type</label>
            <p>{{ type.label }}</p>
          </div>
        </div>

        <div class="badge">
          <i class="fas fa-money-check" />

          <div>
            <label>Deposit</label>
            <p>${{ $options.prettyNumber(listing.deposit, 0) }}</p>
          </div>
        </div>

        <div class="badge">
          <i class="fas fa-bed" />

          <div>
            <label>Bedrooms</label>
            <p>{{ listing.beds }} Bedrooms</p>
          </div>
        </div>

        <div class="badge">
          <i class="fas fa-bath" />

          <div>
            <label>Bathrooms</label>
            <p>{{ listing.baths }} Bathrooms</p>
          </div>
        </div>
      </div>
    </div>

    <div class="property-features">
      <h5>Features and Amenities</h5>

      <div class="details-grid">
        <div v-for="(feature, index) in listing.features" :key="index" class="badge">
          <i :class="feature.icon" />

          <div>
            <p>{{ feature.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ListingDetailsPhotos from './ListingDetailsPhotos'
  import { LISTING_STATUS_TYPE_ARRAY, LISTING_TYPE_ARRAY } from '@/lib/listings'
  import { prettyNumber } from '@/lib/utils'

  export default {
    name: 'ListingDetails',
    components: {
      ListingDetailsPhotos
    },
    props: {
      listing: {
        type: Object,
        required: true
      }
    },
    computed: {
      status() {
        return (LISTING_STATUS_TYPE_ARRAY.find(({ value }) => value === this.listing.status)) || {}
      },
      type() {
        return (LISTING_TYPE_ARRAY.find(({ value }) => value === this.listing.type)) || {}
      }
    },
    prettyNumber
  }
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';
  @import './assets/styles/breaks';

  .listing-details {
    min-height: 100vh;
    max-width: breaks(desktop);
    margin: 0 auto;
    padding: 3rem 1rem;

    @media (min-width: breaks(phablet)) {
      padding: 5rem 3rem;
    }

    .header {
      padding: 1rem 0;
      border-bottom: 1px solid color('grey');
      flex-direction: column;

      @media (min-width: breaks(tablet)) {
        flex-direction: row;
        align-items: center;
      }

      h1 {
        font-size: 1.8em;
      }

      .button-container {
        margin: 1rem 0;

        @media (min-width: breaks(tablet)) {
          margin: 0 0 0 auto;
        }

        .btn-link {
          background-color: transparent;
          color: color('primary');
          border-color: color('primary');
          font-size: 0.8em;
          padding: 0.75rem 1rem;

          @media (min-width: breaks(small-tablet)) {
            padding: 0.75rem 1.5rem;
          }

          &.alt {
            color: color('white');
            background-color: color('primary');
            border-color: color('primary');
          }

          &:hover {
            color: color('white');
            background-color: lighten(color('primary'), 10%);
            border-color: lighten(color('primary'), 10%);
          }
        }
      }
    }

    .details-row {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      grid-gap: 1rem;

      > div {
        flex: 1;
        margin: 0 0.5rem;

        &:first-child {
          margin: 0 0.5rem 0 0;
        }

        &:last-child {
          margin: 0 0 0 0.5rem;
        }
      }
    }

    .details-grid {
      display: grid;
      grid-auto-columns: 1fr;
      gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }

    .core-details {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      grid-gap: 1rem;
      font-size: 1.5em;
      padding: 2rem 0;
      border-bottom: 1px solid color('grey');

      > div {
        flex: 1;
        margin: 0 0.5rem;

        &:first-child {
          margin: 0 0.5rem 0 0;
        }

        &:last-child {
          margin: 0 0 0 0.5rem;
        }
      }

      label {
        font-size: 0.7em;
        color: color('blackLight');
        font-weight: normal;
      }
    }

    .property-details,
    .property-features {
      padding: 1rem 0;

      h5 {
        color: color('blackLight');
        font-weight: normal;
        font-size: 1.1em;
        margin: 1rem 0;
      }

      .badge {
        display: flex;
        align-items: center;
        border: 1px solid color('grey');
        border-radius: 8px;
        padding: 1.5rem;

        > div {
          flex: 1;
        }

        i {
          color: color('blackLight');
          font-size: 2.2em;
          margin-right: 1.5rem;
        }

        label {
          font-size: 0.8rem;
          color: color('blackLight');
          font-weight: normal;
        }

        p {
          font-size: 1.2em;
        }
      }
    }
  }
</style>


