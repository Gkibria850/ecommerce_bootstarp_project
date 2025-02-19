import React from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home  from './components/Home'
import Shop  from './components/Shop'
import Product from './components/common/Product'
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/shop' element={ <Shop/> }/>
        <Route path='/product' element={ <Product/> }/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
