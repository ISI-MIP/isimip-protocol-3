import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import { filterField, filterGroups } from '../../utils/filter'

import Mandatory from '../badges/Mandatory'
import Sectors from '../badges/Sectors'
import Code from '../fields/Code'
import List from '../fields/List'
import GroupToggleLink from '../links/GroupToggleLink'

const InputDatasetTable = function({ config, caption, rows, groups, toggleGroup, toggleGroups, group3 }) {
  const filteredGroups = filterGroups(config, rows, groups, group3)
  const empty = (filteredGroups.length == 0)
  const allOpen = filteredGroups.every(group => !group.closed)
  const allToggle = () => toggleGroups(filteredGroups, allOpen)

  return (
    <div className="w-100">
      <table className="table table-bordered table-fixed">
        <caption>
          <ReactMarkdown components={{p: 'span'}}>{caption}</ReactMarkdown>
        </caption>
        <thead className="thead-dark">
          <tr>
            <th style={{width: '20%'}}>Dataset</th>
            <th style={{width: '15%'}}>Variable specifier</th>
            <th style={{width: '15%'}}>Unit</th>
            <th style={{width: '15%'}}>Resolution</th>
            <th style={{width: '35%'}}>
              Sectors / Comments
              {!empty && <GroupToggleLink className="float-right" closed={!allOpen} toggle={allToggle} all={true} />}
            </th>
          </tr>
        </thead>
        <tbody>
          {
            filteredGroups.map(group => {
              const getHeader = (group) => ([
                <tr key="-1">
                  <td colSpan="5" className="table-secondary">
                    <GroupToggleLink className="float-right" closed={group.closed} toggle={() => toggleGroup(group)} />
                    <strong>{group.title}</strong>
                  </td>
                </tr>
              ])

              if (group.closed) {
                return getHeader(group)
              } else {
                return getHeader(group).concat(
                  group.rows.map((row, index) => {
                    return (
                      <React.Fragment key={index}>
                        <tr>
                          <td rowSpan={row.variables.length + 1}>
                            <p>{row.title || row.specifier}</p>
                            {
                              (row.mandatory || row.group3) && (
                                <p>
                                  {
                                    row.group3 && <span className="badge badge-info">Group III</span>
                                  }
                                  <Mandatory mandatory={row.mandatory} />
                                </p>
                              )
                            }
                          </td>
                          <td colSpan="4" className="nowrap">
                            <div>
                              <Code lines={filterField(config, row.path)} />
                              {row.url && <a href={row.url} target="_blank" rel="noreferrer">{row.url}</a>}
                            </div>
                          </td>
                        </tr>
                        {
                          row.variables.map((variable, i) => {
                            const time_periods = filterField(config, row.time_periods)

                            return (
                              <tr key={i}>
                                <td><strong>{variable.specifier}</strong>
                                  {variable.long_name && <span> ({variable.long_name})</span>}</td>
                                <td>{variable.units}</td>
                                {
                                  i == 0 && <React.Fragment>
                                    <td rowSpan={row.variables.length}>
                                      {
                                        time_periods && time_periods.length > 0 && <ul className="resolution-list">
                                          {time_periods.map((time_period, index) => <li key={index}>{time_period}</li>)}
                                        </ul>
                                      }
                                      <List items={filterField(config, row.resolution)} />
                                      <List items={filterField(config, row.frequency)} />
                                    </td>
                                    <td rowSpan={row.variables.length}>
                                      <p>
                                        <Sectors config={config} sectors={row.sectors} />
                                      </p>
                                      {row.comment && <ReactMarkdown>{filterField(config, row.comment)}</ReactMarkdown>}
                                    </td>
                                  </React.Fragment>
                                }
                              </tr>
                            )
                          })
                        }
                      </React.Fragment>
                    )
                  })
                )
              }
            })
          }
          {
            empty && <tr>
              <td colSpan="4">
                No datasets have been defined for this selection of simulation round and sectors, yet.
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

InputDatasetTable.propTypes = {
  config: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
  groups: PropTypes.array.isRequired,
  toggleGroup: PropTypes.func.isRequired,
  toggleGroups: PropTypes.func.isRequired,
  group3: PropTypes.bool
}

export default InputDatasetTable
