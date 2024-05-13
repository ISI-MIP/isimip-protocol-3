import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { buildPath } from '../utils/location'

import SimulationRounds from './badges/SimulationRounds'
import Sectors from './badges/Sectors'

const Link = ({ definitions, config }) => {
  const href = config.baseurl + buildPath(config)

  return (
    <span className="title">
      <a href={href}>{href}</a>
    </span>
  )
}

Link.propTypes = {
  definitions: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired
}

function mapStateToProps(state, props) {
  return {
    definitions: state.definitions,
    config: state.config
  }
}

export default connect(mapStateToProps)(Link)
