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
FDU
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

                        <CatrgoryComp dics={'Trousers'} imageUrl={'https://i.postimg.cc/vHgk6NVX/pixelcut-export-1.jpg'} title={'A powerful silhouette and yet, they wear like pajama s.'} />
                        <CatrgoryComp dics={'T-Shirts'} imageUrl={'https://i.pinimg.com/originals/19/19/15/191915c8aab1dcf71bb41312c1ba9c53.jpg'} title={'Built for the long haul.'} />
                        <CatrgoryComp dics={'Loafers'} imageUrl={'https://imgs.search.brave.com/dIbG1KKgbJgSs9rIiY5LsBQN45smqvVqyKw4jLl0C1w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tb3Jq/YXMuY2VudHJhY2Ru/Lm5ldC9jZG4tY2dp/L2ltYWdlL2Zvcm1h/dD13ZWJwLHdpZHRo/PTE5MjAscT03NS9j/bGllbnQvZHluYW1p/Yy9pbWFnZXMvMzQy/MF9iYTVhODQxNzFl/LXRoZS1pdnktbG9h/ZmVyLWJsYWNrLWNh/bGYtMi1zaXplMTky/MC5qcGc'} title={'Intensified suede, utmost supplesness.'} />
                        <CatrgoryComp  dics={'Sneakers'} imageUrl={'https://p3.aprimocdn.net/ecco/fcd7336d-68eb-462f-a282-b0c400b772a4/856813-51052-o_eCom.png?format=auto&width=634&quality=95'}  title={'dfSneakers made like shoes.'}/>
                      
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
