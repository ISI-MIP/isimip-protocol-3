import React, { Component} from 'react'
import PropTypes from 'prop-types'

const Sectors = ({ config, sectors }) => {
  // config.sectors are the currently selected sectors
  // sectors are the sectors configured for this badge
  if (sectors === undefined) {
    return <span className="badge badge-success badge-sector">all sectors</span>
  } else if (sectors === null) {
    // for the title just display the configured sectors
    if (config.sectors !== undefined && config.sectors.length > 0) {
      return config.sectors.map(sector => <span key={sector} className="badge badge-success badge-sector">{sector}</span>)
    } else {
      return <span className="badge badge-success badge-sector">all sectors</span>
    }
  } else {
    // some sectors are configured -> hightlight selected sectors
    if (config.sectors !== undefined && config.sectors.length > 0) {
      // at least one sector is selected
      return sectors.map(sector => {
        if (config.sectors.includes(sector)) {
          return <span key={sector} className="badge badge-success badge-sector">{sector}</span>
        } else {
          return <span key={sector} className="badge badge-light badge-sector">{sector}</span>
        }
      })
    } else {
      // no sector is selected
      return sectors.map(sector => <span key={sector} className="badge badge-success badge-sector">{sector}</span>)
    }
  }
}

Sectors.propTypes = {
  config: PropTypes.object.isRequired,
  sectors: PropTypes.array
}

export default Sectors
