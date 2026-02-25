import React from 'react'

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
      <a className="toggle-group" href="" onClick={onClick}>
        {closed ? `Show all ${label}` : `Hide all ${label}`}
      </a>
    )
  } else {
    return (
      <a className="toggle-group" href="" onClick={onClick}>
        {closed ? `Show ${label}` : `Hide ${label}`}
        {closed && <span className="toggle-group-down">&#65088;</span>}
        {!closed && <span className="toggle-group-up">&#65087;</span>}
      </a>
    )
  }
}

export default GroupToggleLink
