import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { actions } from '../store'


const Config = ({ definitions, config, actions }) => {
  const dev_note = 'Currently in development.'

  const group3_full_note = 'Ready for Group III.'
  const group3_half_note = 'Some data is still under construction (see Table 3.1), but models' +
    ' not needing those data may already start.'
  const group3_none_note = 'Since most of the data is still under construction, the sector is not ready for Group III simulations.'

  const group3_full_badge = (
    <span className="badge-split" title={group3_full_note}>
      <span className="badge badge-info badge-left">
        <span className="circle circle-green"></span>
      </span>
      <span className="badge badge-info badge-right">III</span>
    </span>
  )

  const group3_half_badge = (
    <span className="badge-split" title={group3_half_note}>
      <span className="badge badge-info badge-left">
        <span className="circle-left circle-green"></span>
        <span className="circle-right circle-yellow"></span>
      </span>
      <span className="badge badge-info badge-right">III</span>
    </span>
  )
  const group3_none_badge = (
    <span className="badge-split" title={group3_none_note}>
      <span className="badge badge-info badge-left">
        <span className="circle circle-yellow"></span>
      </span>
      <span className="badge badge-info badge-right">III</span>
    </span>
  )

  const getGroup3Badge = (row) => {
    if (row.group3) {
      return group3_full_badge
    } else if (row.group3_dev) {
      return group3_half_badge
    } else {
      return group3_none_badge
    }
  }

  return (
    <div className="config">
      <div className="mb-3">
        <div><strong>Show protocol for:</strong></div>
        <div>
          {
            definitions.simulation_round.map((row, index) => {
              const id = 'control-simulation-round-' + row.specifier

              return (
                <div className="form-check" key={index}>
                  <input className="form-check-input" type="radio" id={id}
                         value={row.specifier}
                         checked={row.specifier == config.simulation_round}
                         onChange={(event) => actions.changeSimulationRound(event.target.value)} />
                  <label className="form-check-label" htmlFor={id}>{row.title}</label>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="mb-3">
        <div><strong>Filter for sectors:</strong></div>
        <div>
          {
            definitions.sector.map((row, index) => {
              const id = 'control-sector-' + row.specifier

              return (
                <div className="form-check" key={index}>
                  <input className="form-check-input" type="checkbox" id={id}
                         value={row.specifier}
                         checked={config.sectors.includes(row.specifier)}
                         onChange={(event) => actions.changeSector(event.target.value)} />
                  <label className="form-check-label d-flex" htmlFor={id}>
                    <div>
                      {row.title}
                      {row.dev && <span className="ml-1" title={dev_note}>🚧</span>}
                    </div>
                    <div className="ml-auto text-nowrap">
                      &nbsp;{getGroup3Badge(row)}
                    </div>
                  </label>
                </div>
              )
            })
          }
        </div>
      </div>
      <p className="text-muted mb-1">
        🚧: {dev_note}
      </p>
      <p className="text-muted mb-1">
        {group3_full_badge} {group3_full_note}
      </p>
      <p className="text-muted mb-1">
        {group3_half_badge} {group3_half_note}
      </p>
      <p className="text-muted mb-1">
        {group3_none_badge} {group3_none_note}
      </p>
    </div>
  )
}

Config.propTypes = {
  definitions: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired
}

function mapStateToProps(state, props) {
  return {
    definitions: state.definitions,
    config: state.config
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Config)
