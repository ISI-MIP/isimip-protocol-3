import React from 'react'

import { baseUrl, useConfig } from '../../store'
import { buildPath } from '../../utils/location'

import ContentCopy from '@material-symbols/svg-400/rounded/content_copy.svg?react'

const CopyLocationLink = () => {
  const config = useConfig()
  const href = baseUrl + buildPath(config)

  return (
    <button
      type="button" className="btn btn btn-link copy-to-clipboard float-end p-0"
      title="Copy link for this selection"
    >
      <ContentCopy className="material-symbol" />
      <code className="d-none">{href}</code>
    </button>
  )
}

export default CopyLocationLink
