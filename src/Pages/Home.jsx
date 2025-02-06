import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';
import CatrgoryComp from '../components/CatrgoryComp';
import { useAuth } from '../Contexts/AuthContext';

function Home() {
    const { axiosInstance } = useAuth();
    const [categories, setCatogories] = useState([]);

    useEffect(() => {
        const handleGetCategory = async () => {
            try {
                const { data, status } = await axiosInstance.get(`/categories`);
                if (data) {
                    setCatogories(data);
                }
            } catch (error) {
                console.error(error);
                alert("An error occurred while fetching categories");
            }
        };
        handleGetCategory();
    }, []);

    return (
        <html>
            <body>
                <>
                    <div>
                        <Navbar />

                        <br /><br />

                        <div style={{ backgroundColor: "white", float: "right" }}>
                            <h2 style={{ color: "black", float: "right", paddingTop: "400px", paddingRight: "130px" }}>
                                Up to 60% OFF
                                <div style={{ fontSize: "35px", fontFamily: 'monospace' }}>Live: Final Sale.</div>
                                <div className='a'>Wardrobe Essential with endless comfort.</div><br />
                                <div className='b' style={{ color: "black" }}>
                                    <a href=""><u>Shop now.</u></a>
                                </div>
                            </h2><br />
                            <div style={{ width: "100vw", paddingBottom: "50px" }}>
                                <img src="https://i.postimg.cc/TYtQCqW5/pixelcut-export.jpg" width="50%" />
                                <br /><br /><br /><br /><br /><br /><br />
                            </div>
                        </div>

                        <div style={{ backgroundColor: "white" }}>
                            <h2 style={{ color: "black", marginLeft: "20px", paddingTop: "100px" }}>
                                Explore a selection of our<br />
                                wardrobe essentials...
                            </h2><br />
                        </div>

                        <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-evenly" }}>
                            {categories.map(cat => {
                                return (
                                    <CatrgoryComp
                                        key={cat._id}
                                        id={cat._id}
                                        dics={cat?.name || "dfhjk"}
                                        imageUrl={cat?.items[0]?.imageUrl1 || 'https://placehold.co/600x400'}
                                        title={cat.description || "Description"}
                                    />
                                );
                            })}
                        </div>

                        <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-evenly" }}>
                            <div>
                                <br /><br /><br />
                                <h3>About VH.</h3>
                                <p>VentureHub is a powerful collective of perfectionists. We design quality<br /> wardrobe essentials. Our style never changes. It evolves. Clean<br /> and mature, that’s our way of life. It’s our code.</p>
                            </div>

                            <div>
                                <br /><br /><br />
                                <h3>Address.</h3>
                                <p>VentureHub Kerala<br />
                                    Alicos Recidency<br />
                                    Sulthan Bathery, Wayanad<br />
                                    India.
                                </p>
                            </div>

                            <div>
                                <br /><br /><br />
                                <h3>Contact us.</h3>
                                <p>venturehubkerala@gmail.com<br />
                                    082 20 17 598 (Mon-Fri)<br />
                                </p>
                            </div>

                            <div>
                                <br /><br /><br />
                                <h3>Info.</h3>
                                <p><u>Customer Services</u><br />
                                    <u>Care Guide</u><br />
                                    <u>Terms of Services</u><br />
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            </body>
        </html>
    );
}

export default Home;
