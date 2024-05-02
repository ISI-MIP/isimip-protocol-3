import 'bootstrap'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ls from 'local-storage'

import { reducer } from './store'

import Config from './components/Config'
import Hide from './components/Hide'
import Pattern from './components/Pattern'
import Link from './components/Link'
import Show from './components/Show'
import Title from './components/Title'
import Table from './components/Table'

const initialState = {
  definitions: window.initialState.definitions,
  patterns: window.initialState.patterns,
  commit_date: window.initialState.commit_date,
  commit_hash: window.initialState.commit_hash,
  config: {
    baseurl: location.protocol + '//' + location.host + location.pathname,
    simulation_round: ls.get('simulation_round') || 'ISIMIP3a',
    products: ['OutputData'],
    sectors: ls.get('sectors') ? JSON.parse(ls.get('sectors')) : [],
    groups: ls.get('groups') ? JSON.parse(ls.get('groups')) : [],
    scenarios: ls.get('scenarios') ? JSON.parse(ls.get('scenarios')) : []
  }
}

// try to get simulation_round or sectors from the location
if (window.location.hash) {
  const hash = window.location.hash.toLowerCase().substring(1)
  const parts = hash.split('/')

  if (parts[0] == 'isimip3a') {
    initialState.config.simulation_round = 'ISIMIP3a'
    if (parts.length > 1) initialState.config.sectors = parts.slice(1)
    history.replaceState(null, null, ' ');
  } else if (parts[0] == 'isimip3b')  {
    initialState.config.simulation_round = 'ISIMIP3b'
    if (parts.length > 1) initialState.config.sectors = parts.slice(1)
    history.replaceState(null, null, ' ');
  }
}

const store = createStore(reducer, initialState)
store.subscribe(() => {
  // update the local storage when the store changed
  const { config } = store.getState()
  ls.set('simulation_round', config.simulation_round)
  ls.set('sectors', JSON.stringify(config.sectors))
  ls.set('groups', JSON.stringify(config.groups))
  ls.set('scenarios', JSON.stringify(config.scenarios))
})

// insert the toc in the navbar
const toc = document.getElementsByClassName('toc')[0]
const tocDropdown = document.getElementsByClassName('toc-dropdown')[0]
tocDropdown.appendChild(toc.cloneNode(true))

document.querySelectorAll('[data-component="title"]').forEach(el => {
  createRoot(el).render(
    <Provider store={store}>
      <Title />
    </Provider>
  )
})

document.querySelectorAll('[data-component="link"]').forEach(el => {
  createRoot(el).render(
    <Provider store={store}>
      <Link />
    </Provider>
  )
})

document.querySelectorAll('[data-component="config"]').forEach(el => {
  createRoot(el).render(
    <Provider store={store}>
      <Config />
    </Provider>
  )
})

document.querySelectorAll('[data-component="show"]').forEach(el => {
  createRoot(el).render(
    <Provider store={store}>
      <Show simulationRound={el.dataset.simulationRound}
            sector={el.dataset.sector}
            html={el.innerHTML} />
    </Provider>
  )
})

document.querySelectorAll('[data-component="hide"]').forEach(el => {
  createRoot(el).render(
    <Provider store={store}>
      <Hide simulationRound={el.dataset.simulationRound}
            sector={el.dataset.sector}
            html={el.innerHTML} />
    </Provider>
  )
})

document.querySelectorAll('[data-component="table"]').forEach(el => {
  createRoot(el).render(
    <Provider store={store}>
      <Table identifier={el.dataset.identifier}
             caption={el.dataset.caption} />
    </Provider>
  )
})

document.querySelectorAll('[data-component="pattern"]').forEach(el => {
  createRoot(el).render(
    <Provider store={store}>
      <Pattern />
    </Provider>
  )
})

// remove the cover div
const cover = document.getElementsByClassName('cover')[0]
cover.remove()
