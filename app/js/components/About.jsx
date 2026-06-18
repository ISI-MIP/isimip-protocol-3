import React from 'react'
import PropTypes from 'prop-types'

import { commitDate, commitHash, commitUrl } from '../store'

const About = ({ html }) => {
  return (
    <div className="about">
      <div dangerouslySetInnerHTML={{__html: html}}></div>

      <p className="mb-0">
        The protocol was last updated on {commitDate} (<a href={commitUrl}>{commitHash.substring(0, 7)}</a>).
      </p>
    </div>
  )
}

About.propTypes = {
  html: PropTypes.string.isRequired
}

export default About
