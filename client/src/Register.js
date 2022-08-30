import React,{useState} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

const Register = () => {
    const [data, setData] = useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    })

//change event handler
const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value}) // distracted the values

}

// submit handler

const submitHandler = e =>{
    e.preventDefault();
    // adding axios server method topost data from frontEnd

    axios.post('http://localhost:5003/register',data).then(
     res => alert(res.data)
    )
}

  return (
    <div>
    <main className='form-signin w-100 m-auto'>
    <h2 className='text-center'>Register</h2>

    <Form onSubmit={submitHandler} className="border rounded-4 p-3 bg-white">
    <Form.Group className='mb-3 input-group-lg'>
      <Form.Label className='fs-4 fw-normal'>User Name</Form.Label>
      <Form.Control type="text" placeholder='Username' name='username' onChange={changeHandler} />
    </Form.Group>
    <Form.Group className='mb-3 input-group-lg'>
      <Form.Label className="fs-4 fw-normal">Email</Form.Label>
      <Form.Control type="email" name='email' placeholder='Email' onChange={changeHandler} />
    </Form.Group>
    <Form.Group className='mb-3 input-group-lg'>
      <Form.Label className='fs-4 fw-normal'>Password</Form.Label>
      <Form.Control type="password" name="password" placeholder='Password' onChange={changeHandler} />
    </Form.Group>
    <Form.Group className='mb-3 input-group-lg'>
      <Form.Label className='fs-4 fw-normal'>Confirm Password</Form.Label>
      <Form.Control type="password" name="confirmpassword" placeholder='Confirm Password' onChange={changeHandler} />
    </Form.Group>
    
   
    <Button type="submit" variant='primary' className='fs-4' >Register</Button>

    
    </Form>
    <p className="mt-5 mb-3 text-muted text-center">© 2022 Bollaram Studio</p>
    </main>
    
    </div>
  )
}

export default Register