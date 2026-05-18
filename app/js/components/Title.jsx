import React, { useEffect } from 'react'
import { isEmpty } from 'lodash'

import { useConfig } from '../store'

import Sectors from './badges/Sectors'
import SimulationRounds from './badges/SimulationRounds'

const Title = () => {
  const config = useConfig()

  useEffect(() => {
    const prevTitle = document.title
    const title = isEmpty(config.sectors) ? (
      `${config.simulation_round} protocol`
    ) : (
      `${config.simulation_round} protocol for ${config.sectors.join(', ')}`
    )

    document.title = title

    return () => {
      document.title = prevTitle
    }
  })

  return (
    <div className="title">
      <SimulationRounds config={config} /> protocol for <Sectors config={config} sectors={null} />
      {
        config.simulation_round.endsWith('b') && config.group3 && (
          <span className="badge badge-group3">only Group III</span>
        )
      }
    </div>
  )
}

export default Title
