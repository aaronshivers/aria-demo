import React from 'react'
import Main from './main/main.component'
import './home.component.scss'
import Navigation from './header/navigation/navigation.component'
import Header from './header/header.component'

export default () => (
  <div className="container">
    <Header/>
    <Navigation/>
    <Main/>
  </div>
)
