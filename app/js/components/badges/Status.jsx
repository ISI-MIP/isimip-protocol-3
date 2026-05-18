import React from 'react'
import PropTypes from 'prop-types'

const Status = ({ status }) => {
  if (status === 'mandatory') {
    return (
      <span
        className="badge badge-mandatory"
        title={
          'If your models uses input data of this kind, we require to use the specified dataset. ' +
          'Please see the note above.'
        }
      >
        mandatory
      </span>
    )
  } else if (status == 'optional') {
    return (
      <span className="badge badge-optional">
        {status}
      </span>
    )
  } else if (status) {
    return (
      <span className="badge badge-status">
        {status}
      </span>
    )
  } else {
    return null
  }
}

Status.propTypes = {
  status: PropTypes.string
}

export default Status
