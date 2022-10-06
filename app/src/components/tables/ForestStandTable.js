import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import { filterRows } from '../../utils'


const ForestStandTable = function({ config, caption, rows, actions }) {
  return (
    <div className="w-100">
      <table className="table table-bordered table-fixed">
        <caption>
          Table<ReactMarkdown components={{p: 'span'}} children={caption} />
        </caption>
        <thead className="thead-dark">
          <tr>
            <th style={{width: '10%'}}>Stand</th>
            <th style={{width: '15%'}}>Specifier</th>
            <th style={{width: '5%'}}>Country</th>
            <th style={{width: '10%'}}>Coordinates (Lat, Lon)</th>
            <th style={{width: '10%'}}>Forest type</th>
            <th style={{width: '10%'}}>Species</th>
            <th style={{width: '10%'}}>Thinning during historical time period</th>
            <th style={{width: '30%'}}>Comment</th>
          </tr>
        </thead>
        <tbody>
          {
            filterRows(config, rows, closed).map((row, index) => {
              return (
                <tr key={index}>
                  <td>{row.title}</td>
                  <td><strong>{row.specifier}</strong></td>
                  <td>{row.country}</td>
                  <td>{row.lat}, {row.lon}</td>
                  <td>{row.type}</td>
                  <td>{row.species.join(', ')}</td>
                  <td>{row.thinning}</td>
                  <td>{row.comment}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

ForestStandTable.propTypes = {
  config: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired
}

export default ForestStandTable
