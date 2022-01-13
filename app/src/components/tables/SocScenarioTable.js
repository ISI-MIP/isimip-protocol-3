import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import Sectors from '../badges/Sectors'
import SimulationRounds from '../badges/SimulationRounds'

import { filterRows } from '../../utils'


const SocScenarioTable = function({ config, number, rows }) {
  return (
    <table className="table table-bordered table-fixed w-70">
      <caption>
        Table {number}: Socio-economic scenario specifiers (<code>soc-scenario</code>).
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
                  <ReactMarkdown children={row.description_note} />
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

SocScenarioTable.propTypes = {
  config: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired
}

export default SocScenarioTable
