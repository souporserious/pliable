import React, { Component } from 'react'
import PropTypes from 'prop-types'
import createStyledElement from 'create-styled-element'

import Head from './Head'
import Header from './Header'
import Body from './Body'
import Row from './Row'
import Data from './Data'

class Table extends Component {
  static Head = Head
  static Header = Header
  static Body = Body
  static Row = Row
  static Data = Data

  static childContextTypes = {
    table: PropTypes.object,
  }

  headers = []

  getChildContext() {
    return {
      table: {
        setHeaderWidth: this.setHeaderWidth,
        getHeaderWidth: this.getHeaderWidth,
      },
    }
  }

  setHeaderWidth = (index, width) => {
    this.headers[index] = width
    this.forceUpdate()
  }

  getHeaderWidth = index => {
    return this.headers[index]
  }

  render() {
    return createStyledElement('table', this.props)({
      display: 'flex',
      flexDirection: 'column',
    })
  }
}

export default Table
