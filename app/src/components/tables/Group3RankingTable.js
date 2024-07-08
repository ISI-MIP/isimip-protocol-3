import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import { filterGroups, filterRows, filterField, GroupToggleLink, toggleGroups } from '../../utils'

const Group3RankingTable = function({ config, caption, rows, groups, actions }) {

  const filteredGroups = filterGroups(config, rows, groups, actions)
  const allOpen = filteredGroups.every(group => !group.closed)
  const allToggle = () => toggleGroups(filteredGroups, allOpen)

  const backgroundColor = {
    'tier1': '#cfc',
    'tier2': '#f9f',
    'tier3': '#faf',
    'tier4': '#fbf',
    'tier5': '#fcf',
    'tier6': '#fdf',
    'tier7': '#fef',
    'tier8': 'white'
  }

  const sortRows = (rows) => {
    return (
      rows.toSorted((a, b) => {
        if (a.priority > b.priority) {
          return 1
        } else if (a.priority < b.priority) {
          return -1
        } else {
          return 0
        }
      })
    )
  }

  return (
    <table className="table table-bordered table-fixed w-70">
      <caption>
        <ReactMarkdown components={{p: 'span'}} children={caption} />
      </caption>
      <thead className="thead-dark">
        <tr>
          <th style={{width: '10%'}}>Priority</th>
          <th style={{width: '25%'}}>Climate forcing</th>
          <th style={{width: '25%'}}>LU model</th>
          <th style={{width: '40%'}}>
            Direct human forcing
            <GroupToggleLink className="float-right" closed={!allOpen} toggle={allToggle} all={true} label="tiers" />
          </th>
        </tr>
      </thead>
      <tbody>
        {
          filteredGroups.map(group => {
            const header = [
              <tr key="-1">
                <td colSpan="5" className="table-secondary">
                  <GroupToggleLink className="float-right" closed={group.closed} toggle={group.toggle} label="tier"/>
                  <strong>{group.title}</strong>
                </td>
              </tr>
            ]

            if (group.closed) {
              return header
            } else {
              return header.concat(
                sortRows(group.rows).map((row, index) => {
                  return (
                    <tr key={index}>
                      <td style={{ backgroundColor: backgroundColor[row.group] }}>
                        {row.priority}
                      </td>
                      <td>{row.gcm}</td>
                      <td>{row.lu_model}</td>
                      <td><strong>{row.soc_scenario}</strong></td>
                    </tr>
                  )
                })
              )
            }
          })
        }
      </tbody>
    </table>
  )
}

Group3RankingTable.propTypes = {
  config: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Group3RankingTable
