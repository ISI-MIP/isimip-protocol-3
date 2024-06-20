const actions = {
  changeSimulationRound: function(value) {
    return { type: 'changeSimulationRound', value }
  },
  changeSector: function(value) {
    return { type: 'changeSector', value }
  },
  toggleGroup: function(value) {
    return { type: 'toggleGroup', value }
  },
  toggleScenario: function(value) {
    return { type: 'toggleScenario', value }
  },
  toggleSortRanking: function() {
    return { type: 'toggleSortRanking' }
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
    case 'toggleGroup': {
      if (state.config.groups.find((group) => group === action.value)) {
        return {
          ...state,
          config: { ...state.config, groups: state.config.groups.filter((group) => group !== action.value) }
        }
      } else {
        return {
          ...state,
          config: { ...state.config, groups: [...state.config.groups, action.value] }
        }
      }
    }
    case 'toggleScenario': {
      if (state.config.scenarios.find((scenario) => scenario === action.value)) {
        return {
          ...state,
          config: { ...state.config, scenarios: state.config.scenarios.filter((scenario) => scenario !== action.value) }
        }
      } else {
        return {
          ...state,
          config: { ...state.config, scenarios: [...state.config.scenarios, action.value] }
        }
      }
    }
    case 'toggleSortRanking': {
      return {
        ...state,
        config: { ...state.config, sortRanking: !state.config.sortRanking }
      }
    }
    default:
      return state
  }
}

export { actions, reducer }
