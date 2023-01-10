import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import Sectors from '../badges/Sectors'
import { GroupToggleLink, filterGroups, filterField, toggleGroups } from '../../utils'


const SocDatasetTable = function({ config, caption, rows, groups, actions }) {
  const filteredGroups = filterGroups(config, rows, groups, actions)
  const empty = (filteredGroups.length == 0)
  const allOpen = filteredGroups.every(group => !group.closed)
  const allToggle = () => toggleGroups(filteredGroups, allOpen)

  return (
    <div className="w-100">
      <table className="table table-bordered table-fixed">
        <caption>
          <ReactMarkdown components={{p: 'span'}} children={caption} />
        </caption>
        <thead className="thead-dark">
          <tr>
            <th style={{width: '20%'}}>Dataset</th>
            <th style={{width: '15%'}}>Variable specifier</th>
            <th style={{width: '15%'}}>Unit</th>
            <th style={{width: '15%'}}>Covered time period / Resolution</th>
            <th style={{width: '35%'}}>
              Sectors / Source / Comments
              {!empty && <GroupToggleLink className="float-right" closed={!allOpen} toggle={allToggle} all={true} />}
            </th>
          </tr>
        </thead>
        <tbody>
          {
            filteredGroups.map(group => {
              const header = [
                <tr key="-1">
                  <td colSpan="5" className="table-secondary">
                    <GroupToggleLink className="float-right" closed={group.closed} toggle={group.toggle}/>
                    <strong>{group.title}</strong>
                  </td>
                </tr>
              ]

              if (group.closed) {
                return header
              } else {
                return header.concat(
                  group.rows.map((row, index) => {
                    return (
                      <React.Fragment key={index}>
                        <tr>
                          <td rowSpan={row.variables.length + 1}>
                            <p>{row.title}</p>
                            {row.mandatory && <p>
                              <span className="badge badge-info badge-mandatory" title="If your models uses input data of this kind, we require to use the specified dataset. Please see the note above.">
                                mandatory
                              </span>
                            </p>}
                          </td>
                          <td colSpan="4">
                            {row.path && <code>{filterField(config, row.path)}</code>}
                            {row.url && <a href={row.url} target="_blank">{row.url}</a>}
                          </td>
                        </tr>
                        {
                          row.variables.map((variable, i) => {
                            const time_periods = filterField(config, row.time_periods)

                            return (
                              <tr key={i}>
                                <td><strong>{variable.specifier}</strong> ({variable.long_name})</td>
                                <td>{variable.unit}</td>
                                {
                                  i == 0 && <React.Fragment>
                                    <td rowSpan={row.variables.length}>
                                      {
                                        time_periods.length > 0 && <ul className="resolution-list">
                                          {time_periods.map((time_period, index) => <li key={index}>{time_period}</li>)}
                                        </ul>
                                      }
                                      {
                                        row.resolution && <ul className="resolution-list">
                                          <li>{row.resolution}</li>
                                        </ul>
                                      }
                                      {
                                        row.frequency && <ul className="resolution-list">
                                          <li>{row.frequency}</li>
                                        </ul>
                                      }
                                    </td>
                                    <td rowSpan={row.variables.length}>
                                      <p>
                                        <Sectors config={config} sectors={row.sectors} />
                                      </p>
                                      {row.comment && <ReactMarkdown children={filterField(config, row.comment)} />}
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
                No socioeconomic datasets have been defined for this selection of simulation round and sectors, yet.
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

SocDatasetTable.propTypes = {
  config: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
  groups: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default SocDatasetTable
