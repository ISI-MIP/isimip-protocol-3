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

  const experiments = ls.get('experiments') ? JSON.parse(ls.get('experiments')) : []
  if (definitions.experiments.some((experiment) => experiments.includes(experiment.specifier))) {
    config.experiments = experiments
  }

  const groups = ls.get('groups') ? JSON.parse(ls.get('groups')) : []
  if (definitions.group.some((group) => groups.includes(group.specifier))) {
    config.groups = groups
  }

  config.group3 = ls.get('group3') ? JSON.parse(ls.get('group3')) : false

  return config
}

const updateConfig = (config) => {
  ls.set('simulation_round', config.simulation_round)
  ls.set('sectors', JSON.stringify(config.sectors))
  ls.set('experiments', JSON.stringify(config.experiments))
  ls.set('groups', JSON.stringify(config.groups))
  ls.set('group3', JSON.stringify(config.group3))
}

export { getConfig, updateConfig }
