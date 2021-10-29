import React, { Component} from 'react'
import PropTypes from 'prop-types'

import { TableToggleLink, TableToggleButton, filterRows } from '../../utils'


const ForestStandTable = function({ config, number, rows, actions }) {
  const closed = !config.tables.includes('forest_stand')
  const toggle = () => (actions.toggleTable('forest_stand'))

  return (
    <div className="w-100">
      <div className={closed ? 'table-wrapper closed' : 'table-wrapper'}>
        <table className="table table-bordered table-fixed">
          <caption>
            Table {number}: Harmonization specifiers (<code>harmonization</code>).
            <TableToggleLink closed={closed} toggle={toggle} />
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
              filterRows(config, rows).map((row, index) => {
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
      <TableToggleButton closed={closed} toggle={toggle} />
    </div>
  )
}

ForestStandTable.propTypes = {
  config: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired
}

export default ForestStandTable
