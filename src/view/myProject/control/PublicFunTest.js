import React from 'react';
import {sleep,getName,delArrItem,genListCyclic} from "../../../utils/publicFun.js";
import {Container} from "../../../component";

function PublicFunTest(props) {
    sleepTest();
    getNameTest();
    delArrItemTest();
    genListCyclicTest();

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
        console.log(delArrItem(list, 'C'));
    }
    function getNameTest() {
        const names = {
            A:true,
            B:false,
            C:true
        };
        console.log(getName(names));
    }
    function sleepTest() {
        async function fn() {
            for (let i = 0; i <= 10; i++) {
                await sleep(100);
                console.log(i);
            }
        }
        fn();
    }
    function genListCyclicTest() {
        const listCyclic = genListCyclic();
        console.log(listCyclic([1,2,3,4]));
        console.log(listCyclic([1,2,3,4]));
        console.log(listCyclic([1,2,3,4]));
        console.log(listCyclic([1,2,3,4]));
        console.log(listCyclic([1,2,3,4]));
        console.log(listCyclic([1,2,3,4]));
        console.log(listCyclic([1,2,3,4]));
        console.log(listCyclic([1,2,3,4]));
    }
}

export default PublicFunTest;