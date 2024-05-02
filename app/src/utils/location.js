import { first, isEmpty, last, trimStart } from 'lodash'

const parseLocation = () => {
  if (isEmpty(window.location.hash)) {
    return {}
  } else {
    const tokens = trimStart(window.location.hash, '#/').split('/')

    return {
      simulation_round: first(tokens),
      sectors: tokens.slice(1, -1),
      anchor: last(tokens)
    }
  }
}

const updateLocation = (config) => {
  let pathname = window.location.pathname

  if (isEmpty(window.location.hash) || window.location.hash.endsWith('/')) {
    pathname += buildPath(config)
  } else {
    pathname += buildPath(config) + window.location.hash.split('/').pop()
  }

  if (pathname != window.location.pathname) {
    history.pushState(null, null, pathname)
  }
}

const updateAnchor = (anchor) => {
  let pathname = window.location.pathname

  if (isEmpty(window.location.hash)) {
    pathname += '#/' + anchor
  } else if (window.location.hash.endsWith('/')) {
    pathname += window.location.hash + anchor
  } else {
    pathname += window.location.hash.split('/').slice(0, -1).join('/') + '/' + anchor
  }

  if (pathname != window.location.pathname) {
    history.pushState(null, null, pathname)
  }
}

const buildPath = (config) => {
  let path = '#/'

  if (config.simulation_round) {
    path += config.simulation_round + '/'
  }

  config.sectors.forEach((sector) => {
    path += sector + '/'
  })

  return path
}

export { parseLocation, updateLocation, updateAnchor, buildPath }
