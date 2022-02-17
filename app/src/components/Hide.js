import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Hide = ({ config, simulationRound, sector, html }) => {
  const sectors = (sector === undefined) ? [] : sector.split(',')

  let className = ''
  if ((simulationRound === undefined || config.simulation_round == simulationRound) &&
      (sector === undefined || config.sectors.length == 0 || sectors.filter(sector => config.sectors.includes(sector)).length)) {
    className = 'hidden'
  }

  return <div className={className} dangerouslySetInnerHTML={{__html: html}}></div>
}

Hide.propTypes = {
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

export default connect(mapStateToProps)(Hide)
