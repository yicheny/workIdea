import React from 'react';
import {sleep,getName} from "../../../utils/publicFun.js";
import {Container} from "../../../component";

function PublicFunTest(props) {
    // async function fn() {
    //     for (let i = 0; i <= 10; i++) {
    //         await sleep(100);
    //         console.log(i);
    //     }
    // }

    // fn();

    const names = {
        A:true,
        B:false,
        C:true
    };

    console.log(getName(names));
    return <Container header='自用公共方法测试'>
        <ul>
            <li>1.sleep方法</li>
            <li>2.getName方法</li>
        </ul>
    </Container>
}

export default PublicFunTest;