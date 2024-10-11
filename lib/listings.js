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

const TYPE = {
  HOUSE_FOR_RENT: 'house_for_rent'
}

export const MOCK_LISTINGS = [
  {
    id: 1,
    images: ['https://photos.zillowstatic.com/fp/0e3d10a1fa8bb6ca9f5a6a0db64dd671-cc_ft_1536.webp'],
    address: {
      lineOne: '7228 Page Ave.',
      lineTwo: 'St. Louis, MO 63133'
    },
    status: LISTING_STATUS_TYPE.AVAILABLE.value,
    type: TYPE.HOUSE_FOR_RENT,
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
        icon: 'fas- fa-star',
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
    type: TYPE.HOUSE_FOR_RENT,
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
