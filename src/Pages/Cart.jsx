import React, { useState } from 'react'
import Navbar1 from '../components/Navbar1'
import { useParams } from 'react-router-dom';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';

function Cart() {
    const { id } = useParams()
    const [cart, setcart] = useState({ subtotal:9695,total:9695,title: 'NIKE SB Dunk Low London',making:'Nike London.', color:'soft gray',size:'UK-7',qty:'1',strikeprice: 12960, description: 'Soft Grey Magnet', price: 9695, imageUrl1: 'https://i.postimg.cc/FFqVNWz4/pixelcut-export-8.jpg' })
    console.log(id);
  return (
    <div>
        <Navbar1/>
        <br/><br/>
        <div style={{fontFamily:"sans-serif"}}>
     <center><h1>SHOPPING BAG</h1></center> <br/><br/></div>


     <div style={{ float: "left"}}>
     <img src={cart.imageUrl1}  width="50%"  alt="" style={{ float: "left", }} />&nbsp;&nbsp;
                 <div>
                    <div style={{ fontSize: "20px" }}>
                        <p>{cart.title}</p>
                        <div style={{color:"gray", fontFamily: 'monospace'}}>
                        <p>{cart.making}</p>
                        <div style={{color:"gray",fontSize:"15px"}}>
                        <p>{cart.color}&nbsp;&nbsp;{cart.size}&nbsp;&nbsp; Qty:{cart.qty}</p></div>
                        </div>
                         ₹{new Intl.NumberFormat('en-IN').format(Number(cart.price))}
                        <div style={{color:"gray",fontSize:"15px"}}>
                        <p><s> ₹{new Intl.NumberFormat('en-IN').format(Number(cart.strikeprice))}</s></p>
                        </div>
                        <div style={{ fontFamily: 'monospace',fontSize:"18px" }}>
                        <p>ONLY ONE LEFT!</p>
                        <Button>Remove from Bag</Button>
                        </div>
</div>
                    </div>
</div>


     


      <div style={{float:"right", marginRight:"100px"}}>
      <h1>Order Summary</h1>
      <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Item Sub-Total</TableCell>
                                    <TableCell>₹{new Intl.NumberFormat('en-IN').format(Number(cart.subtotal))}</TableCell>
                                    
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            
                                            <TableRow>
                                                <TableCell>Shipping</TableCell>
                                                <TableCell>0.000</TableCell>
                                                
                                            </TableRow>
                                            <TableRow>
                                                <TableCell><b>Total</b></TableCell>
                                                <TableCell><b>₹{new Intl.NumberFormat('en-IN').format(Number(cart.total))}</b></TableCell>
                                                
                                            </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

<br/><br/>

<br></br><br />


  <center>
<Button variant='contained' style={{ backgroundColor: "black", color: "#ffffff" }}  onClick={()=>(window.location.href='/Checkout')}>
                        Confirm
                    </Button></center></div>






      <br/><br></br><br></br><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
    
  )
}

export default Cart
