import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import NavComponent from './Components/Navbar/NavComponent';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import AdminHomePage from './Pages/AdminHome/AdminHomePage';
import ProductManagementPage from './Pages/ProductManagementPage/ProductManagementPage';


function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/admin/home' element={<AdminHomePage />}></Route>
          <Route path='/admin/productmanagement/*' element={<ProductManagementPage />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
