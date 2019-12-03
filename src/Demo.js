import React from 'react';
// import * as ylf from 'ylf_public_fun/publicFun';
import axios from 'axios';

let res = [];

function complexOpe(data) { //复杂运算
    return data.map((el,i)=>el);
}

function responseV2(data) {
    const chunk = data.splice(0,1000);
    res = res.concat(complexOpe(chunk));
    if(data.length>0){
        setTimeout(function () {
            responseV2(data);
        },0);
        return null;
    }
    console.log(res);
}

function Demo(props) {

    axios.get('').then(res=>{
        const mockData = Array.from(Array(30000),(item,i)=>i);
        responseV2(mockData)
    });
    return <div>
        <button onClick={()=>console.log("点击成功")}>点击</button>
    </div>;
}

export default Demo;