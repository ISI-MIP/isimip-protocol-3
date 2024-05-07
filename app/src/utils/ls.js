import ls from 'local-storage'

const getConfig = () => {
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

const updateConfig = (config) => {
  ls.set('simulation_round', config.simulation_round)
  ls.set('sectors', JSON.stringify(config.sectors))
  ls.set('groups', JSON.stringify(config.groups))
  ls.set('scenarios', JSON.stringify(config.scenarios))
}

export { getConfig, updateConfig }
