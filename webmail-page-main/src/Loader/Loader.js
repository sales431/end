import React from "react";
import oeiruty from '../media/hobspot-loader.webp';

const Loader = ()=>{
    return(<div style={{
        overflow:'hidden'
    }}>
            <img 
        alt="loader"
        src={oeiruty}
        style={{
            width:'100vw',
            // height  :'100vh',
        }}
        />
    </div>)
};

export default Loader;