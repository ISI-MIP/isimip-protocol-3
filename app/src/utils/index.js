import React, { Component } from 'react'

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

const filterRows = (config, rows, group3) => {
  if (Array.isArray(rows)) {
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
    }).filter(row => {
      return config.simulation_round.endsWith('a') || !group3 || !config.group3 || row.group3
    })
  } else {
    return []
  }
}

const filterField = (config, field) => {
  if (field === null) {
    return null
  } else if (Array.isArray(field)) {
    return field
  } else if (typeof field === 'object') {
    if (typeof field[config.simulation_round] !== 'undefined') {
      return filterField(config, field[config.simulation_round])
    } else {
      if (config.sectors.length == 0) {
        return field
      } else if (config.sectors.length == 1) {
        return (typeof field[config.sectors[0]] === 'undefined') ? field.other : field[config.sectors[0]]
      } else {
        return Object.fromEntries(Object.entries(field).filter(([sector, value]) => {
          if (sector == 'other') {
            // add the "other" entry only if there is a sector in the config which is not in the field
            return config.sectors.filter(s => !Object.keys(field).includes(s)).length > 0
          } else {
            return config.sectors.includes(sector)
          }
        }))
      }
    }
  } else {
    return field
  }
}

const filterGroups = (config, rows, groups, actions, group3) => {
  return groups.map(group => {
    group.rows = filterRows(config, rows, group3).filter(row => row.group == group.specifier)
    group.closed = !config.groups.includes(group.specifier)
    group.toggle = () => actions.toggleGroup(group.specifier)
    return group
  }).filter(group => group.rows.length > 0)
}

const toggleGroups = (groups, allOpen) => {
  if (allOpen) {
    // all groups are open, toggle them all, closing them
    groups.forEach(group => group.toggle())
  } else {
    // toggle groups which are closed to open them
    groups.filter(group => group.closed).forEach(group => group.toggle())
  }
}

export { GroupToggleLink, filterRows, filterField, filterGroups, toggleGroups }
