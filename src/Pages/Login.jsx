import { Button, TextField } from '@mui/material';
import React from 'react';

import Navbar1 from '../components/Navbar1';

const Login = () => {
  return (

    <div className='container'>
      <Navbar1></Navbar1>

      <div style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', width:'100vw', display:'flex' }}>
        <div style={{width:'30vw'}}>
          <h1>LOGIN</h1>
          <br /><br />
          <TextField variant='outlined' label="USERNAME" style={{ backgroundColor: "white", borderRadius: "10px", fontFamily: "cursive" }} /> <br /><br />
          <TextField variant='outlined' label="PASSWORD" style={{ backgroundColor: "white", borderRadius: "10px", fontFamily: "cursive" }} /><br /><br /><br />
          <Button variant='contained' style={{ backgroundColor: "black", color: "#ffffff" }}>LOGIN</Button><br /><br />
        </div>
        <div >
          <img src="https://i.postimg.cc/xT9KVDT4/pixelcut-export.jpg" width='150%' />
        </div>
      </div>

    </div>

  );
}

export default Login;
