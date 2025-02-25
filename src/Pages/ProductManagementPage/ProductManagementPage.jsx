import AdminNav from '../../Components/AdminNav/AdminNav'
import './ProductManagementPage.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from 'react'

import AddProduct from '../../Components/AddProduct/AddProduct'

export default function ProductManagementPage(){
    return(
        <>
        
        <AdminNav />
        <div className="main row">
            <Link to={'/admin/productmanagement/addproduct'} className="add  col-md-3 text-center"><div >Add Product</div></Link>
            <div className="delete  col-md-3 text-center">Delete Product</div>
            <div className="update  col-md-3 text-center">Update Product</div>
        </div>
          
    
        <Routes>
            <Route path='/' element={<h1>home</h1>}></Route>
            <Route path='/addproduct' element={<AddProduct />}></Route>
        </Routes>
        </>
    )
}