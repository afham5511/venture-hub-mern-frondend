import React from 'react';
import './style.css';


function CatrgoryComp({ imageUrl, title, dics,id }) {
    return (
        <div className='container' onClick={()=>window.location.href='/product/'.concat(id)} style={{ marginLeft: "3rem", maxWidth: "30em" }}>
            <img src={imageUrl} height={350} width={250} />
            <h3>{dics}</h3>
            <p style={{ flexWrap: 'wrap' }}>{title}</p>
        </div>
    );
}

export default CatrgoryComp;
