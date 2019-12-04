import React from 'react';
// import * as ylf from 'ylf_public_fun/publicFun';
import axios from 'axios';

function Demo(props) {
    console.log('A');

    setTimeout(()=>{
        console.log('B')
    },0);

    const promise = new Promise((resolve,reject)=>{
        try {
            resolve()
        }catch (e) {
            reject()
        }
    });

    promise.then(()=>{
        console.log('C')
    }).then(()=>{
        console.log('D')
    }).then(()=>{
        console.log('G')
    });

    promise.then(()=>{
        console.log('E')
    }).then(()=>{
        console.log('F')
    }).then(()=>{
        console.log('H')
    });
    return <div>

    </div>;
}

export default Demo;