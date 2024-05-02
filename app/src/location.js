import ls from 'local-storage'
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

const readLocalStorage = () => {
  const config = {}
  const definitions = window.initialState.definitions

  const simulation_round = ls.get('simulation_round')
  if (definitions.simulation_round.map((simulation_round) => simulation_round.specifier)
                                  .includes(simulation_round)) {
    config.simulation_round = simulation_round
  }

  const sectors = ls.get('sectors') ? JSON.parse(ls.get('sectors')) : []
  if (definitions.sector.some((sector) => sectors.includes(sector.specifier))) {
    config.sectors = sectors
  }

  const groups = ls.get('groups') ? JSON.parse(ls.get('groups')) : []
  if (definitions.group.some((group) => groups.includes(group.specifier))) {
    config.groups = groups
  }

  const scenarios = ls.get('scenarios') ? JSON.parse(ls.get('scenarios')) : []
  if ([
    ...definitions.climate_scenario, ...definitions.soc_scenario, ...definitions.sens_scenario
  ].some((scenario) => scenarios.includes(scenario.specifier))) {
    config.scenarios = scenarios
  }

  return config
}

const updateLocalStorage = (config) => {
  ls.set('simulation_round', config.simulation_round)
  ls.set('sectors', JSON.stringify(config.sectors))
  ls.set('groups', JSON.stringify(config.groups))
  ls.set('scenarios', JSON.stringify(config.scenarios))
}

export { parseLocation, updateLocation, updateAnchor, buildPath, readLocalStorage, updateLocalStorage }
