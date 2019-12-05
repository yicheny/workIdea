import React from 'react';
import {sleep,getTrue,delArrItem,genListCyclic,uniq,arrCompare,arrCompareOrder} from "../../../utils/publicFun.js";
import {Container} from "../../../component";
import {cls} from "../../../utils/publicFun";

function PublicFunTest(props) {
    arrCompareOrderTest();
    sleepTest();
    getNameTest();
    delArrItemTest();
    genListCyclicTest();
    cloneDeepTest();
    uniqTest();
    arrCompareTest();
    clsTest();

    return <Container header='自用公共方法测试'>
        <ul>
            <li>1.sleep方法</li>
            <li>2.getName方法</li>
            <li>3.delArrItem方法</li>
            <li>4.genListCyclic方法</li>
            <li>5.uniq方法</li>
            <li>6.arrCompare方法</li>
            <li>7.arrCompareOrder方法</li>
            <li>8.cls方法</li>
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
        console.log('getName测试',getTrue(names));
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
        const listCyclic = genListCyclic([1,2,3,4]);
        console.log('genListCyclic方法测试',listCyclic());
        console.log('genListCyclic方法测试',listCyclic());
        console.log('genListCyclic方法测试',listCyclic());
        console.log('genListCyclic方法测试',listCyclic());
        console.log('genListCyclic方法测试',listCyclic());
        console.log('genListCyclic方法测试',listCyclic());
        console.log('genListCyclic方法测试',listCyclic());
        console.log('genListCyclic方法测试',listCyclic());
    }
    function cloneDeepTest() {

    }
    function uniqTest() {
        console.log('uniq方法测试',uniq([1, 2, 3, 1, 2, 3, 123]));
    }
    function arrCompareTest() {
        console.log('arrCompare方法测试',arrCompare([1,2,3],[1,2,3,1,2,3]));
        console.log('arrCompare方法测试',arrCompare([1,2,3],[1,2,3]));
        console.log('arrCompare方法测试',arrCompare([1,2,3,4],[3,1,2,4]));
        console.log('arrCompare方法测试',arrCompare([1,2,3],[1,2,4]));
    }
    function arrCompareOrderTest() {
        console.log('arrCompareOrder测试',arrCompareOrder([1,2,3],[2,3,1]));
        console.log('arrCompareOrder测试',arrCompareOrder([1,2,3],[1,2,3]));
    }
    function clsTest() {
        console.log('cls方法测试',cls('1',false&&'2','3'));
        console.log('cls方法测试',cls('1',{'2':true,'3':false,'4':true}));
        console.log('cls方法测试',cls({'2':true,'3':false,'4':true}));
        console.log('cls方法测试',cls(1,2,3,'number'));
    }
}

export default PublicFunTest;