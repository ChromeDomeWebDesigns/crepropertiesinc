<template>
  <div class="listing-details">
    <listing-details-photos :images="images" />

    <div class="header flex">
      <div>
        <h1 class="bold mb-0">{{ fields.addressLineOne }}</h1>
        <p>{{ fields.addressLineTwo }}</p>

        <p :class="status.color">{{ status.label }}</p>
      </div>

      <div class="flex align-center button-container">
        <nuxt-link to="/contact" class="btn-link mr-50 text-center flex-1">Request Information</nuxt-link>
        <a v-if="isActive" :href="fields.applicationLink" target="_blank" class="btn-link alt text-center flex-1">Apply Online</a>
      </div>
    </div>

    <div class="core-details details-grid">
      <div>
        <label>Bedrooms</label>
        <p>{{ fields.beds }} bd.</p>
      </div>

      <div>
        <label>Bathrooms</label>
        <p>{{ fields.baths }} ba.</p>
      </div>

      <div>
        <label>Square feet</label>
        <p>{{ $options.prettyNumber(fields.sqft, 0) }} sqft.</p>
      </div>

      <div>
        <label>Monthly Rent</label>
        <p class="color-primary">${{ $options.prettyNumber(fields.price, 0) }}</p>
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
            <p>${{ $options.prettyNumber(fields.deposit, 0) }}</p>
          </div>
        </div>

        <div class="badge">
          <i class="fas fa-bed" />

          <div>
            <label>Bedrooms</label>
            <p>{{ fields.beds }} Bedrooms</p>
          </div>
        </div>

        <div class="badge">
          <i class="fas fa-bath" />

          <div>
            <label>Bathrooms</label>
            <p>{{ fields.baths }} Bathrooms</p>
          </div>
        </div>
      </div>
    </div>

    <div class="property-features">
      <h5>Features and Amenities</h5>

      <div class="details-grid">
        <div v-for="(feature, index) in features" :key="index" class="badge">
          <i :class="feature.icon" />

          <div>
            <p>{{ feature.label }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="property-utilities">
      <h5>Utilities</h5>

      <div class="details-grid">
        <div v-for="(utility, index) in utilities" :key="index" class="badge">
          <i :class="utility.icon" />

          <div>
            <p>{{ utility.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ListingDetailsPhotos from './ListingDetailsPhotos'
  import { LISTING_STATUS_TYPE_ARRAY, LISTING_TYPE_ARRAY, LISTING_STATUS_TYPE } from '@/lib/listings'
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
      fields() {
        return this.listing.fields
      },
      images() {
        return this.fields.images.map(({ fields }) => {
          return fields.file.url
        })
      },
      status() {
        return (LISTING_STATUS_TYPE_ARRAY.find(({ value }) => value === this.fields.status)) || {}
      },
      type() {
        return (LISTING_TYPE_ARRAY.find(({ value }) => value === this.fields.type)) || {}
      },
      features() {
        return this.fields.features || []
      },
      utilities() {
        return this.fields.utilities || []
      },
      isActive() {
        return this.status.value === LISTING_STATUS_TYPE.AVAILABLE.value
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

    .details-grid {
      display: grid;
      grid-auto-columns: 1fr;
      gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }

    .core-details {
      font-size: 1.5em;
      padding: 2rem 0;
      border-bottom: 1px solid color('grey');
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

      label {
        font-size: 0.7em;
        color: color('blackLight');
        font-weight: normal;
      }
    }

    .property-details,
    .property-features,
    .property-utilities {
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


