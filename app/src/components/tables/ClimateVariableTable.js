import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import Sectors from '../badges/Sectors'
import ClimateForcing from '../badges/ClimateForcing'
import { GroupToggleLink, filterGroups, filterField, toggleGroups } from '../../utils'

const ClimateVariableTable = function({ config, caption, rows, groups, actions }) {
  const filteredGroups = filterGroups(config, rows, groups, actions)
  const empty = (filteredGroups.length == 0)
  const allOpen = filteredGroups.every(group => !group.closed)
  const allToggle = () => toggleGroups(filteredGroups)

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

  const getResolutions = (row) => {
    const resolution = filterField(config, row.resolution)
    if (Array.isArray(resolution)) {
      return resolution.map((resolution, index) => <li key={index}>{resolution}</li>)
    } else {
      return <li>{resolution}</li>
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
                          <td rowSpan="2">
                            <p>{row.long_name}</p>
                            {row.mandatory && <p>
                              <span className="badge badge-info badge-mandatory" title="If your models uses input data of this kind, we require to use the specified dataset. Please see the note above.">
                                mandatory
                              </span>
                            </p>}
                          </td>
                          <td colSpan="4">
                            <code>{filterField(config, row.path)}</code>
                          </td>
                        </tr>
                        <tr>
                          <td><strong>{getSpecifier(row)}</strong></td>
                          <td>{row.unit}</td>
                          <td>
                            <ul>
                              {getResolutions(row)}
                            </ul>
                          </td>
                          <td>
                            <p>
                              <Sectors config={config} sectors={row.sectors} />
                            </p>
                            { row.climate_forcing && <ClimateForcing climateForcings={filterField(config, row.climate_forcing)} /> }
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
                No climate variables have been defined for this selection of simulation round and sectors, yet.
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

ClimateVariableTable.propTypes = {
  config: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
  groups: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default ClimateVariableTable
