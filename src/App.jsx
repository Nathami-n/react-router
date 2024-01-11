import React, { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Card from './components/Card'

const App = () => {

  return (
    <Routes>
        <Route exact path='/' element={<Card/>}></Route>
        <Route exact path='/Card/:id'></Route>
    </Routes>
  )
}

export default App