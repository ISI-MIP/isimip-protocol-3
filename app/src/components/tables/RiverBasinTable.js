import React, { Component} from 'react'
import PropTypes from 'prop-types'

import { filterRows } from '../../utils'


const RiverBasinTable = function({ config, number, rows, actions }) {
  return (
    <div className="w-100">
      <table className="table table-bordered table-fixed">
        <caption>
          Table {number}: Catchment gauging stations for reporting regional hydrological model results (<code>river-basin</code>).
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

RiverBasinTable.propTypes = {
  config: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired
}

export default RiverBasinTable
