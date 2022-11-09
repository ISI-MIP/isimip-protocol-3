import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SimulationRounds from './badges/SimulationRounds'
import Sectors from './badges/Sectors'

const Show = ({ config, simulationRound, sector, html }) => {
  let className = 'show-component'

  const simulationRounds = simulationRound === undefined ? [] : simulationRound.split(',')
  const sectors = sector === undefined ? [] : sector.split(',')

  if (simulationRounds.length > 0) {
    className += ' simulation_round'

    if (!simulationRounds.includes(config.simulation_round)) {
      className += ' hidden'
    }
  }
  if (sectors.length > 0) {
    className += ' sectors'

    if (!(config.sectors.length == 0 || sectors.filter(sector => config.sectors.includes(sector)).length)) {
      className += ' hidden'
    }
  }

  return (
    <div className={className}>
      <div className="float-right">
        {simulationRounds.length > 0 && <SimulationRounds config={config} simulationRounds={simulationRounds} />}
        {sectors.length > 0 && <Sectors config={config} sectors={sectors} />}
      </div>
      <div dangerouslySetInnerHTML={{__html: html}}></div>
    </div>
  )
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
