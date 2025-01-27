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
                            <div style={{ width: "100vw",paddingBottom:"50px" }} >
                                <img src="https://i.postimg.cc/xT9KVDT4/pixelcut-export.jpg"  width="50%" />
                                <br /><br /><br /><br /><br /><br /><br />
                            </div>

                        </div>

                        <div style={{ backgroundColor: "white" }}>

                            <h2 style={{ color: "black", marginLeft: "20px" , paddingTop:"100px" }}>Explore a selection of our<br></br>
                                wardrobe essentials...</h2><br></br>
                        </div>
                        <CatrgoryComp dics={'Loafers'} imageUrl={'https://i.postimg.cc/kgKz7SRG/dgf.jpg'} title={'Intensified suede, utmost supplesness.'} />
                        <CatrgoryComp dics={'Trousers'} imageUrl={'https://i.postimg.cc/vHgk6NVX/pixelcut-export-1.jpg'} title={'A powerful silhouette and yet, they wear like pajama s.'} />
                       
                        <CatrgoryComp dics={'T-Shirts'} imageUrl={'https://i.postimg.cc/fLtxhckg/pixelcut-export-6.jpg'} title={'Built for the long haul.'} />
                     
                        <CatrgoryComp  dics={'Sneakers'} imageUrl={'https://i.postimg.cc/XvLht0tY/pixelcut-export-5.jpg'}  title={'dfSneakers made like shoes.'}/>
                      
                        <div style={{ textAlign:"center" }}>
                            <br></br><br></br><br></br>  <br></br><br></br><br></br>
                            <h5>
                                About VH.
                            </h5>
                            <h6>VentureHub is a powerful collective of perfectionists. We design quality<br /> wardrobe essentials. Our style never changes. It evolves. Clean<br /> and mature, that’s our way of life. It’s our code.</h6>

                        </div>

                        <div style={{ textAlign:"center" }}>
                            <br></br><br></br><br></br>  <br></br><br></br><br></br>
                            <h5>
                                Address.
                            </h5>
                            <h6>VentureHub Kerala<br></br>
                                Alicos Recidency<br />
                                Sulthan bathery,Wayanad<br />
                                India.</h6>
                        </div>
                        <div style={{ marginLeft: "10px", float: "left" , paddingTop:"100px" }}>
                            <br></br><br></br><br></br>  <br></br><br></br><br></br>
                            <h5>
                                Contact us.
                            </h5>
                            <h6>venturehubkerala@gmail.com<br></br>
                                082 20 17 598 (mon-fri)<br />
                            </h6>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                     
                    </div>


                </>

            </body>
        </html>
    );
}

export default Home;
