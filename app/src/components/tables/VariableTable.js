import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import Sectors from '../badges/Sectors'
import { GroupToggleLink, filterGroups, filterField, toggleGroups } from '../../utils'


const VariableTable = function({ config, caption, rows, groups, actions }) {
  const filteredGroups = filterGroups(config, rows, groups, actions)
  const empty = (filteredGroups.length == 0)
  const allOpen = filteredGroups.every(group => !group.closed)
  const allToggle = () => toggleGroups(filteredGroups, allOpen)

  const addExtension = (specifier, extension) => {
      if (extension === null) {
        return specifier
      } else {
        return specifier + '-' + extension
      }
  }

  const getSpecifier = (row) => {
    const extension = filterField(config, row.extension)
    if (extension) {
      if (Array.isArray(extension)) {
        return <strong>{extension.map(e => addExtension(row.specifier, e)).join(', ')}</strong>
      } else if (typeof extension === 'object') {
        return (
          <ul className="list-unstyled">
            {
              Object.keys(extension).map((sector, index) => {
                if (Array.isArray(extension[sector])) {
                  return (
                    <li key={index}>
                      <em className="sector">{sector}:</em>
                      {' '}
                      <strong>{extension[sector].map(e => addExtension(row.specifier, e)).join(', ')}</strong>
                    </li>
                  )
                } else {
                  return (
                    <li key={index}>
                      <em className="sector">{sector}:</em>
                      {' '}
                      <strong>{addExtension(row.specifier, extension[sector])}</strong>
                    </li>
                  )
                }
              })
            }
          </ul>
        )
      } else {
        return <strong>{row.specifier + '-' + extension}</strong>
      }
    } else {
      return <strong>{row.specifier}</strong>
    }
  }

  const getResolution = (row) => {
    const resolutions = filterField(config, row.resolution)

    if (Array.isArray(resolutions)) {
      return resolutions.map((r, i) => (<li key={i}>{r}</li>))
    } else if (typeof resolutions === 'object') {
      if (Object.keys(resolutions).length > 1) {
        return Object.keys(resolutions).map((key, index) => {
          return (
            <li key={index}>
              <em className="sector">{key}:</em>
              {' '}
              {typeof resolutions[key] === 'object' && (
                <ul>
                  {resolutions[key].map((r, i) => (<li key={i}>{r}</li>))}
                </ul>
              )}
              {typeof resolutions[key] !== 'object' && resolutions[key]}
            </li>
          )
        })
      } else {
        const res = Object.values(resolutions)[0]
        if (Array.isArray(res)) {
          return res.map((r, i) => (<li key={i}>{r}</li>))
        } else {
          return <li>{res}</li>
        }
      }
    } else {
      return <li>{resolutions}</li>
    }
  }

  const getFrequency = (row) => {
    const frequency = filterField(config, row.frequency)

    if (typeof frequency === 'object') {
      if (Object.keys(frequency).length > 1) {
        return Object.keys(frequency).map((sector, index) => {
          return (
            <li key={index}>
              <em className="sector">{sector}:</em>
              {' '}
              {frequency[sector]}
            </li>
          )
        })
      } else {
        return <li>{Object.values(frequency)[0]} </li>
      }
    } else {
      return <li>{frequency}</li>
    }
  }

  const getDimensions = (row) => {
    const dimensions = filterField(config, row.dimensions)

    if (Array.isArray(dimensions)) {
      return <p><b>Level dimensions:</b> ({dimensions.join(', ')}).</p>
    } else if (typeof dimensions === 'object') {
      if (Object.keys(dimensions).length > 1) {
        return (
          <>
            <p><b>Level dimensions:</b></p>
            <ul>
              {
                Object.keys(dimensions).map((sector, index) => {
                  return (
                    <li key={index} className="mb-0">
                      <em className="sector">{sector}:</em>
                      {' '}
                      ({dimensions[sector].join(', ')})
                    </li>
                  )
                })
              }
            </ul>
          </>
        )
      } else {
        return <p><b>Level dimensions:</b> ({Object.values(dimensions)[0].join(', ')}).</p>
      }
    } else {
      return null
    }
  }

  const getComment = (row) => {
    const comment = filterField(config, row.comment)

    if (typeof comment === 'object') {
      if (Object.keys(comment).length > 1) {
        return Object.keys(comment).map((sector, index) => {
          return (
            <p key={index}>
              <em className="sector">{sector}:</em>
              {' '}
              <ReactMarkdown components={{p: 'span'}} children={comment[sector]} />
            </p>
          )
        })
      } else {
        return <ReactMarkdown children={Object.values(comment)[0]} />
      }
    } else {
      return <ReactMarkdown children={comment} />
    }
  }

  return (
    <div className="w-100">
      <table className="table table-bordered table-fixed">
        <caption>
          <ReactMarkdown components={{p: 'span'}} children={caption} />
        </caption>
        <thead className="thead-dark">
          <tr>
            <th style={{width: '20%'}}>Variable long name</th>
            <th style={{width: '15%'}}>Variable specifier</th>
            <th style={{width: '15%'}}>Unit</th>
            <th style={{width: '15%'}}>Resolution</th>
            <th style={{width: '35%'}}>
              Comments
              {!empty && <GroupToggleLink className="float-right" closed={!allOpen} toggle={allToggle} all={true} />}
            </th>
          </tr>
        </thead>
        <tbody>
          {
            filteredGroups.map(group => {
              const header = [
                <tr key="-1">
                  <td colSpan="5" className="table-secondary">
                    <GroupToggleLink className="float-right" closed={group.closed} toggle={group.toggle} />
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
                        <td>{row.long_name}</td>
                        <td>{getSpecifier(row)}</td>
                        <td>{row.units}</td>
                        <td>
                          <ul className="resolution-list">
                            {getResolution(row)}
                          </ul>
                          <ul className="resolution-list">
                            {getFrequency(row)}
                          </ul>
                        </td>
                        <td>
                          <p>
                            <Sectors config={config} sectors={row.sectors} />
                          </p>
                          {getDimensions(row)}
                          {getComment(row)}
                        </td>
                      </tr>
                    )
                  })
                )
              }
            })
          }
          {
            empty && <tr>
              <td colSpan="5">
                No output variables have been defined for this selection of simulation round and sectors, yet.
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

VariableTable.propTypes = {
  config: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
  groups: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default VariableTable
