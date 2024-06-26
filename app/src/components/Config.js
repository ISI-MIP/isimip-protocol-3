import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { actions } from '../store'


const Config = ({ definitions, config, actions }) => {
  const dev_note = 'Currently in development.'
  const group3_note = 'Ready for Group III simulations.'
  const group3_dev_note = 'Data is still under construction (see Table 3.1), but models' +
    ' not needing those data may start group III simulations.'

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
                  <label className="form-check-label" htmlFor={id}>
                    {row.title}
                    {row.dev && <span className="ml-1" title={dev_note}>🚧</span>}
                    {
                      row.group3 && (
                        <span className="badge badge-info ml-1" title={group3_note}>III</span>
                      )
                    }
                    {
                      row.group3_dev && <span className="badge badge-warning ml-1" title={group3_dev_note}>III</span>
                    }
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
        <span className="badge badge-info">III</span>: {group3_note}
      </p>
      <p className="text-muted mb-1">
        <span className="badge badge-warning">III</span>: {group3_dev_note}
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
