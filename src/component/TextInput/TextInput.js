import React, {useState} from 'react';
import {Input} from "../index";

function TextInput(props) {
    const {type,onChange} = props;
    const [value,setValue] = useState('');

    return <span className="textInput">
        <Input value={value} onBlur={onChange} onChange={e=>handleChange(e.target.value)}/>
    </span>;

    function handleChange(v) {
        const typeStrategy = {
            number:()=>{
                if(!isNaN(Number(v)))return setValue(v)
            }
        };
        return typeStrategy[type]()
    }
}

export default TextInput;