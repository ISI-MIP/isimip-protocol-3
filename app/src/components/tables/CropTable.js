import React, { Component} from 'react'
import PropTypes from 'prop-types'

import { TableToggleLink, TableToggleButton, filterRows, filterField } from '../../utils'


const CropTable = function({ config, number, rows, groups, actions }) {
  const closed = !config.tables.includes('crop')
  const toggle = () => (actions.toggleTable('crop'))
  const filteredRows = filterRows(config, rows)

  return (
    <div className="w-50">
      <div className={closed ? 'table-wrapper closed' : 'table-wrapper'}>
        <table className="table table-bordered table-fixed">
          <caption>
            Table {number}: Crop naming and priorities (<code>crop</code>).
            <TableToggleLink closed={closed} toggle={toggle} />
          </caption>
          <thead className="thead-dark">
            <tr>
              <th style={{width: '70%'}}>Crop</th>
              <th style={{width: '30%'}}>Specifier</th>
            </tr>
          </thead>
          <tbody>
            {
              groups.map(group => {
                const groupRows = filteredRows.filter(row => row.group == group.specifier)
                if (groupRows.length > 0) {
                  return [
                    <tr key="-1">
                      <td colSpan="5" className="table-secondary">
                        <strong>{group.title}</strong>
                        {' '}
                        {group.mandatory && <span className="badge badge-info">mandatory</span>}
                      </td>
                    </tr>
                  ].concat(
                    groupRows.map((row, index) => {
                      return (
                        <tr key={index}>
                          <td>{row.title}</td>
                          <td><strong>{row.specifier}</strong></td>
                        </tr>
                      )
                    })
                  )
                }
              })
            }
          </tbody>
        </table>
      </div>
      <TableToggleButton closed={closed} toggle={toggle} />
    </div>
  )
}

CropTable.propTypes = {
  config: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
  groups: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default CropTable
