import React, { Component} from 'react'
import PropTypes from 'prop-types'

const SimulationRounds = ({ config, simulationRounds }) => {
  if (simulationRounds === undefined) {
    return <span className="badge badge-warning badge-simulation_round">{config.simulation_round}</span>
  } else {
    return simulationRounds.map(simulationRound => {
      return <span className="badge badge-warning badge-simulation_round" key={simulationRound}>{simulationRound}</span>
    })
  }
}

SimulationRounds.propTypes = {
  config: PropTypes.object.isRequired,
  simulationRounds: PropTypes.array
}

export default SimulationRounds
