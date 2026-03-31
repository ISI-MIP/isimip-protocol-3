import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import SimulationRounds from './badges/SimulationRounds'
import Sectors from './badges/Sectors'

const Show = ({ simulationRound, sector, html }) => {
  const config = useSelector((store) => store.config)

  let className = 'show-component'
  let tocClassName = ''

  const simulationRounds = simulationRound === undefined ? [] : simulationRound.split(',')
  const sectors = sector === undefined ? [] : sector.split(',')

  if (simulationRounds.length > 0) {
    className += ' simulation_round'

    if (!simulationRounds.includes(config.simulation_round)) {
      className += ' hidden'
      tocClassName = 'hidden'
    }
  }
  if (sectors.length > 0) {
    className += ' sectors'

    if (!(config.sectors.length == 0 || sectors.filter(sector => config.sectors.includes(sector)).length)) {
      className += ' hidden'
      tocClassName = 'hidden'
    }
  }

  const matches = html.matchAll('<h3 id="(.*?)"');
  for (const match of matches) {
    const id = match[1]
    const tocLinks = document.querySelectorAll(`a[href="#${id}"]`)
    for (let tocLink of tocLinks) {
      tocLink.className = tocClassName
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
  simulationRound: PropTypes.string,
  sector: PropTypes.string,
  html: PropTypes.string.isRequired
}

export default Show
