import React, { Component} from 'react'

const TableToggleLink = ({ closed, toggle }) => {
  const onClick = event => {
    event.preventDefault()
    toggle()
  }
  return (
    <a className="toggle-table" href="" onClick={onClick}>{closed ? 'Show full table' : 'Hide table'}</a>
  )
}

const TableToggleButton = ({ closed, toggle }) => {
  return (
    <button className="toggle-table" onClick={toggle}>{closed ? 'Show full table' : 'Hide table'}</button>
  )
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

export { TableToggleLink, TableToggleButton, filterRows, filterField }
