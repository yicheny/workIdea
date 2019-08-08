import React, {useState, useRef} from 'react';
import {Button, Input} from "../../../component";
import './Order.less';
import _ from 'lodash';

class OrderParse {
    constructor(initStatus, receiver) { //接收需要执行的函数及初始值
        this.cancelList = [initStatus];//用于撤销
        this.resetList = [initStatus];//用于回放
        this.receiver = receiver;
    }

    executor = (value) => { //执行
        if (this.cancelList.length > 100) this.cancelList.shift();
        this.cancelList.push(value);
        this.resetList.push(value);
        this.receiver(value)
    };

    cancel = () => { //撤销
        if (this.cancelList.length <= 1) return;
        this.cancelList.pop();
        this.receiver(_.last(this.cancelList))
    };

    reset = (speed=600)=>{
        const newList = [...this.resetList];
        newList.reverse();

        while(newList.length){
            const value = newList.shift();
            setTimeout(()=>this.receiver(value),speed*newList.length)
        }
    }
}

function Order(props) {
    const [text, setText] = useState('');
    const order = useRef(new OrderParse('', setText));

    return (<div style={{margin: 10}} className='x_order'>
        <h3>命令模式</h3>

        <h4>实现撤销【最多可以撤销100步】</h4>
        <h4>实现回放/重做【速度可选】</h4>
        <Input value={text} onChange={e => order.current.executor(e.target.value)}/><br/>
        <Button type='primary' onClick={order.current.cancel}>撤销</Button>
        <Button type='primary' onClick={()=>order.current.reset(1200)}>回放-慢</Button>
        <Button type='primary' onClick={()=>order.current.reset(800)}>回放-普通</Button>
        <Button type='primary' onClick={()=>order.current.reset(500)}>回放-快</Button>
        <div className="box" style={{width: 320, height: 100}}>
            {text}
        </div>

    </div>);
}

export default Order;