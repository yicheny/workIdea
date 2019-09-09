import React, {useState,useEffect} from 'react';
import axios from 'axios'
import {Container} from "../../component";

function Part1(props) {
    const [info,setInfo] = useState('')

    useEffect(()=>{
        axios.get('http://localhost:5000/login').then(res=>{
            setInfo(res.data)
        })
    });
    return <Container header="后端接口测试">
        {info}
    </Container>
}

export default Part1;