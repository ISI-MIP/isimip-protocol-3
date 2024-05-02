import React, { Component} from 'react'
import PropTypes from 'prop-types'

const ClimateForcing = ({ climateForcings }) => {
  return climateForcings.map(climateForcing => {
    return <span className="badge badge-secondary badge-climate-forcing" key={climateForcing}>{climateForcing}</span>
  })
}

ClimateForcing.propTypes = {
  climateForcings: PropTypes.array
}

export default ClimateForcing
