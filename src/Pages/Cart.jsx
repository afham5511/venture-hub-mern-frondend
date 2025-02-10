import React, { useContext, useEffect, useState } from 'react'
import Navbar1 from '../components/Navbar1'
import { useParams } from 'react-router-dom';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { useAuth } from '../Contexts/AuthContext';

function Cart() {
    const { axiosInstance, user } = useAuth()
    const [carts, setCarts] = useState([]); // Start with an empty array for the carts state
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const user1 = await localStorage.getItem('@Auth');
            const { data } = await axiosInstance.get(`/product/cart/${user._id || JSON.parse(user1)._id}`);
            if (data) {
                setCarts(data.products);

                // Calculate subtotal and total
                const calcSubtotal = data.products.reduce((acc, product) => acc + (product.price * product.qty), 0);
                const calcTotal = calcSubtotal; // For now, you can add other calculations like taxes/shipping if needed
                setSubtotal(calcSubtotal);
                setTotal(calcTotal);
            }
        }
        console.log(user);
        fetchData();
    }, [user, axiosInstance]);

    return (
        <div>
            <Navbar1 />
            <br /><br />
            <div style={{ fontFamily: "sans-serif" }}>
                <center><h1>SHOPPING BAG</h1></center> <br /><br />
            </div>

            <div style={{display:'flex',flexDirection:"row", justifyContent:"space-between"}}>
            <div style={{display:'flex',flexDirection:"column"}}>


            {carts.length !== 0 ? (
                carts.map(cartItem => (
                    <div style={{  marginBottom: "20px", width: "45%" }}>
                        <img src={cartItem.imageUrl1} width="50%" alt="" style={{ float: "left" }} />
                        <div style={{ marginLeft: "50px" }}>
                            <div style={{ fontSize: "20px" }}>
                                <p>{cartItem.title}</p>
                                <div style={{ color: "gray", fontFamily: 'monospace' }}>
                                    <p>{cartItem.making}</p>
                                    <div style={{ color: "gray", fontSize: "15px" }}>
                                        <p>{cartItem.color} {cartItem.size} Qty: {cartItem.qty}</p>
                                    </div>
                                </div>
                                ₹{new Intl.NumberFormat('en-IN').format(Number(cartItem.price))}
                                <div style={{ color: "gray", fontSize: "15px" }}>
                                    <p><s> ₹{new Intl.NumberFormat('en-IN').format(Number(cartItem.strikeprice))}</s></p>
                                </div>
                                <div style={{ fontFamily: 'monospace', fontSize: "18px" }}>
                                    <p>ONLY ONE LEFT!</p>
                                    <Button>Remove from Bag</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Your cart is empty!</p>
            )}
            </div>

            <div style={{ float: "right", marginRight: "100px" }}>
                <h1>Order Summary</h1>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Item Sub-Total</TableCell>
                                <TableCell>₹{new Intl.NumberFormat('en-IN').format(Number(subtotal))}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Shipping</TableCell>
                                <TableCell>0.000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><b>Total</b></TableCell>
                                <TableCell><b>₹{new Intl.NumberFormat('en-IN').format(Number(total))}</b></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <br /><br />
                <center>
                    <Button variant='contained' style={{ backgroundColor: "black", color: "#ffffff" }} onClick={() => (window.location.href = '/Checkout')}>
                        Confirm
                    </Button>
                </center>
            </div>
            </div>
        </div>
    )
}

export default Cart;
