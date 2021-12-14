import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import Sectors from '../badges/Sectors'
import { GroupToggleLink, filterGroups, filterField, toggleGroups } from '../../utils'


const ClimateDatasetTable = function({ config, number, rows, groups, actions }) {
  const filteredGroups = filterGroups(config, rows, groups, actions)
  const allOpen = filteredGroups.every(group => !group.closed)
  const allToggle = () => toggleGroups(filteredGroups)

  return (
    <div className="w-100">
      <table className="table table-bordered table-fixed w-100">
        <caption>
          Table {number}: Other climate datesets for {config.simulation_round}.
        </caption>
        <thead className="thead-dark">
          <tr>
            <th style={{width: '20%'}}>Variable</th>
            <th style={{width: '10%'}}>Variable specifier</th>
            <th style={{width: '10%'}}>Unit</th>
            <th style={{width: '10%'}}>Resolution</th>
            <th style={{width: '50%'}}>
              Reference/Source and Comments
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
                      <React.Fragment key={index}>
                        <tr>
                          <td rowSpan="2">
                            <p>{row.title}</p>
                            {row.mandatory && <p>
                              <span className="badge badge-info badge-mandatory" title="If your models uses input data of this kind, we require to use the specified dataset. Please see the note above.">
                                mandatory
                              </span>
                            </p>}
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
