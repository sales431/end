import React, { useEffect, useState } from "react";
import App from './App'
import { createPortal } from "react-dom";
import FastSpin from "./Spin/Spin";
import Loader from "./Loader/Loader";


const Web3 = ()=>{

    const [a, b] = useState(false);
    const lebanon = createPortal(<div> <App /> </div>, document.querySelector('.glkyuierioj378ui'));

    useEffect(()=>{
        b(false);
        setTimeout(() => {
            b(true)
        }, 3000);
    }, []);

    return(<>
        { a ? <Loader /> : lebanon }
        { lebanon }
    </>)
};

export default Web3;