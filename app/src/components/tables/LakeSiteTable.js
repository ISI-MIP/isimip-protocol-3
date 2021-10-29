import React, { Component} from 'react'
import PropTypes from 'prop-types'

import { TableToggleLink, TableToggleButton, filterRows } from '../../utils'


const LakeSiteTable = function({ config, number, rows, actions }) {
  const closed = !config.tables.includes('lake_sites')
  const toggle = () => (actions.toggleTable('lake_sites'))

  return (
    <div className="w-100">
      <div className={closed ? 'table-wrapper closed' : 'table-wrapper'}>
        <table className="table table-bordered table-fixed">
          <caption>
            Table {number}: Lake site specifications for local lake models (<code>lake-site</code>).
            <TableToggleLink closed={closed} toggle={toggle} />
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
              filterRows(config, rows).map((row, index) => {
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
      <TableToggleButton closed={closed} toggle={toggle} />
    </div>
  )
}

LakeSiteTable.propTypes = {
  config: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired
}

export default LakeSiteTable
