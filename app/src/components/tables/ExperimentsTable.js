import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import SimulationRounds from '../badges/SimulationRounds'
import Sectors from '../badges/Sectors'

import { GroupToggleLink, filterRows } from '../../utils'

const ExperimentRow = function({ config, row, climateScenarios, socScenarios, sensScenarios, actions }) {
  let futureTableClass = 'table-danger'
  if (row.future && row.group3) {
    // group 3 experiments
    futureTableClass = 'table-info'
  }

  const colSpan = config.simulation_round.endsWith('a') ? 2 : 5

  return (
    <React.Fragment>
      <tr>
        <td className={row.parent ? 'background' : ''} rowSpan="2">
            <h4>{row.title}</h4>
            {
              row.subtitles && <div className="mb-2">
                {
                  row.subtitles.map((subtitle, subtitleIndex)  => (
                    <p key={subtitleIndex} className="mb-0">
                      <code>{subtitle}</code>
                    </p>
                  ))
                }
              </div>
            }
            {row.priority && <p><strong>{row.priority}</strong></p>}
            <p>
              <SimulationRounds config={config} simulationRounds={row.simulation_rounds} />
              {row.group3 && <span className="badge badge-info">Group III</span>}
              <Sectors config={config} sectors={row.sectors} />
            </p>
            {
              !row.parent && row.children && (
                <p className="experiments-toggle">
                  <GroupToggleLink
                    closed={!config.experiments.includes(row.specifier)}
                    toggle={() => actions.toggleExperiments(row.specifier)}
                    label={`${row.children.length} sensitivity experiment${row.children.length > 1 ? 's' : ''}`}
                  />
                </p>
              )
            }
        </td>
        {
          config.simulation_round.endsWith('a') && <React.Fragment>
            {
              row.historical.climate ? <td className="table-secondary">
                <p>
                  <strong title={climateScenarios[row.historical.climate]}>
                    {row.historical.climate}
                  </strong>
                </p>
                {
                  row.historical.climate_sens && <p>
                    <strong title={sensScenarios[row.historical.climate_sens]}>
                      Sensitivity experiment: {row.historical.climate_sens}
                    </strong>
                  </p>
                }
              </td> : <td rowSpan="2">
                <ReactMarkdown children={row.historical} />
              </td>
            }
          </React.Fragment>
        }
        {
          config.simulation_round.endsWith('b') && <React.Fragment>
            {
              row['pre-industrial'].climate ? <td className="table-secondary">
                <p>
                  <strong title={climateScenarios[row['pre-industrial'].climate]}>
                    {row['pre-industrial'].climate}
                  </strong>
                </p>
                {
                  row['pre-industrial'].climate_sens && <p>
                    <strong title={sensScenarios[row['pre-industrial'].climate_sens]}>
                      Sensitivity experiment: {row['pre-industrial'].climate_sens}
                    </strong>
                  </p>
                }
              </td> : <td rowSpan="2">
                <ReactMarkdown children={row['pre-industrial']} />
              </td>
            }
            {
              row.historical.climate ? <td className="table-secondary">
                <p>
                  <strong title={climateScenarios[row.historical.climate]}>
                    {row.historical.climate}
                  </strong>
                </p>
                {
                  row.historical.climate_sens && <p>
                    <strong title={sensScenarios[row.historical.climate_sens]}>
                      Sensitivity experiment: {row.historical.climate_sens}
                    </strong>
                  </p>
                }
              </td> : <td rowSpan="2">
                <ReactMarkdown children={row.historical} />
              </td>
            }
            {
              row.future.climate ? <td className={futureTableClass}>
                <p>
                  <strong title={climateScenarios[row.future.climate]}>
                    {row.future.climate}
                  </strong>
                </p>
                {
                  row.future.climate_sens && <p>
                    <strong title={sensScenarios[row.future.climate_sens]}>
                      Sensitivity experiment: {row.future.climate_sens}
                    </strong>
                  </p>
                }
              </td> : <td rowspan="2">
                <ReactMarkdown children={row.future} />
              </td>
            }
          </React.Fragment>
        }
      </tr>
      <tr>
        {
          config.simulation_round.endsWith('a') && <React.Fragment>
            {
              row.historical.soc && <td className="table-secondary">
                <p>
                  <strong title={socScenarios[row.historical.soc]}>
                    {row.historical.soc}
                  </strong>
                </p>
                {
                  row.historical.soc_sens &&<p>
                    <strong title={sensScenarios[row.historical.soc_sens]}>
                      Sensitivity experiment: {row.historical.soc_sens}
                    </strong>
                  </p>
                }
              </td>
            }
          </React.Fragment>
        }
        {
          config.simulation_round.endsWith('b') && <React.Fragment>
            {
              row['pre-industrial'].soc && <td className="table-secondary">
                <p>
                  <strong title={socScenarios[row['pre-industrial'].soc]}>
                    {row['pre-industrial'].soc}
                  </strong>
                </p>
                {
                  row['pre-industrial'].soc_sens && <p>
                    <strong title={sensScenarios[row['pre-industrial'].soc_sens]}>
                      Sensitivity experiment: {row['pre-industrial'].soc_sens}
                    </strong>
                  </p>
                }
              </td>
            }
            {
              row.historical.soc && <td className="table-secondary">
                <p>
                  <strong title={socScenarios[row.historical.soc]}>
                    {row.historical.soc}
                  </strong>
                </p>
                {
                  row.historical.soc_sens && <p>
                    <strong title={sensScenarios[row.historical.soc_sens]}>
                      Sensitivity experiment: {row.historical.soc_sens}
                    </strong>
                  </p>
                }
              </td>
            }
            {
              row.future.soc && <td className={futureTableClass}>
                <p>
                  <strong title={socScenarios[row.future.soc]}>
                    {row.future.soc}
                  </strong>
                </p>
                {
                  row.future.soc_sens && <p>
                    <strong title={sensScenarios[row.future.soc_sens]}>
                      Sensitivity experiment: {row.future.soc_sens}
                    </strong>
                  </p>
                }
              </td>
            }
          </React.Fragment>
        }
      </tr>
      {
        !row.parent && row.children && config.experiments.includes(row.specifier) && row.children.map((r, index) => (
          <ExperimentRow
            key={index}
            row={r}
            config={config}
            climateScenarios={climateScenarios}
            socScenarios={socScenarios}
            sensScenarios={sensScenarios}
          />
        ))
      }
      {
        !row.parent && (
          <tr className="separator">
            <td colSpan={colSpan}></td>
          </tr>
        )
      }
    </React.Fragment>
  )
}

