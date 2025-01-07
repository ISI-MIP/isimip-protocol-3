import { first, isEmpty, isNil, last, trim } from 'lodash'

const splitLocationHash = () => {
  const hash = trim(window.location.hash, '#/ ')
  if (isEmpty(location)) {
    return []
  } else {
    return hash.split('/')
  }
}

const parseLocation = () => {
  const tokens = splitLocationHash()
  const definitions = window.initialState.definitions
  const config = {}

  if (isEmpty(tokens)) {
    return config
  } else {
    // remove anchor id
    if (!isNil(last(tokens)) && last(tokens).match(/^\d/)) {
      tokens.pop()
    }

    const simulation_round = first(tokens)
    if (definitions.simulation_round.map((simulation_round) => simulation_round.specifier)
                                    .includes(simulation_round)) {
      config.simulation_round = simulation_round
    }

    const sectors = tokens.slice(1)
    if (definitions.sector.some((sector) => sectors.includes(sector.specifier))) {
      config.sectors = sectors
    }

    return config
  }
}

const updateLocation = (config) => {
  const tokens = splitLocationHash()

  let pathname = window.location.pathname

  if (isEmpty(tokens)) {
    pathname += buildPath(config)
  } else if (last(tokens).match(/^\d/)) {
    pathname += buildPath(config) + '/' + last(tokens)
  } else {
    pathname += buildPath(config)
  }

  if (pathname != window.location.pathname) {
    history.pushState(null, null, pathname)
  }
}

const parseAnchor = () => {
  const tokens = splitLocationHash()

  if (isEmpty(tokens)) {
    return null
  } else if (last(tokens).match(/^\d/)) {
    return document.getElementById(last(tokens))
  } else {
    return null
  }
}

const updateAnchor = (anchor) => {
  const tokens = splitLocationHash()

  let pathname = window.location.pathname

  if (isEmpty(tokens)) {
    pathname += '#/' + anchor
  } else if (last(tokens).match(/^\d/)) {
    pathname += '#/' + tokens.slice(0, -1).join('/') + '/' + anchor
  } else {
    pathname += '#/' + tokens.join('/') + '/' + anchor
  }

  if (pathname != window.location.pathname) {
    history.pushState(null, null, pathname)
  }
}

const buildPath = (config) => {
  let path = '#'

  if (config.simulation_round) {
    path += '/' + config.simulation_round
  }

  config.sectors.forEach((sector) => {
    path += '/' + sector
  })

  return path
}

export { parseLocation, updateLocation, parseAnchor, updateAnchor, buildPath }
