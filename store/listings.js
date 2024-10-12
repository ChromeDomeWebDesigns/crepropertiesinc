import client from "~/plugins/contentful";

export const state = () => ({
  listings: []
})

export const mutations = {
  LOAD_LISTINGS: (state, listings) => {
    state.listings = listings
  }
}

export const getters = {
  getSubsetOfListings: state => (num) => {
    return state.listings ? state.listings.slice(0, num) : []
  },
  getListingById: state => (id) => {
    if (!id) {
      return null
    }

    return state.listings.find(listing => listing.sys.id === id)
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
