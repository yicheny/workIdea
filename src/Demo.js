import React from 'react';
// import * as ylf from 'ylf_public_fun/publicFun';
// import _ from 'lodash';
// import axios from 'axios';
// import _ from 'lodash/fp';

function Demo(props) {
    //此方法取自redux源码
    function compose(...funcs) {
        if (funcs.length === 0) return arg => arg;
        if (funcs.length === 1) return funcs[0];
        return funcs.reduce((a, b) => (...args) => a(b(...args)))
    }

    return <div>

    </div>;
}

export default Demo;