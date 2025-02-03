import { AppBar, Button, createTheme, ThemeProvider, Toolbar } from '@mui/material'

import React from 'react'
import { Link } from 'react-router'
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const Navbar2 = () => {
  return ( 
    <ThemeProvider theme={darkTheme}>
        <AppBar position='static'>
        <Toolbar>
            <Link to='/' style={{marginRight: 'auto'}}><Button style={{color:'white'}}>VH</Button></Link>
            <Link to='/Product'><Button style={{color:'white'}}>Product</Button></Link>
            <Link to='/Order'><Button style={{color:'white'}}>Order</Button></Link>
            <Link to='/User'><Button style={{color:'white'}}>User</Button></Link>
        </Toolbar>
    </AppBar>
    </ThemeProvider>
  )
}

export default Navbar2

