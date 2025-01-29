import React, { useState } from 'react'
import Navbar1 from '../components/Navbar1';

import { Button, Input, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';

function Checkout() {
    const { id } = useParams()
    const [checkout, setcheckout] = useState({ subtotal:9695, total: 9695 })
    console.log(id);
  return (
    <div>
        <Navbar1/>
        <br/><br/><br/>
        <div style={{float:"right", marginRight:"100px"}}>
      <h1>Order Summary</h1>
      <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Item Sub-Total</TableCell>
                                    <TableCell>₹{new Intl.NumberFormat('en-IN').format(Number(checkout.subtotal))}</TableCell>
                                    
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            
                                            <TableRow>
                                                <TableCell>Shipping</TableCell>
                                                <TableCell>0.000</TableCell>
                                                
                                            </TableRow>
                                            <TableRow>
                                                <TableCell><b>Total</b></TableCell>
                                                <TableCell><b>₹{new Intl.NumberFormat('en-IN').format(Number(checkout.total))}</b></TableCell>
                                                
                                            </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

<br/><br/>

<br></br><br />
<div style={{float:"right"}}>
<p><i>Add a promo code</i></p>
<TextField label="Enter code" variant="outlined"/>&nbsp;&nbsp;<br/><br/>
<Button variant="contained" style={{backgroundColor:"white",color:"black"}}>Apply</Button><br/><br/>

</div>

<div style={{fontFamily:"serif"}}>
<p><b><u>Select Payment Method</u></b></p>
</div>


  <div style={{float:"left",float:"top"}}>
  <form>
  <input type='radio' id='UPI'
  name='payment-method' value='UPI'/>
  <label for='UPI'><img src="https://download.logo.wine/logo/Visa_Inc./Visa_Inc.-Logo.wine.png" width="3%"/>&nbsp;&nbsp;</label>
  <br/><br/>
  <input type='radio' id='UPI'
  name='payment-method' value='UPI'/>
  <label for='UPI'><img src="https://wayne.bank/wp-content/uploads/2023/02/Apple-Pay-Card-Image.png" width="3%"/>&nbsp;&nbsp;</label>
  <br/><br/>
  <input type='radio' id='UPI'
  name='payment-method' value='UPI'/>
  <label for='UPI'><img src="https://static-00.iconduck.com/assets.00/paypal-icon-512x329-g5s1l16j.png" width="3%"/>&nbsp;&nbsp;</label>
  <br/>
  <br/>
  
  <input type='radio' id='UPI'
  name='payment-method' value='UPI'/>
  <label for='UPI'><img src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fexb2bvgjlfysy5dkya2u.jpeg" width="3%"/>&nbsp;&nbsp;</label>
  <br/>
  </form>
 

 

  </div>
  <br/>
  <br/>


  <center>
  <br/><br/><br/>
<Button variant='contained' style={{ backgroundColor: "black", color: "#ffffff" }}>
                        Proceed to Purchase
                    </Button></center>
                    <br/><br/><br/><br/>
    
                    <p>Team VH Accepts..</p>
<br/>

<img src="https://download.logo.wine/logo/Visa_Inc./Visa_Inc.-Logo.wine.png" width="3%"/>&nbsp;&nbsp;
<img src="https://wayne.bank/wp-content/uploads/2023/02/Apple-Pay-Card-Image.png" width="3%"/>&nbsp;&nbsp;
<img src="https://static-00.iconduck.com/assets.00/paypal-icon-512x329-g5s1l16j.png" width="3%"/>&nbsp;&nbsp;
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Maestro_2016.svg/616px-Maestro_2016.svg.png" width="2%"/>&nbsp;&nbsp;
<img src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fexb2bvgjlfysy5dkya2u.jpeg" width="3%"/>&nbsp;&nbsp;
<br/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGpBmSqI4dMbui4WE6DT6BwwMB15LMr7nNwA&s" width="3%"/>&nbsp;&nbsp;
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgber4MngQY983WF6ItDL0bzmmImENuVrPw&s" width="3%"/>&nbsp;&nbsp;
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFvqoC-Jozxz0IuLubY6-raxMYHfquPrGB5A&s" width="3%"/>&nbsp;&nbsp;
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSbRU3n0Cmz51JJwmJ6sO0hVabQct3Gr3uZg&s" width="2%"/>&nbsp;&nbsp;
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdk9JMSDXgEFuESqwb1pCdiUPLoA43dxqJhQ&s" width="3%"/>&nbsp;&nbsp;
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </div>
    </div>
  )
}

export default Checkout
