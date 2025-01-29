import { Button } from '@mui/material';
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CatrgoryComp from '../components/CatrgoryComp';
import Navbar1 from '../components/Navbar1';

function Product() {
    const { id } = useParams()
    const [product, setproduct] = useState({ title: 'NIKE SB Dunk Low London', strikeprice: 12960, description: 'Soft Grey Magnet', price: 9695, imageUrl1: 'https://i.postimg.cc/FFqVNWz4/pixelcut-export-8.jpg', imageUrl2: 'https://i.postimg.cc/Nj6mw2gc/pixelcut-export-9.jpg', imageUrl3: 'https://i.postimg.cc/c1w65g0M/pixelcut-export-10.jpg' })
    console.log(id);

    return (
        <div>
            <Navbar1/>
            <br/>
            <br/>
            <br/>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', flexDirection: 'row', }}>

                <div style={{ flex: 2, display: 'flex', justifyContent: 'space-between', flexDirection: 'row', }}>
                    <img src={product.imageUrl1}  width="40%"  alt="" style={{ float: "left", }} />
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                        <img src={product.imageUrl3} alt="" width="80%" />
                        <img src={product.imageUrl2} alt="" width="80%" />
                    </div>
                </div>

                <div style={{ float: "right", marginRight:"90px" }}>
                    <div style={{ fontSize: "30px" }}>
                        <p>{product.title}</p>
                    </div>

                    <p>{product.description}</p>

                    <br></br><br></br><br></br>
                    <div style={{ color:"gray" }}>
                        <p><s> ₹{new Intl.NumberFormat('en-IN').format(Number(product.strikeprice))}</s></p>
                    </div>
                    <h2> ₹{new Intl.NumberFormat('en-IN').format(Number(product.price))}</h2>
                    <div style={{color:"blue"}}>
                    <p>Final Sale {`${Math.round((1 - product.price / product.strikeprice) * 100)}%`} OFF.</p>
                    </div>
                    <br></br>
                    <Button variant='contained' style={{ backgroundColor: "black", color: "#ffffff" }}>
                        Add to cart
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant='contained' style={{ backgroundColor: "black", color: "#ffffff" }} onClick={()=>(window.location.href='/Checkout')}>
                        Buy Now
                    </Button>
                    <p><b>Free and Fast Delivery</b><br/>
                    Orders placed before 23:30 are shipped the same<br/>
                         day.Enjoy free shipping in all orders above ₹2,500 in<br/>
                          india. </p>
                          
                          <p><b>Easy Returns and Exchanges</b><br/>
                    All orders can easly be returned or exchanged for a<br/>
                         diffrent size,color or model within 14 days through<br/>
                          our return portal.</p>

                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-evenly" }}>

                <CatrgoryComp id={'01'} dics={'Loafers'} imageUrl={'https://i.postimg.cc/kgKz7SRG/dgf.jpg'} title={'Intensified suede, utmost supplesness.'} />
                <CatrgoryComp id={'02'} dics={'Trousers'} imageUrl={'https://i.postimg.cc/vHgk6NVX/pixelcut-export-1.jpg'} title={'A powerful silhouette and yet, they wear like pajama s.'} />
                <CatrgoryComp id={'03'} dics={'T-Shirts'} imageUrl={'https://i.postimg.cc/fLtxhckg/pixelcut-export-6.jpg'} title={'Built for the long haul.'} />
                <CatrgoryComp id={'04'} dics={'Sneakers'} imageUrl={'https://i.postimg.cc/XvLht0tY/pixelcut-export-5.jpg'} title={'dfSneakers made like shoes.'} />
            </div>
        </div>
    )
}

export default Product
