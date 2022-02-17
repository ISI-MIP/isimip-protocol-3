import React, { Component} from 'react'
import PropTypes from 'prop-types'

import { filterRows, filterField } from '../../utils'


const HarmonizationTable = function({ config, number, rows }) {
  return (
    <table className="table table-bordered table-fixed w-100">
      <caption>
        Table {number}: Harmonization specifiers (<code>harmonization</code>).
      </caption>
      <thead className="thead-dark">
        <tr>
        <th style={{width: '20%'}}>Simulation</th>
        <th style={{width: '10%'}}>Specifier</th>
        <th style={{width: '70%'}}>Description</th>
        </tr>
      </thead>
      <tbody>
        {
          filterRows(config, rows).map((row, index) => {
            return (
              <tr key={index}>
                <td>{row.title}</td>
                <td><strong>{row.specifier}</strong></td>
                <td>{row.description}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

HarmonizationTable.propTypes = {
  config: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired
}

export default HarmonizationTable
