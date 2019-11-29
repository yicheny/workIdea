import React from 'react';
// import * as ylf from 'ylf_public_fun/publicFun';
import axios from 'axios';

function Demo(props) {
    let a = 3;

    function foo(){
        a = a * 3;
    }

    function bar(){
        a = a + 3
    }

    bar();
    foo();
    console.log(a);

    return (
        <div>
        </div>
    );
}

export default Demo;