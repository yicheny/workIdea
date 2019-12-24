import React from 'react';
// import * as ylf from 'ylf_public_fun/publicFun';
// import _ from 'lodash';
// import axios from 'axios';
import _ from 'lodash/fp';

function Demo(props) {
    //此方法取自redux源码
    function compose(...funcs) {
        if (funcs.length === 0) return arg => arg;
        if (funcs.length === 1) return funcs[0];
        return funcs.reduce((a, b) => (...args) => a(b(...args)))
    }
    const toUpperCase = s=>s.toUpperCase();

    function trace(tag) {
        return (x)=>{
            console.log(tag,x);
            return x;
        }
    }

    const latin = compose(_.map(toUpperCase),trace('_.reverse成功执行'),_.reverse);
    // const latin = compose(_.map,toUpperCase,trace('_.reverse成功执行'),_.reverse);
    console.log(latin(["frog", "eyes"]));

    return <div>

    </div>;
}

export default Demo;