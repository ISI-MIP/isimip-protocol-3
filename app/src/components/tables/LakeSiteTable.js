import React, { Component} from 'react'
import PropTypes from 'prop-types'

import { filterRows } from '../../utils'


const LakeSiteTable = function({ config, number, rows, actions }) {
  return (
    <div className="w-100">
      <table className="table table-bordered table-fixed">
        <caption>
          Table {number}: Lake site specifications for local lake models (<code>lake-site</code>).
        </caption>
        <thead className="thead-dark">
          <tr>
            <th style={{width: '20%'}}>Lake name</th>
            <th style={{width: '20%'}}>Specifier</th>
            <th style={{width: '20%'}}>Reservoir or lake</th>
            <th style={{width: '20%'}}>Country</th>
            <th style={{width: '20%'}}>Coordinates (Lat, Lon)</th>
          </tr>
        </thead>
        <tbody>
          {
            filterRows(config, rows, closed).map((row, index) => {
              return (
                <tr key={index}>
                  <td>{row.title}</td>
                  <td><strong>{row.specifier}</strong></td>
                  <td>{row.type}</td>
                  <td>{row.country}</td>
                  <td>{row.lat}, {row.lon}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

LakeSiteTable.propTypes = {
  config: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired
}

export default LakeSiteTable