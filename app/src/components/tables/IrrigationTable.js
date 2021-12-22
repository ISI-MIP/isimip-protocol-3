import React, { Component} from 'react'
import PropTypes from 'prop-types'

import { filterRows, filterField } from '../../utils'


const IrrigationTable = function({ config, number, rows }) {
  return (
    <table className="table table-bordered table-fixed w-50">
      <caption>
        Table {number}: Irrigation specifiers (<code>irrigation</code>).
      </caption>
      <thead className="thead-dark">
        <tr>
          <th style={{width: '70%'}}>Crop</th>
          <th style={{width: '30%'}}>Specifier</th>
        </tr>
      </thead>
      <tbody>
        {
          filterRows(config, rows).map((row, index) => {
            return (
              <tr key={index}>
                <td>{row.title}</td>
                <td><strong>{row.specifier}</strong></td>
            </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

IrrigationTable.propTypes = {
  config: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired
}

export default IrrigationTable
