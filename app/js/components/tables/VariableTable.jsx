import React from 'react'
import { useDispatch } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'
import { isUndefined } from 'lodash'

import Sectors from '../badges/Sectors'
import GroupToggleLink from '../links/GroupToggleLink'

import { filterGroups, filterField } from '../../utils/filter'

const VariableTable = function({ config, caption, rows, groups, toggleGroup, toggleGroups }) {
  const filteredGroups = filterGroups(config, rows, groups)
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
                  {resolutions[key].map((r, i) => (
                    <li key={i}>
                      <ReactMarkdown children={r} />
                    </li>
                  ))}
                </ul>
              )}
              {typeof resolutions[key] !== 'object' && (
                <ReactMarkdown children={resolutions[key]} />
              )}
            </li>
          )
        })
      } else {
        const res = Object.values(resolutions)[0]
        if (Array.isArray(res)) {
          return res.map((r, i) => (<li key={i}>{r}</li>))
        } else {
          return <li><ReactMarkdown children={res} /></li>
        }
      }
    } else {
      return <li><ReactMarkdown children={resolutions} /></li>
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

    if (dimensions === null) {
      return null
    } else if (Array.isArray(dimensions)) {
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
                      {
                        dimensions[sector] === null ? (
                          <span>no dimensions</span>
                        ) : (
                          <span>({dimensions[sector].join(', ')})</span>
                        )
                      }
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

  const getUnit = (row) => {
    const unit = filterField(config, row.units)
    return !isUndefined(unit) && (
      <>
        <p className="mb-1">
          <strong>Unit:</strong>
        </p>
        <p>
          {unit}
        </p>
      </>
    )
  }

  const getValid = (row) => {
    const valid_min = filterField(config, row.valid_min)
    const valid_max = filterField(config, row.valid_max)
    return !isUndefined(valid_min) && !isUndefined(valid_max) && (
      <>
        <div className="separator"></div>
        <p className="mb-1">
          <strong>Valid range:</strong>
        </p>
        <p>
          {valid_min} - {valid_max}
        </p>
      </>
    )
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
            <th style={{width: '15%'}}>Unit / Valid range</th>
            <th style={{width: '15%'}}>Resolution</th>
            <th style={{width: '35%'}}>
              Comments
              {
                !empty && (
                  <GroupToggleLink className="float-right" closed={!allOpen} all={true} toggle={allToggle} />
                )
              }
            </th>
          </tr>
        </thead>
        <tbody>
          {
            filteredGroups.map(group => {
              const getHeader = (group) => ([
                <tr key="-1">
                  <td colSpan="5" className="table-secondary">
                    <GroupToggleLink className="float-right" closed={group.closed} toggle={() => toggleGroup(group)} />
                    <strong>{group.title}</strong>
                  </td>
                </tr>
              ])

              if (group.closed) {
                return getHeader(group)
              } else {
                return getHeader(group).concat(
                  group.rows.map((row, index) => {
                    return (
                      <tr key={index}>
                        <td>{row.long_name}</td>
                        <td>{getSpecifier(row)}</td>
                        <td>
                          {getUnit(row)}
                          {getValid(row)}
                        </td>
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
  groups: PropTypes.array.isRequired
}

export default VariableTable
