import React,{ useContext,useState } from 'react';
import axios from 'axios'; 
import { store } from './App';
import { Navigate,Link } from 'react-router-dom';

const Home = () => {
    
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

    <div className="container col-xl-10 col-xxl-8 px-4 py-5">

    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-8 text-center text-lg-start">
        <h1 className="display-3 fw-normal lh-1 mb-3">Vertically centered hero sign-up form</h1>
        <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
      </div>
      <div className="col-md-10 mx-auto col-lg-4">
        <form className="p-3 p-md-4 border rounded-3 bg-light" onSubmit={submitHandler}>
          <div className="form-floating mb-3">
            <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={changeHandler} />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={changeHandler}/>
            <label for="floatingPassword">Password</label>
          </div>
         
          <button class="w-100 btn btn-lg btn-primary" type="submit">Login</button>
          <hr classname="my-4"/>
          <small classname="text-muted">By clicking <Link to="/register">Sign up</Link>, you agree to the terms of use.</small>
        </form>
      </div>
    </div>
  </div>
    
    </div>
  )
}

export default Home