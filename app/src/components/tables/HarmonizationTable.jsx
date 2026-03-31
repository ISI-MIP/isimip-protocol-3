import React from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import { filterRows, filterField } from '../../utils/filter'


const HarmonizationTable = function({ config, caption, rows }) {
  return (
    <table className="table table-bordered table-fixed w-100">
      <caption>
        <ReactMarkdown components={{p: 'span'}} children={caption} />
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
  caption: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired
}

export default HarmonizationTable
