import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import { filterRows } from '../../utils/filter'

import Sectors from '../badges/Sectors'
import SimulationRounds from '../badges/SimulationRounds'

const ScenarioTable = function({ config, caption, rows, group3 }) {
  return (
    <table className="table table-bordered table-fixed">
      <caption>
        <ReactMarkdown components={{p: 'span'}}>{caption}</ReactMarkdown>
      </caption>
      <thead className="thead-dark">
        <tr>
          <th style={{width: '30%'}}>Experiment specifier</th>
          <th style={{width: '70%'}}>Description</th>
        </tr>
      </thead>
      <tbody>
        {
          filterRows(config, rows, group3).map((row) => {
            return (
              <tr key={row.specifier}>
                <td>
                  <p>
                    <strong>{row.specifier}</strong>
                  </p>
                  <p>
                    <SimulationRounds config={config} simulationRounds={row.simulation_rounds} />
                    {row.group3 && <span className="badge badge-info">Group III</span>}
                    <Sectors config={config} sectors={row.sectors} />
                  </p>
                </td>
                <td>
                  <ReactMarkdown>{row.description}</ReactMarkdown>
                  <ReactMarkdown>{row.description_note}</ReactMarkdown>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

ScenarioTable.propTypes = {
  config: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
  group3: PropTypes.bool
}

export default ScenarioTable
