import React, {useState,useEffect} from 'react';
import axios from 'axios/index'
import {Container} from "../../../component";

function Demo1(props) {
    const [info,setInfo] = useState('');

    useEffect(()=>{
        axios.get('http://localhost:5000/login').then(res=>{
            setInfo(res.data)
        })
    },[]);
    return <Container header="后端接口测试">
        {info}
    </Container>
}

export default Demo1;