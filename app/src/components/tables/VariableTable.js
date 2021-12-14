import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import Sectors from '../badges/Sectors'
import { GroupToggleLink, filterGroups, toggleGroups } from '../../utils'


const VariableTable = function({ config, number, rows, groups, actions }) {
  const filteredGroups = filterGroups(config, rows, groups, actions)
  const allOpen = filteredGroups.every(group => !group.closed)
  const allToggle = () => toggleGroups(filteredGroups)

  const addExtension = (specifier, extension) => {
      if (extension === null) {
        return specifier
      } else {
        return specifier + '-' + extension
      }
  }

  const getSpecifier = (row) => {
      if (row.extension) {
        if (Array.isArray(row.extension)) {
          return <strong>{row.extension.map(extension => addExtension(row.specifier, extension)).join(', ')}</strong>
        } else if (typeof row.extension === 'object') {
          return (
            <ul className="list-unstyled">
              {
                Object.keys(row.extension).map((sector, index) => {
                  if (Array.isArray(row.extension[sector])) {
                    return (
                      <li key={index}>
                        {sector}: <strong>{row.extension[sector].map(extension => addExtension(row.specifier, extension)).join(', ')}</strong>
                      </li>
                    )
                  } else {
                    return (
                      <li key={index}>
                        {sector}: <strong>{addExtension(row.specifier, row.extension[sector])}</strong>
                      </li>
                    )
                  }
                })
              }
            </ul>
          )
        } else {
          return <strong>{row.specifier + '-' + row.extension}</strong>
        }
      } else {
        return <strong>{row.specifier}</strong>
      }
  }

  const getResolution = (row) => {
    if (typeof row.resolution === 'object') {
      return Object.keys(row.resolution).map((sector, index) => {
        return <li key={index}>{sector}: {row.resolution[sector]}</li>
      })
    } else {
      return <li>{row.resolution}</li>
    }
  }

  const getFrequency = (row) => {
    if (typeof row.frequency === 'object') {
      return Object.keys(row.frequency).map((sector, index) => {
        return <li key={index}>{sector}: {row.frequency[sector]}</li>
      })
    } else {
      return <li>{row.frequency}</li>
    }
  }

  const getComment = (row) => {
    if (typeof row.comment === 'object') {
      return Object.keys(row.comment).map((sector, index) => {
        return <p key={index}>{sector}: {row.comment[sector]}</p>
      })
    } else {
      return <ReactMarkdown children={row.comment} />
    }
  }

  if (filteredGroups.length > 0) {
    return (
      <div className="w-100">
        <table className="table table-bordered table-fixed">
          <caption>
            Table {number}: Output variables (<code>variable</code>).
          </caption>
          <thead className="thead-dark">
            <tr>
              <th style={{width: '20%'}}>Variable long name</th>
              <th style={{width: '15%'}}>Variable specifier</th>
              <th style={{width: '10%'}}>Unit</th>
              <th style={{width: '15%'}}>Resolution</th>
              <th style={{width: '40%'}}>
                Comments
                <GroupToggleLink className="float-right" closed={!allOpen} toggle={allToggle} all={true} />
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
                        <tr key={index}>
                          <td>{row.long_name}</td>
                          <td>{getSpecifier(row)}</td>
                          <td>{row.units}</td>
                          <td>
                            <ul>
                              {getResolution(row)}
                              {getFrequency(row)}
                            </ul>
                          </td>
                          <td>
                            <p>
                              <Sectors config={config} sectors={row.sectors} />
                            </p>
                            {row.dimensions && <p><b>Level dimensions:</b> ({row.dimensions.join(', ')}).</p>}
                            {getComment(row)}
                          </td>
                        </tr>
                      )
                    })
                  )
                }
              })
            }
          </tbody>
        </table>
      </div>
    )
  } else {
    return <span>No output variables have been defined for this combination of sectors, yet.</span>
  }
}

VariableTable.propTypes = {
  config: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
  groups: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default VariableTable
