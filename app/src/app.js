import 'bootstrap'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { isNil, isEmpty } from 'lodash'
import ls from 'local-storage'

import { actions, reducer } from './store'

import Config from './components/Config'
import Hide from './components/Hide'
import Pattern from './components/Pattern'
import Link from './components/Link'
import Show from './components/Show'
import Title from './components/Title'
import Table from './components/Table'

import { parseLocation, updateLocation, updateAnchor, readLocalStorage, updateLocalStorage } from './location'

const initConfig = () => {
  const definitions = window.initialState.definitions
  const defaultConfig = {
    simulation_round: 'ISIMIP3a',
    sectors: [],
    groups: [],
    scenarios: []
  }

  return {...defaultConfig, ...readLocalStorage(), ...parseLocation()}
}

const initialConfig = initConfig()

updateLocation(initialConfig)
updateLocalStorage(initialConfig)

const initialState = {
  definitions: window.initialState.definitions,
  patterns: window.initialState.patterns,
  commit_date: window.initialState.commit_date,
  commit_hash: window.initialState.commit_hash,
  config: {
    ...initialConfig,
    baseurl: location.protocol + '//' + location.host + location.pathname,
    products: ['OutputData']
  }
}

const store = createStore(reducer, initialState)

// update the local storage when the store changed
store.subscribe(() => {
  const { config } = store.getState()

  updateLocation(config)
  updateLocalStorage(config)
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

document.querySelectorAll('[data-component="pattern"]').forEach(el => {
  createRoot(el).render(
    <Provider store={store}>
      <Pattern />
    </Provider>
  )
})

setTimeout(() => {
  // otherwise the el.innerHTML would not work in Show/Hide ...
  document.querySelectorAll('[data-component="table"]').forEach(el => {
    createRoot(el).render(
      <Provider store={store}>
        <Table identifier={el.dataset.identifier}
               caption={el.dataset.caption} />
      </Provider>
    )
  })
}, 100)

document.querySelectorAll('.toc a').forEach(el => {
  el.onclick = function(event) {
    event.preventDefault()

    const id = el.href.split('#').pop()
    document.getElementById(id).scrollIntoView()
    updateAnchor(id)
  }
})

if (!(isNil(initialConfig.anchor) || isEmpty(initialConfig.anchor))) {
  setTimeout(() => {
      document.getElementById(initialConfig.anchor).scrollIntoView()
  }, 100)
}

// remove the cover div
const cover = document.getElementsByClassName('cover')[0]
cover.remove()
