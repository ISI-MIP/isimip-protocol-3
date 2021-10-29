import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { actions } from '../store'


const Config = ({ definitions, config, actions }) => {
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
      <div>
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
                  <label className="form-check-label" htmlFor={id}>{row.title}</label>
                </div>
              )
            })
          }
        </div>
      </div>
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
