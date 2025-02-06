import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar1 from '../components/Navbar1';
import { useAuth } from '../Contexts/AuthContext';

function Product() {
    const { axiosInstance } = useAuth();
    const navigate = useNavigate();
    const { id, catogoryId } = useParams()
    const [product, setproduct] = useState({ title: 'NIKE SB Dunk Low London', strikeprice: 12960, description: 'Soft Grey Magnet', price: 9695, imageUrl1: 'https://i.postimg.cc/FFqVNWz4/pixelcut-export-8.jpg', imageUrl2: 'https://i.postimg.cc/Nj6mw2gc/pixelcut-export-9.jpg', imageUrl3: 'https://i.postimg.cc/c1w65g0M/pixelcut-export-10.jpg' })
    useEffect(() => {
        const handleGetCategory = async () => {
            try {
                const { data, status } = await axiosInstance.get(`/categories/${catogoryId}/items/${id}`)
                if (data) {
                    console.log(data);
                    setproduct(data)
                }
            } catch (error) {
                console.error(error);
                Alert("error")
            }
        }
        handleGetCategory()
    }, [id])

    return (
        <div>
            <Navbar1 />
            <br />
            <br />
            <br />
            <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', flexDirection: 'row', }}>

                <div style={{ flex: 2, display: 'flex', justifyContent: 'space-between', flexDirection: 'row', }}>
                    <img src={product.imageUrl1} width="50%" alt="" style={{ float: "left", }} />
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                        <img src={product.imageUrl3} alt="" width="65%" />
                        <img src={product.imageUrl2} alt="" width="65%" />
                    </div>
                </div>

                <div style={{ float: "right", marginRight: "90px" }}>
                    <div style={{ fontSize: "30px" }}>
                        <p>{product.title}</p>
                    </div>

                    <p>{product.description}</p>

                    <br></br><br></br><br></br>
                    <div style={{ color: "gray" }}>
                        <p><s> ₹{new Intl.NumberFormat('en-IN').format(Number(product.strikeprice))}</s></p>
                    </div>
                    <h2> ₹{new Intl.NumberFormat('en-IN').format(Number(product.price))}</h2>
                    <div style={{ color: "blue" }}>
                        <p>Final Sale {`${Math.round((1 - product.price / product.strikeprice) * 100)}%`} OFF.</p>
                    </div>
                    <br></br>
                    <Button variant='contained' style={{ backgroundColor: "black", color: "#ffffff" }} >
                        Add to cart
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant='contained' style={{ backgroundColor: "black", color: "#ffffff" }} onClick={() => (navigate('/checkout', { state: { product } }))}>
                        Buy Now
                    </Button>
                    <p><b>Free and Fast Delivery</b><br />
                        Orders placed before 23:30 are shipped the same<br />
                        day.Enjoy free shipping in all orders above ₹2,500 in<br />

                        india. </p>

                    <p><b>Easy Returns and Exchanges</b><br />
                        All orders can easly be returned or exchanged for a<br />
                        diffrent size,color or model within 14 days through<br />
                        our return portal.</p>


                </div>
            </div>
            
        </div>
    )
}

export default Product
