import React, { Component} from 'react'
import PropTypes from 'prop-types'

import { TableToggleLink, TableToggleButton, filterRows } from '../../utils'


const SpeciesTable = function({ config, number, rows, actions }) {
  const closed = !config.tables.includes('species')
  const toggle = () => (actions.toggleTable('species'))

  return (
    <div className="w-50">
      <table className="table table-bordered table-fixed">
        <caption>
          Table {number}: Harmonization specifiers (<code>harmonization</code>).
          <TableToggleLink closed={closed} toggle={toggle} />
        </caption>
        <thead className="thead-dark">
          <tr>
            <th style={{width: '70%'}}>Species</th>
            <th style={{width: '30%'}}>Specifier</th>
          </tr>
        </thead>
        <tbody className={closed ? 'closed' : ''}>
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
      <TableToggleButton closed={closed} toggle={toggle} />
    </div>
  )
}

SpeciesTable.propTypes = {
  config: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired
}

export default SpeciesTable
