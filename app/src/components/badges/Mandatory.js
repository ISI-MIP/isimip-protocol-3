import React, { Component} from 'react'
import PropTypes from 'prop-types'

const Mandatory = ({ mandatory }) => {
  if (mandatory === undefined) {
    return null
  } else if (mandatory) {
    return (
      <span className="badge badge-info badge-mandatory" title="If your models uses input data of this kind, we require to use the specified dataset. Please see the note above.">
        mandatory
      </span>
    )
  } else {
    return (
      <span className="badge badge-light badge-optional">
        optional
      </span>
    )
  }
}

Mandatory.propTypes = {
  status: PropTypes.string
}

export default Mandatory
