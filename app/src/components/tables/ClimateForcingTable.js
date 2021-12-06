import React, { Component} from 'react'
import PropTypes from 'prop-types'

import SimulationRounds from '../badges/SimulationRounds'
import Sectors from '../badges/Sectors'

import { filterRows } from '../../utils'

const ClimateForcingTable = function({ config, number, rows, actions }) {
  return (
    <div className="w-100">
      <table className="table table-bordered table-fixed">
        <caption>
          Table {number}: Climate and climate-related forcing data (<code>climate-forcing</code>).
        </caption>
        <thead className="thead-dark">
          <tr>
            <th style={{width: '15%'}}>Title</th>
            <th style={{width: '15%'}}>Specifier</th>
            {
              config.simulation_round.endsWith('a') && <React.Fragment>
                <th style={{width: '10%'}}>Time period</th>
                <th style={{width: '10%'}}>Reanalysis</th>
                <th style={{width: '20%'}}>Bias adjustment target</th>
                <th style={{width: '25%'}}>Comments</th>
              </React.Fragment>
            }
            {
              config.simulation_round.endsWith('b') && <React.Fragment>
                <th style={{width: '45%'}}>Institution</th>
                <th style={{width: '10%'}}>Native resolution</th>
                <th style={{width: '10%'}}>Ensemble member</th>
              </React.Fragment>
            }
            <th style={{width: '5%'}}>Priority</th>
          </tr>
        </thead>
        <tbody>
          {
            filterRows(config, rows).map((row, index) => {
              return (
                <tr key={index}>
                  <td>
                    <p>
                      {row.url ? <a href="{row.url}" target="blank">{row.title }</a> : row.title}
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
                      <td>{row.comments}</td>
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
        </tbody>
      </table>
    </div>
  )
}

ClimateForcingTable.propTypes = {
  config: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default ClimateForcingTable
