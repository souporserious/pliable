import React from 'react'
import createStyledElement from 'create-styled-element'

function Body(props) {
  return createStyledElement('tbody', props)({
    display: 'flex',
    flexDirection: 'column',
  })
}

export default Body
