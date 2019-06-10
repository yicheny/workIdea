import React, {createContext} from "react";
import {Consumer} from './Context';

const Receiver = (props) => {
    const handleClick = (callback,value) => {
        callback('aqua')
    };

    return <Consumer>
        {({ value, setValue }) =>
            <div style={{ color:value }} onClick={()=>handleClick(setValue,value)}> Hello, this is receiver.</div>
        }
    </Consumer>
};

export default Receiver;