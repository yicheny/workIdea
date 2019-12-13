import React from 'react';
// import * as ylf from 'ylf_public_fun/publicFun';
// import _ from 'lodash';
// import axios from 'axios';

function Demo(props) {
    function *foo(initValue=0){
        try {
            let value = initValue;
            let init = true;

            while(true){
                if(init){
                    init=false;
                    yield value;
                }

                yield value = value*3+10;
            }
        }finally {
            console.log('clean up!')
        }
    }

    const it = foo(1);
    console.log(it.next().value);
    console.log(it.next().value);
    console.log(it.return('终止任务').value);
    console.log(it.next().value);
    console.log(it.next().value);
    return <div>

    </div>;
}

export default Demo;