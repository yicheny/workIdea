import React from 'react';
import {sleep} from "../../../utils/publicFun.js";
import {Container} from "../../../component";

function PublicFunTest(props) {
    // [1, 2, 3, 4, 5, 6].forEach(async (el)=>{
    //     await sleep(100);
    //     console.log(el);
    // });

    async function fn() {
        for (let i = 0; i <= 10; i++) {
            await sleep(100);
            console.log(i);
        }
    }

    fn();

    return <Container header='自用公共方法测试'>
        <ul>
            <li>1.sleep方法</li>
        </ul>
    </Container>
}

export default PublicFunTest;