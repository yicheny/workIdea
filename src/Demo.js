import React from 'react';
// import * as ylf from 'ylf_public_fun/publicFun';
// import _ from 'lodash';
// import axios from 'axios';
// import _ from 'lodash/fp';

function Demo(props) {
    function compose(...funcs) {
        if (funcs.length === 0) return arg => arg;
        if (funcs.length === 1) return funcs[0];
        return funcs.reduce((a, b) => (...args) => a(b(...args)))
    }

    const head = x=>x[0];
    const tail = x=>x.slice(1,Infinity);
    const toUpperCase = s=>s.toUpperCase();
    const toLowerCase = s=>s.toLowerCase();
    const capitalize = s=> toUpperCase(head(s)) + toLowerCase(tail(s));
    console.log(capitalize('mark'));//Mark

    return <div>

    </div>;
}

export default Demo;