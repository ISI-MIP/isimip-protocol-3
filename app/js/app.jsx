import React from 'react'
import { createRoot } from 'react-dom/client'

import { useConfig } from './store'

import Config from './components/Config'
import Hide from './components/Hide'
import Link from './components/Link'
import Pattern from './components/Pattern'
import Show from './components/Show'
import Table from './components/Table'
import Title from './components/Title'

import 'bootstrap'
import '../scss/app.scss'

// disable scrollRestoration
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

// get the config store
const config = useConfig.getState()

// insert the toc in the navbar
const toc = document.getElementsByClassName('toc')[0]
const tocDropdown = document.getElementsByClassName('toc-dropdown')[0]
tocDropdown.appendChild(toc.cloneNode(true))

document.querySelectorAll('[data-component="title"]').forEach(el => {
  createRoot(el).render(
    <Title />
  )
})

document.querySelectorAll('[data-component="link"]').forEach(el => {
  createRoot(el).render(
    <Link />
  )
})

document.querySelectorAll('[data-component="config"]').forEach(el => {
  createRoot(el).render(
    <Config />
  )
})

document.querySelectorAll('[data-component="show"]').forEach(el => {
  createRoot(el).render(
    <Show
      simulationRound={el.dataset.simulationRound}
      sector={el.dataset.sector}
      html={el.innerHTML}
    />
  )
})

document.querySelectorAll('[data-component="hide"]').forEach(el => {
  createRoot(el).render(
    <Hide
      simulationRound={el.dataset.simulationRound}
      sector={el.dataset.sector}
      html={el.innerHTML}
    />
  )
})

document.querySelectorAll('[data-component="pattern"]').forEach(el => {
  createRoot(el).render(
    <Pattern />
  )
})

document.querySelectorAll('.toc a').forEach(el => {
  el.onclick = function(event) {
    event.preventDefault()

    const id = el.href.split('#').pop()
    document.getElementById(id).scrollIntoView()
    config.changeAnchor(id)
  }
})

setTimeout(() => {
  // otherwise the el.innerHTML would not work in Show/Hide ...
  document.querySelectorAll('[data-component="table"]').forEach(el => {
    createRoot(el).render(
      <Table
        identifier={el.dataset.identifier}
        caption={el.dataset.caption}
      />
    )
  })
}, 100)

setTimeout(() => {
  // remove the cover div
  const cover = document.getElementsByClassName('cover')[0]
  cover.remove()
}, 200)
