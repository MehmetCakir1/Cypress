import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Products from './components/Products'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Main/>
      <Products/>
    </div>
  )
}

export default Home