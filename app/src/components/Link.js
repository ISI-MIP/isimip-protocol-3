import React from 'react'
import { useSelector } from 'react-redux'

import { buildPath } from '../utils/location'

const Link = () => {
  const config = useSelector((state) => state.config)
  const href = config.baseurl + buildPath(config)

  return (
    <span className="title">
      <a href={href}>{href}</a>
    </span>
  )
}

export default Link
