import React, {useState,useEffect} from 'react';
import axios from 'axios'

function HttpHome(props) {
    const [info,setInfo] = useState('')

    useEffect(()=>{
        axios.get('http://localhost:5000/login').then(res=>{
            setInfo(res.data)
        })
    });
    return (
        <div>
            {info}
        </div>
    );
}

export default HttpHome;