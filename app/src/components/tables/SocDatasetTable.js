import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import Sectors from '../badges/Sectors'
import { TableToggleLink, TableToggleButton, GroupToggleLink, filterRows, filterField } from '../../utils'


const SocDatasetTable = function({ config, number, rows, groups, actions }) {
  const closed = !config.tables.includes('soc_dataset')
  const toggle = () => (actions.toggleTable('soc_dataset'))
  const filteredRows = filterRows(config, rows)

  return (
    <div className="w-100">
      <table className="table table-bordered table-fixed">
        <caption>
          Table {number}: Socioeconomic datasets for {config.simulation_round}.
          <TableToggleLink closed={closed} toggle={toggle} />
        </caption>
        <thead className="thead-dark">
          <tr>
            <th style={{width: '20%'}}>Dataset</th>
            <th style={{width: '30%'}}>Included variables (specifier)</th>
            <th style={{width: '15%'}}>Covered time period/Resolution</th>
            <th style={{width: '35%'}}>Reference/Source and Comments</th>
          </tr>
        </thead>
        <tbody className={closed ? 'closed' : ''}>
          {
            groups.map(group => {
              const groupRows = filteredRows.filter(row => row.group == group.specifier)
              const groupClosed = !config.groups.includes(group.specifier)
              const groupToggle = () => {
                if (closed) actions.toggleTable('soc_dataset')
                actions.toggleGroup(group.specifier)
              }

              if (groupRows.length > 0) {
                const groupHeader = [
                  <tr key="-1">
                    <td colSpan="4" className="table-secondary">
                      <GroupToggleLink className="float-right" closed={groupClosed} toggle={groupToggle}/>
                      <strong>{group.title}</strong>
                      {' '}
                      {group.mandatory && <span className="badge badge-info">mandatory</span>}
                    </td>
                  </tr>
                ]

                if (groupClosed) {
                  return groupHeader
                } else {
                  return groupHeader.concat(
                    groupRows.map((row, index) => {
                      return (
                        <React.Fragment key={index}>
                          <tr>
                            <td rowSpan="2">
                              <p>{row.title} {row.mandatory  && <span className="badge badge-info">mandatory</span>}</p>
                            </td>
                            <td colSpan="3">
                              {row.file_path && <code>{filterField(config, row.file_path)}</code>}
                              {row.url && <a href="{row.url}">{row.url}</a>}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <ul>
                                {row.variables.map((variable, index) => <li key={index}>{variable}</li>)}
                              </ul>
                            </td>
                            <td>
                              <ul>
                                {filterField(config, row.time_periods).map((time_period, index) => <li key={index}>{time_period}</li>)}
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
              }
            })
          }
        </tbody>
      </table>
      <TableToggleButton closed={closed} toggle={toggle} />
    </div>
  )
}

SocDatasetTable.propTypes = {
  config: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
  groups: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default SocDatasetTable
