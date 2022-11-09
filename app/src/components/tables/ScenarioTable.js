import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import SimulationRounds from '../badges/SimulationRounds'
import Sectors from '../badges/Sectors'
import Status from '../badges/Status'

import { GroupToggleLink, filterRows, filterField, toggleGroups } from '../../utils'


const ScenarioTable = function({ config, caption, rows, actions }) {
  const filteredRows = filterRows(config, rows).map(row => {
    row.closed = !config.scenarios.includes(row.specifier)
    row.toggle = () => actions.toggleScenario(row.specifier)
    return row
  })

  const anyDatasets = filteredRows.some(row => row.datasets)
  const allOpen = filteredRows.every(row => !row.closed)
  const allToggle = () => toggleGroups(filteredRows, allOpen)

  return (
    <table className="table table-bordered table-fixed">
      <caption>
        <ReactMarkdown components={{p: 'span'}} children={caption} />
      </caption>
      <thead className="thead-dark">
        <tr>
          <th style={{width: '25%'}}>Experiment specifier</th>
          <th style={{width: '25%'}}>Forcing</th>
          <th style={{width: '15%'}}>Status</th>
          <th style={{width: '35%'}}>
            Datasets
            {anyDatasets && <GroupToggleLink className="float-right" closed={!allOpen} toggle={allToggle} all={true} label="datasets" />}
          </th>
        </tr>
      </thead>
      <tbody>
        {
          filteredRows.map((row, index) => {
            const datasets = filterRows(config, row.datasets)
            const rowSpan = (datasets && !row.closed) ? datasets.length + 1 : 1

            const firstRow = [
              (
                <tr key={row.specifier}>
                  <td rowSpan={rowSpan} className="extra-border-bottom">
                    <p>
                      <strong>{row.specifier}</strong>
                    </p>
                    <p>
                      <SimulationRounds config={config} simulationRounds={row.simulation_rounds} />
                      <Sectors config={config} sectors={row.sectors} />
                    </p>
                  </td>
                  <td colSpan="3" className={rowSpan == 1 ? 'extra-border-bottom' : ''}>
                    {datasets.length > 0 && <GroupToggleLink className="float-right" closed={row.closed} toggle={row.toggle} label="datasets" />}
                    <p>{row.description}</p>
                    <ReactMarkdown children={row.description_note} />
                  </td>
                </tr>
              )
            ]

            if (datasets.length > 0 && !row.closed) {
              return firstRow.concat(datasets.map((dataset, index) => {
                const last = (index == datasets.length - 1)
                return (
                  <tr key={`${row.specifier}-${index}`}>
                    <td className={last ? 'extra-border-bottom' : ''}>
                      {dataset.dataset}
                    </td>
                    <td className={last ? 'extra-border-bottom' : ''}>
                      <Status status={dataset.status} />
                    </td>
                    <td className={last ? 'extra-border-bottom' : ''}>
                      {
                        dataset.doi && <p>
                          <a className="doi-link" href={dataset.doi}>{ dataset.doi }</a>
                        </p>
                      }
                      <ReactMarkdown children={dataset.comment} />
                    </td>
                  </tr>
                )
              }))
            } else {
              return firstRow
            }
          })
        }
      </tbody>
    </table>
  )
}

ScenarioTable.propTypes = {
  config: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired
}

export default ScenarioTable
