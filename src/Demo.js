import React from 'react';
// import * as ylf from 'ylf_public_fun/publicFun';
import axios from 'axios';

function Demo(props) {
    // console.log(ylf);
    async function request() {
        const data = await api();
        console.log('data',data);
    }

    function api() {
        const url = 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/abs';
        return axios.get(url)
    }

    request();
    console.log(18);

    return (
        <div>
        </div>
    );
}

export default Demo;