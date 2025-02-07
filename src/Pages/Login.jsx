import { Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useAuth } from '../Contexts/AuthContext';
import Navbar3 from './Navbar3';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setpassword] = useState('')
  const [loading, setloading] = useState(false)
  const {setUser, axiosInstance } = useAuth()
  const handleLogin =async ()=>{
    try {
      setloading(true)
      await axiosInstance.post('/auth/login',{
        phoneNumber, password
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
      alert("unable to login, please try again")
    }
    setloading(false)
  }
  return (

    <div className='container'>
      <Navbar3></Navbar3>

      <div style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', width:'100vw', display:'flex' }}>
        <div style={{width:'30vw'}}>
          <h1>LOGIN</h1>
          <br /><br />
          <TextField variant='outlined' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} label="PHONE NUMBER" style={{ backgroundColor: "white", borderRadius: "10px", fontFamily: "cursive" }} /> <br /><br />
          <TextField variant='outlined' value={password} onChange={(e)=>setpassword(e.target.value)}  label="PASSWORD" style={{ backgroundColor: "white", borderRadius: "10px", fontFamily: "cursive" }} /><br /><br /><br />
          <Button variant='contained' onClick={handleLogin} style={{ backgroundColor: "black", color: "#ffffff" }}>{loading?"loading..":'LOGIN'}</Button><br /><br />
        </div>
        <div >
          <img src="https://i.postimg.cc/xT9KVDT4/pixelcut-export.jpg" width='150%' />
        </div>
      </div>

    </div>

  );
}

export default Login;
