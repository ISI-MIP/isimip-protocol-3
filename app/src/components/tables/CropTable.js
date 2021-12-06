import React, { Component} from 'react'
import PropTypes from 'prop-types'

import { GroupToggleLink, filterRows, filterField } from '../../utils'


const CropTable = function({ config, number, rows, groups, actions }) {
  const filteredRows = filterRows(config, rows)

  return (
    <div className="w-50">
      <table className="table table-bordered table-fixed">
        <caption>
          Table {number}: Crop naming and priorities (<code>crop</code>).
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
              const groupClosed = !config.groups.includes(group.specifier)
              const groupToggle = () => {
                if (closed) actions.toggleTable('crop')
                actions.toggleGroup(group.specifier)
              }

              if (groupRows.length > 0) {
                const groupHeader = [
                  <tr key="-1">
                    <td colSpan="5" className="table-secondary">
                      <GroupToggleLink className="float-right" closed={groupClosed} toggle={groupToggle}/>
                      <strong>{group.title}</strong>
                      {' '}
                      {group.mandatory && <span className="badge badge-info">mandatory</span>}
                    </td>
                  </tr>
                ]

                if (groupClosed) {
                  return groupHeader
                } else {
                  return groupHeader.concat(
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
              }
            })
          }
        </tbody>
      </table>
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
