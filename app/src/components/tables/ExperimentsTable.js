import React, { Component} from 'react'
import PropTypes from 'prop-types'

import SimulationRounds from '../badges/SimulationRounds'
import Sectors from '../badges/Sectors'

import { TableToggleLink, TableToggleButton, filterRows } from '../../utils'

const ExperimentsTable = function({ config, number, rows, actions }) {
  const closed = !config.tables.includes('experiments')
  const toggle = () => (actions.toggleTable('experiments'))

  return (
    <div className="w-100">
      <div className={closed ? 'table-wrapper closed' : 'table-wrapper'}>
        <table className="table table-bordered table-fixed">
          <caption>
            Table {number}: Experiment set-up: Each experiment is specified by the climate forcing (CF) and the Direct Human Forcing (DHF).
            <TableToggleLink closed={closed} toggle={toggle} />
          </caption>
          <thead className="thead-dark">
            <tr>
              <th style={{width: '25%'}}>Experiment</th>
              {
                config.simulation_round.endsWith('a') && <React.Fragment>
                  <th style={{width: '25%'}}>Short description</th>
                  <th style={{width: '25%'}}>
                      <p>Transition from Spin-up to experiment</p>
                      <p>1850-1900, only if spin-up is needed</p>
                  </th>
                  <th style={{width: '25%'}}>
                      <p>Historical</p>
                      <p>1901-2016</p>
                  </th>
                </React.Fragment>
              }
              {
                config.simulation_round.endsWith('b') && <React.Fragment>
                  <th style={{width: '30%'}}>Short description</th>
                  <th style={{width: '15%'}}>
                      <p>Pre-industrial</p>
                      <p>1601-1849</p>
                  </th>
                  <th style={{width: '15%'}}>
                      <p>Historical</p>
                      <p>1850-2014</p>
                  </th>
                  <th style={{width: '15%'}}>
                      <p>Future</p>
                      <p>2015-2100</p>
                  </th>
                </React.Fragment>
              }
            </tr>
          </thead>
          <tbody>
            {
              filterRows(config, rows).map((row, index) => {
                return (
                  <React.Fragment key={index}>
                    <tr>
                      <td rowSpan="2" className="extra-border-bottom">
                          <h4>{row.title}</h4>
                          {row.subtitle && <p>{row.subtitle}</p>}
                          {row.priority && <p><strong>{row.priority}</strong></p>}
                          <p>
                            <SimulationRounds config={config} simulationRounds={row.simulation_rounds} />
                            <Sectors config={config} sectors={row.sectors} />
                          </p>
                      </td>
                      <td>
                          <strong>CF:</strong> {row.description.climate}
                      </td>
                      {
                        config.simulation_round.endsWith('a') && <React.Fragment>
                          {
                            row.spin_up.climate ? <td className="table-success">
                              <p><strong>{row.spin_up.climate}</strong></p>
                            </td> : <td rowSpan="2" className="extra-border-bottom">
                              {row.spin_up}
                            </td>
                          }
                          {
                            row.historical.climate ? <td className="table-secondary">
                              <p><strong>{row.historical.climate}</strong></p>
                              {row.historical.climate_sens && <p><strong>Sensitivity scenario: {row.historical.climate_sens}</strong></p>}
                            </td> : <td rowSpan="2" className="extra-border-bottom">
                              {row.historical}
                            </td>
                          }
                        </React.Fragment>
                      }
                      {
                        config.simulation_round.endsWith('b') && <React.Fragment>
                          {
                            row.pre_industrial.climate ? <td className="table-secondary">
                              <p><strong>{row.pre_industrial.climate}</strong></p>
                              {row.pre_industrial.climate_sens && <p><strong>Sensitivity scenario: {row.pre_industrial.climate_sens}</strong></p>}
                            </td> : <td rowSpan="2" className="extra-border-bottom">
                              {row.pre_industrial}
                            </td>
                          }
                          {
                            row.historical.climate ? <td className="table-secondary">
                              <p><strong>{row.historical.climate}</strong></p>
                              {row.historical.climate_sens && <p><strong>Sensitivity scenario: {row.historical.climate_sens}</strong></p>}
                            </td> : <td rowSpan="2" className="extra-border-bottom">
                              {row.historical}
                            </td>
                          }
                          {
                            row.future.climate ? <td className="table-danger">
                              <p><strong>{row.future.climate}</strong></p>
                              {row.future.climate_sens && <p><strong>Sensitivity scenario: {row.future.climate_sens}</strong></p>}
                            </td> : <td rowspan="2" className="extra-border-bottom">
                              {row.future}
                            </td>
                          }
                        </React.Fragment>
                      }
                    </tr>
                    <tr>
                      <td className="extra-border-bottom">
                          <strong>DHF:</strong> {row.description.soc}
                      </td>
                      {
                        config.simulation_round.endsWith('a') && <React.Fragment>
                          {
                            row.spin_up.soc && <td className="table-success extra-border-bottom">
                              <p><strong>{row.spin_up.soc}</strong></p>
                              {row.spin_up.soc_sens && <p><strong>Sensitivity scenario: {row.spin_up.soc_sens}</strong></p>}
                            </td>
                          }
                          {
                            row.historical.soc && <td className="table-secondary extra-border-bottom">
                              <p><strong>{row.historical.soc}</strong></p>
                              {row.historical.soc_sens &&<p><strong>Sensitivity scenario: {row.historical.soc_sens}</strong></p>}
                            </td>
                          }
                        </React.Fragment>
                      }
                      {
                        config.simulation_round.endsWith('b') && <React.Fragment>
                          {
                            row.pre_industrial.soc && <td className="table-secondary extra-border-bottom">
                              <p><strong>{row.pre_industrial.soc}</strong></p>
                              {row.pre_industrial.soc_sens && <p><strong>Sensitivity scenario: {row.pre_industrial.soc_sens}</strong></p>}
                            </td>
                          }
                          {
                            row.historical.soc && <td className="table-secondary extra-border-bottom">
                              <p><strong>{row.historical.soc}</strong></p>
                              {row.historical.soc_sens && <p><strong>Sensitivity scenario: {row.historical.soc_sens}</strong></p>}
                            </td>
                          }
                          {
                            row.future.soc && <td className="table-danger extra-border-bottom">
                              <p><strong>{row.future.soc}</strong></p>
                              {row.future.soc_sens && <p><strong>Sensitivity scenario: {row.future.soc_sens}</strong></p>}
                            </td>
                          }
                        </React.Fragment>
                      }
                    </tr>
                  </React.Fragment>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <TableToggleButton closed={closed} toggle={toggle} />
    </div>
  )
}

ExperimentsTable.propTypes = {
  config: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default ExperimentsTable
