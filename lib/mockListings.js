const STATUS = {
  AVAILABLE: 'available',
  COMING_SOON: 'coming_soon'
}

const TYPE = {
  HOUSE_FOR_RENT: 'house_for_rent'
}

export const MOCK_LISTINGS = [
  {
    id: 1,
    address: {
      lineOne: '7228 Page Ave.',
      lineTwo: 'St. Louis, MO 63133'
    },
    status: STATUS.AVAILABLE,
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
    address: {
      lineOne: '9427 Dorisann Ct.',
      lineTwo: 'St. Louis, MO 63133'
    },
    status: STATUS.COMING_SOON,
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
  }
]
