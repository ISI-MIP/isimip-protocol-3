import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import Sectors from '../badges/Sectors'
import { TableToggleLink, TableToggleButton, filterRows, filterField } from '../../utils'


const ClimateDatasetTable = function({ config, number, rows, groups, actions }) {
  const closed = !config.tables.includes('climate_dataset')
  const toggle = () => (actions.toggleTable('climate_dataset'))
  const filteredRows = filterRows(config, rows)

  return (
    <div className="w-100">
      <div className={closed ? 'table-wrapper closed' : 'table-wrapper'}>
        <table className="table table-bordered table-fixed w-100">
          <caption>
            Table {number}: Other climate datesets for {config.simulation_round}.
            <TableToggleLink closed={closed} toggle={toggle} />
          </caption>
          <thead className="thead-dark">
            <tr>
              <th style={{width: '20%'}}>Variable</th>
              <th style={{width: '10%'}}>Variable specifier</th>
              <th style={{width: '10%'}}>Unit</th>
              <th style={{width: '10%'}}>Resolution</th>
              <th style={{width: '50%'}}>Datasets</th>
            </tr>
          </thead>
          <tbody>
            {
              groups.map(group => {
                const groupRows = filteredRows.filter(row => row.group == group.specifier)
                if (groupRows.length > 0) {
                  return [
                    <tr key="-1">
                      <td colSpan="5" className="table-secondary">
                        <strong>{group.title}</strong>
                        {' '}
                        {group.mandatory && <span className="badge badge-info">mandatory</span>}
                      </td>
                    </tr>
                  ].concat(
                    groupRows.map((row, index) => {
                      return (
                        <React.Fragment key={index}>
                          <tr>
                            <td rowSpan="2">
                              <p>{row.title}</p>
                            </td>
                            <td colSpan="4">
                              <code>{filterField(config, row.file_path)}</code>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>{row.specifier}</strong>
                            </td>
                            <td>{row.unit}</td>
                            <td>
                              <ul>
                                  <li>{row.resolution}</li>
                                  <li>{row.frequency}</li>
                              </ul>
                            </td>
                            <td>
                              <p>
                                <Sectors config={config} sectors={row.sectors} />
                              </p>
                              <ReactMarkdown children={filterField(config, row.comment)} />
                            </td>
                          </tr>
                        </React.Fragment>
                      )
                    })
                  )
                }
              })
            }
          </tbody>
        </table>
      </div>
      <TableToggleButton closed={closed} toggle={toggle} />
    </div>
  )
}

ClimateDatasetTable.propTypes = {
  config: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
  groups: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default ClimateDatasetTable
