import React,{useState} from 'react';
import MidComponent from './Context_MidComponent';
import {Provider} from './Context';

const Context_App = (props) => {
    const [Color,setColor] = useState({
        value:'orange',
        setValue:value => setColor({...Color,value})
    });
    return <Provider value={Color}>
        <MidComponent/>
    </ Provider>;
}

export default Context_App;