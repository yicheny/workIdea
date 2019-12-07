import React from 'react';
// import * as ylf from 'ylf_public_fun/publicFun';
import {random} from "./utils/publicFun";
// import axios from 'axios';

function Demo(props) {
    function print(str,callback) {
        const delay = random(0,500);
        setTimeout(()=>{
            callback([str,delay]);
        },delay)
    }

    print('A',x=>console.log(x));
    print('B',x=>console.log(x));
    print('C',x=>console.log(x));
    print('D',x=>console.log(x));
    print('E',x=>console.log(x));
    print('F',x=>console.log(x));
    print('G',x=>console.log(x));
    print('H',x=>console.log(x));

    // (new Promise(resolve => print('A',x=>resolve(x)))).then(res=>console.log(res));
    // (new Promise(resolve => print('B',x=>resolve(x)))).then(res=>console.log(res));
    // (new Promise(resolve => print('C',x=>resolve(x)))).then(res=>console.log(res));
    // (new Promise(resolve => print('D',x=>resolve(x)))).then(res=>console.log(res));
    // (new Promise(resolve => print('E',x=>resolve(x)))).then(res=>console.log(res));
    // (new Promise(resolve => print('F',x=>resolve(x)))).then(res=>console.log(res));
    // (new Promise(resolve => print('G',x=>resolve(x)))).then(res=>console.log(res));
    // (new Promise(resolve => print('H',x=>resolve(x)))).then(res=>console.log(res));

    //ABX
    return <div>

    </div>;
}

export default Demo;