import React, { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Card from './components/Card'
import ProductDetail from './components/ProductDetail'
import Trial from '../useCallBack/trial'
import Counter from '../useCallBack/Counter'


const App = () => {

  return (
    <Routes>
        <Route exact path='/' element={<Card/>}></Route>
        <Route exact path='/Card/:id' element={<ProductDetail/>}></Route>
        <Route exact path ='/useCallBack' element ={<Trial/>}></Route>
        <Route exact path ='/useCallBack/hook' element ={<Counter/>}></Route>

    </Routes>
  )
}

export default App