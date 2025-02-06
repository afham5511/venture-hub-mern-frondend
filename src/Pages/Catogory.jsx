import React, { useEffect, useState } from 'react'
import Navbar1 from '../components/Navbar1'
import { useParams } from 'react-router-dom'
import { Alert } from '@mui/material'
import { useAuth } from '../Contexts/AuthContext'

function Catogory() {
    const { id } = useParams()
    const { axiosInstance } = useAuth()

    const [catogorys, setcatogory] = useState([{ title: 'Adidas Gazzelle', strikeprice: 13520, description: 'ADIDAS ORIGINALS', price: 7799, imageUrl1: 'https://i.postimg.cc/nhZNSysv/pixelcut-export.png', }])
    useEffect(() => {
        const handleGetCategory = async () => {
            try {
                const instance = await axiosInstance()
                const { data, status } = await instance.get(`/categories/${id}`)
                if (data) {
                    setcatogory(data)
                }
            } catch (error) {
                console.error(error);
                Alert("error")
            }
        }
        handleGetCategory()
    }, [])
    return (
        <div>
            <Navbar1 />
            <br /><br /> <br /><br />
            <div style={{ display: 'flex', justifyContent: "space-evenly", }} >

                {catogorys.map(catogory => {

                    <div >

                        <img src={catogory.imageUrl1} width="90%" alt="" />&nbsp;&nbsp;<br /><br />
                        <div style={{ fontSize: "20px" }}>
                            <p>{catogory.title}</p>
                            <div style={{ color: "gray", fontFamily: 'monospace' }}>
                                <p>{catogory.description}</p>
                            </div></div>
                        ₹{new Intl.NumberFormat('en-IN').format(Number(catogory.price))}
                        <div style={{ color: "gray", fontSize: "15px" }}>
                            <p><s> ₹{new Intl.NumberFormat('en-IN').format(Number(catogory.strikeprice))}</s></p>
                        </div>
                    </div>
                })}


            </div>
        </div>
    )
}

export default Catogory
