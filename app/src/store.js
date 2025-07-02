const actions = {
  changeSimulationRound: function(value) {
    return { type: 'changeSimulationRound', value }
  },
  changeSector: function(value) {
    return { type: 'changeSector', value }
  },
  toggleExperiments: function(value) {
    return { type: 'toggleExperiments', value }
  },
  toggleGroup: function(value) {
    return { type: 'toggleGroup', value }
  },
  toggleGroup3: function() {
    return { type: 'toggleGroup3' }
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'changeSimulationRound': {
      return { ...state, config: { ...state.config, simulation_round: action.value } }
    }
    case 'changeSector': {
      if (state.config.sectors.find((sector) => sector === action.value)) {
        return {
          ...state,
          config: { ...state.config, sectors: state.config.sectors.filter((sector) => sector !== action.value) }
        }
      } else {
        return {
          ...state,
          config: { ...state.config, sectors: [...state.config.sectors, action.value] }
        }
      }
    }
    case 'toggleExperiments': {
      if (state.config.experiments.find((value) => value === action.value)) {
        return {
          ...state,
          config: { ...state.config, experiments: state.config.experiments.filter((value) => value !== action.value) }
        }
      } else {
        return {
          ...state,
          config: { ...state.config, experiments: [...state.config.experiments, action.value] }
        }
      }
    }
    case 'toggleGroup': {
      if (state.config.groups.find((value) => value === action.value)) {
        return {
          ...state,
          config: { ...state.config, groups: state.config.groups.filter((value) => value !== action.value) }
        }
      } else {
        return {
          ...state,
          config: { ...state.config, groups: [...state.config.groups, action.value] }
        }
      }
    }
    case 'toggleGroup3': {
      return { ...state, config: { ...state.config, group3: !state.config.group3 }}
    }
    default:
      return state
  }
}

export { actions, reducer }
