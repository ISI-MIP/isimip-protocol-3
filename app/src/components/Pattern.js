import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Sectors from './badges/Sectors'
import SimulationRounds from './badges/SimulationRounds'

const Pattern = ({ config, patterns }) => {
  const sectors = Object.keys(patterns[config.simulation_round])
  const simple_pattern = (pattern) => {
    return pattern.replaceAll(/\[.*?\]\+/g, '')
                  .replaceAll(/\([a-z\|]*?\)/g, '')
                  .replaceAll('\\d{4}', '').replaceAll('P', '').replaceAll('?', '')
                  .replaceAll('(<', '<').replaceAll('>)', '>')
                  .replaceAll(/>_</g, '>@<').replaceAll('(_', '@').replaceAll(').', '.')
                  .replaceAll('_', '-').replaceAll('@', '_')
  }

  return (
    <div>
      {
        sectors.map((sector, index) => {
          if (config.sectors.length == 0 || config.sectors.includes(sector)) {
            return (
              <div className="pattern-component sectors clearfix" key={index}>
                <div className="mb-1">
                  <Sectors config={config} sectors={[sector]} />
                </div>
                <pre className="">
                  <code>
                    {simple_pattern(patterns[config.simulation_round][sector])}{'\n'}
                  </code>
                </pre>
              </div>
            )
          }
        })
      }
    </div>
  )
}

Pattern.propTypes = {
  config: PropTypes.object.isRequired,
  patterns: PropTypes.object.isRequired
}

function mapStateToProps(state, props) {
  return {
    config: state.config,
    patterns: state.patterns
  }
}

export default connect(mapStateToProps)(Pattern)
