import React, { Component} from 'react'
import PropTypes from 'prop-types'

import { filterRows } from '../../utils'


const SpeciesTable = function({ config, number, rows, actions }) {
  return (
    <div className="w-50">
      <table className="table table-bordered table-fixed">
        <caption>
          Table {number}: Species specifiers (<code>species</code>).
        </caption>
        <thead className="thead-dark">
          <tr>
            <th style={{width: '70%'}}>Species</th>
            <th style={{width: '30%'}}>Specifier</th>
          </tr>
        </thead>
        <tbody>
          {
            filterRows(config, rows, closed).map((row, index) => {
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
    </div>
  )
}

SpeciesTable.propTypes = {
  config: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired
}

export default SpeciesTable
