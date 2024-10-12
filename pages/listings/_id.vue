<template>
  <div id="app">
    <top-nav />
    <article>
      <listing-details v-if="listing" :listing="listing" />
      <p v-if="!listing">Unknown Listing</p>
    </article>
    <bottom-footer />
  </div>
</template>

<script>
import { headBuilder } from '@/lib/seo'
import { prettyNumber } from '@/lib/utils'
import { MOCK_LISTINGS } from '@/lib/listings'
import TopNav from '@/components/TopNav';
import ListingDetails from '@/components/listings/ListingDetails'
import BottomFooter from '@/components/BottomFooter'

  export default {
    name: 'ShopItemView',
    components: {
    TopNav,
    ListingDetails,
    BottomFooter
    },
    head() {
      const title =  `FOR RENT: ${this.listing?.address.lineOne } | CRE Properties`
      const description = `$${prettyNumber(this.listing?.price, 0)} / month • ${this.listing?.beds} bed • ${this.listing?.baths} bath • ${prettyNumber(this.listing?.sqft, 0)} sqft`
      const image = this.listing?.images?.[0]
      const site = `https://www.crepropertiesinc.com/listings/${this.$route.params.id}`

      return headBuilder({ title, description, image, site })
    },
    computed: {
      listing() {
        return MOCK_LISTINGS[Number(this.$route.params.id) - 1]
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import './assets/styles/colors';

  article {
    background-color: color('white');
    color: color('black');
  }
</style>

