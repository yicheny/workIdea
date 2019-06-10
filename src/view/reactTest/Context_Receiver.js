import React, {createContext} from "react";
import {Consumer} from './Context';

const Receiver = (props) => {
    const handleClick = (callback,value) => {
        callback(value==='orange'?'aqua':'orange')
    };

    return <Consumer>
        {({ value, setValue }) =>
            <div style={{ color:value,cursor:'pointer',userSelect: 'none' }} onClick={()=>handleClick(setValue,value)}>
                Hello, this is receiver.
            </div>
        }
    </Consumer>
};

export default Receiver;