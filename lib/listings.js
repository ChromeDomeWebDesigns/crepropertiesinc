const LISTING_STATUS_TYPE = {
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

export const MOCK_LISTINGS = [
  {
    id: 1,
    images: ['https://photos.zillowstatic.com/fp/0e3d10a1fa8bb6ca9f5a6a0db64dd671-cc_ft_1536.webp', 'https://photos.zillowstatic.com/fp/bf7b87035dd06235f80a1ebc02a63f8b-cc_ft_1536.webp', 'https://photos.zillowstatic.com/fp/75756201be28ce2b9fd0249482c3288b-cc_ft_1536.webp', 'https://photos.zillowstatic.com/fp/68c15d4198c2a79882d842e98ad551ee-cc_ft_1536.webp', 'https://photos.zillowstatic.com/fp/6fd1a2547bc762bb7da175eeae00bb2e-cc_ft_1536.webp'],
    address: {
      lineOne: '7228 Page Ave.',
      lineTwo: 'St. Louis, MO 63133'
    },
    status: LISTING_STATUS_TYPE.AVAILABLE.value,
    type: LISTING_TYPE.HOUSE_FOR_RENT.value,
    applicationLink: '#',
    beds: 2,
    baths: 1,
    sqft: 672,
    price: 895,
    deposit: 1000,
    features: [
      {
        icon: 'fas fa-smoking-ban',
        label: "Smoke Free"
      },
      {
        icon: 'fas fa-star',
        label: 'Granite Counters'
      }
    ]
  },
  {
    id: 2,
    images: ['https://ap.rdcpix.com/f1931829edb54d2e00d582751b4bf09dl-m1976991140rd-w960_h720.webp'],
    address: {
      lineOne: '9427 Dorisann Ct.',
      lineTwo: 'St. Louis, MO 63123'
    },
    status: LISTING_STATUS_TYPE.COMING_SOON.value,
    type: LISTING_TYPE.HOUSE_FOR_RENT.value,
    applicationLink: '#',
    beds: 2,
    baths: 1,
    sqft: 988,
    price: 1900,
    deposit: 2000,
    features: [
      {
        icon: 'fas fa-smoking-ban',
        label: "Smoke Free"
      },
      {
        icon: 'fas fa-star',
        label: 'Granite Counters'
      },
      {
        icon: 'fas fa-parking',
        label: 'Garage - Attached'
      },
      {
        icon: 'fas fa-sun',
        label: 'Lawn Care - Included'
      }
    ]
  },
]
