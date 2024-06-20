import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import { filterRows, filterField } from '../../utils'

const Group3RankingTable = function({ config, caption, rows, actions }) {

  const getBackgroundColor = (priority) => {
    if (priority == 'core') {
      return '#cfc'
    } else if (priority < 10) {
      return '#f7f'
    } else if (priority < 20) {
      return '#f8f'
    } else if (priority < 30) {
      return '#f9f'
    } else if (priority < 40) {
      return '#faf'
    } else if (priority < 50) {
      return '#fbf'
    } else if (priority < 60) {
      return '#fcf'
    } else if (priority < 70) {
      return '#fdf'
    } else if (priority < 80) {
      return '#fef'
    } else {
      return 'white'
    }
  }

  const sortRows = (rows) => {
    return config.sortRanking ? (
      rows.toSorted((a, b) => {
        if (b.priority == 'core' || a.priority > b.priority) {
          return 1
        } else if (a.priority == 'core' || a.priority < b.priority) {
          return -1
        } else {
          return 0
        }
      })
    ) : (
      rows
    )
  }

  return (
    <table className="table table-bordered table-fixed w-70">
      <caption>
        <ReactMarkdown components={{p: 'span'}} children={caption} />
      </caption>
      <thead className="thead-dark">
        <tr>
          <th style={{width: '20%'}}>Priority</th>
          <th style={{width: '20%'}}>Climate forcing</th>
          <th style={{width: '20%'}}>LU model</th>
          <th style={{width: '40%'}}>Direct human forcing
            <a href="" className="toggle-group" onClick={(event) => {
              event.preventDefault()
              actions.toggleSortRanking()
            }}>
              Change sorting
            </a>
          </th>
        </tr>
      </thead>
      <tbody>
        {
          sortRows(rows).map((row, index) => (
            <tr key={index}>
              <td style={{ backgroundColor: getBackgroundColor(row.priority) }}>
                {row.priority == 'core' ? <strong>Core set</strong> : row.priority}
              </td>
              <td>{row.gcm}</td>
              <td>{row.lu_model}</td>
              <td><strong>{row.soc_scenario}</strong></td>
            </tr>
          ))
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
