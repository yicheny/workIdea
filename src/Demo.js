import React from 'react';
// import * as ylf from 'ylf_public_fun/publicFun';
// import _ from 'lodash';
// import axios from 'axios';

function Demo(props) {
    function run(generator) {
        const it = generator();
        let res = it.next();
        while(!res.done){
            res = it.next();
        }

    }
    function print(str) {
        console.log(str);
    }
    function *gen() {
        yield print('A');
        yield print('B');
        yield print('C');
    }

    run(gen);

    return <div>

    </div>;
}

export default Demo;