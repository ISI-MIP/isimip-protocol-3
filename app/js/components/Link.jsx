import React from 'react'

import { baseUrl, useConfig } from '../store'
import { buildPath } from '../utils/location'

const Link = () => {
  const config = useConfig()
  const href = baseUrl + buildPath(config)

  return (
    <span className="link">
      <a href={href}>{href}</a>
    </span>
  )
}

export default Link
