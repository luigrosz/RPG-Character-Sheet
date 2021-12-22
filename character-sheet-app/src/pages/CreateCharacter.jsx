import React, { Component } from 'react'
import Header from '../components/Header'
import PersonalDetails from '../components/PersonalDetails'

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <PersonalDetails />
      </div>
    )
  }
}
