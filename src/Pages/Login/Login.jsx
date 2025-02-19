import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios'
import {useNavigate, useLocation} from 'react-router-dom'
import NavComponent from '../../Components/Navbar/NavComponent';

function Login() {
  const [data,setData] = useState({email:"",password:""})
  const navigate = useNavigate()
  const handleChange =(e) => {
    e.preventDefault()
    setData(({...data,[e.target.name]:e.target.value}));
  }

  async function handleSubmit (e){
    e.preventDefault()
    try{
      const res = await axios.post('http://localhost:3000/auth/login', data);
      if(res.data.token){
        localStorage.setItem('token',`Bearer ${res.data.token}`)
        navigate(-1)
      }
      
    }catch(err){
      console.log(err);
    }
  }
  return (
    <>
    <NavComponent />
    <Form onSubmit={handleSubmit} style={{margin:'auto', width:'50vw', marginTop:'20vh'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleChange} type="email" placeholder="Enter email" name='email'/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleChange} type="password" placeholder="Password" name='password' />
      </Form.Group>
      
      <Button style={{marginLeft:'45%'}} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default Login;