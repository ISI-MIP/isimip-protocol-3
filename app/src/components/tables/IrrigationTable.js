import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import { filterRows, filterField } from '../../utils'


const IrrigationTable = function({ config, caption, rows }) {
  return (
    <table className="table table-bordered table-fixed w-50">
      <caption>
        <ReactMarkdown components={{p: 'span'}} children={caption} />
      </caption>
      <thead className="thead-dark">
        <tr>
          <th style={{width: '70%'}}>Irrigation Type</th>
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
  caption: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired
}

export default IrrigationTable
