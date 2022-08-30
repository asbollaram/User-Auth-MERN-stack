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
            <center>
              <h2>Welcome to user : {data.username}</h2>
            </center>
          }
        
    </div>
  )
}

export default Myprofile