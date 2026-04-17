import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'

const ClimateForcing = ({ climateForcings }) => {
  return !isEmpty(climateForcings) && climateForcings.map(climateForcing => {
    return <span className="badge badge-secondary badge-climate-forcing" key={climateForcing}>{climateForcing}</span>
  })
}

ClimateForcing.propTypes = {
  climateForcings: PropTypes.array
}

export default ClimateForcing
