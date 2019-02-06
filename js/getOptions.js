const isNumberString = string => /^([1-9]\d*|0)(\.\d+)?$/.test(string)
export default search => {
  const [_, queryString] = search.split('?')
  const params = new URLSearchParams(queryString)

  const isValidSpeed = isNumberString(params.get('speed')) && parseFloat(params.get('speed')) > 0
  if (params.has('speed') && !isValidSpeed) {
    console.error(`speed '${params.get('speed')}' is invalid value. It must be a positive number bigger than 0`)
  }

  const options = {
    speed: isValidSpeed ? parseFloat(params.get('speed')) : null,
    color: params.get('color') || null,
  }

  return Object.entries(options)
    .filter(([_k, v]) => v !== null)
    .reduce((acc, [k, v]) => ({
      ...acc,
      [k]: v,
    }), {})
}

