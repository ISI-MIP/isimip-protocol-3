import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty, isNil } from 'lodash'

const Sectors = ({ config, sectors }) => {
  // config.sectors are the currently selected sectors
  // sectors are the sectors configured for this badge
  if (sectors === undefined) {
    return <span className="badge badge-sector">all sectors</span>
  } else if (isEmpty(sectors) && !isNil(sectors)) {
    // by setting `sectors: []` the display of sectors can be omitted
    return null
  } else if (isNil(sectors)) {
    // for the title just display the configured sectors
    if (config.sectors !== undefined && config.sectors.length > 0) {
      return config.sectors.map((sector, index) => (
        <span key={index} className="badge badge-sector">{sector}</span>
      ))
    } else {
      return <span className="badge badge-sector">all sectors</span>
    }
  } else {
    // some sectors are configured -> highlight selected sectors
    if (config.sectors !== undefined && config.sectors.length > 0) {
      // at least one sector is selected
      return sectors.map((sector, index) => {
        if (config.sectors.includes(sector)) {
          return <span key={index} className="badge badge-sector">{sector}</span>
        } else {
          return <span key={index} className="badge text-bg-light">{sector}</span>
        }
      })
    } else {
      // no sector is selected
      return sectors.map((sector, index) => (
        <span key={index} className="badge badge-sector">{sector}</span>
      ))
    }
  }
}

Sectors.propTypes = {
  config: PropTypes.object.isRequired,
  sectors: PropTypes.array
}

export default Sectors
