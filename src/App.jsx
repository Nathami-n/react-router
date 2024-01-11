import React, { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Card from './components/Card'
import ProductDetail from './components/ProductDetail'

const App = () => {

  return (
    <Routes>
        <Route exact path='/' element={<Card/>}></Route>
        <Route exact path='/Card/:id' element={<ProductDetail/>}></Route>
    </Routes>
  )
}

export default App