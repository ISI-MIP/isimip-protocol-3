const actions = {
  changeSimulationRound: function(value) {
    return { type: 'changeSimulationRound', value }
  },
  changeSector: function(value) {
    return { type: 'changeSector', value }
  },
  toggleTable: function(value) {
    return { type: 'toggleTable', value }
  },
  toggleGroup: function(value) {
    return { type: 'toggleGroup', value }
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'changeSimulationRound': {
      const config = Object.assign({}, state.config, {
        simulation_round: action.value
      })
      return Object.assign({}, state, { config })
    }
    case 'changeSector': {
      const index = state.config.sectors.indexOf(action.value)
      const config = Object.assign({}, state.config)
      if (index < 0) {
        config.sectors.push(action.value)
      } else {
        config.sectors.splice(index, 1)
      }
      return Object.assign({}, state, { config })
    }
    case 'toggleTable': {
      const index = state.config.tables.indexOf(action.value)
      const config = Object.assign({}, state.config)
      if (index < 0) {
        config.tables.push(action.value)
      } else {
        config.tables.splice(index, 1)
      }
      return Object.assign({}, state, { config })
    }
    case 'toggleGroup': {
      const index = state.config.groups.indexOf(action.value)
      const config = Object.assign({}, state.config)
      if (index < 0) {
        config.groups.push(action.value)
      } else {
        config.groups.splice(index, 1)
      }
      return Object.assign({}, state, { config })
    }
    default:
      return state
  }
}

export { actions, reducer }
