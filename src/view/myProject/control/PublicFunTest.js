import React from 'react';
import {sleep,getName,delArrItem,genListCyclic,isObject} from "../../../utils/publicFun.js";
import {Container} from "../../../component";

function PublicFunTest(props) {
    sleepTest();
    getNameTest();
    delArrItemTest();
    genListCyclicTest();
    cloneDeepTest();

    return <Container header='自用公共方法测试'>
        <ul>
            <li>1.sleep方法</li>
            <li>2.getName方法</li>
            <li>3.delArrItem方法</li>
            <li>4.genListCyclic方法</li>
        </ul>
    </Container>;

    function delArrItemTest() {
        const list = ['A','B','C','D'];
        console.log('delArrItem测试',delArrItem(list, 'C'));
    }
    function getNameTest() {
        const names = {
            A:true,
            B:false,
            C:true
        };
        console.log('getName测试',getName(names));
    }
    function sleepTest() {
        async function fn() {
            for (let i = 0; i <= 10; i++) {
                await sleep(100);
                console.log('sleep方法测试',i);
            }
        }
        fn();
    }
    function genListCyclicTest() {
        const listCyclic = genListCyclic();
        console.log('genListCyclic方法测试',listCyclic([1,2,3,4]));
        console.log('genListCyclic方法测试',listCyclic([1,2,3,4]));
        console.log('genListCyclic方法测试',listCyclic([1,2,3,4]));
        console.log('genListCyclic方法测试',listCyclic([1,2,3,4]));
        console.log('genListCyclic方法测试',listCyclic([1,2,3,4]));
        console.log('genListCyclic方法测试',listCyclic([1,2,3,4]));
        console.log('genListCyclic方法测试',listCyclic([1,2,3,4]));
        console.log('genListCyclic方法测试',listCyclic([1,2,3,4]));
    }
    function cloneDeepTest() {

    }
}

export default PublicFunTest;