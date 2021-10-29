import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SimulationRounds from './badges/SimulationRounds'
import Sectors from './badges/Sectors'

const Title = ({ definitions, config }) => (
  <div className="title">
    <SimulationRounds config={config} /> protocol for <Sectors config={config} sectors={null} />
  </div>
)

Title.propTypes = {
  definitions: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired
}

function mapStateToProps(state, props) {
  return {
    definitions: state.definitions,
    config: state.config
  }
}

export default connect(mapStateToProps)(Title)
