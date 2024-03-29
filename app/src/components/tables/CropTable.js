import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import { GroupToggleLink, filterGroups, toggleGroups } from '../../utils'


const CropTable = function({ config, caption, rows, groups, actions }) {
  const filteredGroups = filterGroups(config, rows, groups, actions)
  const allOpen = filteredGroups.every(group => !group.closed)
  const allToggle = () => toggleGroups(filteredGroups, allOpen)

  return (
    <div className="w-50">
      <table className="table table-bordered table-fixed">
        <caption>
          <ReactMarkdown components={{p: 'span'}} children={caption} />
        </caption>
        <thead className="thead-dark">
          <tr>
            <th style={{width: '50%'}}>Crop</th>
            <th style={{width: '50%'}}>
              Specifier
              <GroupToggleLink className="float-right" closed={!allOpen} toggle={allToggle} all={true} label="datasets" />
            </th>
          </tr>
        </thead>
        <tbody>
          {
            filteredGroups.map(group => {
              const header = [
                <tr key="-1">
                  <td colSpan="5" className="table-secondary">
                    <GroupToggleLink className="float-right" closed={group.closed} toggle={group.toggle}/>
                    <strong>{group.title}</strong>
                  </td>
                </tr>
              ]

              if (group.closed) {
                return header
              } else {
                return header.concat(
                  group.rows.map((row, index) => {
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
  )
}

CropTable.propTypes = {
  config: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
  groups: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default CropTable
