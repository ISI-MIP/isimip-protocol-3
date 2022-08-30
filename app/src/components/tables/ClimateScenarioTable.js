import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import SimulationRounds from '../badges/SimulationRounds'
import Sectors from '../badges/Sectors'
import Status from '../badges/Status'

import { filterRows, filterField } from '../../utils'


const ClimateScenarioTable = function({ config, number, rows }) {
  return (
    <table className="table table-bordered table-fixed">
      <caption>
        Table {number}: Climate scenario specifiers (<code>climate-scenario</code>).
      </caption>
      <thead className="thead-dark">
        <tr>
          <th style={{width: '25%'}}>Scenario specifier</th>
          <th style={{width: '25%'}}>Forcing</th>
          <th style={{width: '15%'}}>Status</th>
          <th style={{width: '35%'}}>Datasets</th>
        </tr>
      </thead>
      <tbody>
        {
          filterRows(config, rows).map((row, index) => {
            const forcings = filterField(config, row.forcings)
            return forcings.map((forcing, index) => (
              <tr key={index}>
                {
                  index == 0 && <td rowSpan={forcings.length} className="extra-border-bottom">
                    <p>
                      <strong>{row.specifier}</strong>
                    </p>
                    <p>
                      <SimulationRounds config={config} simulationRounds={row.simulation_rounds} />
                      <Sectors config={config} sectors={row.sectors} />
                    </p>
                  </td>
                }
                <td className={(index == forcings.length - 1) ? 'extra-border-bottom' : ''}>
                  {forcing.forcing}
                </td>
                <td className={(index == forcings.length - 1) ? 'extra-border-bottom' : ''}>
                  <Status status={forcing.status} />
                </td>
                <td className={(index == forcings.length - 1) ? 'extra-border-bottom' : ''}>
                  {
                    forcing.doi && <p>
                      <a className="doi-link" href={forcing.doi}>{ forcing.doi }</a>
                    </p>
                  }
                  <ReactMarkdown children={forcing.comment} />
                </td>
              </tr>
            ))
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
