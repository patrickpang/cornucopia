import { Router } from '@reach/router'
import React, { Component } from 'react'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import GameDetails from './pages/GameDetails'

class App extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <ProductDetails path="/products/:id" />
        <GameDetails path="/games/:id" />
        <Home default />
      </Router>
    )
  }
}

export default App
