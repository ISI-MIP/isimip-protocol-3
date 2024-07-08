import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import { filterRows, filterField } from '../../utils'

import Sectors from '../badges/Sectors'

const Group3RequirementsTable = function({ config, caption, rows }) {
  return (
    <table className="table table-bordered table-fixed">
      <caption>
        <ReactMarkdown components={{p: 'span'}} children={caption} />
      </caption>
      <thead className="thead-dark">
        <tr>
          <th style={{width: '25%'}}>Forcing</th>
          <th style={{width: '25%'}}>Required</th>
          <th style={{width: '25%'}}>Harmonized</th>
          <th style={{width: '25%'}}>Reference to data sets that are used for the harmonization</th>
        </tr>
      </thead>
      <tbody>
        {
          filterRows(config, rows).map((row, index) => {
            return (
              <tr key={index}>
                <td>{row.title}</td>
                <td><Sectors config={config} sectors={row.required} /></td>
                <td><Sectors config={config} sectors={row.harmonized} /></td>
                <td>
                  {
                    row.datasets && (
                      <ul>
                        {
                          row.datasets.map((d, i) => <li key={i}>{d}</li>)
                        }
                      </ul>
                    )
                  }
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

Group3RequirementsTable.propTypes = {
  config: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired
}

export default Group3RequirementsTable
