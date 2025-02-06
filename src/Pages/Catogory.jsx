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
                const { data, status } = await axiosInstance.get(`/categories/${id}`)
                if (data) {
                    console.log(data.items);
                    setcatogory(data.items)
                }
            } catch (error) {
                console.error(error);
                Alert("error")
            }
        }
        handleGetCategory()
    }, [id])  // Make sure to add `id` as a dependency so it fetches when the category changes

    return (
        <div>
            <Navbar1 />
            <br /><br /> <br /><br />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-evenly", }}>

                {catogorys.map(catogory => {
                    // Ensure that JSX elements are returned
                    return (
                        <div key={catogory.title} style={{ width: '250px', textAlign: 'center', margin: '10px' }} onClick={()=>window.location.href=`/catogory/${id}/product/${catogory._id}`}>
                            <img src={catogory.imageUrl1} width="90%" alt={catogory.title} />
                            <br /><br />
                            <div style={{ fontSize: "20px" }}>
                                <p>{catogory.title}</p>
                                <div style={{ color: "gray", fontFamily: 'monospace' }}>
                                    <p>{catogory.description}</p>
                                </div>
                            </div>
                            ₹{new Intl.NumberFormat('en-IN').format(Number(catogory.price))}
                            <div style={{ color: "gray", fontSize: "15px" }}>
                                <p><s> ₹{new Intl.NumberFormat('en-IN').format(Number(catogory.strikeprice))}</s></p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Catogory
