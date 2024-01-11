import ReactDOM from 'react-dom/client'
import React, { StrictMode } from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

 const root = ReactDOM.createRoot(document.getElementById('root'))

 root.render(
    <BrowserRouter>
    <StrictMode>
         <App/>
    </StrictMode> 
    </BrowserRouter>
    
   
 )