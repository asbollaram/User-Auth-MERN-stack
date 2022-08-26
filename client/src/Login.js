import React,{useState} from 'react';
import axios from 'axios';

const Login = () => {
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

    axios.post('http://localhost:5003/register',data).then(
     res => alert(res.data)
    )
}
  return (
    <div>
    <center>
    <form onSubmit={submitHandler}>
    <h2>Login</h2>
    
    <input type="email" name="email" placeholder='Email' onChange={changeHandler} />
    <br />
    <input type="password" name="password" placeholder='Password' onChange={changeHandler} />
    <br/>
    <button type='submit'>Register</button>

    
    </form>
    
    </center></div>
  )
}

export default Login