import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import Login from './layout/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Login />
    </BrowserRouter>
  </React.StrictMode>,
)