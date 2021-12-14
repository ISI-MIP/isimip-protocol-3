import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import Sectors from '../badges/Sectors'
import { GroupToggleLink, filterGroups, filterField, toggleGroups } from '../../utils'


const SocDatasetTable = function({ config, number, rows, groups, actions }) {
  const filteredGroups = filterGroups(config, rows, groups, actions)
  const allOpen = filteredGroups.every(group => !group.closed)
  const allToggle = () => toggleGroups(filteredGroups)

  return (
    <div className="w-100">
      <table className="table table-bordered table-fixed">
        <caption>
          Table {number}: Socioeconomic datasets for {config.simulation_round}.
        </caption>
        <thead className="thead-dark">
          <tr>
            <th style={{width: '20%'}}>Dataset</th>
            <th style={{width: '30%'}}>Included variables (specifier)</th>
            <th style={{width: '15%'}}>Covered time period/Resolution</th>
            <th style={{width: '35%'}}>
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
                  <td colSpan="4" className="table-secondary">
                    <GroupToggleLink className="float-right" closed={group.closed} toggle={group.toggle}/>
                    <strong>{group.title}</strong>
                    {' '}
                    {group.mandatory && <span className="badge badge-info">mandatory</span>}
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
            })
          }
        </tbody>
      </table>
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
