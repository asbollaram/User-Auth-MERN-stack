import React,{useState,useContext,useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { store } from './App';
import axios from 'axios';


const Myprofile = () => {
  const [token,setToken] = useContext(store);

  const [data,setData] = useState(null); //Data creating the data verible for store the 
  useEffect(() =>{
    axios.get('http://localhost:5003/myprofile',{
      headers:{
        'x-token' : token
      }
    }).then(res => setData(res.data)).catch((err) => console.log(err))
  },[])

  if(!token){
    return <Navigate to="/Login"/>
  }
  return (
    <div> 
          { data &&   
            <div className='container-fluid bg-white m-auto h-100'>

            <div className='row'>

              <header className='p-3 text-bg-dark'>
              
                <div className='d-flex flex-wrap align-items-center  justify-content-md-between' >
                  
                <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              B
            </a>
            <div className='text-end d-flex'>
                <ul className='nav'> 
                    <li className='nav-item mx-3 align-self-center'>Welcome to user : {data.username}</li>                
                  </ul>    
                <button type='button' className='btn btn-danger btn-sm' onClick={()=> setToken(null)}>Logout</button>
                </div> 
                </div>
              </header>

              <section className="py-5 text-center container">
              <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                  <h1 className="fw-light">Album example</h1>
                  <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                  <p>
                    <a href="/home" className="btn btn-primary my-2">Main call to action</a>
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-dark text-secondary px-4 py-5 text-center">
              <div className="py-5">
                <h1 className="display-5 fw-bold text-white">Dark mode hero</h1>
                <div className="col-lg-6 mx-auto">
                  <p className="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
                    <button type="button" className="btn btn-outline-light btn-lg px-4">Secondary</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                  <li className="nav-item"><a href="/home" className="nav-link px-2 text-muted">Home</a></li>
                  <li className="nav-item"><a href="/register" className="nav-link px-2 text-muted">Register</a></li>
                  <li className="nav-item"><a href="/login" className="nav-link px-2 text-muted">Login</a></li>
                </ul>
                <p className="text-center text-muted">© 2022 Company, Inc</p>
              </footer>
            </div>
            </div>
            </div>            
          }
        
    </div>
  )
}

export default Myprofile