import React from 'react';

class Ming{
    constructor(){
        this.isWorkFinished = false;
    }

    getState=(hour)=>{
        if((hour>=23 && hour<=24) || hour<8) return console.log(`睡觉状态，现在时间是${hour}点`);
        if(hour>=8 && hour<18) return console.log(`工作状态，现在时间是${hour}点`);
        if(hour>=18 && hour <22){
            if(this.isWorkFinished) return console.log(`持续工作状态，现在时间是${hour}点`);
            return console.log(`游戏状态，现在时间是${hour}点`)
        }
        if(hour>=22 && hour<23) return console.log(`游戏状态，现在时间是${hour}点`);
        return console.error('不存在的时间！')
    }
}


function DeepDemo(props) {

    const ming = new Ming();
    ming.getState(17);
    ming.isWorkFinished = true;
    ming.getState(19);
    ming.getState(21);
    ming.isWorkFinished = false;
    ming.getState(22);
    ming.getState(23);
    ming.getState(3);

    return <div></div>
}

export default DeepDemo;