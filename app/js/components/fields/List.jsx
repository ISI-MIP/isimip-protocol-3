import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'

const List = ({ items }) => {
  return !isEmpty(items) && (
    <ul className="list">
      {
        Array.isArray(items) ? (
          items.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>{items}</li>
        )
      }
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.array,
  ])
}

export default List
