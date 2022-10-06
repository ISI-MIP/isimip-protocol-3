import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import SimulationRounds from '../badges/SimulationRounds'
import Sectors from '../badges/Sectors'

import { filterRows } from '../../utils'

const ClimateForcingTable = function({ config, caption, rows, actions }) {
  const filteredRows = filterRows(config, rows)

  return (
    <div className="w-100">
      <table className="table table-bordered table-fixed">
        <caption>
          <ReactMarkdown components={{p: 'span'}} children={caption} />
        </caption>
        <thead className="thead-dark">
          <tr>
            <th style={{width: '20%'}}>Title</th>
            <th style={{width: '12%'}}>Specifier</th>
            {
              config.simulation_round.endsWith('a') && <React.Fragment>
                <th style={{width: '10%'}}>Time period</th>
                <th style={{width: '10%'}}>Reanalysis</th>
                <th style={{width: '18%'}}>Bias adjustment target</th>
                <th style={{width: '30%'}}>Comments</th>
              </React.Fragment>
            }
            {
              config.simulation_round.endsWith('b') && <React.Fragment>
                <th style={{width: '36%'}}>Institution</th>
                <th style={{width: '12%'}}>Native resolution</th>
                <th style={{width: '12%'}}>Ensemble member</th>
              </React.Fragment>
            }
            <th style={{width: '8%'}}>Priority</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredRows.map((row, index) => {
              return (
                <tr key={index}>
                  <td>
                    <p>
                      {row.url ? <a href={row.url} target="_blank">{row.title}</a> : row.title}
                    </p>
                    <p>
                      <SimulationRounds config={config} simulationRounds={row.simulation_rounds} />
                      <Sectors config={config} sectors={row.sectors} />
                    </p>
                  </td>
                  <td><strong>{row.specifier}</strong></td>
                  {
                    config.simulation_round.endsWith('a') && <React.Fragment>
                      <td>{row.time_period}</td>
                      <td>{row.reanalysis}</td>
                      <td>{row.bias_adjustment_target}</td>
                      <td><ReactMarkdown children={row.comments} /></td>
                    </React.Fragment>
                  }
                  {
                    config.simulation_round.endsWith('b') && <React.Fragment>
                      <td>{row.institution}</td>
                      <td>
                        <p>Atmosphere: {row.original_resolution.other || row.original_resolution}</p>
                        {row.original_resolution['marine-fishery_global'] && <p>Ocean: {row.original_resolution['marine-fishery_global']}</p>}
                      </td>
                      <td>{row.ensemble_member}</td>
                    </React.Fragment>
                  }
                  <td>{row.priority}</td>
                </tr>
              )
            })
          }
          {
            (filteredRows.length == 0) && <tr>
              <td colSpan="7">
                No climate forcing have been defined for this selection of simulation round and sectors, yet.
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

ClimateForcingTable.propTypes = {
  config: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default ClimateForcingTable
