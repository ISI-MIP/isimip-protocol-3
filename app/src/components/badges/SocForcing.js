import React, { Component} from 'react'
import PropTypes from 'prop-types'

const SocForcing = ({ socForcings }) => {
  return socForcings.map(socForcing => {
    return <span className="badge badge-secondary badge-soc-forcing" key={socForcing}>{socForcing}</span>
  })
}

SocForcing.propTypes = {
  socForcings: PropTypes.array
}

export default SocForcing
