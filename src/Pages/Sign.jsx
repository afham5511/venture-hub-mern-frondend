import React, { useState } from 'react'
import { Button, Container, TextField } from '@mui/material'
import Navbar3 from './Navbar3'
import { useAuth } from '../Contexts/AuthContext'
const Sign = () => {
  const[fname,setfname]=useState('')
  const[surname,setsurname]=useState('')
 const [phoneNumber, setPhoneNumber] = useState('')
   const [password, setpassword] = useState('')
   const [loading, setloading] = useState(false)
   const {setUser, axiosInstance } = useAuth()
   const handleLogin =async ()=>{
     try {
       setloading(true)
       await axiosInstance.post('/auth/signup',{
         phoneNumber, password,fname,surName:surname
       }).then(async({data})=>{
         alert(data.message)
         if(data.user){
           await localStorage.setItem('@Auth',JSON.stringify(data.user))
           setUser(data.user)
           console.log(data.user);
           
           if(data.user.role=='admin'){
             window.location.href = '/admin'
           }else
           window.location.href = '/';
         }
       })
     } catch (error) {
       alert("you are allready registerd")
     }
     setloading(false)
   }


  return (
    
          <div style={{textAlign:'center'}}>
       <h1><center>VENTURE HUB.</center></h1><br /><br />
     <h3><center>SIGN IN </center></h3>
   
      <Navbar3></Navbar3>
       
            <br /><br />
            <TextField variant='outlined' value={fname} onChange={(e)=>setfname(e.target.value)} label="FIRST NAME"style={{backgroundColor:"white",borderRadius:"10px",fontFamily:"cursive"}} />
            <br /><br />

            <TextField variant='outlined' value={surname} onChange={(e)=>setsurname(e.target.value)}label="SUR NAME"style={{backgroundColor:"white",borderRadius:"10px",fontFamily:"cursive"}}/><br /><br />
            <TextField variant='outlined' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} label="PHONE NUMBER"style={{backgroundColor:"white",borderRadius:"10px",fontFamily:"cursive"}}/>
            <br /><br />
            <TextField variant='outlined' value={password} onChange={(e)=>setpassword(e.target.value)}  label="PASSWORD"style={{backgroundColor:"white",borderRadius:"10px",fontFamily:"cursive"}}/><br /><br /><br /><br /><br />
            <Button variant='contained' onClick={handleLogin} style={{backgroundColor:"black",color:"white"}}>Sign In</Button><br /><br />
           
                      <br /><br />
    </div>
  )
}

export default Sign
