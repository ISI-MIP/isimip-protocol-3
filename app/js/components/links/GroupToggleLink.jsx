import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import KeyboardArrowDown from '@material-symbols/svg-400/rounded/keyboard_arrow_down.svg?react'
import KeyboardArrowUp from '@material-symbols/svg-400/rounded/keyboard_arrow_up.svg?react'

const GroupToggleLink = ({ closed, toggle, all, label }) => {
  const onClick = event => {
    event.preventDefault()
    toggle()
  }

  if (!label) {
    label = all ? 'groups' : 'group'
  }

  const className = classNames('d-flex align-items-center toggle-group flex-shrink-0', {
    'show-group': closed && !all,
    'hide-group': !closed && !all
  })

  if (all) {
    return (
      <a className={className} href="" onClick={onClick}>
        <span className="text">{closed ? `Show all ${label}` : `Hide all ${label}`}</span>
        {closed && <KeyboardArrowDown className="material-symbol" />}
        {!closed && <KeyboardArrowUp className="material-symbol" />}
      </a>
    )
  } else {
    return (
      <a className={className} href="" onClick={onClick}>
        <span className="text">{closed ? `Show ${label}` : `Hide ${label}`}</span>
        {closed && <KeyboardArrowDown className="material-symbol" />}
        {!closed && <KeyboardArrowUp className="material-symbol" />}
      </a>
    )
  }
}

GroupToggleLink.propTypes = {
  closed: PropTypes.bool,
  toggle: PropTypes.func,
  all: PropTypes.bool,
  label: PropTypes.string,
}

export default GroupToggleLink
