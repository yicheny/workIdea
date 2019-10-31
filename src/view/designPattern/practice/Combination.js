import React from 'react';
import './Combination.less';
import {Button, Container} from "../../../component";

class Combin {
    constructor(){
        this.combinList = [];
    }

    add = (...commands)=>{
        this.combinList.push(...commands);
    };

    executor = ()=>{
        this.combinList.forEach((fn)=>{
            fn.executor()
        })
    }
}

function Combination(props) {

    const studyCommand={
        executor:()=>console.log('学习')
    };
    const recreationCommand={
        executor:()=>console.log('娱乐')
    };
    const eatCommand={
        executor:()=>console.log('吃饭')
    };
    const sleepCommand={
        executor:()=>console.log('睡觉')
    };
    const musicCommand={
        executor:()=>console.log('听音乐')
    };

    const stationaryCommand = new Combin();
    stationaryCommand.add(eatCommand,sleepCommand);
    const restCommand = new Combin();
    restCommand.add(recreationCommand,musicCommand);

    const superCommand = new Combin();
    superCommand.add(stationaryCommand,restCommand,studyCommand);

    return (
        <Container className='x_combi' header='组合模式'>
            <Button type='primary' onClick={superCommand.executor}>超级命令</Button><br/>

            <Button type='primary' onClick={stationaryCommand.executor}>固定</Button>
            <Button type='primary' onClick={restCommand.executor}>休息</Button><br/>

            <Button type='primary' onClick={studyCommand.executor}>学习</Button>
            <Button type='primary' onClick={recreationCommand.executor}>娱乐</Button>
            <Button type='primary' onClick={eatCommand.executor}>吃饭</Button>
            <Button type='primary' onClick={sleepCommand.executor}>睡觉</Button>
            <Button type='primary' onClick={musicCommand.executor}>听音乐</Button>
        </Container>
    );
}

export default Combination;

//实现组合模式的关键在于必须保证叶对象和组合对象有着统一的方法，否则不能形成递归【这是不直接使用数组的原因】