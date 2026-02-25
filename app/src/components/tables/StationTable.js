import React from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'
import { orderBy } from 'lodash'

import { filterRows } from '../../utils/filter'


const StationTable = function({ config, caption, rows }) {
  return (
    <div className="w-100">
      <table className="table table-bordered table-fixed">
        <caption>
          <ReactMarkdown components={{p: 'span'}} children={caption} />
        </caption>
        <thead className="thead-dark">
          <tr>
            <th style={{width: '20%'}}>River Basin</th>
            <th style={{width: '20%'}}>Station</th>
            <th style={{width: '30%'}}>Specifier</th>
            <th style={{width: '20%'}}>Coordinates (Lat, Lon)</th>
          </tr>
        </thead>
        <tbody>
          {
            orderBy(filterRows(config, rows), ['river', 'title']).map((row, index) => {
              return (
                <tr key={index}>
                  <td>{row.river}</td>
                  <td>{row.title}</td>
                  <td><strong>{row.river_specifier}-{row.specifier_file || row.specifier}</strong></td>
                  <td>
                    {
                      row.lat && row.lon && <span>({row.lat}, {row.lon})</span>
                    }
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

StationTable.propTypes = {
  config: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired
}

export default StationTable
