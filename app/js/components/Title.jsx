import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { isEmpty } from 'lodash'

import Sectors from './badges/Sectors'
import SimulationRounds from './badges/SimulationRounds'

const useTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title

    return () => {
      document.title = prevTitle
    }
  })
}

const Title = () => {
  const config = useSelector((store) => store.config)

  useTitle(
    isEmpty(config.sectors) ? (
      `${config.simulation_round} protocol`
    ) : (
      `${config.simulation_round} protocol for ${config.sectors.join(', ')}`
    )
  )

  return (
    <div className="title">
      <SimulationRounds config={config} /> protocol for <Sectors config={config} sectors={null} />
      {
        config.simulation_round.endsWith('b') && config.group3 && (
          <span className="badge badge-info">only Group III</span>
        )
      }
    </div>
  )
}

export default Title
