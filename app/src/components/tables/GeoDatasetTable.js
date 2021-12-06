import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import Sectors from '../badges/Sectors'
import { GroupToggleLink, filterRows, filterField } from '../../utils'

const GeoDatasetTable = function({ config, number, rows, groups, actions }) {
  const filteredRows = filterRows(config, rows)

  return (
    <div className="w-100">
      <table className="table table-bordered table-fixed">
        <caption>
          Table {number}: Geographic data and information for {config.simulation_round}.
        </caption>
        <thead className="thead-dark">
          <tr>
            <th style={{width: '20%'}}>Dataset</th>
            <th style={{width: '30%'}}>Included variables (specifier)</th>
            <th style={{width: '10%'}}>Resolution</th>
            <th style={{width: '40%'}}>Reference/Source and Comments</th>
          </tr>
        </thead>
        <tbody>
          {
            groups.map(group => {
              const groupRows = filteredRows.filter(row => row.group == group.specifier)
              const groupClosed = !config.groups.includes(group.specifier)
              const groupToggle = () => {
                if (closed) actions.toggleTable('geo_dataset')
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
                            <td className="no-border-bottom">
                              <p>{row.title || row.specifier }</p>
                            </td>
                            <td colSpan="3">
                              <code>{filterField(config, row.file_path)}</code>
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>
                              <ul>
                                {row.variables.map((variable, index) => <li key={index}>{variable}</li>)}
                              </ul>
                            </td>
                            <td>
                              <ul>
                                  <li>{row.resolution}</li>
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
    </div>
  )
}

GeoDatasetTable.propTypes = {
  config: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
  groups: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default GeoDatasetTable
