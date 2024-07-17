import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Login from './layout/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/login' element={<Login/>}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)