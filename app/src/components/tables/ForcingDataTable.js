import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import Sectors from '../badges/Sectors'
import Status from '../badges/Status'
import { GroupToggleLink, filterGroups, filterField, toggleGroups } from '../../utils'


const ForcingTable = function({ config, caption, rows, groups, actions }) {
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
                    const dois = filterField(config, row.doi)
                    console.log(dois)
                    return (
                      <tr key={index}>
                        <td>
                          <p>{row.title}</p>
                          <Status status={row.status} />
                        </td>
                        <td>
                          <p>
                            <Sectors config={config} sectors={row.sectors} />
                          </p>
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
                            row.path && <p>Path: <code>{filterField(config, row.path)}</code></p>
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
