import { first, isEmpty, isNil, last, trim } from 'lodash'

const splitLocationHash = () => {
  const hash = trim(window.location.hash, '#/ ')
  if (isEmpty(location)) {
    return []
  } else {
    return hash.split('/')
  }
}

const parseLocation = (definitions) => {
  const tokens = splitLocationHash()
  const config = {}

  if (isEmpty(tokens)) {
    return config
  } else {
    // remove anchor id (always starts with a number)
    if (!isNil(last(tokens)) && last(tokens).match(/^\d/)) {
      config.anchor = tokens.pop()
    }

    // parse simulation_round
    const simulation_round = first(tokens)
    if (
      definitions.simulation_round
        .map((simulation_round) => simulation_round.specifier)
        .includes(simulation_round)
    ) {
      config.simulation_round = simulation_round
    }

    // parse sectors
    const sectors = tokens.slice(1)
    if (
      definitions.sector
        .some((sector) => sectors.includes(sector.specifier))
    ) {
      config.sectors = sectors
    }

    return config
  }
}

const updateLocation = (config) => {
  const pathname = window.location.pathname + buildPath(config)

  if (pathname != window.location.pathname) {
    history.replaceState(null, null, pathname)
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

  if (config.anchor) {
    path += '/' + config.anchor
  }

  return path
}

export { buildPath, parseLocation, updateLocation }
