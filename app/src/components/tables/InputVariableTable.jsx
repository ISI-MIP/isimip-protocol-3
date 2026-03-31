import React from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import Sectors from '../badges/Sectors'
import ClimateForcing from '../badges/ClimateForcing'
import GroupToggleLink from '../links/GroupToggleLink'

import { filterGroups, filterField } from '../../utils/filter'

const InputVariableTable = function({ config, caption, rows, groups, toggleGroup, toggleGroups }) {
  const filteredGroups = filterGroups(config, rows, groups)
  const empty = (filteredGroups.length == 0)
  const allOpen = filteredGroups.every(group => !group.closed)
  const allToggle = () => toggleGroups(filteredGroups, allOpen)

  const getSpecifier = (row) => {
      if (row.extension) {
        if (Array.isArray(row.extension)) {
          return row.extension.map(extension => {
            if (extension === null) {
              return row.specifier
            } else {
              return row.specifier + '-' + extension
            }
          }).join(', ')
        } else {
          return row.specifier + '-' + row.extension
        }
      } else {
        return row.specifier
      }
  }

  const getPath = (row) => {
    const path = filterField(config, row.path)
    if (Array.isArray(path)) {
      return path.map((p, index) => <code key={index} className="pre">{p}{'\n'}</code>)
    } else {
      return <code>{path}</code>
    }
  }

  const getResolutions = (row) => {
    const resolution = filterField(config, row.resolution)
    if (Array.isArray(resolution)) {
      return resolution.map((resolution, index) => <li key={index}>{resolution}</li>)
    } else {
      return <li>{resolution}</li>
    }
  }

  const getFrequencies = (row) => {
    const frequency = filterField(config, row.frequency)
    if (Array.isArray(frequency)) {
      return frequency.map((frequency, index) => <li key={index}>{frequency}</li>)
    } else {
      return <li>{frequency}</li>
    }
  }

  return (
    <div className="w-100">
      <table className="table table-bordered table-fixed">
        <caption>
          <ReactMarkdown components={{p: 'span'}} children={caption} />
        </caption>
        <thead className="thead-dark">
          <tr>
            <th style={{width: '20%'}}>Variable</th>
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
                          <td rowSpan="2">
                            <p>{row.long_name}</p>
                            {row.mandatory && <p>
                              <span className="badge badge-info badge-mandatory" title="If your models uses input data of this kind, we require to use the specified dataset. Please see the note above.">
                                mandatory
                              </span>
                            </p>}
                          </td>
                          <td colSpan="4" className="nowrap">
                            <div>
                              {getPath(row)}
                              {row.url && <a href={row.url} target="_blank">{row.url}</a>}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><strong>{getSpecifier(row)}</strong></td>
                          <td>{filterField(config, row.units)}</td>
                          <td>
                            <ul className="resolution-list">
                              {getResolutions(row)}
                            </ul>
                            <ul className="resolution-list">
                              {getFrequencies(row)}
                            </ul>
                          </td>
                          <td>
                            <p>
                              <Sectors config={config} sectors={row.sectors} />
                            </p>
                            {
                              row.climate_forcing && <p>
                                <ClimateForcing climateForcings={filterField(config, row.climate_forcing)} />
                              </p>
                            }
                            {row.comment && <ReactMarkdown children={filterField(config, row.comment)} />}
                          </td>
                        </tr>
                      </React.Fragment>
                    )
                  })
                )
              }
            })
          }
          {
            empty && <tr>
              <td colSpan="5">
                No variables have been defined for this selection of simulation round and sectors, yet.
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

InputVariableTable.propTypes = {
  config: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
  groups: PropTypes.array.isRequired
}

export default InputVariableTable
