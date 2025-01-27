import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar1 = () => {
  return (
    <div>
        <AppBar style={{backgroundColor:'black'}}>
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: "white", fontFamily: "fantasy" }}>VENTURE HUB.</Typography>
                
                
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar1
