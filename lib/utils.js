export const prettyNumber = (num, digits = 2) => {
  return Number(num).toLocaleString(undefined, { minimumFractionDigits: digits, maximumFractionDigits: digits })
}

export const queryMinMax = ({ min, max, data }) => {
  const queryMin = Number(min)
  const queryMax = Number(max)
  const value = Number(data)

  if (queryMin && value < queryMin) {
    return false
  }

  if (queryMax && value > queryMax) {
    return false
  }

  return true
}
