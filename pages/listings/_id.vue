<template>
  <article>
    <listing-details v-if="listing" :listing="listing" />
    <p v-if="!listing">Unknown Listing</p>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
import { headBuilder } from '@/lib/seo'
import { prettyNumber } from '@/lib/utils'
import ListingDetails from '@/components/listings/ListingDetails'

  export default {
    name: 'ListingDetailsView',
    components: {
    ListingDetails,
    },
    data() {
      return {
        id: this.$route.params.id
      };
    },
    head() {
      const fields = this.listing?.fields

      if (!fields) {
        return
      }

      const title =  `FOR RENT: ${fields.addressLineOne } | CRE Properties`
      const description = `$${prettyNumber(fields.price, 0)} / month • ${fields.beds} bed • ${fields.baths} bath • ${prettyNumber(fields.sqft, 0)} sqft`
      const image = fields.images?.[0].fields.file.url
      const site = `https://www.crepropertiesinc.com/listings/${this.id}`

      return headBuilder({ title, description, image, site })
    },
    computed: {
      ...mapGetters({ getListingById: 'listings/getListingById' }),
      listing() {
        return this.getListingById(this.id)
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';

  article {
    background-color: color('white');
    color: color('black');
  }
</style>

