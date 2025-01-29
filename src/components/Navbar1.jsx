import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar1 = () => {
  return (
    <div>
        <AppBar style={{backgroundColor:'black'}}>
        <Toolbar>
       
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: "white", fontFamily: "fantasy" }}>VENTURE HUB.</Typography>
                
            <Button  onClick={()=>(window.location.href='/Cart')}>
            <ShoppingCartIcon></ShoppingCartIcon>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar1
