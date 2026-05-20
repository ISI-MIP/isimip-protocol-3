import React from 'react'

import { commitDate, commitHash, commitUrl } from '../store'

const About = () => {
  return (
    <div className="about">
      <div><strong>About</strong></div>
      <p>
        The simulation protocol describes the experiments, input data sets and output variables necessary to
        participate in the ISIMIP3 simulation round.
      </p>

      <p>
        <i>
          Please select the simulation round (ISIMIP3a, ISIMIP3b) and the sectors you are interested in from the
          menu on the right. The page will then adjust to your selection. The parts of the protocol, which are
          specific to a simulation round or sector are marked accordingly.
        </i>
      </p>

      <p className="mb-0">
        The protocol was last updated on {commitDate} (<a href={commitUrl}>{commitHash.substring(0, 7)}</a>).
      </p>
    </div>
  )
}

export default About
