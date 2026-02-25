import React from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import Sectors from '../badges/Sectors'
import { filterRows } from '../../utils/filter'


const BiasAdjustmentTable = function({ config, caption, rows }) {
  return (
    <table className="table table-bordered table-fixed">
      <caption>
        <ReactMarkdown components={{p: 'span'}} children={caption} />
      </caption>
      <thead className="thead-dark">
        <tr>
          <th style={{width: '25%'}}>Specifier</th>
          <th style={{width: '75%'}}>Description</th>
        </tr>
      </thead>
      <tbody>
        {
          filterRows(config, rows).map((row, index) => {
            return (
              <tr key={index}>
                <td>
                  <strong>{row.specifier}</strong>
                  <p>
                    <Sectors config={config} sectors={row.sectors} />
                  </p>
                </td>
                <td>
                  {row.description}
                </td>
            </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

BiasAdjustmentTable.propTypes = {
  config: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired
}

export default BiasAdjustmentTable
