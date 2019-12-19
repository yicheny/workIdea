import React from 'react';
// import * as ylf from 'ylf_public_fun/publicFun';
// import _ from 'lodash';
// import axios from 'axios';

function Demo(props) {
    const join = (a,b)=>a+b;
    const mult = (a,b)=>a*b;

    const b1 = 4;
    const b2 = 2;
    const b3 = 0;

    const res = join(mult(b2, join(b1, b3)), mult(b1, b2));
    console.log(res);

    return <div>

    </div>;
}

export default Demo;