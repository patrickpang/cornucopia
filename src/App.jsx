import { Router } from '@reach/router'
import React, { Component } from 'react'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import GameDetails from './pages/GameDetails'
import Profile from './pages/Profile'

class App extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <Profile path="/profile" />
        <ProductDetails path="/products/:id" />
        <GameDetails path="/games/:id" />
        <Home default />
      </Router>
    )
  }
}

export default App
