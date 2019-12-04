import React from 'react';
// import * as ylf from 'ylf_public_fun/publicFun';
import axios from 'axios';

function Demo(props) {
    function print(str,callback) {
        console.log(str);
        setTimeout(()=>{
             callback && callback()
        },1000);
    }

    function printA() {
        print('A',printB);
    }
    function printB() {
        print('B',printC);
    }
    function printC() {
        print('C',printD);
        print('E')
    }
    function printD() {
        print('D')
    }

    printA();
    print('F');

    return <div>

    </div>;
}

export default Demo;