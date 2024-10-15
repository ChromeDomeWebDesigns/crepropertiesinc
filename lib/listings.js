export const LISTING_STATUS_TYPE = {
  AVAILABLE: {
    value: 'available',
    label: 'Available Now',
    color: 'color-green'
  },
  COMING_SOON: {
    value: 'coming_soon',
    label: 'Coming Soon',
    color: 'color-orange'
  },
}

export const LISTING_STATUS_TYPE_ARRAY = Object.values(LISTING_STATUS_TYPE)

const LISTING_TYPE = {
  HOUSE_FOR_RENT: {
    value: 'house_for_rent',
    icon: 'fas fa-home',
    label: 'House for Rent'
  },
  APARTMENT_FOR_RENT: {
    value: 'apartment_for_rent',
    icon: 'fas fa-building',
    label: 'Apartment for Rent'
  }
}

export const LISTING_TYPE_ARRAY = Object.values(LISTING_TYPE)
