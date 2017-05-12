import React from 'react'
import createStyledElement from 'create-styled-element'

function Data({ width, ...props }) {
  return createStyledElement('td', {
    ...props,
    style: { width, ...props.style },
  })({
    display: 'flex',
    flexDirection: 'column',
  })
}

export default Data
