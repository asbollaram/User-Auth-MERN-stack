import React,{ useState,useContext } from 'react';
import axios from 'axios';
import { store } from './App';
import { Navigate } from 'react-router-dom';

const Login = () => {

  const [token,setToken] = useContext(store)
  
    const [data, setData] = useState({
        email:'',
        password:''
    })

//change event handler
const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value}) // distracted the values

}

// submit handler

const submitHandler = e =>{
    e.preventDefault();
    // adding axios server method topost data from frontEnd

    axios.post('http://localhost:5003/login',data).then(
     res => setToken(res.data.token)
    )
}
if(token){
  return <Navigate to="/Myprofile" />
}
  return (
    <div>
    <main className='form-signin m-auto '>
    <h2 className='text-center'>Login</h2>
    <form onSubmit={submitHandler} autoComplete="off" className='bg-white shadow p-3 border rounded-4 w-100'>
    
    <div className='mb-3'>
      <label className='form-label fs-4'>Email</label>
      <input className='form-control form-control-lg shadow-sm' type="email" name="email" placeholder='Email'  onChange={changeHandler} />
    </div>
    <div className='mb-3'>
    <label className='form-label fs-4'>Password</label>
      <input className='form-control form-control-lg shadow-sm' type="password" name="password" placeholder='Password' onChange={changeHandler} />
    </div>
    <button type='submit' className='btn btn-primary btn-primary-lg shadow-sm fs-5'>Login</button>

    
    </form>
    <p className="mt-5 mb-3 text-muted text-center">©2022 Bollaram Studio</p>
    </main>
    </div>
  )
}

export default Login