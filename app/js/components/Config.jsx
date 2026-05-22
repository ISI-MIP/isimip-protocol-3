import React from 'react'

import { definitions, useConfig } from '../store'

import CopyLocationLink from './links/CopyLocationLink'

const Config = () => {
  const config = useConfig()

  const handleShowAll = (event) => {
    event.preventDefault()

    definitions.group.forEach(group => {
      if (!config.groups.includes(group.specifier)) {
        config.toggleGroup(group.specifier)
      }
    })
  }

  const handleHideAll = () => {
    event.preventDefault()

    definitions.group.forEach(group => {
      if (config.groups.includes(group.specifier)) {
        config.toggleGroup(group.specifier)
      }
    })
  }

  return (
    <div className="config mb-2">
      <div className="row mb-3">
        <div className="col-md-6">
          <strong className="d-block mb-1">Show protocol for</strong>
          <div>
            {
              definitions.simulation_round.map((row, index) => {
                const id = 'control-simulation-round-' + row.specifier

                return (
                  <React.Fragment key={index}>
                    <div className="form-check">
                      <input
                        className="form-check-input" type="radio" id={id}
                        value={row.specifier}
                        checked={row.specifier == config.simulation_round}
                        onChange={(event) => config.changeSimulationRound(event.target.value)}
                      />
                      <label className="form-check-label" htmlFor={id}>{row.title}</label>
                    </div>
                  </React.Fragment>
                )
              })
            }
          </div>
        </div>
        <div className="col-md-6">
          <CopyLocationLink />

          <strong className="d-block mb-1">Tables</strong>
          <a className="d-block" href="" onClick={handleShowAll}>
            Show all groups in all tables
          </a>
          <a className="d-block" href="" onClick={handleHideAll}>
            Hide all groups in all tables
          </a>
        </div>
      </div>
      <div className="row mb-0">
        <div className="col-md-6">
          <div>
            <strong className="d-block mb-1">Filter for sectors:</strong>
            <div>
              {
                definitions.sector.filter(row => !row.dev).map((row, index) => {
                  const id = 'control-sector-' + row.specifier

                  return (
                    <div className="form-check" key={index}>
                      <input
                        className="form-check-input" type="checkbox" id={id}
                        value={row.specifier}
                        checked={config.sectors.includes(row.specifier)}
                        onChange={(event) => config.changeSector(event.target.value)}
                      />
                      <label className="form-check-label d-flex" htmlFor={id}>
                        <div>
                          {row.title}
                        </div>
                      </label>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex flex-column justify-content-between h-100">
            <div>
              <strong className="d-block mb-1">Sectors under development 🚧</strong>
              <div>
                {
                  definitions.sector.filter(row => row.dev).map((row, index) => {
                    const id = 'control-sector-' + row.specifier

                    return (
                      <div className="form-check" key={index}>
                        <input
                          className="form-check-input" type="checkbox" id={id}
                          value={row.specifier}
                          checked={config.sectors.includes(row.specifier)}
                          onChange={(event) => config.changeSector(event.target.value)}
                        />
                        <label className="form-check-label d-flex" htmlFor={id}>
                          <div>{row.title}</div>
                        </label>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Config
