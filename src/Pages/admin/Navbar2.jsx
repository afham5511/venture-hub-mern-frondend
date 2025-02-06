import { AppBar, Button, createTheme, ThemeProvider, Toolbar, Typography } from '@mui/material'

import React from 'react'
import { Link } from 'react-router'
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const Navbar2 = () => {
  return ( 
    
        <AppBar style={{backgroundColor:'black'}} >
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: "white", fontFamily: "fantasy" }}>VH.</Typography><br/><br/>
            <Link to='/' style={{marginRight: 'auto'}}><Button style={{color:'white'}}></Button></Link>
            <Link to='/Order'><Button style={{ color: "#ffffff" }}>Order</Button></Link>&nbsp;&nbsp;
            <Link to='/User'><Button style={{  color: "#ffffff" }}>User</Button></Link>
        </Toolbar>
    </AppBar>
   
  )
}

export default Navbar2

