import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SimulationRounds from './badges/SimulationRounds'
import Sectors from './badges/Sectors'

const Show = ({ config, simulationRound, sector, html }) => {
  if (simulationRound !== undefined) {
    const simulationRounds = simulationRound.split(',')

    let className = 'show-component simulation_round'
    if (!simulationRounds.includes(config.simulation_round)) {
      className += ' hidden'
    }

    return (
      <div className={className}>
        <div className="float-right">
          <SimulationRounds config={config} simulationRounds={[simulationRound]} />
        </div>
        <div dangerouslySetInnerHTML={{__html: html}}></div>
      </div>
    )
  } else if (sector !== undefined) {
    const sectors = sector.split(',')

    let className = 'show-component sectors'
    if (!(config.sectors.length == 0 || sectors.filter(sector => config.sectors.includes(sector)).length)) {
      className += ' hidden'
    }

    return (
      <div className={className}>
        <div className="float-right">
          <Sectors config={config} sectors={sectors} />
        </div>
        <div dangerouslySetInnerHTML={{__html: html}}></div>
      </div>
    )
  }

  return null
}

Show.propTypes = {
  config: PropTypes.object.isRequired,
  simulationRound: PropTypes.string,
  sector: PropTypes.string,
  html: PropTypes.string.isRequired
}

function mapStateToProps(state, props) {
  return {
    config: state.config
  }
}

export default connect(mapStateToProps)(Show)
