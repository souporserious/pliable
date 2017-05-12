import React, { Children, cloneElement } from 'react'
import createStyledElement from 'create-styled-element'

const { Tr } = createStyledElement

const rowStyles = {
  display: 'flex',
  flexDirection: 'row',
}

function Head({ children, ...props }) {
  const childrenToRender = Children.map(children, (child, index) =>
    cloneElement(child, { index })
  )
  return createStyledElement(
    'thead',
    props,
    <Tr css={rowStyles}>
      {childrenToRender}
    </Tr>
  )()
}

export default Head
