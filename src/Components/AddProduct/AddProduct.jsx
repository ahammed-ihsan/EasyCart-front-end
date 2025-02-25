import { Form, Button } from "react-bootstrap"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddProduct(){
    const navigate = useNavigate()
    const [data,setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        stock: "",
        image: []
    })
    async function handleSubmit(e){
        e.preventDefault()
       
        try{
            const formData = new FormData()
    
            formData.append("name",data.name)
            formData.append("description",data.description)
            formData.append("price",data.price)
            formData.append("category",data.category)
            formData.append("stock",data.stock)
            
            data.image.forEach((img)=>{
                formData.append("image",img)
            })

            const res = await axios.post("http://localhost:3000/admin/addproduct", formData, {headers:{Authorization:localStorage.getItem("token")}})
            console.log(res);
            if(res.data.message=='success'){
                alert('product added successfully')
                navigate(-1)
            }
            
        }catch(err){
            console.log('handle submit',err); 
        }
    }

    function handleChange(e){
        e.preventDefault()
        setData(({...data,[e.target.name]:e.target.value})) 
    }

    function handleFileChange(e){
        e.preventDefault()
        const files = Array.from(e.target.files)
        setData({...data,image:files})
    }
    return(
        <div className="mt-4 " >
        <h1 className="text-center">Add Product</h1>
        <Form  onSubmit={handleSubmit} className="w-50 m-auto">
        <Form.Control required onChange={handleChange} name="name" type="text" placeholder="Enter product name" />
        <br />
        <Form.Control required onChange={handleChange} name="description" type="text" placeholder="Enter product description" />
        <br />
        <Form.Control required onChange={handleChange} name="price" type="number" placeholder="Enter product price" />
        <br />
        <Form.Control required onChange={handleChange} name="category" type="text" placeholder="Enter product category" />
        <br />
        <Form.Control required onChange={handleChange} name="stock" type="number" placeholder="Enter product stock" />
        <br />
        <Form.Control required onChange={handleFileChange} name="image" type="file" multiple accept="image/*" placeholder="Enter product price" />
        <br />
        <Button type="submit">Submit</Button>
        </Form>
        
        <br />
        </div>
    )
}