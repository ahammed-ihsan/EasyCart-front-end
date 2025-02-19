import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import NavComponent from './Components/Navbar/NavComponent';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';


function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
