import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import { filterRows } from '../../utils'


const OceanRegionTable = function({ config, caption, rows, actions }) {
  return (
    <div className="w-75">
      <table className="table table-bordered table-fixed">
        <caption>
          <ReactMarkdown components={{p: 'span'}} children={caption} />
        </caption>
        <thead className="thead-dark">
          <tr>
            <th style={{width: '30%'}}>Ocean region</th>
            <th style={{width: '30%'}}>Specifier</th>
            <th style={{width: '40%'}}>Coordinates (west, south, east, north)</th>
          </tr>
        </thead>
        <tbody>
          {
            filterRows(config, rows, closed).map((row, index) => {
              return (
                <tr key={index}>
                  <td>{row.title}</td>
                  <td><strong>{row.specifier}</strong></td>
                  <td>{row.west}, {row.south}, {row.east}, {row.north}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

OceanRegionTable.propTypes = {
  config: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired
}

export default OceanRegionTable
