import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { parseLocation, updateLocation } from './utils/location'

const definitions = window.store.definitions
const patterns = window.store.patterns
const commitDate = window.store.commit_date
const commitHash = window.store.commit_hash
const commitUrl = window.store.commit_url
const baseUrl = location.protocol + '//' + location.host + location.pathname

const initialConfig = {
  simulation_round: 'ISIMIP3a',
  products: ['OutputData'],
  sectors: [],
  experiments: [],
  groups: [],
  group3: false
}

const useConfig = create(
  persist(
    immer((set) => ({
      ...initialConfig,

      init: (config) =>
        set((state) => {
          Object.assign(state, initialConfig, config)
        }),

      changeSimulationRound: (value) =>
        set((state) => {
          state.simulation_round = value
        }),

      changeSector: (value) =>
        set((state) => {
          state.sectors = state.sectors.includes(value) ? (
            state.sectors.filter((sector) => sector !== value)
          ) : (
            [...state.sectors, value]
          )
        }),

      changeAnchor: (value) =>
        set((state) => {
          state.anchor = value
        }),

      toggleExperiments: (value) =>
        set((state) => {
          state.experiments = state.experiments.includes(value) ? (
            state.experiments.filter((v) => v !== value)
          ) : (
            [...state.experiments, value]
          )
        }),

      toggleGroup: (value) =>
        set((state) => {
          state.groups = state.groups.includes(value) ? (
            state.groups.filter((v) => v !== value)
          ) : (
            [...state.groups, value]
          )
        }),

      toggleGroup3: () =>
        set((state) => {
          state.group3 = !state.group3
        })
    })),
    {
      name: 'config',
      merge: (persisted, current) => ({
        ...current,
        ...persisted,
        ...parseLocation(definitions)
      }),
      onRehydrateStorage: () => (state) => {
        updateLocation(state)
        useConfig.setState({})  // triggers persist write
      }
    }
  )
)

useConfig.subscribe((state) => updateLocation(state))

export { baseUrl, commitDate, commitHash, commitUrl, definitions, patterns, useConfig }
