import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import Sectors from '../badges/Sectors'
import Status from '../badges/Status'
import Mandatory from '../badges/Mandatory'
import SocForcing from '../badges/SocForcing'

import { GroupToggleLink, filterGroups, filterField, toggleGroups } from '../../utils'

const ForcingTable = function({ config, caption, rows, groups, actions }) {
  const filteredGroups = filterGroups(config, rows, groups, actions, true)
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
            <th style={{width: '30%'}}>Forcing</th>
            <th style={{width: '70%'}}>
              DOI / Path / Documentation
              {!empty && <GroupToggleLink className="float-right" closed={!allOpen} toggle={allToggle} all={true} />}
            </th>
          </tr>
        </thead>
        <tbody>
          {
            filteredGroups.map(group => {
              const header = [
                <tr key="-1">
                  <td colSpan="6" className="table-secondary">
                    <GroupToggleLink className="float-right" closed={group.closed} toggle={group.toggle}/>
                    <strong>{group.title[config.simulation_round] || group.title}</strong>
                  </td>
                </tr>
              ]

              if (group.closed) {
                return header
              } else {
                return header.concat(
                  group.rows.map((row, index) => {
                    const dois = filterField(config, row.doi)
                    const path = filterField(config, row.path)

                    return (
                      <tr key={index}>
                        <td colSpan="1">
                          <p>{row.title}</p>
                          <Mandatory mandatory={row.mandatory} />
                          <Status status={row.status} />
                        </td>
                        <td>
                          <p>
                            {row.group3 && <span className="badge badge-info">Group III</span>}
                            <Sectors config={config} sectors={row.sectors} />
                          </p>
                          {
                            row.soc_forcing && (
                              <p>
                                <SocForcing socForcings={row.soc_forcing} />
                              </p>
                            )
                          }
                          {
                            dois && (
                              Array.isArray(dois) ? (
                                dois.map((doi, index) => (
                                  <p key={index}>
                                    <a className="doi-link" href={doi}>{doi}</a>
                                  </p>
                                ))
                              ) : (
                                <p>
                                  <a className="doi-link" href={dois}>{dois}</a>
                                </p>
                              )
                            )
                          }
                          {
                            row.path && (
                              Array.isArray(path) ? (
                                <>
                                  <p className="mb-0">Paths:</p>
                                  <ul className="list-unstyled mb-1">
                                  {
                                    path.map((p, i) => <div className="mb-0" key={i}><code>{p}</code></div>)
                                  }
                                  </ul>
                                </>
                              ) : (
                                <p>
                                  Path: <code>{filterField(config, row.path)}</code>
                                  {
                                    row.path_comment && <>
                                      {' ('}<ReactMarkdown children={row.path_comment} components={{p: React.Fragment}}/>{')'}
                                    </>
                                  }
                                </p>
                              )
                            )
                          }
                          {
                            row.noadapt && (
                              <p>
                                noadapt forcing:{' '}
                                {
                                  Array.isArray(row.noadapt) ? (
                                    row.noadapt.map((s, i) => <strong key={i}>{s}</strong>).reduce((agg, cur) => [agg, ', ', cur])
                                  ) : (
                                    <ReactMarkdown children={row.noadapt} components={{p: React.Fragment}}/>
                                  )
                                }
                              </p>
                            )
                          }
                          {
                            row.adapt && (
                              <p>
                                adapt forcing:{' '}
                                {
                                  Array.isArray(row.adapt) ? (
                                    row.adapt.map((s, i) => <strong key={i}>{s}</strong>).reduce((agg, cur) => [agg, ', ', cur])
                                  ) : (
                                    <ReactMarkdown children={row.adapt} components={{p: React.Fragment}}/>
                                  )
                                }
                              </p>
                            )
                          }
                          {
                            row.comment && <ReactMarkdown children={filterField(config, row.comment)} />
                          }
                        </td>
                      </tr>
                    )
                  })
                )
              }
            })
          }
          {
            empty && <tr>
              <td colSpan="4">
                No forcing data have been defined for this selection of simulation round and sectors, yet.
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

ForcingTable.propTypes = {
  config: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
  groups: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default ForcingTable
