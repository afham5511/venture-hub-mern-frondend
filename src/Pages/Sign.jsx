import React from 'react'
import { Button, Container, TextField } from '@mui/material'
import Navbar1 from '../components/Navbar1'
const Sign = () => {
  return (
    
          <div style={{textAlign:'center'}}>
       <h1><center>VENTURE HUB.</center></h1><br /><br />
     <h3><center>SIGN IN </center></h3>
   
      <Navbar1></Navbar1>
       
            <br /><br />
            <TextField variant='outlined'label="FIRST NAME"style={{backgroundColor:"white",borderRadius:"10px",fontFamily:"cursive"}} />
            <br /><br />

            <TextField variant='outlined'label="SUR NAME"style={{backgroundColor:"white",borderRadius:"10px",fontFamily:"cursive"}}/><br /><br />
            <TextField variant='outlined'label="PHONE NUMBER"style={{backgroundColor:"white",borderRadius:"10px",fontFamily:"cursive"}}/>
            <br /><br />
            <TextField variant='outlined'label="PASSWORD"style={{backgroundColor:"white",borderRadius:"10px",fontFamily:"cursive"}}/><br /><br /><br /><br /><br />
            <Button variant='contained'style={{backgroundColor:"black",color:"white"}}>Sign In</Button><br /><br />
           
                      <br /><br />
    </div>
  )
}

export default Sign
