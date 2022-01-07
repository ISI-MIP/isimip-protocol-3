import React, { Component} from 'react'
import PropTypes from 'prop-types'

import SimulationRounds from '../badges/SimulationRounds'
import Sectors from '../badges/Sectors'

import { filterRows } from '../../utils'


const ClimateScenarioTable = function({ config, number, rows }) {
  return (
    <table className="table table-bordered table-fixed w-75">
      <caption>
        Table {number}: Climate scenario specifiers (<code>climate-scenario</code>).
      </caption>
      <thead className="thead-dark">
        <tr>
          <th style={{width: '25%'}}>Scenario specifier</th>
          <th style={{width: '50%'}}>Description</th>
        </tr>
      </thead>
      <tbody>
        {
          filterRows(config, rows).map((row, index) => {
            return (
              <tr key={index}>
                <td><strong>{row.specifier}</strong></td>
                <td>
                  <p>
                    <SimulationRounds config={config} simulationRounds={row.simulation_rounds} />
                    <Sectors config={config} sectors={row.sectors} />
                  </p>
                  <p>{row.description}</p>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

ClimateScenarioTable.propTypes = {
  config: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired
}

export default ClimateScenarioTable
