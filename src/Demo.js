import React from 'react';
// import * as ylf from 'ylf_public_fun/publicFun';
import axios from 'axios';

function Demo(props) {
    function add(xFor,yFor,cb) {
        let x,y;
        xFor(function (xVal) {
            x=xVal;
            if(y!==undefined){
                cb(x+y);
            }
        });
        yFor(function (yVal) {
            y=yVal;
            if(x!==undefined){
                cb(x+y);
            }
        });
    }

    function fetchX(callback) {
        callback(150)
    }
    function fetchY(callback) {
        callback(15)
    }
    add(fetchX,fetchY,function (sum) {
        console.log(sum)
    });
    return <div>

    </div>;
}

export default Demo;