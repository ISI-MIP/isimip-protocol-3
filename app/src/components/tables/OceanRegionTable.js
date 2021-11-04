import React, { Component} from 'react'
import PropTypes from 'prop-types'

import { TableToggleLink, TableToggleButton, filterRows } from '../../utils'


const OceanRegionTable = function({ config, number, rows, actions }) {
  const closed = !config.tables.includes('ocean_region')
  const toggle = () => (actions.toggleTable('ocean_region'))

  return (
    <div className="w-75">
      <table className="table table-bordered table-fixed">
        <caption>
          Table {number}: Harmonization specifiers (<code>harmonization</code>).
          <TableToggleLink closed={closed} toggle={toggle} />
        </caption>
        <thead className="thead-dark">
          <tr>
            <th style={{width: '30%'}}>Ocean region</th>
            <th style={{width: '30%'}}>Specifier</th>
            <th style={{width: '40%'}}>Coordinates (west, south, east, north)</th>
          </tr>
        </thead>
        <tbody className={closed ? 'closed' : ''}>
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
      <TableToggleButton closed={closed} toggle={toggle} />
    </div>
  )
}

OceanRegionTable.propTypes = {
  config: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired
}

export default OceanRegionTable
