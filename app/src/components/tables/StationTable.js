import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import { filterRows } from '../../utils'


const StationTable = function({ config, caption, rows, actions }) {
  return (
    <div className="w-100">
      <table className="table table-bordered table-fixed">
        <caption>
          <ReactMarkdown components={{p: 'span'}} children={caption} />
        </caption>
        <thead className="thead-dark">
          <tr>
            <th style={{width: '10%'}}>River Basin</th>
            <th style={{width: '10%'}}>Station</th>
            <th style={{width: '20%'}}>Specifier</th>
            <th style={{width: '15%'}}>Coordinates (Lat, Lon)</th>
            <th style={{width: '10%'}}>GRDC Station Code</th>
            <th style={{width: '10%'}}>Data availability (monthly discharge)</th>
            <th style={{width: '10%'}}>Data availability (daily discharge)</th>
            <th style={{width: '10%'}}>Area upstream of gauge (km2) according to GRDC or GIS</th>
          </tr>
        </thead>
        <tbody>
          {
            filterRows(config, rows, closed).map((row, index) => {
              return (
                <tr key={index}>
                  <td>{row.river}</td>
                  <td>{row.title}</td>
                  <td><strong>{row.river_specifier}-{row.specifier}</strong></td>
                  <td>{row.lat}, {row.lon}</td>
                  <td>{row.grdc}</td>
                  <td>{row.availability_monthly}</td>
                  <td>{row.availability_daily}</td>
                  <td>{row.area_upstream}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

StationTable.propTypes = {
  config: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired
}

export default StationTable
