import React,{useState} from 'react';
import axios from 'axios';

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
    <center>
    <form onSubmit={submitHandler}>
    <h2>Register</h2>
    <input type="text" name="username" placeholder='Username' onChange={changeHandler} />
    <br />
    <input type="email" name="email" placeholder='Email' onChange={changeHandler} />
    <br />
    <input type="password" name="password" placeholder='Password' onChange={changeHandler} />
    <br />
    <input type="password" name="confirmpassword" placeholder='Confirm Password' onChange={changeHandler} />
    <br/>
    <button type='submit'>Register</button>

    
    </form>
    
    </center>
    
    </div>
  )
}

export default Register