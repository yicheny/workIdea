import React from 'react';
// import * as ylf from 'ylf_public_fun/publicFun';
// import _ from 'lodash';
// import axios from 'axios';

function Demo(props) {
    let x = 0;

    function *foo() {
        x++;
        const y = x + (yield);
        console.log(y);
    }

    const it = foo();
    it.next();
    x = 10;
    it.next(0);//2

    return <div>

    </div>;
}

export default Demo;