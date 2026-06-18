import { useEffect, useRef } from 'react'

import { useConfig } from './store'

export function useScrollspy() {
  const observers = useRef([])
  const suppressed = useRef(true)

  useEffect(() => {
    const config = useConfig.getState()

    let headlineVisible
    let anchor

    const update = () => {
      if (suppressed.current) return
      config.changeAnchor(headlineVisible ? undefined : anchor)
    }

    // scroll first — synchronously, before any observer exists, but with a timeout
    setTimeout(() => {
      if (config.anchor) {
        document.getElementById(config.anchor)?.scrollIntoView({ behavior: 'instant' })
        anchor = config.anchor
      }
      suppressed.current = false
    }, 200)

    const headline = document.querySelector('h1')
    const elements = Array.from(document.querySelectorAll('h2[id], h3[id]'))

    // create an observer for h1
    const headlineObserver = new IntersectionObserver(
      ([entry]) => {
        headlineVisible = entry.isIntersecting
        update()
      },
      { threshold: 0 }
    )
    headlineObserver.observe(headline)
    observers.current.push(headlineObserver)

    // create an observer for the other headings
    const elementsObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          anchor = visible[0].target.id
          update()
        }
      },
      { rootMargin: '-100px 0px -90% 0px', threshold: 0 }
    )
    elements.forEach((el) => elementsObserver.observe(el))
    observers.current.push(elementsObserver)

    return () => observers.current.forEach((o) => o.disconnect())
  }, [])
}
