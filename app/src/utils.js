import React, { Component } from 'react'


const GroupToggleLink = ({ closed, toggle, all }) => {
  const onClick = event => {
    event.preventDefault()
    toggle()
  }
  if (all) {
    return (
      <a className="toggle-group" href="" onClick={onClick}>
        {closed ? 'Show all groups' : 'Hide all groups'}
      </a>
    )
  } else {
    return (
      <a className="toggle-group" href="" onClick={onClick}>
        {closed ? 'Show group' : 'Hide group'}
        {closed && <span className="toggle-group-down">&#65088;</span>}
        {!closed && <span className="toggle-group-up">&#65087;</span>}
      </a>
    )
  }
}

const filterRows = (config, rows) => {
    return rows.filter(row => {
        if (row.simulation_rounds === undefined || row.simulation_rounds.includes(config.simulation_round)) {
            if (row.products === undefined || row.products.filter(product => config.products.includes(product)).length) {
                if (row.sectors === undefined || config.sectors.length == 0 || row.sectors.filter(sector => config.sectors.includes(sector)).length) {
                    return true
                }
            }
        }

        return false
    }).filter(row => {
      return row.hidden != true
    })
}

const filterField = (config, field) => {
    if (Array.isArray(field)) {
        return field
    } else if (typeof field === 'object') {
        if (typeof field[config.simulation_round] !== 'undefined') {
            return field[config.simulation_round]
        }
    } else {
        return field
    }
}

const filterGroups = (config, rows, groups, actions) => {
  return groups.map(group => {
    group.rows = filterRows(config, rows).filter(row => row.group == group.specifier)
    group.closed = !config.groups.includes(group.specifier)
    group.toggle = () => actions.toggleGroup(group.specifier)
    return group
  }).filter(group => group.rows.length > 0)
}

const toggleGroups = (groups) => {
  if (groups.every(group => !group.closed)) {
    // all groups are open, toggle them all, closing them
    groups.forEach(group => group.toggle())
  } else {
    // toggle groups which are closed to open them
    groups.filter(group => group.closed).forEach(group => group.toggle())
  }
}

export { GroupToggleLink, filterRows, filterField, filterGroups, toggleGroups }
