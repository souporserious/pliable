import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import createStyledElement from 'create-styled-element'

function Row({ children, ...props }, { table }) {
  const childrenToRender = Children.map(children, (child, index) =>
    cloneElement(child, { width: table.getHeaderWidth(index) })
  )
  return createStyledElement('tr', props, childrenToRender)({
    display: 'flex',
    flexDirection: 'row',
  })
}

Row.contextTypes = {
  table: PropTypes.object,
}

export default Row
