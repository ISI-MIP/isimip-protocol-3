import { useEffect, useRef } from 'react'

import { useConfig } from './store'

export function useScrollspy() {
  const observer = useRef(null)

  useEffect(() => {
    const config = useConfig.getState()

    // Every element with an id whose id starts with a digit
    const elements = Array.from(document.querySelectorAll('[id]')).filter((el) =>
      /^\d/.test(el.id)
    )

    observer.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          config.changeAnchor(visible[0].target.id)
        }
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      }
    )

    elements.forEach((el) => observer.current.observe(el))

    return () => observer.current?.disconnect()
  }, [])
}
