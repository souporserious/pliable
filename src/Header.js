import React, { Component } from 'react'
import PropTypes from 'prop-types'
import createStyledElement from 'create-styled-element'
import ResizeObserver from 'resize-observer-polyfill'

class Header extends Component {
  static contextTypes = {
    table: PropTypes.object,
  }

  componentDidMount() {
    if (typeof window !== 'object') return

    if (this._node) {
      this._resizeObserver = new ResizeObserver(this._updateDimensions)
      this._resizeObserver.observe(this._node)
    }
  }

  componentWillUnmount() {
    if (this.resizeObserver && this._node) {
      this._resizeObserver.disconnect(this._node)
    }
  }

  _updateDimensions = entries => {
    const { index, width } = this.props
    const rect = entries[0].contentRect
    this.context.table.setHeaderWidth(index, rect.width)
  }

  _handleRef = component => {
    this._node = component
  }

  render() {
    const { index, width, ...props } = this.props
    const dynamicStyles = width ? { width } : { flex: 1 }
    return createStyledElement('th', { ref: this._handleRef, ...props })(
      {
        display: 'flex',
        flexDirection: 'column',
      },
      dynamicStyles
    )
  }
}

export default Header
