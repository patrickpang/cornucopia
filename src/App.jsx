import { Router } from '@reach/router'
import React, { Component } from 'react'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'

class App extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <ProductDetails path="/products/:id" />
        <Home default />
      </Router>
    )
  }
}

export default App