const ExperimentsTable = function({ definitions, config, caption, rows, actions }) {
  const filteredRows = filterRows(config, rows, true)

  const climateScenarios = Object.fromEntries(filterRows(config, definitions.climate_scenario).map(scenario => {
    return [scenario.specifier, scenario.description]
  }))
  const socScenarios = Object.fromEntries(filterRows(config, definitions.soc_scenario).map(scenario => {
    return [scenario.specifier, scenario.description]
  }))
  const sensScenarios = Object.fromEntries(filterRows(config, definitions.sens_scenario).map(scenario => {
    return [scenario.specifier, scenario.description]
  }))

  const experimentRows = filteredRows.reduce((rows, row) => {
    if (row.parent) {
      const parentRow = rows.find(r => r.specifier == row.parent)
      parentRow.children = parentRow.children ? [...parentRow.children, { ...row }] : [{ ...row }]
      return rows
    } else {
      return [...rows, { ...row }]
    }
  }, [])

  return (
    <div style={{ width: config.simulation_round.endsWith('a') ? '60%' : '100%'}}>
      <table className="table table-bordered table-fixed">
        <caption>
          <ReactMarkdown components={{p: 'span'}} children={caption} />
        </caption>
        <thead className="thead-dark">
          <tr>
            {
              config.simulation_round.endsWith('a') && <React.Fragment>
                <th style={{width: '70%'}}>Experiment</th>
                <th style={{width: '30%'}}>
                    <p>Period: Historical</p>
                    <p>1901-2019</p>
                </th>
              </React.Fragment>
            }
            {
              config.simulation_round.endsWith('b') && <React.Fragment>
                <th style={{width: '40%'}}>Experiment</th>
                <th style={{width: '20%'}}>
                    <p>Period: Pre-industrial</p>
                    <p>1601-1849</p>
                </th>
                <th style={{width: '20%'}}>
                    <p>Period: Historical</p>
                    <p>1850-2014</p>
                </th>
                <th style={{width: '20%'}}>
                    <p>Period: Future</p>
                    <p>2015-2100</p>
                </th>
              </React.Fragment>
            }
          </tr>
        </thead>
        <tbody>
          {
            experimentRows.map((row, index) => (
              <ExperimentRow
                key={index}
                row={row}
                config={config}
                climateScenarios={climateScenarios}
                socScenarios={socScenarios}
                sensScenarios={sensScenarios}
                actions={actions}
              />
            ))
          }
          {
            (filteredRows.length == 0) && <tr>
              <td colSpan={config.simulation_round.endsWith('a') ? 4 : 5}>
                No experiments have been defined for this selection of simulation round and sectors, yet.
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

ExperimentsTable.propTypes = {
  config: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default ExperimentsTable
