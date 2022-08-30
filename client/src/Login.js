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
    <center>
    <form onSubmit={submitHandler} autoComplete="off">
    <h2>Login</h2>
    
    <input type="email" name="email" placeholder='Email'  onChange={changeHandler} />
    <br />
    <input type="password" name="password" placeholder='Password' onChange={changeHandler} />
    <br/>
    <button type='submit'>Login</button>

    
    </form>
    
    </center></div>
  )
}

export default Login