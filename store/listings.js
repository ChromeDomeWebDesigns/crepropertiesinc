import client from "~/plugins/contentful";
import { queryMinMax } from '~/lib/utils'

export const state = () => ({
  listings: []
})

export const mutations = {
  LOAD_LISTINGS: (state, listings) => {
    state.listings = listings
  }
}

export const getters = {
  getListingsFromFilter: state => ({ price, beds, baths, status, search } = {}) => {
    return state.listings.filter(l => {
      if (price && !queryMinMax({ min: price.min, max: price.max, data: l.fields.price })) {
        return false
      }

      if (beds && !queryMinMax({ min: beds.min, max: beds.max, data: l.fields.beds })) {
        return false
      }

      if (baths && !queryMinMax({ min: baths.min, max: baths.max, data: l.fields.baths })) {
        return false
      }

      if (status && status !== l.fields.status) {
        return false
      }

      if (search && !`${l.fields.addressLineOne} ${l.fields.addressLineTwo}`.includes(search)) {
        return false
      }

      return true
    })
  },
  getSubsetOfListings: state => (num) => {
    return state.listings ? state.listings.slice(0, num) : []
  },
  getListingById: state => (id) => {
    if (!id) {
      return null
    }

    return state.listings.find(listing => listing.fields.id === id)
  },
}

export const actions = {
  async getListings({ commit }) {
    try {
      if (!client) {
        return
      }

      const response = await client.getEntries({
        content_type: 'listings',
        order: 'fields.status'
      })

      if (response.items.length > 0) {
        commit('LOAD_LISTINGS', response.items)
      }
    } catch (err) {
      // console.error(err);
    }
  }
}
