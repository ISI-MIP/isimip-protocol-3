import 'bootstrap'

import React from "react"
import ReactDOM from "react-dom"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ls from 'local-storage'

import { reducer } from './store'

import Config from './components/Config'
import Hide from './components/Hide'
import Pattern from './components/Pattern'
import Show from './components/Show'
import Title from './components/Title'
import Table from './components/Table'

const initialState = {
  definitions: window.initialState.definitions,
  patterns: window.initialState.patterns,
  commit_date: window.initialState.commit_date,
  commit_hash: window.initialState.commit_hash,
  config: {
    simulation_round: ls.get('simulation_round') || 'ISIMIP3a',
    products: ['OutputData'],
    sectors: ls.get('sectors') ? JSON.parse(ls.get('sectors')) : [],
    tables: ls.get('tables') ? JSON.parse(ls.get('tables')) : [],
    groups: ls.get('groups') ? JSON.parse(ls.get('groups')) : []
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
  ls.set('tables', JSON.stringify(config.tables))
  ls.set('groups', JSON.stringify(config.groups))
})

// insert the toc in the navbar
const toc = document.getElementsByClassName('toc')[0]
const tocDropdown = document.getElementsByClassName('toc-dropdown')[0]
tocDropdown.appendChild(toc.cloneNode(true))

document.querySelectorAll('[data-component="title"]').forEach(el => {
  ReactDOM.render(
    <Provider store={store}>
      <Title />
    </Provider>, el
  )
})

document.querySelectorAll('[data-component="config"]').forEach(el => {
  ReactDOM.render(
    <Provider store={store}>
      <Config />
    </Provider>, el
  )
})

document.querySelectorAll('[data-component="show"]').forEach(el => {
  ReactDOM.render(
    <Provider store={store}>
      <Show simulationRound={el.dataset.simulationRound}
            sector={el.dataset.sector}
            html={el.innerHTML} />
    </Provider>, el
  )
})

document.querySelectorAll('[data-component="hide"]').forEach(el => {
  ReactDOM.render(
    <Provider store={store}>
      <Hide simulationRound={el.dataset.simulationRound}
            sector={el.dataset.sector}
            html={el.innerHTML} />
    </Provider>, el
  )
})

document.querySelectorAll('[data-component="table"]').forEach(el => {
  ReactDOM.render(
    <Provider store={store}>
      <Table number={el.dataset.number}
             identifier={el.dataset.identifier} />
    </Provider>, el
  )
})

document.querySelectorAll('[data-component="pattern"]').forEach(el => {
  ReactDOM.render(
    <Provider store={store}>
      <Pattern />
    </Provider>, el
  )
})

// remove the cover div
const cover = document.getElementsByClassName('cover')[0]
cover.remove()
