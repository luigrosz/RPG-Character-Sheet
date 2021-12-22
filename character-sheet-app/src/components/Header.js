import React, { Component } from 'react'
import HeaderButtons from './HeaderButtons'

export default class Header extends Component {
  render() {
    return (
      <div className="headerDiv">
        <HeaderButtons />
      </div>
    )
  }
}
