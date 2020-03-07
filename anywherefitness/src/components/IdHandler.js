import React,{useState,useEffect} from 'react';
import {axiosWithAuth} from './AxiosWithAuth/axiosWithAuth'

const IdHandler = () =>{
    const [user,setUser]=useState({})
    const [classes,setClasses]=useState([])
   const userText = localStorage.getItem('user');
   const userObject = JSON.parse(userText);
   useEffect(() => {
     setUser(userObject)
     axiosWithAuth()
        .get("api/classes")
        .then(res=>{
            setClasses(res.data)
            
        })
   }, [])
   
   if (user.roleId == 2){
    return(<div>
        <p>Client</p>
        
       </div>)
   }else {
    return(<div>
        <p>Instructor</p>
       </div>)
   }
   
}
export default IdHandler