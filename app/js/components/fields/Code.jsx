import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'

const Code = ({ lines }) => {
  return !isEmpty(lines) && (
    <>
      {
        Array.isArray(lines) ? (
          lines.map((line, index) => <code key={index} className="pre">{line}{'\n'}</code>)
        ) : (
          <code>{lines}</code>
        )
      }
    </>
  )
}

Code.propTypes = {
  lines: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.array,
  ])
}

export default Code
