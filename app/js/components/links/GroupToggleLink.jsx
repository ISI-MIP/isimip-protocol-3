import React from 'react'
import PropTypes from 'prop-types'

const GroupToggleLink = ({ closed, toggle, all, label }) => {
  const onClick = event => {
    event.preventDefault()
    toggle()
  }

  if (!label) {
    label = all ? 'groups' : 'group'
  }

  if (all) {
    return (
      <a className="d-flex align-items-center toggle-group flex-shrink-0" href="" onClick={onClick}>
        <span className="text">{closed ? `Show all ${label}` : `Hide all ${label}`}</span>
        {closed && <span className="material-symbols-rounded">keyboard_arrow_down</span>}
        {!closed && <span className="material-symbols-rounded">keyboard_arrow_up</span>}
      </a>
    )
  } else {
    return (
      <a className="d-flex align-items-center toggle-group flex-shrink-0" href="" onClick={onClick}>
        <span className="text">{closed ? `Show ${label}` : `Hide ${label}`}</span>
        {closed && <span className="material-symbols-rounded">keyboard_arrow_down</span>}
        {!closed && <span className="material-symbols-rounded">keyboard_arrow_up</span>}
      </a>
    )
  }
}

GroupToggleLink.propTypes = {
  closed: PropTypes.boolean,
  toggle: PropTypes.func,
  all: PropTypes.boolean,
  label: PropTypes.string,
}

export default GroupToggleLink
