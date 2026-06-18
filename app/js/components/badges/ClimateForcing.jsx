import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'

const ClimateForcing = ({ climateForcings }) => {
  return !isEmpty(climateForcings) && (
    <p>
      {
        climateForcings.map(climateForcing => {
          return <span className="badge badge-climate-forcing" key={climateForcing}>{climateForcing}</span>
        })
      }
    </p>
  )
}

ClimateForcing.propTypes = {
  climateForcings: PropTypes.array
}

export default ClimateForcing
