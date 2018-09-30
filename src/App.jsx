import { Router } from '@reach/router'
import React, { Component } from 'react'
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <Home default />
      </Router>
    )
  }
}

export default App
