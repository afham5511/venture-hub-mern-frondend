import React from 'react';
import Navbar from '../components/NavBar';
import CatrgoryComp from '../components/CatrgoryComp';


function Home() {
    return (

        <html>
            <body>
                <>
                    <div>
                    
                        <Navbar />
                   
                    
                        <br /><br />

                        <div style={{ backgroundColor: "white", float: "right" }}>
                            <h2 style={{ color: "black", float: "right", paddingTop: "400px", paddingRight: "130px" }}>Up to 60% OFF<br></br>
                                <div style={{ fontSize: "35px", fontFamily: 'monospace' }}>Live: Final Sale.</div>
                                <div className='a'>Wardrobe Essential with endless comfort.</div><br></br>
                                <div className='b' style={{ color: "black" }}><a href="" ><u>shop now.</u></a></div>
                            </h2><br></br>
                            <div style={{ width: "100vw", paddingBottom: "50px" }} >
                                <img src="https://i.postimg.cc/TYtQCqW5/pixelcut-export.jpg" width="50%" />
                                <br /><br /><br /><br /><br /><br /><br />
                            </div>

                        </div>

                        <div style={{ backgroundColor: "white" }}>

                            <h2 style={{ color: "black", marginLeft: "20px", paddingTop: "100px" }}>Explore a selection of our<br></br>
                                wardrobe essentials...</h2><br></br>
                        </div>
                        <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-evenly" }}>

                        <CatrgoryComp id={'01'} dics={'Loafers'} imageUrl={'https://i.postimg.cc/kgKz7SRG/dgf.jpg'} title={'Intensified suede, utmost supplesness.'} />
                        <CatrgoryComp id={'02'} dics={'Trousers'} imageUrl={'https://i.postimg.cc/vHgk6NVX/pixelcut-export-1.jpg'} title={'A powerful silhouette and yet, they wear like pajama s.'} />
                        <CatrgoryComp id={'03'} dics={'T-Shirts'} imageUrl={'https://i.postimg.cc/fLtxhckg/pixelcut-export-6.jpg'} title={'Built for the long haul.'} />
                        <CatrgoryComp id={'04'} dics={'Sneakers'} imageUrl={'https://i.postimg.cc/XvLht0tY/pixelcut-export-5.jpg'} title={'dfSneakers made like shoes.'} />
</div>
                        <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-evenly" }}>
                        <div >
                            <br></br><br></br><br></br>  <br></br>
                            <h3>
                                About VH.
                            </h3>
                            <p>VentureHub is a powerful collective of perfectionists. We design quality<br /> wardrobe essentials. Our style never changes. It evolves. Clean<br /> and mature, that’s our way of life. It’s our code.</p>

                        </div>

                            <div >

                                <br></br><br></br><br></br>  <br></br>
                                <h3>
                                    Address.
                                </h3>
                                <p>VentureHub Kerala<br></br>
                                    Alicos Recidency<br />
                                    Sulthan bathery,Wayanad<br />
                                    India.
                                </p>

                            </div>

                            <div >
                                <br></br><br></br><br></br>  <br></br>
                                <h3>
                                    Contact us.
                                </h3>
                                <p>venturehubkerala@gmail.com<br></br>
                                    082 20 17 598 (mon-fri)<br />
                                </p>
                            </div>
                            <div >
                                <br></br><br></br><br></br>  <br></br>
                                <h3>
                                    Info.
                                </h3>
                                <p><u>Customer Services</u><br></br>
                                    <u>Care Guide</u><br></br>
                                    <u>Terms of Services</u><br></br>
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
