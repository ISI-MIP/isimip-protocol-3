import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { isNil } from 'lodash'

const Hide = ({ simulationRound, sector, html }) => {
  const config = useSelector((store) => store.config)
  const sectors = (sector === undefined) ? [] : sector.split(',')

  let className = ''
  if ((
    simulationRound === undefined ||
    config.simulation_round == simulationRound
  ) && (
    sector === undefined ||
    config.sectors.length == 0 ||
    sectors.filter(sector => config.sectors.includes(sector)).length
  )) {
    className = 'hidden'
  }

  return <div className={className} dangerouslySetInnerHTML={{__html: html}}></div>
}

Hide.propTypes = {
  simulationRound: PropTypes.string,
  sector: PropTypes.string,
  html: PropTypes.string.isRequired
}

export default Hide
