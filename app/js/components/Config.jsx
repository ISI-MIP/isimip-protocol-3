import React from 'react'

import { baseUrl, definitions, useConfig } from '../store'
import { buildPath } from '../utils/location'

const Config = () => {
  const config = useConfig()
  const href = baseUrl + buildPath(config)

  const group3_full_note = 'Ready for Group III.'
  const group3_half_note = (
    'Some data are still under construction (see Table 3.1), but models ' +
    'not needing those data may already start Group III simulations.'
  )
  const group3_none_note = (
    'Since most of the data are still under construction, ' +
    'the sector is not ready for Group III simulations.'
  )

  const group3_full_badge = (
    <span className="badge-split" title={group3_full_note}>
      <span className="badge badge-group3 badge-start">
        <span className="circle circle-green"></span>
      </span>
      <span className="badge badge-group3 badge-end">III</span>
    </span>
  )

  const group3_half_badge = (
    <span className="badge-split" title={group3_half_note}>
      <span className="badge badge-group3 badge-start">
        <span className="circle-start circle-green"></span>
        <span className="circle-end circle-yellow"></span>
      </span>
      <span className="badge badge-group3 badge-end">III</span>
    </span>
  )
  const group3_none_badge = (
    <span className="badge-split" title={group3_none_note}>
      <span className="badge badge-group3 badge-start">
        <span className="circle circle-yellow"></span>
      </span>
      <span className="badge badge-group3 badge-end">III</span>
    </span>
  )

  const getGroup3Badge = (row) => {
    switch (row.group3) {
      case true:
        return group3_full_badge
      case 'dev':
        return group3_half_badge
      case false:
        return group3_none_badge
    }
  }

  return (
    <div className="config mb-2">
      <div className="row mb-3">
        <div className="col-md-6">
          <div><strong>Show protocol for:</strong></div>
          <div>
            {
              definitions.simulation_round.map((row, index) => {
                const id = 'control-simulation-round-' + row.specifier

                return (
                  <React.Fragment key={index}>
                    <div className="form-check">
                      {
                        row.specifier.endsWith('b') && (
                          <div className="float-end">
                            <input
                              className="form-check-input" type="checkbox" id="control-group3"
                              checked={config.group3}
                              onChange={() => config.toggleGroup3()}
                            />
                            <label className="form-check-label" htmlFor="control-group3">
                              <span className="badge badge-group3">only Group III</span>
                            </label>
                          </div>
                        )
                      }
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
          <button
            type="button" className="btn btn btn-link copy-to-clipboard float-end p-0"
            title="Copy link for this selection"
          >
            <span className="material-symbols-rounded">content_copy</span>
            <code className="d-none">{href}</code>
          </button>
        </div>
      </div>
      <div className="row mb-0">
        <div className="col-md-6">
          <div>
            <div><strong>Filter for sectors:</strong></div>
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
                        <div className="ms-auto text-nowrap">
                          &nbsp;{getGroup3Badge(row)}
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
          <div className="mb-3">
            <div><strong>Sectors under development 🚧:</strong></div>
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
          <div className="border border-group3 rounded p-2 mb-0">
            <div><strong>Group III readiness:</strong></div>
            <div className="d-flex align-items-top gap-3">
              <div className="flex-shrink-0">{group3_full_badge}</div>
              <div className="text-muted">{group3_full_note}</div>
            </div>
            <div className="d-flex align-items-top gap-3">
              <div className="flex-shrink-0">{group3_half_badge}</div>
              <div className="text-muted">{group3_half_note}</div>
            </div>
            <div className="d-flex align-items-top gap-3">
              <div className="flex-shrink-0">{group3_none_badge}</div>
              <div className="text-muted">{group3_none_note}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Config
