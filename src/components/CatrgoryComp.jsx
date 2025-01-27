import React from 'react';
import './style.css';


function CatrgoryComp({ imageUrl, title, dics }) {
    return (
        <div className='container' style={{ marginLeft: "3rem", float: "left", maxWidth: "30em" }}>
            <img src={imageUrl} height={350} width={250} />
            <h3>{dics}</h3>
            <p style={{ flexWrap: 'wrap' }}>{title}</p>
        </div>
    );
}

export default CatrgoryComp;
