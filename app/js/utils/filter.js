import { isArray, isEmpty, isEqual, isPlainObject, isUndefined } from 'lodash'

export const filterRows = (config, rows, group3) => {
  if (isArray(rows)) {
    return rows.filter(row => {
      if (row.simulation_rounds === undefined || row.simulation_rounds.includes(config.simulation_round)) {
        if (row.products === undefined || row.products.filter(product => config.products.includes(product)).length) {
          if (
            row.sectors === undefined ||
            config.sectors.length == 0 ||
            row.sectors.filter(sector => config.sectors.includes(sector)).length
          ) {
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

const filterFieldForSimulationRound = (config, field) => {
  const subField = field[config.simulation_round]

  if (isPlainObject(subField)) {
    return filterFieldForSector(config, subField)
  } else {
    return subField
  }
}

const filterFieldForSector = (config, field) => {
  if (isEmpty(config.sectors)) {
    return field
  } else if (config.sectors.length == 1) {
    return (isUndefined(field[config.sectors[0]])) ? field.other : field[config.sectors[0]]
  } else {
    const filteredField = Object.fromEntries(Object.entries(field).filter(([sector]) => {
      if (sector == 'other') {
        // add the "other" entry only if there is a sector in the config which is not in the field
        return config.sectors.filter(s => !Object.keys(field).includes(s)).length > 0
      } else {
        return config.sectors.includes(sector)
      }
    }))

    if (isEqual(Object.keys(filteredField), ['other'])) {
      // filteredField contains only "other"
      return filteredField.other
    } else {
      return filteredField
    }
  }
}

export const filterField = (config, field) => {
  if (isPlainObject(field)) {
    if (Object.keys(field).every(k => /^[A-Z]/.test(k))) {
      return filterFieldForSimulationRound(config, field)
    } else {
      return filterFieldForSector(config, field)
    }
  } else {
    return field
  }
}

export const filterGroups = (config, rows, groups, group3) => {
  return groups.map(group => {
    group.rows = filterRows(config, rows, group3).filter(row => row.group == group.specifier)
    group.closed = !config.groups.includes(group.specifier)
    return group
  }).filter(group => group.rows.length > 0)
}
